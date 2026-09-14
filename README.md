# Thara — Ecosystem Website

Bilingual (English / Arabic) website for **Thara**, an Ajman-born platform whose six
subsidiary capabilities operate as one ecosystem.

## Stack

- **Next.js** App Router + React 19, deployed on Vercel
- Plain CSS design system in `app/globals.css` — CSS custom properties, no UI framework for layout
- shadcn/ui primitives sit unused in `components/ui`; Tailwind's source scanning is scoped
  so they cost nothing at runtime (see the note at the top of `app/globals.css`)
- `next/font` for all typefaces

## Commands

```bash
npm install
npm run dev      # local dev server on :3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # oxlint
npm run format   # oxfmt
```

## Architecture

### Routing — mirrored locales, two document roots

Every English route has an Arabic counterpart under `/ar`. The language switch preserves
page context (`lib/nav.ts` → `alternateLocalePath`).

Each locale has its **own root layout** — `app/(en)/layout.tsx` and `app/(ar)/layout.tsx` —
so Arabic is served as `<html lang="ar" dir="rtl">` rather than having direction patched on
after hydration. Scroll bars, fixed elements, form controls, text selection and assistive
technology all read the page as Arabic-first. Switching language is a document-level
navigation, which is exactly what a change of direction should be.

```
/                              /ar
/about /impact /opportunities  /ar/...        → (en)/[page] (content from lib/site-pages.ts)
/ecosystem                     /ar/ecosystem  → ecosystem overview
/ecosystem/[slug]              /ar/...        → entity landing page (six entities)
/ecosystem/[slug]/[section]    /ar/...        → 32 entity sub-pages
/audiences/[slug]              /ar/...        → six audience pathways
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
| `journey.ts` | The seven-stage business journey and the entity that leads each stage |
| `media.ts` | Art-directed photographic frames: focal point and bilingual alt text |
| `fonts.ts` | The shared type stack, loaded once per root layout |
| `schema.ts` | Organisation structured data |

All copy is bilingual at the leaf: `{ en: '…', ar: '…' }`.

## Design system

One institutional language across the whole estate. Composition is carried by typography,
hairlines, numerals and negative space rather than by containers.

**Primitives** (all in `app/globals.css`):

| Primitive | Replaces | Notes |
| --- | --- | --- |
| `.band` + `.band-sand/-deep/-paper/-ink/-accent` | floating rounded panels | Sections are full bleed and separate by a change of ground. Each band publishes `--band-bg` so marks drawn on it can match exactly. |
| `.ledger` | card grids | A register of records: numeral, name, meaning, rule. Hover draws an accent rule beneath the row and advances it. |
| `.section-kicker` | badge + heading blocks | Numeral, label, and a rule that runs the width of the composition. |
| `.head-pair` | heading + paragraph stacks | The standard two-column opening. |
| `.stage-track` / `.journey-track` | step cards | One continuous line with stations on it; vertical below 1000px. |
| `.record` | stat cards | Facts in open space, divided by hairlines only. |

**Type**: Inter Tight for institutional display, Fraunces italic for the human half of the
voice (emphasis only), Geist for body, IBM Plex Sans Arabic as a first-class Arabic face —
never a fallback. Radii are 2px or none; shadows are not used.

**Entities** share that one system and differ by accent colour and ground material only
(`.theme-<slug>` in `app/globals.css`, applied by `components/entity-page.tsx`), plus a
distinct compositional rhythm per layout in `components/entity-layouts/`. Every accent also
publishes `--accent-text`, mixed toward ink until small type clears 4.5:1 on sand.

**The ecosystem** is drawn as one armature (`components/ecosystem-composition.tsx`): six
nodes on a ring, joined by two interlocking triangles, with the register beside it.
Hovering or focusing a record lights its node, so the diagram and the list read as one
object. The armature draws itself only where scripting can drive it; otherwise it is simply
already drawn.

**Photography** is art-directed, not decorative. `lib/media.ts` names each frame with its
focal point and bilingual alt text, passed to CSS as `--focus` so breakpoints can re-frame
the shot. Replacing the library later is a change of `src` and nothing else.

## Content policy

Programmes, membership tiers, pricing, capital availability, regulatory status, portfolio
holdings and impact figures are **not yet confirmed**. Pages describe capability and process
rather than inventing specifics; pages whose answer is genuinely pending carry a visible
note saying so. Verified numbers replace the structural facts on the homepage once audited.

## Accessibility & i18n notes

- Arabic is served as a real RTL document (see routing above), not a mirrored LTR one
- Text clears WCAG AA (4.5:1 small, 3:1 large) in both locales at desktop, tablet and mobile
- Latin runs inside Arabic (coordinates, emails, `GMT+04`) carry `dir="ltr"` so bidi
  reordering does not scramble them
- Skip link, `:focus-visible` rings tuned per surface, `aria-current` on active navigation
- The primary navigation is a real disclosure: keyboard and touch open it, `Escape` closes it
- Nothing is hidden until JavaScript is running, and anything already on screen is shown
  immediately, so the page never flashes on hydration; `prefers-reduced-motion` stands the
  whole motion system down and print disables it
- The header is `position: absolute` until scripting upgrades it to `fixed`, so a page
  without JavaScript never strands a pale bar over a pale band
