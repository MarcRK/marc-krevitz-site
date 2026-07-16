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

## Build status

Scaffolded and committed (first commit `1c79a90`): Astro project, shared
`Layout.astro`, global stylesheet, four content collections (`furniture`,
`techProjects`, `techReviews`, `work`), and all five pages. Each collection
has one `draft: true` example post (clearly flagged as a placeholder, not
real content) so Marc can see the Markdown format — drafts render in
`npm run dev` but are excluded from production builds.

Node.js is installed at `C:\Program Files\nodejs\` (v24), but an old bundled
Node from Box Edit (v18.12.1) sits earlier on PATH and shadows it. The dev
server launches via `.claude/dev.cmd`, which prepends the real Node dir to
PATH before running `npm run dev` — needed because `.claude/launch.json`'s
`runtimeExecutable` alone wasn't enough to avoid the shadowed version.

### Placeholder constants awaiting Marc's real values

- `src/pages/contact.astro` — `FORMSPREE_ENDPOINT` (needs the Formspree account).
- `src/pages/chess.astro` — `LICHESS_URL`, and `RATES_ARE_PUBLIC` (still
  undecided — currently defaults to on-request).
- `src/pages/work.astro` — `GITHUB_URL`, `LINKEDIN_URL`, `RESUME_URL` (needs
  `public/resume.pdf` added), and the skills line (marked `[DRAFT]` inline).
- `src/data/testimonials.ts` — `furnitureTestimonials` and `chessTestimonials`
  are single placeholder quotes; needs Marc's real Marketplace/student quotes.

### Real content still needed (don't invent — ask Marc for raw material)

- Furniture: the Reddit refurbishment post to convert, one full review,
  Marketplace testimonial quotes.
- Tech Projects: custom headphones build write-up, Game Boy SP refurb
  (before/after + photos), iPod refurb (before/after + photos).
- Chess: real lichess URL, real student testimonials, rates decision.
- Work: real anonymized case studies, skills list, résumé PDF, GitHub/LinkedIn URLs.
- No photos exist yet for any collection — `images` front-matter fields are
  optional and unused so far; photos go in `public/images/<collection>/`.

## Not yet done (don't assume)

- No domain purchased yet. No Formspree account yet. GitHub account is
  brand new and empty. Netlify not set up. Walk Marc through each when
  the build reaches that step.
