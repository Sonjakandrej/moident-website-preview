# Moident website — design-7 build notes

Design variant **design-7** in the round-2 exploration (design-6..10), built
alongside design-1 (the reference baseline) from the same approved spec:
`/home/anso/obsidian-vault/kb/Moident-Website-Spec.md`. This is a **static
HTML/CSS/JS site, no build step, no backend** — open `index.html` directly or
serve the folder with any static file server.

## How to preview

```
cd <this folder>
python3 -m http.server 8080
```
Then open http://localhost:8080/ in a browser.

## Style direction — "Soft photography-led / parent-reassurance"

Inspired by BEAM Pediatric Dental Studio and smiLee Pediatric Dentistry:
large, warm, photo-led hero areas, soft organic shapes, generous whitespace,
and a gentle, reassuring tone aimed squarely at the parent reading the page
(not the child). Concretely, versus design-1's clean clinical-but-warm
teal/coral look, design-7 differs in:

- **Palette** — warm peach + cream + sage green, distinct from design-1's
  teal/coral and from design-3: `--bg: #FFF9F2` (cream), `--bg-peach:
  #FCE8D8`, `--bg-sage: #EAF1E4`, `--primary: #7FA37A` (sage green),
  `--accent: #F0916A` (warm terracotta/peach), `--text: #3E352E` (warm
  charcoal, not pure black).
- **Typography** — rounded, friendly heading font **Fredoka** (Google Fonts)
  paired with the clean, highly legible **Nunito Sans** for body text —
  different pairing from design-1 (Poppins/Inter).
- **Photo placeholders, not icons** — per spec §3/§7 no real photography
  exists yet. Rather than small line-icon illustrations, design-7 leans into
  the "photography-led" brief with large, soft-edged organic "blob" shapes
  (CSS `border-radius` blob trick + soft gradient fill) standing in for a
  real photo: a big one in the home hero, a smaller one on the About page bio
  section. Each is explicitly labelled as a placeholder ("Fotografija —
  prostor za fotografijo" / "Čaka se") with a simple line-art parent-and-child
  / portrait scene drawn in SVG — not a generic stock photo, no external
  image URLs, no hotlinking, no network dependency beyond the two Google
  Fonts (same convention as design-1).
- **Shapes & depth** — large border-radius throughout (pill buttons, 28–40px
  rounded cards/forms/footer top corners), soft diffused drop shadows
  (`--shadow-soft` / `--shadow-softer`), soft blurred circle accents behind
  the hero, pill-shaped nav links and trust-bar chips instead of design-1's
  underline nav and plain stat blocks.
- **Buttons** — big, fully rounded (999px), heavier padding, with a soft
  colored glow shadow on the primary CTA — "big rounded buttons" per brief.

## What's implemented (identical scope/behavior to design-1)

- Same 5 pages per spec sitemap: Domov (`index.html`), O nas, Storitve, Za
  starše (FAQ + koncesija explainer), Kontakt. **Galerija intentionally
  omitted** — spec says defer until real photos exist.
- Mobile-first responsive layout, hamburger nav under 760px.
- `<meta name="robots" content="noindex, nofollow">` on every page, plus the
  same "OSNUTEK" draft banner at the top of every page.
- Viewport meta is `width=device-width, initial-scale=1.0` only — no
  `user-scalable=no` / `maximum-scale=1` zoom lock, per spec §3 accessibility
  requirement.
- All content, copy, facts, and "V potrditvi" / "Čaka se" placeholder tags
  are **unchanged from design-1** — same Slovenian draft copy from spec §2,
  same MojZobar-based services list, same working-hours/pricing/photo
  placeholders left unconfirmed, same 1A-Dent disambiguation note (footer +
  Kontakt + Za starše FAQ), same GDPR checkbox wording.
- Appointment form on Kontakt with all fields from spec §2.5. Submission is
  **stubbed in JS only** (`assets/js/main.js` intercepts submit, shows a
  success message, sends nowhere) — identical behavior to design-1.
- All internal links are relative within this `design-7/` folder (no leading
  slashes, no cross-design paths).

## Placeholders — do NOT treat as confirmed facts

Same outstanding items as design-1 (per spec §4/§6): working hours, exact
services list (MojZobar version used, eZobozdravnik's conflicting
implants/orthodontics list deliberately excluded), Natalija's photo (shown
here as an organic placeholder shape, not a stock image), 1A-Dent
disambiguation wording, and the `moident.si` domain. None of these were
altered for this variant — only the visual system changed.

## Self-verification performed

- Checked every HTML file's structure (doctype, head, nav, main, footer,
  script tag) is present and well-formed across all 5 pages.
- Confirmed all internal links (`index.html`, `o-nas.html`, `storitve.html`,
  `za-starse.html`, `kontakt.html`, `tel:`, `mailto:`) resolve to files that
  exist in this folder with correct relative paths — no absolute paths, no
  references to other design folders.
- Confirmed `assets/css/style.css` and `assets/js/main.js` are referenced
  identically from every page and load without a build step.
- Reviewed the CSS for balanced braces/selectors and the JS for balanced
  braces/parens — no syntax errors.
- Confirmed the viewport meta tag on every page is
  `width=device-width, initial-scale=1.0` with no zoom-locking attributes.
- No issues found requiring fixes.
