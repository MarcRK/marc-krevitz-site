# marc-krevitz-site — Project Brief

Personal website for Marc Krevitz. An equal-weight hub for four pursuits —
no section is more important than another. The homepage routes visitors;
section pages hold the content.

Marc is new to web development (but has a technical background). Explain
steps as you go, especially git, deploys, and anything terminal-related.

## Tech stack

- **Astro**, static output. No heavy frameworks unless a page truly needs one.
- **Content collections** for posts: adding a post = adding one Markdown file
  with front-matter (title, date, category, images). This is the core
  requirement — Marc will update the site regularly and the per-post friction
  must stay near zero.
- Git from day one. Deploy target: **Netlify auto-deploy from GitHub**.
- Contact form posts to a **Formspree** endpoint (placeholder until Marc
  creates the account; make it one obvious constant to swap).

## Design — source of truth is index.html

The finished, approved homepage. Convert it faithfully; do not redesign it.
Extract header/nav/footer into a shared layout used by all pages.

- Fonts: IBM Plex Sans (body/display), IBM Plex Mono (small labels only)
- Colors: ink #0A0A0A on paper #FAFAFA; greys #555555 (secondary text),
  #9A9A9A (tertiary/mono), #E2E2E2 (borders); accent #7EB8DA on hover and
  focus states ONLY
- Soft, clean borders (6px radius, 1px strokes). No shadows, gradients,
  or brutalist styling. Strict minimalism — precision over decoration.
- Accessibility floor: WCAG AA contrast, visible keyboard focus,
  semantic landmarks, reduced-motion respected. Bento grid: 4-across →
  2×2 → single column; hamburger nav below 768px.

## Voice and copy rules

- Plain, factual, concrete. Describe what's on the page, not Marc's persona.
- Banned: LinkedIn-isms, "X by trade, Y by nature" constructions, clever
  parallel taglines, anything that sells rather than states.
- Never invent copy for Marc. Draft where needed, clearly flag every draft
  for his approval, and prefer his own phrasing when he supplies raw material.
- Locked homepage copy lives in index.html (tagline: "A tech specialist
  with too many hobbies."). Don't alter it without being asked.

## Pages

- **/ (home)** — index.html, converted. Nav: Furniture · Tech Projects ·
  Chess · Work (+ contact link in footer).
- **/furniture** — project log (before/after photos, what was done, honest
  take, short written posts) plus a SEPARATE reviews section. A few
  Facebook Marketplace review quotes as testimonials, not a full dump.
- **/tech-projects** — "The Bench." Same log format: machine found, what
  was wrong, what was fixed, outcome. Audio DIY builds as projects;
  headphone/IEM reviews as posts.
- **/chess** — service page, not a gallery. 5 years coaching, players of
  all skill levels, how lessons work, lichess profile link, client
  testimonials, rates section (Marc to decide public vs. on-request —
  build the section either way). "Book a lesson" → /contact with the
  chess intent pre-selected via query param.
- **/work** — "Professional Work." Case studies (problem → what I built →
  result), anonymized where tied to prior employers: no company names,
  no code, no internal details. Plus a small projects section (this
  website itself is the first entry), skills line, résumé download slot,
  GitHub + LinkedIn links.
- **/contact** — form with intent dropdown: Furniture, Chess Lessons,
  Professional, Other. Posts to Formspree. Support pre-selecting intent
  from a query param.

## Launch content on hand

- Furniture: one full refurbishment post (from Reddit — convert to
  Markdown), one full review, Marketplace testimonial quotes.
- Tech Projects: custom headphones build, Game Boy SP refurb
  (before/after), iPod refurb (before/after).
- Chess: lichess profile, work history, testimonials incoming.
- Work: thin at launch — anonymized case studies + this site as project #1.

Every page launches thin with real content rather than "coming soon" walls.
Create one example post per collection so Marc can see the Markdown format.

## Not yet done (don't assume)

- No domain purchased yet. No Formspree account yet. GitHub account is
  brand new and empty. Netlify not set up. Walk Marc through each when
  the build reaches that step.
