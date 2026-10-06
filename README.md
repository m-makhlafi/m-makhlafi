<!-- Header banner: source in .github/scripts/banners.mjs -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/header-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="./assets/header-light.svg">
  <img alt="Mohammed Al-Mekhlafi — Senior Full-Stack Engineer · Laravel × React · TypeScript" src="./assets/header-dark.svg" width="100%">
</picture>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=19&duration=2800&pause=900&color=61DAFB&center=true&vCenter=true&width=720&lines=Senior+Full-Stack+Engineer+%C2%B7+Laravel+%C3%97+React;Shipping+SaaS%2C+fintech+%26+AI-assisted+products;Laravel+backends+serving+100K%2B+API+requests+%2F+month;Payments+%C2%B7+wallets+%C2%B7+subscriptions+%C2%B7+RBAC;Clean+Architecture+%C2%B7+domain+boundaries+%C2%B7+CI%2FCD">
    <img alt="Senior Full-Stack Engineer · Laravel × React" src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=19&duration=2800&pause=900&color=0891B2&center=true&vCenter=true&width=720&lines=Senior+Full-Stack+Engineer+%C2%B7+Laravel+%C3%97+React;Shipping+SaaS%2C+fintech+%26+AI-assisted+products;Laravel+backends+serving+100K%2B+API+requests+%2F+month;Payments+%C2%B7+wallets+%C2%B7+subscriptions+%C2%B7+RBAC;Clean+Architecture+%C2%B7+domain+boundaries+%C2%B7+CI%2FCD">
  </picture>
</p>

<p align="center">
  <img alt="Status: open to senior roles" src="https://img.shields.io/badge/status-open_to_senior_roles-1a7f37?style=for-the-badge">
  <img alt="Based in KSA, remote" src="https://img.shields.io/badge/based_in-KSA_·_remote-0969da?style=for-the-badge">
  <img alt="100K+ API requests per month" src="https://img.shields.io/badge/throughput-100K%2B_req_%2F_month-e8483a?style=for-the-badge">
  <img alt="Clean architecture, DDD, SOLID" src="https://img.shields.io/badge/architecture-clean_·_DDD_·_SOLID-6e40c9?style=for-the-badge">
</p>

<p align="center">
  <a href="mailto:mohammed.r.almekhafi@gmail.com"><img alt="Email" src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white"></a>
  <img alt="Laravel" src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-087ea4?style=for-the-badge&logo=react&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
</p>

<p align="center">
  <img alt="Profile views" src="https://komarev.com/ghpvc/?username=m-makhlafi&label=profile%20views&color=0891b2&style=flat-square">
  <img alt="Languages: Arabic and English" src="https://img.shields.io/badge/languages-العربية_·_English-3d444d?style=flat-square">
</p>

## `01` engineer.yaml

```yaml
engineer:
  name:        Mohammed Al-Mekhlafi
  role:        Senior Full-Stack Engineer
  experience:  2+ years   # production SaaS · fintech · e-commerce · enterprise
  education:   B.Sc. Information Technology — Sana'a University (2025)

stack:
  backend:     [PHP, Laravel, Node.js, REST, GraphQL]
  frontend:    [React, Next.js, TypeScript, Redux, Tailwind]
  data:        [MySQL, PostgreSQL, indexing, query-tuning]
  realtime:    [WebSockets, SignalR, Firebase Messaging]
  cloud_ops:   [AWS, Docker, GitHub Actions, Jenkins]

architecture:
  style:       modular monolith → clear domain boundaries
  patterns:    [MVC, Clean Architecture, service-layer, repository]
  api:         { versioning: true, rate_limiting: true, caching: true }
  async:       queues · jobs · event-driven workflows

security:      [OAuth, JWT, RBAC, encryption, audit-trails, GDPR, PCI-aware]
domains:       [payments, wallets, subscriptions, multi-tenant SaaS, AI recommendations]
languages:     { arabic: native, english: professional }
status:        open_to_senior_roles   # remote · onsite (KSA)
```

## `02` Impact at a glance

<table>
  <tr>
    <td align="center" width="25%"><h3>100K+</h3><sub>API requests / month served by Laravel &amp; Node.js backends</sub></td>
    <td align="center" width="25%"><h3>4</h3><sub>flagship products shipped: AI, fintech, devtools, content</sub></td>
    <td align="center" width="25%"><h3>3</h3><sub>senior tracks: full-stack, backend, frontend</sub></td>
    <td align="center" width="25%"><h3>2+</h3><sub>years delivering production systems end to end</sub></td>
  </tr>
</table>

## `03` What I do

