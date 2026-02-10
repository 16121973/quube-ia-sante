# CLAUDE.md - AI Assistant Guide for QUUBE IA Sante

## Project Overview

**QUUBE IA Sante** is a B2B consulting/training platform website for healthcare AI transformation. It serves hospitals, EHPADs (care homes), clinics, and medico-social organizations in France. The site presents a 5-phase customer journey model, specialized training/consulting services, and industry-specific use cases.

- **Production URL:** https://quube-ia-sante.pages.dev
- **Language:** French (all content and UI)
- **Current version:** v2.0.0

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Hono](https://hono.dev/) v4 (lightweight TypeScript web framework) |
| Language | TypeScript (strict mode) |
| Templating | Hono JSX (`jsxImportSource: "hono/jsx"`) - server-side rendering |
| Styling | Tailwind CSS v6 (CDN) + custom CSS (`public/static/style.css`) |
| Icons | Font Awesome 6.4.0 (CDN) |
| Font | Inter (Google Fonts via Tailwind) |
| Build | Vite 6 with `@hono/vite-build` (Cloudflare Pages target) |
| Hosting | Cloudflare Pages |
| CLI | Wrangler v4 (Cloudflare Workers/Pages CLI) |
| Process Mgr | PM2 (optional, for local dev via `ecosystem.config.cjs`) |

## Project Structure

```
quube-ia-sante/
├── src/
│   ├── index.tsx              # Main application - all routes and UI (~1600 lines)
│   ├── renderer.tsx           # JSX renderer, HTML shell, Tailwind config (72 lines)
│   └── index-*.tsx            # Archived design iterations (do not modify)
├── public/
│   └── static/
│       └── style.css          # Custom CSS: brand colors, animations, overrides
├── dist/                      # Build output (gitignored)
├── logs/                      # PM2 logs (gitignored)
├── package.json
├── tsconfig.json
├── vite.config.ts             # Vite + Hono plugins config
├── wrangler.jsonc             # Cloudflare Pages deployment config
├── ecosystem.config.cjs       # PM2 process manager config
└── *.md                       # Documentation files (README, deployment guides, etc.)
```

### Key Files

- **`src/index.tsx`** - The entire application lives here. Single Hono app with one `GET /` route that renders all page sections via JSX. All content (services, use cases, articles) is embedded as JS objects in this file.
- **`src/renderer.tsx`** - HTML document shell, meta tags, CDN imports, and Tailwind theme configuration (QUUBE brand colors).
- **`public/static/style.css`** - CSS custom properties for QUUBE brand colors, keyframe animations (`fadeInUp`, `slideIn`), and utility overrides.
- **`vite.config.ts`** - Vite config using `@hono/vite-build/cloudflare-pages` and `@hono/vite-dev-server` with Cloudflare adapter. Entry point: `src/index.tsx`.
- **`wrangler.jsonc`** - Cloudflare Pages config. Build output: `./dist`. Compatibility flag: `nodejs_compat`.

## Commands

```bash
# Development
npm run dev              # Start Vite dev server with HMR
npm run dev:sandbox      # Start via Wrangler (closer to production)
npm run preview          # Preview built output locally

# Build
npm run build            # Production build via Vite

# Deploy
npm run deploy           # Build + deploy to Cloudflare Pages
npm run deploy:prod      # Build + deploy with explicit project name

# Utilities
npm run clean-port       # Kill process on port 3000
npm run cf-typegen       # Generate Cloudflare bindings types
npm test                 # Smoke test: curl localhost:3000
```

## Architecture

### Single-File Application

The entire UI is in `src/index.tsx`. There is no component splitting, no routing library, and no client-side framework. Hono renders the full HTML server-side on each request.

**Page sections in order:**
1. **Navigation** - Fixed top navbar with dropdown menus (Services, Cas d'Usage)
2. **Hero** - Large typography, brand messaging, CTAs
3. **Promesse (Promise)** - Value proposition section
4. **5-Phase Service Journey:**
   - Phase 1: SENSIBILISER (Awareness)
   - Phase 2: MONTER EN COMPETENCES (Upskilling - 3 levels)
   - Phase 3: STRUCTURER (Diagnosis, solution selection)
   - Phase 4: DEPLOYER (Project management, change management)
   - Phase 5: PERENNISER (Sustainability, ROI measurement)
5. **Use Cases by Role** - 8 tabs (ROI++, Direction Generale, Finance, RH, Qualite, Soins, Educatif, Fonctions Transverses)
6. **Contact** - Form with Calendly integration link
7. **Footer** - 4-column structured links

### Data Patterns

- All content is hardcoded as JavaScript objects/arrays directly in `index.tsx`
- No database, no CMS, no external API calls for content
- Contact form is front-end only (no backend processing currently)

### Styling Architecture

- **Tailwind CSS** loaded via CDN in `renderer.tsx` with custom theme config
- **Brand colors** defined in both Tailwind config and CSS custom properties:
  - Primary: `#fcf474` (QUUBE yellow - signature color)
  - Secondary: `#0082f3` (blue - AI/tech elements)
  - Accent: `#000000` (black - main text)
  - Pink: `#bb4198`, Red: `#ea384c`, Green: `#027a48`
- **Font:** Inter via Tailwind fontFamily config
- **Responsive:** Mobile-first with `md:` breakpoints for desktop layouts

## Development Conventions

### Commit Messages

Follow the Conventional Commits format used in this repo (in French):

```
type(scope): description en francais

Examples:
feat(blog): articles consultables avec modal elegant
fix(blog): rendre les 13 articles cliquables
refactor: suppression sections obsoletes
docs: mise a jour README avec URLs de production
```

Common types: `feat`, `fix`, `refactor`, `docs`, `style`, `perf`

### Code Style

- TypeScript with strict mode enabled
- JSX via Hono (not React) - use `class` not `className` for HTML attributes
- All UI text is in **French** - maintain this convention
- Inline Tailwind classes for styling (no CSS modules)
- HTML entities and French accented characters used directly in JSX

### Hono JSX Specifics

- Use `class` attribute (not `className`) in JSX - Hono JSX accepts standard HTML attributes
- Use `dangerouslySetInnerHTML={{ __html: '...' }}` for inline scripts
- The renderer wraps content in `<html lang="fr">` with all CDN imports

### File Naming

- Main source files: `src/index.tsx`, `src/renderer.tsx`
- Archived versions: `src/index-{description}-v{X.Y.Z}.tsx` (read-only references)
- Documentation: `UPPER_CASE.md` at project root

## Brand Guidelines

Reference: `QUUBE_BRANDING.md`

- **Logo format:** `QUUBE x IA Sante` (with multiplication sign)
- **Primary color palette:** Black + Neon Yellow (`#fcf474`)
- **Typography:** Inter, light/regular weights, generous spacing
- **Design philosophy:** Minimalist, professional, healthcare-focused
- **Tone of voice:** Expert but approachable, data-driven, sector-specific

## Deployment

### Cloudflare Pages

- **Project name:** `quube-ia-sante`
- **Build command:** `npm run build` (Vite)
- **Output directory:** `dist/`
- **Compatibility date:** 2024-01-01
- **Compatibility flags:** `nodejs_compat`

### Deploy Process

```bash
npm run build                    # Build with Vite
wrangler pages deploy dist       # Deploy to Cloudflare Pages
```

Or in one step: `npm run deploy`

## Testing

There is currently no formal test suite. The only test script is a smoke test (`curl localhost:3000`). No testing framework (Vitest, Jest, etc.) is configured.

## Linting / Formatting

No ESLint or Prettier configuration exists. Follow the existing code style when making changes.

## Environment Variables

No `.env` file is required for development. Secrets are managed via Wrangler for deployment. The `.gitignore` excludes `.env` and `.dev.vars`.

## Important Notes for AI Assistants

1. **Single-file architecture**: All UI lives in `src/index.tsx`. Changes to any section happen in this file.
2. **French language**: All user-facing content must be in French. Comments can be in French or English.
3. **No React**: This uses Hono JSX, not React. No hooks, no state management, no client-side hydration.
4. **Server-side only**: Pages are rendered server-side. Client-side interactivity is limited to inline `<script>` tags and CSS (hover states, animations).
5. **Archived files**: Files matching `src/index-*.tsx` are historical backups of previous designs. Do not modify or delete them.
6. **Tailwind via CDN**: Tailwind is loaded from CDN, not installed as a dependency. Theme customization is in `renderer.tsx`.
7. **No database**: All content is hardcoded. There is no ORM, no migration system, no data layer.
8. **Build is fast**: Vite builds complete in under 1 second. Always run `npm run build` to verify changes compile.
9. **TypeScript strict**: The `tsconfig.json` has `strict: true`. All code must pass strict type checking.
