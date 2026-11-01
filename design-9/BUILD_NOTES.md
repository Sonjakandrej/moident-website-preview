# Moident website — design-9 build notes

**Style:** "Scandinavian clinical minimalism" — one of 5 new visual variants
(design-6..10) built in parallel for round 2 of design exploration. Content,
copy, facts and functional behavior are reused unchanged from the reference
implementation (`design-1/`); only the visual design system differs.

This is a **static HTML/CSS/JS site, no build step, no backend** — open
`index.html` directly or serve the folder with any static file server.

## How to preview

```
cd <this folder>
python3 -m http.server 8080
```
Then open http://localhost:8080/ in a browser.

## Style direction

Inspired by high-end Nordic healthcare/clinic web design — meant to read as
the most "serious, grown-up, trustworthy" of the design variants: an
editorial-minimal clinic site rather than a playful pediatric one, while
staying warm enough (via copy + warm neutrals) not to feel sterile.

- **Palette** — near-monochrome, warm neutrals rather than stark white/black:
  `--paper: #F7F4EE` (warm off-white background), `--paper-alt: #EFEAE0`
  (section alternation), `--ink: #2B2A26` (warm near-black text). One single
  confident accent color, a muted blue-grey, `--accent: #4F7180`
  (`--accent-deep: #395660` for hover/pressed states), used sparingly — CTA
  buttons, icon strokes, the current-page nav underline, FAQ plus/minus icon,
  placeholder-tag borders. No secondary/tertiary accent colors.
- **Typography** — 'Jost' (a geometric, light-weight Nordic-feeling sans) for
  headings at weight 300, paired with 'Work Sans' at weight 400+ for body
  copy. Large headings (h1/h2) are intentionally light-weight for an
  editorial feel; h3/h4/nav/buttons/labels step up to 500–600 weight so
  nothing reads as fragile at smaller sizes. A mobile safeguard bumps h1/h2
  to weight 400 under 480px (see `@media (max-width: 480px)` in
  `assets/css/style.css`) so headings stay crisp on small phone screens.
  Body text is never below 1rem / weight 400.
- **Hairline borders, no shadows** — every "card", button, form, footer and
  section divider uses a 1px `--line` border instead of a drop shadow or a
  filled rounded box. The service/approach card grids are implemented as a
  single hairline-bordered grid with 1px gaps (`background: var(--line)`
  trick) rather than separate shadowed boxes, for a quieter, more structural
  feel.
- **Minimal iconography** — same inline SVG icon set as design-1 (tooth,
  target, filling, surgery, hygiene, emergency, location, phone, clock) but
  rendered as single-stroke line icons (`stroke-width: 1` via CSS, no fill)
  rather than filled/bold icons, colored only with the one accent.
- **Calm layout** — generous whitespace (4rem section padding, 3rem gaps),
  centered narrow measure for the section intros and FAQ, a quiet hero with
  a single hairline-ringed line-art tooth illustration instead of a colored
  blob/badge graphic.
- **Footer** — intentionally light (`--paper-alt`) with a hairline top border
  and italic disambiguation note, instead of design-1's dark slab footer —
  keeps the whole page in the same quiet tonal register top to bottom.
- **Draft banner / placeholder tags** — restyled to match: banner is a solid
  `--ink` bar (not a colored accent stripe), and "V potrditvi"/"Čaka se" tags
  are outlined (border + accent text, transparent fill) rather than a filled
  coral chip, keeping with the "no loud color fills" rule.

## Content — unchanged from design-1

All text, facts, placeholders and disambiguation notes are copied verbatim
from `design-1/` (itself sourced from
`/home/anso/obsidian-vault/kb/Moident-Website-Spec.md`). No working hours,
pricing, or services were invented; all "V potrditvi" / "Čaka se" pending-
confirmation tags are preserved exactly as in design-1:

1. **Working hours** — still "v potrjevanju" in the footer and Kontakt page.
2. **Services list** — same MojZobar-based six services as design-1, with the
   same "Napotitev k ortodontu" caveat callout.
3. **Natalija's photo** — same empty placeholder box, not a stock image.
4. **1A-Dent disambiguation** — identical wording, present in the footer of
   every page, on Kontakt, and in the Za starše FAQ.

## What's implemented

- 5 pages, same sitemap/filenames as design-1: `index.html`, `o-nas.html`,
  `storitve.html`, `za-starse.html`, `kontakt.html`. Galerija intentionally
  omitted (per spec — defer until real photos exist).
- Mobile-first responsive layout; hamburger nav under 760px
  (`assets/css/style.css` `@media (max-width: 760px)`), using the same
  `.nav-toggle` / `.nav-links.open` JS pattern as design-1.
- `assets/js/main.js` reused behavior-for-behavior from design-1: mobile nav
  toggle, FAQ accordion (single-open), and a stubbed contact form submit
  handler (`preventDefault`, shows `#form-success`, sends nowhere — no
  backend exists).
- `<meta name="robots" content="noindex, nofollow">` and the "OSNUTEK
  SPLETNE STRANI" draft banner on every page.
- Viewport meta is `width=device-width, initial-scale=1.0` only — no
  `user-scalable=no` / `maximum-scale` lock, so pinch-zoom works everywhere.
- No stock photography — all imagery is inline line-icon SVGs or simple CSS/
  SVG shapes, same approach as design-1.

## Self-verification performed

- Checked all 5 HTML files for matching structural tags (head/body/header/
  main/footer) and consistent nav markup/`aria-current` placement.
- Grepped every `href="...html"` and `src="assets/..."` reference across all
  5 pages — all are relative (no leading `/`), all point to files that exist
  inside this `design-9/` folder, and none reference other design folders.
- Verified every page has exactly one `<meta name="robots" content="noindex,
  nofollow">` tag and one `.draft-banner` div.
- Confirmed the viewport meta tag on every page omits `user-scalable=no` and
  `maximum-scale`.
- Validated `assets/css/style.css` and `assets/js/main.js` for syntax (brace/
  rule balance, no stray tokens) — both load cleanly.
- Checked heading weights against body/legibility: base body text is 1rem/
  400-weight; h1/h2 use weight 300 but only at clamp sizes ≥ ~1.5–2.1rem, and
  step up to weight 400 under 480px width via an explicit media query so
  thin strokes don't disappear on small phones; h3/h4/nav/buttons/labels are
  weight 500–600 throughout, never thin.
- No issues required fixing beyond the mobile heading-weight safeguard,
  which was designed in up front rather than patched afterward.