- **End-to-end ownership.** Requirements → system design → data model → API → UI → CI/CD → post-launch optimization.
- **Backend that scales.** Modular Laravel & Node.js services with explicit domain boundaries; versioned REST & GraphQL APIs with rate limiting and caching; queues, jobs and event-driven pipelines for email, notifications and long-running work.
- **Fintech-grade features.** Payment gateways, digital wallets, subscriptions and role-based access control, built to be secure, auditable and reliable.
- **Frontend with discipline.** Component-driven React/Next.js + TypeScript, Redux/Context and custom hooks for complex state, WCAG-aware interfaces, real-time UX over WebSockets & SignalR.
- **Security & compliance.** OAuth/JWT, encryption, GDPR/PCI-aware data handling and audit trails for sensitive systems.
- **Team multiplier.** Mentor junior and mid-level engineers, lead code reviews and architecture decisions, and keep Agile delivery predictable with product, design and QA.

## `04` How I build systems

```mermaid
flowchart LR
  subgraph C[Clients]
    W[React / Next.js<br/>TypeScript]
    M[Flutter apps]
  end
  W -- HTTPS · JWT/OAuth --> G
  M -- HTTPS · JWT/OAuth --> G
  G[Laravel API<br/>REST + GraphQL<br/>versioning · rate limits] --> S[Domain services<br/>service + repository layers]
  S --> DB[(MySQL / PostgreSQL)]
  S --> K[(Cache)]
  S -- domain events --> Q[[Queue workers]]
  Q --> N[Email · Push · Webhooks]
  S --> P[Payment gateways]
  S --> AI[AI services]
  G -. WebSockets / SignalR .-> W
```

<p align="center"><sub>Reference architecture used across my SaaS and fintech work.</sub></p>

```mermaid
flowchart LR
  A[git push / PR] --> B[GitHub Actions<br/>lint · static analysis · tests]
  B --> C[Docker build<br/>versioned image]
  C --> D[Staging deploy<br/>migrations · smoke tests]
  D --> E[Production<br/>AWS · zero-downtime]
  E --> F[Monitoring<br/>& post-launch tuning]
```

<p align="center"><sub>Delivery pipeline I standardize on teams with GitHub Actions, Jenkins and Docker.</sub></p>

## `05` Featured products

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>Major Match <img alt="AI SaaS" src="https://img.shields.io/badge/AI-SaaS-6e40c9?style=flat-square"></h3>
      <p>AI-assisted platform that recommends university majors from student profiles, interests and performance. Bilingual (AR/EN) and analytics-driven.</p>
      <b>Engineering</b>
      <ul>
        <li>Laravel API orchestrating AI scoring services behind a clean service layer</li>
        <li>Flutter client with full RTL/LTR localization</li>
        <li>Analytics pipeline feeding admin dashboards</li>
      </ul>
      <p><code>Laravel</code> <code>AI services</code> <code>Flutter</code> <code>MySQL</code></p>
      <a href="https://github.com/m-makhlafi/major-match"><b>Case study →</b></a>
    </td>
    <td width="50%" valign="top">
      <h3>Easy Pay <img alt="Fintech wallet" src="https://img.shields.io/badge/fintech-wallet-1a7f37?style=flat-square"></h3>
      <p>Digital wallet and payments product: user balances, secure transaction handling and multiple payment providers behind one interface.</p>
      <b>Engineering</b>
      <ul>
        <li>Provider-agnostic gateway layer (one contract, many drivers)</li>
        <li>Balance changes inside DB transactions with a full audit trail</li>
        <li>Signed webhooks processed asynchronously via queues</li>
      </ul>
      <p><code>Laravel</code> <code>MySQL</code> <code>Queues</code> <code>Webhooks</code></p>
      <a href="https://github.com/m-makhlafi/easy-pay"><b>Case study →</b></a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>Migration Alchemy <img alt="Devtools for Laravel" src="https://img.shields.io/badge/devtools-laravel-e8483a?style=flat-square"></h3>
      <p>Browser-based tool for managing Laravel migrations, built around developer workflow, conflict management and export flows.</p>
      <b>Engineering</b>
      <ul>
        <li>Visual schema and migration timeline in the browser</li>
        <li>Detects conflicting migrations before they reach <code>main</code></li>
        <li>Exports ready-to-run migration files</li>
      </ul>
      <p><code>TypeScript</code> <code>React</code> <code>Laravel</code></p>
      <a href="https://github.com/m-makhlafi/migration-alchemy"><b>Case study →</b></a>
    </td>
    <td width="50%" valign="top">
      <h3>Qurani <img alt="Mobile, wide reach" src="https://img.shields.io/badge/mobile-wide_reach-0891b2?style=flat-square"></h3>
      <p>Content-focused Quran and Azkar application with wide distribution, built to run well on lower-end devices and in multiple languages.</p>
      <b>Engineering</b>
      <ul>
        <li>Small footprint and fast cold start on low-end Android</li>
        <li>Multilingual content with RTL-first layouts</li>
        <li>Firebase for messaging and remote configuration</li>
      </ul>
      <p><code>Flutter</code> <code>Firebase</code> <code>i18n</code></p>
      <a href="https://github.com/m-makhlafi/qurani"><b>Case study →</b></a>
    </td>
  </tr>
