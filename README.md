# Thara — Ecosystem Website

Bilingual (English / Arabic) website for **Thara**, an Ajman-born platform whose six
subsidiary capabilities operate as one ecosystem.

## Stack

- **vinext** (Next.js App Router compatible) + React 19, deployed via Cloudflare Workers
- Plain CSS design system in `app/globals.css` — CSS custom properties, no UI framework for layout
- shadcn/ui primitives available in `components/ui` (used sparingly)
- `next/font` for all typefaces

## Commands

```bash
npm install
npm run dev      # local dev server on :3000
npm run build    # production build
npm run start    # run the built worker
npm run lint     # oxlint
npm run format   # oxfmt
```

## Architecture

### Routing — mirrored locales

Every English route has an Arabic counterpart under `/ar`. The language switch preserves
page context (`lib/nav.ts` → `alternateLocalePath`).

```
/                              /ar
/about /impact /opportunities  /ar/...        → app/[page] (content from lib/site-pages.ts)
/ecosystem                     /ar/ecosystem  → ecosystem overview
/ecosystem/[slug]              /ar/...        → entity landing page (six entities)
/ecosystem/[slug]/[section]    /ar/...        → 32 entity sub-pages
/audiences/[slug]              /ar/...        → seven audience pathways
/contact                       /ar/contact    → intent-routed enquiry form
```

`/sitemap.xml` is generated from the route data (102 URLs with hreflang alternates);
`hreflang` + canonical tags come from `lib/seo.ts`.

### Capability-based URLs

Two entity names are not final. URLs use stable capability language
(`/ecosystem/venture-building`, `/ecosystem/business-services`) so display names can change
without restructuring content, analytics or navigation. Nothing in the data layer, CMS field
names or routes encodes a working name.

### Content lives in `lib/`

| File | Holds |
| --- | --- |
| `entities.ts` | The six entities: names, positioning, offers, audiences, process, accent |
| `entity-sections.ts` | The 32 entity sub-pages, bilingual |
| `site-pages.ts` | About / Impact / Opportunities / Insights, plus audience definitions |
| `layout-copy.ts` | Copy specific to each entity's bespoke layout |
| `nav.ts` | Navigation model and locale switching |

All copy is bilingual at the leaf: `{ en: '…', ar: '…' }`.

### Six themes, one shell

Each entity is a mini site with its own typeface, palette, corner language, navigation
treatment and footer — declared as a `.theme-<slug>` token block in `app/globals.css` and
applied by `components/entity-page.tsx`. Sub-pages inherit their parent's identity
automatically. The shared shell (header, footer, sub-navigation, Arabic face,
cross-links) keeps the master brand visible.

| Entity | Display face | Character |
| --- | --- | --- |
| Holding | Archivo | Institutional grey, squared |
| Hub | Instrument Serif | Cream hospitality, soft rounding |
| Venture Building | Space Grotesk | White, hairline rules, technical |
| Capital | Fraunces | Dark editorial, sharp corners |
| Business Services | Manrope | Bright industrial, heavy weight |
| Foundation | Sora | Olive warmth, generous rounding |

## Content policy

Programmes, membership tiers, pricing, capital availability, regulatory status, portfolio
holdings and impact figures are **not yet confirmed**. Pages describe capability and process
rather than inventing specifics; pages whose answer is genuinely pending carry a visible
note saying so. Verified numbers replace the structural facts on the homepage once audited.

## Accessibility & i18n notes

- Full RTL layouts (not mirrored LTR), with IBM Plex Sans Arabic held constant across themes
- Skip link, `:focus-visible` rings tuned per surface, `aria-current` on active navigation
- Scroll reveals are transform-only, so content is never hidden if a scroll timeline stalls;
  all motion respects `prefers-reduced-motion` and is disabled in print
