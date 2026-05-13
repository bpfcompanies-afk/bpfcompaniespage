# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

There are no tests configured in this project.

## Architecture

This is a **Next.js 16 App Router** project (TypeScript + Tailwind CSS v4) for BpfCompanies — a Colombian software agency landing site.

### Path aliases

`tsconfig.json` maps `@/*` to the project root (`./*`), not to `src/`. This means:
- UI components live in `components/ui/` and are imported as `@/components/ui/button`
- App-specific components live in `src/components/` and are imported as `@/src/components/Navbar`

### Pages (App Router)

All pages are under `src/app/`:
- `/` — `src/app/page.tsx`: Main landing page. Contains `ContactPage` as a **nested function component** inside the `Home` export — both the carousel logic and the contact form live in the same file.
- `/services` — `src/app/services/page.tsx`: Service catalog with a modal overlay for details.
- `/about` — `src/app/about/page.tsx`
- `/contact` — `src/app/contact/page.tsx`: Standalone contact page with FAQ section.
- `/legales` — `src/app/legales/page.tsx`: Terms and conditions.
- `/api/send` — `src/app/api/send/route.ts`: POST endpoint that sends two emails via Resend (one to the business, one confirmation to the lead).

### Layout (`src/app/layout.tsx`)

Every page is wrapped with `Navbar`, `WhatsAppBtn`, and `Footer` from `src/components/`.

### Email

Email is sent using **Resend** (`resend` package). The API route at `src/app/api/send/route.ts` uses `resend.batch.send()` to dispatch:
1. A lead notification to `gerencia@bpfcompanies.com` using `EmailTemplate`
2. A confirmation to the user using `ConfirmationTemplate`

The `RESEND_API_KEY` environment variable must be set in `.env.local`.

### Shared UI components

Generic primitives (`Button`, `Input`, `Textarea`, `Label`, `Card`) live in `components/ui/` (shadcn/ui style, using `class-variance-authority` + `tailwind-merge`). These are separate from page-specific components in `src/components/`.

### Styling

Tailwind CSS v4 via `@tailwindcss/postcss`. Global styles in `src/app/globals.css`. The site uses a consistent animated background (floating code symbols + SVG wave) defined inline per page — each page duplicates this pattern rather than sharing it.
