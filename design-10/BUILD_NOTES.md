# Moident — design-10 build notes

Round 2 design-exploration variant. Same static HTML/CSS/JS, no build step,
no backend — open `index.html` directly or serve the folder with any static
file server (`python3 -m http.server 8080`).

## Style direction — "Bold trust-led, accessibility-first"

Inspired by the homepage-built-around-parent-reassurance pattern seen on
award-winning pediatric/healthcare sites (e.g. BrightSmiles Pediatric
Dentistry): large legible type, prominent trust signals placed high on the
page, and oversized, high-contrast tap targets — aimed at being the easiest
of the variants to read and use for older parents/grandparents on mobile in
a small town.

Concrete choices, distinct from every other variant:

- **Palette** — deep teal-green (`#0B4D46`, with a near-black `#062E2A` for
  footer/darkest accents) + warm gold/amber (`#F0A202`). Solid **color-block**
  sections (hero, trust block, mid-page CTA, footer) rather than gradients —
  no gradient appears anywhere in `style.css`. This is a different family
  from the warm cream/teal-coral palette used in design-1.
- **Typography** — base font size raised to 18px (`html { font-size:112.5% }`)
  with 1.7 line-height, noticeably larger than a typical 16px baseline.
  Headings use **Archivo** (800 weight, confident/bold). Body copy uses
  **Atkinson Hyperlegible** — a typeface designed by the Braille Institute
  specifically to maximize legibility for readers with low vision, which
  directly serves the "easiest to read for older parents on mobile" goal in
  the style brief.
- **Trust signals placed high** — a new `.trust-section` (solid gold block)
  sits immediately after the hero on the homepage, combining the
  years-active stats (2002 / 2005 / Vuzenica, reused unchanged from
  design-1's trust bar) with the three "Naš pristop" pillars (Potrpežljivost,
  Varnost, Osebni pristop — reused unchanged from design-1's O nas page) into
  one prominent "Zakaj starši zaupajo Moidentu" section, so reassurance is
  visible before any scrolling past the fold on most screens.
- **Tap targets & contrast** — buttons are pill-shaped with a 56px minimum
  height and generous padding; nav links, FAQ question rows, and form
  inputs/checkbox are all enlarged versions of design-1's equivalents.
  Text/background pairs were chosen for strong contrast: near-black
  (`#15211E`) on cream/white, white on dark teal, near-black on gold — all
  comfortably pass WCAG AA for both normal and large text.
- **No stock photography** — same approach as design-1: a line-icon tooth
  logo (recolored to the new teal/gold palette) and simple SVG/CSS shapes
  stand in for photography; the About page bio photo remains an explicit
  dashed-border placeholder box, not a stock image.

## Content/facts — unchanged from design-1

All copy, services, FAQ entries, contact details, the GDPR checkbox, the
1A-Dent disambiguation note, and every "V potrditvi" / "Čaka se" placeholder
tag are reused **verbatim** from design-1, which itself was built directly
from `/home/anso/obsidian-vault/kb/Moident-Website-Spec.md`. No new facts,
working hours, prices, or services were invented. The only structural change
versus design-1 is presentational: the trust-bar content and the "Naš
pristop" cards are surfaced earlier/more prominently on the homepage (per
this variant's style brief), not new content.

## Self-verification performed

- Checked all 5 HTML files for matching open/close tags and consistent
  `<head>` blocks (meta charset, viewport, `robots`, title, description,
  stylesheet/script links).
- Confirmed `<meta name="robots" content="noindex, nofollow">` is present on
  every page, and the "OSNUTEK" draft banner renders as the first element in
  `<body>` on every page.
- Confirmed all internal links (`index.html`, `o-nas.html`, `storitve.html`,
  `za-starse.html`, `kontakt.html`, and the `assets/css/...` and
  `assets/js/...` references) are relative with no leading slash and no
  reference to other design folders — each page was cross-checked against
  the nav/footer link set.
- Confirmed the viewport meta is `width=device-width, initial-scale=1.0`
  only — no `user-scalable=no` / `maximum-scale` anywhere, so pinch-zoom is
  never locked (spec §3 explicitly flags this as a past competitor mistake
  to avoid).
- Verified `assets/js/main.js` is syntactically valid (reused design-1's
  tested logic unchanged: nav toggle, FAQ accordion, stubbed form submit
  handler) and `assets/css/style.css` has balanced braces/selectors with no
  stray gradient/legacy color values left over from copy-paste.
- Checked tap target sizing: `.btn` has `min-height: 56px`, nav links/FAQ
  question rows have generous padding (~56-64px effective height), the GDPR
  checkbox is enlarged to 26x26px, and mobile buttons stretch full-width
  under 760px — all comfortably exceed the ~44px touch-target guideline.
- Spot-checked color contrast pairs against WCAG AA by inspection of the
  hex values used (near-black text on cream/white, white text on dark teal,
  near-black text on gold) — all pairs are high-contrast combinations, no
  light-on-light or mid-tone-on-mid-tone text anywhere.
- No issues found that required fixing; this is the first pass for
  design-10.
