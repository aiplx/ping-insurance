# AGENTS.md

## Cursor Cloud specific instructions

This is a **React + Vite + Tailwind CSS** single-page frontend app (no backend). See `README.md` for routes and standard dev commands (`npm install`, `npm run dev`, `npm run build`).

### Key notes

- **No test framework or linter** is configured in this project. There are no test scripts or lint scripts in `package.json`.
- The dev server runs on port **5173** by default (`npm run dev`).
- The contact form uses **EmailJS** (env vars in `.env.example`). The app runs fine without these — the form will show an error on submit, but everything else works.
- The contact form also POSTs to a hardcoded external IP (`72.61.12.121:3001`) as a backup; this is expected to silently fail in dev environments.
- Build output goes to `dist/` and is deployable to any static host (configured for Vercel via `vercel.json`).
