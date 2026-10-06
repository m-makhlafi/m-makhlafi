// Generates the README header and footer banners (dark + light) with subset fonts embedded,
// so GitHub renders them with the intended typefaces inside <img>.
// Usage: node .github/scripts/banners.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const font = (f) => readFileSync(join(root, '.github', 'fonts', f)).toString('base64');
const display = font('bricolage-subset.woff2');
const mono = font('jetbrains-mono-subset.woff2');

const themes = {
  dark: {
    bg: '#0b1220', grid: '#18233a', fg: '#f3f6fb', muted: '#8b97ad', node: '#111b2e',
    lv: '#ff6a5c', rx: '#61dafb',
  },
  light: {
    bg: '#f4f6fa', grid: '#dde3ec', fg: '#0b1220', muted: '#5b6577', node: '#ffffff',
    lv: '#e8483a', rx: '#0891b2',
  },
};

const fontFaces = `
    @font-face { font-family: 'Display'; src: url(data:font/woff2;base64,${display}) format('woff2'); font-weight: 100 900; }
    @font-face { font-family: 'Mono'; src: url(data:font/woff2;base64,${mono}) format('woff2'); font-weight: 100 900; }`;

function header(t) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 270" width="1200" height="270" role="img" aria-label="Mohammed Al-Mekhlafi, Senior Full-Stack Engineer">
  <style>${fontFaces}
    .name { font: 800 50px 'Display', 'Segoe UI', Helvetica, Arial, sans-serif; letter-spacing: -1.5px; fill: ${t.fg}; }
    .role { font: 500 19px 'Display', 'Segoe UI', Helvetica, Arial, sans-serif; fill: ${t.muted}; }
    .mono { font: 500 13px 'Mono', ui-monospace, Consolas, monospace; letter-spacing: .5px; fill: ${t.muted}; }
    .nlab { font: 700 13px 'Mono', ui-monospace, Consolas, monospace; }
    .nsub { font: 400 11px 'Mono', ui-monospace, Consolas, monospace; fill: ${t.muted}; }
    .lv { fill: ${t.lv}; } .rx { fill: ${t.rx}; } .fg { fill: ${t.fg}; }
    .node { fill: ${t.node}; stroke: ${t.grid}; stroke-width: 1.5; }
    .wire { stroke: ${t.muted}; stroke-width: 1.5; fill: none; stroke-dasharray: 4 5; }
  </style>
  <defs>
    <pattern id="g" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0H0V30" fill="none" stroke="${t.grid}" stroke-width="1"/></pattern>
    <path id="w1" d="M760 135 H850"/>
    <path id="w2" d="M960 135 H1040"/>
    <path id="w3" d="M905 165 V210"/>
    <clipPath id="r"><rect width="1200" height="270" rx="14"/></clipPath>
  </defs>
  <g clip-path="url(#r)">
    <rect width="1200" height="270" fill="${t.bg}"/>
    <rect width="1200" height="270" fill="url(#g)" opacity=".75"/>
  </g>
  <text x="56" y="70" class="mono in">~/m-makhlafi <tspan class="lv">$</tspan> whoami</text>
  <text x="56" y="132" class="name in d1">Mohammed Al-Mekhlafi</text>
  <text x="58" y="170" class="role in d2">Senior Full-Stack Engineer · <tspan class="lv">Laravel</tspan> × <tspan class="rx">React</tspan> · TypeScript</text>
  <text x="58" y="222" class="mono in d3">SaaS  ·  Fintech  ·  AI-assisted products  ·  Enterprise web</text>
  <g class="in d4">
    <text x="650" y="92" class="mono" style="font-size:11px">POST /v1/payments → 201 Created</text>
    <rect class="node" style="stroke:${t.rx}" x="650" y="110" width="110" height="50" rx="10"/>
    <text x="705" y="132" text-anchor="middle" class="nlab rx">client</text>
    <text x="705" y="149" text-anchor="middle" class="nsub">Next.js · TS</text>
    <rect class="node" style="stroke:${t.lv}" x="850" y="105" width="110" height="60" rx="10"/>
    <text x="905" y="130" text-anchor="middle" class="nlab lv">api</text>
    <text x="905" y="147" text-anchor="middle" class="nsub">Laravel</text>
    <text x="905" y="159" text-anchor="middle" class="nsub">REST · GraphQL</text>
    <rect class="node" x="1040" y="110" width="110" height="50" rx="10"/>
    <text x="1095" y="132" text-anchor="middle" class="nlab fg">db</text>
    <text x="1095" y="149" text-anchor="middle" class="nsub">PostgreSQL</text>
    <rect class="node" x="855" y="210" width="100" height="38" rx="10"/>
    <text x="905" y="234" text-anchor="middle" class="nsub" style="fill:${t.fg}">queue · jobs</text>
    <use href="#w1" class="wire"/><use href="#w2" class="wire"/><use href="#w3" class="wire"/>
    <circle r="4.5" fill="${t.rx}"><animateMotion dur="2.4s" repeatCount="indefinite"><mpath href="#w1"/></animateMotion></circle>
    <circle r="4.5" fill="${t.lv}"><animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite"><mpath href="#w2"/></animateMotion></circle>
    <circle r="4" fill="${t.lv}"><animateMotion dur="3s" begin=".6s" repeatCount="indefinite"><mpath href="#w3"/></animateMotion></circle>
  </g>
</svg>
`;
}

function footer(t) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 110" width="1200" height="110" role="img" aria-label="Thanks for visiting">
  <style>${fontFaces}
    .a { font: 600 15px 'Mono', ui-monospace, Consolas, monospace; fill: ${t.fg}; }
    .b { font: 400 12px 'Mono', ui-monospace, Consolas, monospace; fill: ${t.muted}; }
  </style>
  <defs><clipPath id="r"><rect width="1200" height="110" rx="14"/></clipPath></defs>
  <g clip-path="url(#r)">
    <rect width="1200" height="110" fill="${t.bg}"/>
    <path fill="${t.lv}" opacity=".12" d="M0 70 Q150 40 300 70 T600 70 T900 70 T1200 70 V110 H0Z">
      <animate attributeName="d" dur="9s" repeatCount="indefinite" values="M0 70 Q150 40 300 70 T600 70 T900 70 T1200 70 V110 H0Z;M0 70 Q150 95 300 70 T600 70 T900 70 T1200 70 V110 H0Z;M0 70 Q150 40 300 70 T600 70 T900 70 T1200 70 V110 H0Z"/>
    </path>
    <path fill="${t.rx}" opacity=".14" d="M0 82 Q150 58 300 82 T600 82 T900 82 T1200 82 V110 H0Z">
      <animate attributeName="d" dur="7s" repeatCount="indefinite" values="M0 82 Q150 58 300 82 T600 82 T900 82 T1200 82 V110 H0Z;M0 82 Q150 104 300 82 T600 82 T900 82 T1200 82 V110 H0Z;M0 82 Q150 58 300 82 T600 82 T900 82 T1200 82 V110 H0Z"/>
    </path>
  </g>
  <text x="600" y="46" text-anchor="middle" class="a">Building reliable software for real users. Let's talk.</text>
  <text x="600" y="70" text-anchor="middle" class="b">README auto-updated daily by GitHub Actions</text>
</svg>
`;
}

const out = join(root, 'assets');
mkdirSync(out, { recursive: true });
for (const [name, t] of Object.entries(themes)) {
  writeFileSync(join(out, `header-${name}.svg`), header(t));
  writeFileSync(join(out, `footer-${name}.svg`), footer(t));
}
console.log('banners written to assets/');
