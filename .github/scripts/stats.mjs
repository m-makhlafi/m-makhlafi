// Self-hosted GitHub stats cards (stats, top languages, streak) in dark + light.
// Runs daily in .github/workflows/profile.yml; no third-party service, no rate-limit outages.
// Usage: GITHUB_TOKEN=... GH_USER=m-makhlafi node .github/scripts/stats.mjs [outDir]
import { writeFileSync, mkdirSync } from 'node:fs';

const user = process.env.GH_USER || 'm-makhlafi';
const token = process.env.GITHUB_TOKEN;
const outDir = process.argv[2] || 'dist';
if (!token) throw new Error('GITHUB_TOKEN is required');

async function gql(query, variables) {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json', 'User-Agent': user },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

const base = await gql(`query($login: String!) {
  user(login: $login) {
    createdAt
    pullRequests { totalCount }
    issues { totalCount }
    repositoriesContributedTo(contributionTypes: [COMMIT, PULL_REQUEST, ISSUE, REPOSITORY]) { totalCount }
    repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
      nodes { stargazerCount languages(first: 10, orderBy: { field: SIZE, direction: DESC }) { edges { size node { name color } } } }
    }
  }
}`, { login: user });

const u = base.user;
const stars = u.repositories.nodes.reduce((s, r) => s + r.stargazerCount, 0);

// Contribution history, one year per query, from account creation to today.
const days = [];
let commits = 0;
const start = new Date(u.createdAt);
for (let y = start.getUTCFullYear(); y <= new Date().getUTCFullYear(); y++) {
  const from = new Date(Math.max(Date.UTC(y, 0, 1), start.getTime())).toISOString();
  const to = new Date(Math.min(Date.UTC(y, 11, 31, 23, 59, 59), Date.now())).toISOString();
  const d = await gql(`query($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) { contributionsCollection(from: $from, to: $to) {
      totalCommitContributions restrictedContributionsCount
      contributionCalendar { weeks { contributionDays { date contributionCount } } }
    } }
  }`, { login: user, from, to });
  const c = d.user.contributionsCollection;
  if (y === new Date().getUTCFullYear()) commits = c.totalCommitContributions + c.restrictedContributionsCount;
  for (const w of c.contributionCalendar.weeks) for (const day of w.contributionDays) days.push(day);
}
const seen = new Set();
const series = days.filter((d) => !seen.has(d.date) && seen.add(d.date)).sort((a, b) => a.date.localeCompare(b.date));

const total = series.reduce((s, d) => s + d.contributionCount, 0);
let longest = 0, run = 0;
for (const d of series) { run = d.contributionCount > 0 ? run + 1 : 0; longest = Math.max(longest, run); }
// Current streak: today may still be empty without breaking it.
let current = 0;
for (let i = series.length - 1; i >= 0; i--) {
  if (series[i].contributionCount > 0) current++;
  else if (i === series.length - 1) continue;
  else break;
}

const langs = {};
for (const r of u.repositories.nodes) for (const e of r.languages.edges) {
  const l = langs[e.node.name] || (langs[e.node.name] = { size: 0, color: e.node.color || '#8b97ad' });
  l.size += e.size;
}
const langSum = Object.values(langs).reduce((s, l) => s + l.size, 0) || 1;
const top = Object.entries(langs).sort((a, b) => b[1].size - a[1].size).slice(0, 6)
  .map(([name, l]) => ({ name, color: l.color, pct: (l.size / langSum) * 100 }));

const themes = {
  dark: { bg: '#0b1220', border: '#18233a', title: '#61dafb', text: '#c9d4e5', muted: '#8b97ad', value: '#f3f6fb', hot: '#ff6a5c' },
  light: { bg: '#f4f6fa', border: '#dde3ec', title: '#0891b2', text: '#1f2a3d', muted: '#5b6577', value: '#0b1220', hot: '#e8483a' },
};
const fmt = (n) => n.toLocaleString('en-US');
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const font = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`;

function frame(t, w, h, title, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(title)}">
  <style>
    text { font-family: ${font}; }
    .t { font-size: 16px; font-weight: 600; fill: ${t.title}; }
    .l { font-size: 13px; fill: ${t.muted}; }
    .v { font-size: 13px; font-weight: 700; fill: ${t.value}; font-variant-numeric: tabular-nums; }
    .big { font-size: 26px; font-weight: 800; fill: ${t.value}; }
    .s { font-size: 12px; fill: ${t.muted}; }
  </style>
  <rect x=".5" y=".5" width="${w - 1}" height="${h - 1}" rx="8" fill="${t.bg}" stroke="${t.border}"/>
  <text x="22" y="34" class="t">${esc(title)}</text>
${body}
</svg>
`;
}

