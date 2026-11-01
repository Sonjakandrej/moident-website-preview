# Moident website — design-6 build notes

This is **design-6** of a 5-page visual-design exploration round (design-6
through design-10, built in parallel alongside the already-existing
design-1..5). It reuses the exact same content/facts/placeholders and
functional behavior as `design-1`, with a completely different visual style.
Static HTML/CSS/JS only — no build step, no backend, no frameworks.

## How to preview

```
cd design-6
python3 -m http.server 8080
```
Then open http://localhost:8080/ in a browser.

## Style direction — "Editorial / Awwwards-inspired asymmetric"

Inspired by award-nominated dental/healthcare sites (Ader Dent, South Cliff
Dental Group) that use bold editorial typography and asymmetric layouts
instead of centered, boxy "clinic" cards. Adapted here to stay warm and
trustworthy for a small-town Slovenian pediatric practice — not a luxury or
cold-clinical look.

- **Palette** (deliberately different from design-1's teal/coral): deep
  forest green (`#1F3D30` / `#142A21`) as the primary color, warm clay/
  terracotta (`#C06B3A` / `#9C5429`) as the secondary accent, on a warm sand
  background (`#F6F1E6`) with dark charcoal body text (`#23221F`). Forest
  green is used for full-bleed "statement" sections (trust stats, closing
  CTAs); clay is reserved for small accents — numerals, icons, underlines,
  the "+"/eyebrow labels — so it still reads calm, not flashy.
- **Typography**: `Fraunces` (a high-contrast, slightly quirky optical-size
  display serif) for all headings and large editorial numerals, paired with
  `Work Sans` for body copy — both loaded from Google Fonts the same way as
  design-1 (`<link rel="preconnect">` + `css2` stylesheet link, no local
  font files). Large-scale display type (hero h1 up to ~5rem) is used as a
  visual element, not just a label.
- **Asymmetric/offset layout**: the home hero uses a 7/5 column split with
  the headline on the left and a bordered "side panel" (a large faint
  `2002` numeral + caption) on the right instead of a centered hero. The
  "About" teaser and the full About-page bio use a sticky-eyebrow / wide-copy
  split grid (5/7 columns) rather than stacked centered blocks. Services are
  presented as a numbered editorial index list (`01`–`06`, rule-line
  separated) instead of a card grid. Photo placeholders use an offset
  double-frame (dashed outline + solid clay-colored frame behind it, shifted
  by 14px) for a magazine-crop feel.
- **Scroll-reveal feel, pure CSS**: a `.reveal` utility class (plus
  `.reveal-1..4` stagger variants) runs a `@keyframes revealUp` fade+slide-up
  animation on page load (respects `prefers-reduced-motion`). No JS scroll
  library is used, per the brief — this is a load-time entrance animation,
  not a real scroll-linked trigger.
- **Mobile nav**: under 760px the hamburger opens a full-screen overlay panel
  with large serif nav links (editorial menu feel) instead of a dropdown
  strip, but the toggle/open/close JS behavior is identical to design-1.
- **Icons/imagery**: same approach as design-1 — simple line-icon SVGs
  (tooth, shield, clock, etc.) recolored to the new palette, no stock photos.
  Natalija's bio photo remains an explicit "ni na voljo / Čaka se" placeholder
  frame, not a stock image.

## Content parity with design-1 (and the approved spec)

All text, facts, and placeholders are unchanged from `design-1` /
`Moident-Website-Spec.md`:

- Same 5 pages: Domov (`index.html`), O nas, Storitve, Za starše (FAQ +
  koncesija explainer), Kontakt. Galerija intentionally omitted (spec: defer
  until real photos exist).
- Same hero copy, services list (6 items, MojZobar-based per spec §4), FAQ
  entries, address/phone/email, and the same "V potrditvi" / "Čaka se"
  placeholder tags for unconfirmed facts (working hours, exact services,
  1A-Dent note wording, photos).
- Same 1A-Dent disambiguation note, verbatim, in the footer and on
  Kontakt/Za starše.
- Same stubbed appointment form on Kontakt (child name, parent name, phone,
  email, reason, message, GDPR checkbox) — `assets/js/main.js` intercepts
  `submit`, shows a success message, and does not send anywhere. No backend.
- Same draft conventions: `OSNUTEK` banner at the top of every page, and
  `<meta name="robots" content="noindex, nofollow">` on every page (this is
  still a pre-approval draft, not for indexing).

## Self-verification performed

- Opened/read every HTML file after writing to confirm structure (doctype,
  head meta, header/nav/main/footer/script) is present and consistent across
  all 5 pages.
- Confirmed all internal links are relative with no leading slash
  (`index.html`, `o-nas.html`, `storitve.html`, `za-starse.html`,
  `kontakt.html`, `assets/css/style.css`, `assets/js/main.js`) and that
  every page's nav/footer links resolve to a file that exists in this folder.
- Confirmed the viewport meta tag on every page is
  `width=device-width, initial-scale=1.0` only — no `user-scalable=no` or
  `maximum-scale=1`, so pinch-zoom is not locked (per spec §3 accessibility
  requirement).
- Checked `assets/css/style.css` and `assets/js/main.js` for brace/paren
  balance and valid syntax (no leftover `design-1` class names referenced
  that don't exist in this stylesheet).
- No invented working hours, pricing, or services beyond the spec — the
  footer/Kontakt "Urnik" and Za starše FAQ still show "V potrditvi"/"Čaka se"
  exactly as in design-1.

## Not implemented (intentionally, same as design-1)

- No Cenik (pricing) page, no live booking widget, no CMS/build tooling —
  same rationale as design-1's BUILD_NOTES.md.
- `robots` meta is `noindex, nofollow` on every page since this is a draft
  design variant, not a page meant to be crawled.