</table>

<details>
<summary><b>Payment flow — Easy Pay (simplified)</b></summary>

```mermaid
sequenceDiagram
  autonumber
  participant U as Client app
  participant A as Laravel API
  participant W as Wallet service
  participant P as Payment provider
  participant L as Ledger (DB)
  U->>A: POST /v1/wallet/top-ups (Idempotency-Key)
  A->>W: authorize user · validate limits
  W->>P: create charge
  P-->>A: signed webhook: charge.succeeded
  A->>L: BEGIN · credit balance · audit entry · COMMIT
  A-->>U: 201 Created · updated balance
```

</details>

## `06` Experience

| Role | Company | Focus |
| --- | --- | --- |
| **Senior Software Engineer**<br/><sub>Full Stack & Web Applications</sub> | Remote / Onsite | Led enterprise web projects end to end · backends at 100K+ req/month · payments, wallets, subscriptions, RBAC · CI/CD with GitHub Actions, Jenkins, Docker · mentoring |
| **Senior Laravel Backend Developer** | Limitstech | REST & GraphQL APIs with versioning, rate limiting, caching · MySQL/PostgreSQL schema design & indexing · queues and event-driven jobs · reusable Laravel packages |
| **Senior Frontend React.js Developer** | jusim | React + TypeScript + Redux component architecture · Tailwind & Styled Components · WCAG accessibility · real-time features via WebSockets & SignalR |

## `07` Tech stack

<p align="center"><b>Backend &amp; APIs</b><br/>
  <img alt="PHP, Laravel, Node.js, GraphQL, Postman" src="https://skillicons.dev/icons?i=php,laravel,nodejs,graphql,postman&theme=dark">
</p>
<p align="center"><b>Frontend</b><br/>
  <img alt="React, Next.js, TypeScript, JavaScript, Redux, Tailwind CSS, Styled Components" src="https://skillicons.dev/icons?i=react,nextjs,ts,js,redux,tailwind,styledcomponents&theme=dark">
</p>
<p align="center"><b>Data, cloud &amp; DevOps</b><br/>
  <img alt="MySQL, PostgreSQL, AWS, Firebase, Docker, GitHub Actions, Jenkins, Linux" src="https://skillicons.dev/icons?i=mysql,postgres,aws,firebase,docker,githubactions,jenkins,linux&theme=dark">
</p>
<p align="center"><b>Mobile &amp; tools</b><br/>
  <img alt="Flutter, Dart, Git, VS Code, Figma" src="https://skillicons.dev/icons?i=flutter,dart,git,vscode,figma&theme=dark">
</p>

## `08` Engineering principles

| Principle | What it looks like in my code |
| --- | --- |
| **Boundaries first** | Service and repository layers, modular monolith before microservices, domain logic kept out of controllers |
| **Secure by default** | OAuth/JWT, least-privilege RBAC, encrypted sensitive fields, audit logs on money movement |
| **Measure, then optimize** | Query plans and indexing, caching hot reads, moving slow work to queues |
| **Ship small, ship often** | CI on every PR, Dockerized environments, automated build → test → deploy |
| **Built for everyone** | WCAG-aware components and RTL/LTR layouts for Arabic and English users |

## `09` GitHub analytics

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/m-makhlafi/m-makhlafi/output/stats-dark.svg">
    <img alt="GitHub stats" src="https://raw.githubusercontent.com/m-makhlafi/m-makhlafi/output/stats-light.svg" width="32%">
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/m-makhlafi/m-makhlafi/output/langs-dark.svg">
    <img alt="Most used languages" src="https://raw.githubusercontent.com/m-makhlafi/m-makhlafi/output/langs-light.svg" width="32%">
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/m-makhlafi/m-makhlafi/output/streak-dark.svg">
    <img alt="Contribution streak" src="https://raw.githubusercontent.com/m-makhlafi/m-makhlafi/output/streak-light.svg" width="32%">
  </picture>
</p>
<p align="center"><sub>Self-hosted cards regenerated daily by a GitHub Action (<code>.github/scripts/stats.mjs</code>).</sub></p>

## `10` Contribution stream

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/m-makhlafi/m-makhlafi/output/snake-dark.svg">
  <img alt="Contribution snake" src="https://raw.githubusercontent.com/m-makhlafi/m-makhlafi/output/snake-light.svg" width="100%">
</picture>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/footer-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="./assets/footer-light.svg">
  <img alt="Building reliable software for real users. Let's talk." src="./assets/footer-dark.svg" width="100%">
</picture>
