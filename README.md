# Sipora Site — Local Setup Guide


## Prerequisites

- **Node.js** ≥ 20 ([nodejs.org](https://nodejs.org))
- **npm**, **pnpm**, or **yarn** (any works — examples below use `npm`)

---

## Setup

```bash
# 1. Clone the repo
git clone https://github.com/shubh-raje-01/Hydration-Sipora.git
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
