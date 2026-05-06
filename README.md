# Sipora Site — Local Setup Guide

This is the `sipora-site` frontend extracted from the Replit monorepo and cleaned up to run anywhere (macOS, Windows, Linux) without any Replit dependencies.

---

## What was changed from the Replit version

| File | What changed |
|---|---|
| `vite.config.ts` | Removed `@replit/vite-plugin-*` plugins, removed mandatory `PORT` / `BASE_PATH` env var checks, hardcoded sensible local defaults |
| `package.json` | Removed `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`, `@replit/vite-plugin-runtime-error-modal`, removed `@workspace/api-client-react` workspace dep |
| `tsconfig.json` | Inlined base compiler options (no more `extends: ../../tsconfig.base.json`), removed `references` to `lib/api-client-react` |
| `attached_assets/` | Copied in from the repo root so the `@assets` alias resolves correctly |

---

## Prerequisites

- **Node.js** ≥ 20 ([nodejs.org](https://nodejs.org))
- **npm**, **pnpm**, or **yarn** (any works — examples below use `npm`)

---

## Setup

```bash
# 1. Clone the extracted repo (or copy the sipora-site folder)
cd sipora-site

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server at http://localhost:5173 |
| `npm run build` | Type-check + build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run TypeScript compiler check only |

---

## Using pnpm instead of npm

If you prefer pnpm (faster, disk-efficient):

```bash
npm install -g pnpm
pnpm install
pnpm dev
```

> ⚠️ Do NOT copy the `pnpm-workspace.yaml` or `.npmrc` from the original Replit monorepo — they contain platform overrides that break macOS and Windows.

---

## Project Structure

```
sipora-site/
├── src/
│   ├── App.tsx               # Root app with router + providers
│   ├── main.tsx              # Entry point
│   ├── index.css             # Global styles (Tailwind v4)
│   ├── components/
│   │   ├── ui/               # shadcn/ui component library
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── BottleViewer.tsx  # Three.js 3D bottle component
│   │   ├── LiquidEther.tsx
│   │   ├── MagicBento.tsx
│   │   ├── ScrollStack.tsx
│   │   └── StepsMagic.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Support.tsx
│   │   └── not-found.tsx
│   ├── hooks/                # use-mobile, use-toast
│   └── lib/utils.ts          # cn() helper
├── attached_assets/          # Static image assets (@assets alias)
├── public/                   # Vite public folder
├── vite.config.ts            # ✅ Clean local config
├── tsconfig.json             # ✅ Standalone (no monorepo extends)
└── package.json              # ✅ No Replit packages
```

---

## Troubleshooting

**`Cannot find module '@/...'`**
Make sure you're running commands from inside the `sipora-site/` directory.

**Port 5173 already in use**
Change the port in `vite.config.ts`:
```ts
server: { port: 3000 }
```

**Three.js / WebGL errors in browser**
Make sure your browser supports WebGL. Try Chrome or Firefox. Hardware acceleration must be enabled.

**`tw-animate-css` not found**
It is on npm — just run `npm install` again. If it persists, replace the import in `src/index.css` with `tailwindcss-animate`.

---

## Pushing to a new GitHub repo

```bash
cd sipora-site
git init
git add .
git commit -m "Initial commit — extracted from Replit monorepo"
git remote add origin https://github.com/YOUR_USERNAME/sipora-site.git
git push -u origin main
```
