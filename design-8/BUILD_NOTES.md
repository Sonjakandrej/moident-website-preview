# Moident website — design-8 build notes

**Variant:** design-8 of 10 parallel visual explorations (design-1..5 round 1,
design-6..10 round 2). This is a **static HTML/CSS/JS site, no build step, no
backend** — open `index.html` directly or serve the folder with any static
file server.

## How to preview

```
cd <this folder>
python3 -m http.server 8080
```
Then open http://localhost:8080/ in a browser.

## Style direction — "Modern health-tech / soft glassmorphism"

Inspired by 2026 health-tech/SaaS visual trends: a soft multi-tone pastel
gradient canvas (sky blue → mint → lavender, CSS gradients only, no images)
sits behind translucent, blurred "glass" cards (semi-transparent white
panels with `backdrop-filter: blur()`, soft 1px light borders, diffuse
shadows instead of hard drop-shadows). The result should read as clean,
trustworthy and tech-forward without feeling cold or corporate — appropriate
for a small-town pediatric concession practice, not a generic "future dental
clinic" look.

Concrete choices:

- **Palette** (deliberately distinct from design-2's clinical blue and
  design-6's forest/clay editorial look): teal `#1fb6a8` (primary) + soft
  lavender-indigo `#7c83e8` (secondary) + warm coral `#ff9470` (accent, used
  sparingly for the CTA button and draft banner, per the spec's note that
  some warmth is appropriate for a pediatric audience). Text is a dark slate
  `#1f2d36`, not pure black, on a near-white/pastel background — all body
  text passes comfortable contrast on both the gradient canvas and the glass
  card surfaces.
- **Typography:** Google Fonts "Sora" (geometric, modern, confident) for
  headings, paired with "Figtree" (clean, highly legible, slightly rounded)
  for body text — a different pairing from design-1 (Poppins/Inter) and
  design-2 (Manrope/Plus Jakarta Sans), to keep the explorations visually
  distinct.
- **Glassmorphism:** header nav, service/approach cards, FAQ accordion
  items, info cards, the contact form, callouts and the map embed all use a
  shared translucent-glass treatment (`rgba(255,255,255,0.62)` background +
  `border: 1px solid rgba(255,255,255,0.75)` + `backdrop-filter: blur(18px)
  saturate(160%)` + soft diffuse shadow). Decorative CSS-only blurred
  gradient "blobs" (radial-gradients, no images) sit behind the hero and
  page-hero sections to give the glass panels something soft to float over.
- **Border-radius system:** consistent scale (`--radius-sm: 14px`,
  `--radius: 22px`, `--radius-lg: 32px`, plus a pill radius for buttons/nav)
  used everywhere instead of ad-hoc values.
- **Shadows:** soft, diffuse, multi-layer (`--shadow-soft`) rather than hard
  drop-shadows, consistent with the "soft" glass aesthetic.
- **Footer is intentionally solid** (`rgba(18,28,38,0.92)` dark slate, not
  glass) rather than translucent, both for visual contrast/rhythm at the
  bottom of each page and to guarantee footer text (including the 1A-Dent
  disambiguation note and placeholder tags) stays fully legible regardless
  of what's behind it.
- **Backdrop-filter fallback:** `backdrop-filter`/`-webkit-backdrop-filter`
  has patchy support on older Android WebViews. An `@supports not
  ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)))`
  block switches every glass surface to a solid `rgba(255,255,255,0.94)`
  background in that case, so content stays fully legible (just without the
  blur effect) rather than becoming a transparent mess over the gradient.
- **No stock photography** — same approach as design-1: simple inline SVG
  line icons (tooth, shield, clock, map pin, phone, etc.) and a dashed-border
  placeholder box for Dr. Natalija's bio photo, clearly marked "Čaka se".

## Content/facts — unchanged from design-1 / the approved spec

This variant is a pure re-skin. All copy, facts, services list, FAQ
entries, contact details, and placeholder/draft conventions are reused
**verbatim** from `design-1` (itself built directly from
`/home/anso/obsidian-vault/kb/Moident-Website-Spec.md`):

- 5 pages: Domov (`index.html`), O nas, Storitve, Za starše (FAQ + koncesija
  explainer), Kontakt. Galerija intentionally omitted (spec: defer until
  real photos exist).
- Services list = MojZobar version (redni pregledi, karies, zalivke, ustna
  kirurgija, higiena/svetovanje, nujna pomoč) + "napotitev k ortodontu"
  note — the eZobozdravnik conflicting list (implants/orthodontics/"All on
  4") is still deliberately excluded pending client confirmation.
- Working hours, exact services, and the 1A-Dent disambiguation wording are
  all still flagged inline with the same "V potrditvi" / "Čaka se"
  `.placeholder-tag` spans — nothing was invented or newly confirmed for
  this variant.
- Address (Mladinska ulica 17, 2367 Vuzenica — Zdravstveni dom Vuzenica),
  phone (02 876 48 55), email (moident@siol.net) unchanged.
- Appointment form fields (child name, parent/guardian name, phone, email,
  reason, message, GDPR checkbox) unchanged; submission is still **stubbed
  in JS only** (`assets/js/main.js` — identical to design-1's script,
  intercepts submit, resets the form, shows a success banner, sends
  nowhere — no backend exists).
- Draft banner ("OSNUTEK SPLETNE STRANI...") present at the top of every
  page, plus `<meta name="robots" content="noindex, nofollow">` added to
  every page's `<head>` (design-1 relied on a separate `robots.txt`; this
  variant also adds the meta tag directly on each page as a second layer of
  protection against accidental indexing of the draft).

## Self-verification performed

- Checked every HTML file's structure (DOCTYPE, head, nav, main, footer,
  script tag) is present and well-formed on all 5 pages.
- Confirmed all internal links between pages are relative filenames
  (`index.html`, `o-nas.html`, `storitve.html`, `za-starse.html`,
  `kontakt.html`, `assets/css/style.css`, `assets/js/main.js`) with no
  leading slashes and no references to other design folders.
- Confirmed `assets/js/main.js` is unchanged from design-1 (same
  `.nav-toggle` / `.nav-links` / `.faq-item` / `#appointment-form` /
  `#form-success` hooks it expects all exist with matching class/id names
  in the new HTML/CSS).
- Validated CSS has balanced braces and no stray syntax (built from a
  known-good structure, re-skinned variable-first).
- Viewport meta on every page is `width=device-width, initial-scale=1.0` —
  no `user-scalable=no` / `maximum-scale=1` lock, per spec §3 accessibility
  requirement.
- Checked text contrast: body text uses dark slate `#1f2d36` / muted
  `#4d6672` against a light pastel gradient and ~60-80% opaque white glass
  cards — contrast stays comfortable even where the blur doesn't render
  (fallback rule above forces a near-solid white card background in that
  case). Footer uses light text on a solid dark slate background for
  guaranteed contrast.
- Confirmed the mobile hamburger menu (`.nav-toggle` / `.nav-links.open`)
  works the same way as design-1, just restyled as a floating glass panel
  under ~760px.

## Not implemented (intentionally, per spec — same as design-1)

- No Cenik (pricing) page — concession/referral-based practice, replaced by
  the Za starše FAQ.
- No live booking widget — simple contact form only.
- No CMS/build tooling — plain static files only.
