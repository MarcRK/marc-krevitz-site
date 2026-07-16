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
- Git from day one. Deploy target: **Cloudflare (Workers static assets)
  auto-deploy from GitHub** — switched from an initial Netlify plan. Uses
  Cloudflare's newer Git-connected Workers Builds flow, not the classic
  "Pages" product; needs `wrangler.jsonc` at repo root (build command
  `npm run build`, deploy command `npx wrangler deploy`, assets directory
  `./dist`). Pairs with Cloudflare Registrar for the domain in one account.
  Domain: **marckrevitz.com**.
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
- Favicon (`public/favicon.svg`) is a simple "MK" monogram (ink/paper,
  inverts in dark mode) — replaces Astro's default starter icon. Marc
  hasn't picked a different design; revisit if he wants something else.
- Cards that aren't clickable (e.g. the "How lessons work" steps on
  /chess, the Work page's links/case-study cards) use `.info-card`, not
  `.post-card` — same shape, no hover lift/accent border, so the UI
  doesn't imply they're clickable when they're not.

## Voice and copy rules

- Plain, factual, concrete. Describe what's on the page, not Marc's persona.
- Banned: LinkedIn-isms, "X by trade, Y by nature" constructions, clever
  parallel taglines, anything that sells rather than states.
- Never invent copy for Marc. Draft where needed, clearly flag every draft
  for his approval, and prefer his own phrasing when he supplies raw material.
- Locked homepage copy lives in index.html (tagline: "A tech specialist
  with too many hobbies."). Don't alter it without being asked. The hero's
  mono label was changed at Marc's request to "Workshop · Workspace · Blog"
  (was "Workshop · Board · Codebase") — index.html was updated to match.
- Spelling: "resume," not "résumé" — no accent marks, Marc's preference.

## Pages

- **Nav order** (Marc's preference, changed mid-build): Work · Furniture ·
  Tech Projects · Chess — Work/Professional leads. The homepage bento grid
  matches this same order. Doesn't contradict the "equal-weight hub"
  framing — all four are still fully built out, just reordered.
- **/ (home)** — index.html, converted. Footer has a contextual "Get in
  touch" link (see /contact below) on every page via the shared layout.
- **/furniture** — project log (before/after photos, what was done, honest
  take, short written posts) plus a SEPARATE reviews section. A few
  Facebook Marketplace review quotes as testimonials, not a full dump.
- **/tech-projects** — "The Bench." Same log format: machine found, what
  was wrong, what was fixed, outcome. Audio DIY builds as projects;
  headphone/IEM reviews as posts.
- **/chess** — service page, not a gallery. 5 years coaching, players of
  all skill levels, how lessons work, lichess profile link, client
  testimonials, rates section. Rates decision is final: **on-request**,
  not published publicly. The "Book a lesson" CTA sits directly after the
  "How lessons work" steps (not at the page bottom), styled larger
  (`.btn-lg`) so it's easy to spot. → /contact with the chess intent
  pre-selected via query param.
- **/work** — "Professional Work." Case studies (problem → what I built →
  result), anonymized where tied to prior employers: no company names,
  no code, no internal details. Plus a small projects section (this
  website itself is the first entry), skills line, resume download slot,
  GitHub + LinkedIn links.
- **/contact** — form with intent dropdown, in this order: Professional,
  Furniture, Tech, Chess Lessons, Other. ("Tech" added for Tech Projects —
  previously only Furniture/Chess Lessons/Professional/Other existed.)
  Posts to Formspree. Supports pre-selecting intent from a `?intent=`
  query param (`furniture`, `tech`, `chess`, `professional`, `other`) —
  the footer's "Get in touch" link sets this automatically based on
  which section page you're on (computed in `Layout.astro`).

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

### Resolved placeholders

- `src/pages/chess.astro` — `LICHESS_URL` is real: `https://lichess.org/@/MarcKrev`.
  `RATES_ARE_PUBLIC` is a final decision (`false`, on-request), not a TODO.
- `src/pages/work.astro` — `GITHUB_URL` (`github.com/MarcRK`) and
  `LINKEDIN_URL` (`linkedin.com/in/marckrevitz`) are real.

### Placeholder constants still awaiting Marc's real values

- `src/pages/contact.astro` — `FORMSPREE_ENDPOINT`. Open question: Marc
  wants the notification email to use marckrevitz.com rather than personal
  Gmail — decide between paid Google Workspace vs. free Cloudflare Email
  Routing (forwards a @marckrevitz.com address to an existing inbox) before
  creating the Formspree account. See chat for Claude's explanation of why
  Formspree was chosen at all.
- `src/pages/work.astro` — `RESUME_URL` (needs `public/resume.pdf` added),
  and the skills line (marked `[DRAFT]` inline).
- `src/data/testimonials.ts` — `furnitureTestimonials` and `chessTestimonials`
  are single placeholder quotes; needs Marc's real Marketplace/student quotes.

### Real content still needed (don't invent — ask Marc for raw material)

- Furniture: the Reddit refurbishment post to convert, one full review,
  Marketplace testimonial quotes.
- Tech Projects: custom headphones build write-up, Game Boy SP refurb
  (before/after + photos), iPod refurb (before/after + photos).
- Chess: real student testimonials.
- Work: real anonymized case studies, skills list, resume PDF.
- No photos exist yet for any collection — `images` front-matter fields are
  optional and unused so far; photos go in `public/images/<collection>/`.

## Live status

- **The site is live** at marckrevitz.com, deployed via Cloudflare Workers
  static assets, auto-deploying from `github.com/MarcRK/marc-krevitz-site`
  (`main` branch). Domain purchased through Cloudflare Registrar and
  attached as a custom domain on the Workers project.
- No Formspree account yet — see the email-routing question above before
  creating it. That's the last major infrastructure piece; everything else
  remaining is real content (see above) and small design tweaks as Marc
  reviews the live site.

## Not yet done (don't assume)

- No Formspree account yet (see above). Note: Claude cannot create
  accounts, enter payment details, or execute purchases — Marc does those
  steps himself.