function statsCard(t) {
  const rows = [
    ['Total stars earned', stars],
    [`Commits (${new Date().getUTCFullYear()})`, commits],
    ['Pull requests', u.pullRequests.totalCount],
    ['Issues', u.issues.totalCount],
    ['Contributed to (last year)', u.repositoriesContributedTo.totalCount],
  ];
  const body = rows.map(([k, v], i) => `  <g class="row" style="animation-delay:${150 + i * 120}ms">
    <text x="22" y="${66 + i * 25}" class="l">${esc(k)}</text>
    <text x="378" y="${66 + i * 25}" class="v" text-anchor="end">${fmt(v)}</text>
  </g>`).join('\n');
  return frame(t, 400, 190, 'GitHub stats', body);
}

function langsCard(t) {
  let x = 22;
  const W = 356;
  const bar = top.map((l) => {
    const w = Math.max((l.pct / 100) * W, 2);
    const r = `<rect x="${x.toFixed(1)}" y="50" width="${w.toFixed(1)}" height="8" fill="${l.color}"/>`;
    x += w;
    return r;
  }).join('');
  const list = top.map((l, i) => {
    const cx = i % 2 ? 210 : 22, cy = 86 + Math.floor(i / 2) * 24;
    return `  <g class="row" style="animation-delay:${150 + i * 100}ms"><circle cx="${cx + 5}" cy="${cy - 4}" r="5" fill="${l.color}"/><text x="${cx + 16}" y="${cy}" class="l">${esc(l.name)} <tspan class="v">${l.pct.toFixed(1)}%</tspan></text></g>`;
  }).join('\n');
  const empty = top.length ? '' : `<text x="22" y="90" class="s">Language data appears once public repositories contain code.</text>`;
  return frame(t, 400, 190, 'Most used languages', `  <clipPath id="b"><rect x="22" y="50" width="${W}" height="8" rx="4"/></clipPath><g clip-path="url(#b)"><rect x="22" y="50" width="${W}" height="8" fill="${t.border}"/>${bar}</g>\n${list}${empty}`);
}

function streakCard(t) {
  const first = series.find((d) => d.contributionCount > 0)?.date ?? series[0]?.date ?? '';
  const body = `  <g class="row" style="animation-delay:150ms"><text x="85" y="104" class="big" text-anchor="middle">${fmt(total)}</text><text x="85" y="128" class="s" text-anchor="middle">Total contributions</text><text x="85" y="148" class="s" text-anchor="middle">since ${esc(first)}</text></g>
  <g class="row" style="animation-delay:300ms"><circle cx="200" cy="96" r="38" fill="none" stroke="${t.hot}" stroke-width="4"/><text x="200" y="105" class="big" text-anchor="middle" style="fill:${t.hot}">${fmt(current)}</text><text x="200" y="158" class="s" text-anchor="middle">Current streak (days)</text></g>
  <g class="row" style="animation-delay:450ms"><text x="315" y="104" class="big" text-anchor="middle">${fmt(longest)}</text><text x="315" y="128" class="s" text-anchor="middle">Longest streak (days)</text></g>`;
  return frame(t, 400, 190, 'Contribution streak', body);
}

mkdirSync(outDir, { recursive: true });
for (const [name, t] of Object.entries(themes)) {
  writeFileSync(`${outDir}/stats-${name}.svg`, statsCard(t));
  writeFileSync(`${outDir}/langs-${name}.svg`, langsCard(t));
  writeFileSync(`${outDir}/streak-${name}.svg`, streakCard(t));
}
console.log(JSON.stringify({ stars, commits, prs: u.pullRequests.totalCount, issues: u.issues.totalCount, total, current, longest, top: top.map((l) => l.name) }));
