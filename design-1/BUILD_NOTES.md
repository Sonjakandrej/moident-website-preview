# Moident website — build notes

Built from the approved spec (task t_2f847159, full spec also at
`/home/anso/obsidian-vault/kb/Moident-Website-Spec.md`). This is a **static
HTML/CSS/JS site, no build step, no backend** — open `index.html` directly or
serve the folder with any static file server.

## How to preview

```
cd <this folder>
python3 -m http.server 8080
```
Then open http://localhost:8080/ in a browser.

## What's implemented

- 5 pages per spec sitemap: Domov (`index.html`), O nas, Storitve, Za starše
  (FAQ + koncesija explainer), Kontakt. **Galerija intentionally omitted** —
  spec says defer until real photos exist.
- Mobile-first responsive layout, hamburger nav under 760px.
- Warm teal/coral palette (`#4FB3A9` / `#F2A679`) differentiated from
  competitors' cold blue, per spec §3.
- Draft Slovenian copy from spec §2, using the MojZobar services list
  (spec's recommended choice over the conflicting eZobozdravnik list).
- Appointment form on Kontakt with all fields from spec §2.5 (child name,
  parent name, phone, email, reason, message, GDPR checkbox). Submission is
  **stubbed in JS only** — `assets/js/main.js` intercepts submit, shows a
  success message, and does not send anywhere. No backend exists yet.
- Basic SEO: per-page `<title>`/meta description/OG tags, `lang="sl"`,
  responsive viewport meta, `sitemap.xml`, `robots.txt` (currently
  `Disallow: /` — intentional, see below).
- 1A-Dent disambiguation note in footer and on Kontakt/Za starše, per spec §2.6.

## Placeholders — do NOT treat as confirmed facts

Per spec §4/§6, these are flagged inline in the site itself (look for the
"V potrditvi" / "Čaka se" tags) and must be confirmed with Natalija before
any public launch:

1. **Working hours** — not published anywhere; footer/Kontakt say "v potrjevanju".
2. **Exact services list** — MojZobar version used as the working assumption;
   eZobozdravnik's conflicting list (implants, orthodontics, "All on 4") was
   deliberately excluded.
3. **Photos** — Natalija's bio photo is an empty placeholder box, not a stock image.
4. **1A-Dent disambiguation wording** — included by default per the spec's
   recommendation, but Natalija may want to change tone or omit it.
5. **Domain** — `sitemap.xml` uses `moident.si` as a placeholder; not yet
   registered or confirmed.

## Why `robots.txt` disallows everything

This is a pre-approval draft. Blocking crawlers is intentional so an
accidental deploy doesn't get indexed before the client signs off. Flip to
`Allow: /` when the site actually goes live.

## Not implemented (intentionally, per spec)

- No Cenik (pricing) page — concession/referral-based practice, replaced with
  the Za starše FAQ.
- No live booking widget — simple contact form only, per spec's conclusion
  that this is sufficient for a one-person concession practice.
- No CMS/build tooling — plain static files per the task's "avoid
  overengineering" instruction.

## Professionalism pass (2026-10-31, per Andrej's "more professional / for adults" feedback)

- Swapped heading font from Quicksand (bubbly, kids'-app feel) to Poppins
  (clean, modern, widely used on real medical/dental sites) — kept Inter for body.
- Removed the two floating coral/yellow "confetti dot" accents from the home
  hero tooth illustration; replaced with a subtle dashed ring (quieter, more
  clinical-badge feel than toy-like).
- Muted the coral accent color slightly (`#F2A679`→`#E8956A`) and switched the
  contact form's submit button from the coral `btn-accent` style to the same
  teal `btn-primary` used everywhere else, for a more consistent, less
  "playful-app" CTA.
- Elevated a couple of headline/copy spots to foreground credentials: home
  hero now leads with "Strokovna zobozdravstvena nega..." (professional care)
  and surfaces Dr. Natalija's full title inline; the "Natalija skrbi..."
  section heading now uses her full name/title instead of first name only.
- **Did NOT change**: the clinic's actual scope of practice. The approved
  spec (§0, §2.4) and this site's own FAQ explicitly state Moident treats
  only children/adolescents and does not treat adults (pointing to 1A-Dent
  instead) — that's a researched fact about the real practice, not a design
  choice. If "also for adults" meant literally expanding the stated scope of
  care, that needs explicit confirmation from Natalija before it goes on the
  site — flagged back to Andrej for clarification rather than guessed at.

## Handoff to next task (t_be6d3bd5 — deploy preview + client summary)

This folder is the complete, ready-to-deploy artifact. That task still needs
to: pick a free static host (Netlify/Vercel/GitHub Pages) or confirm local
preview is sufficient, and write the client-facing summary of assumptions +
outstanding questions (the 11 open questions from spec §5 are the source list).
