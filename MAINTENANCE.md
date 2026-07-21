# Maintaining marckrevitz.com

I built this site with Astro and Claude Code, but I won't always have AI
help on hand, so this is my own reference for keeping it updated —
editing text, adding posts, adding images — without needing to ask
anything for help. Everything below assumes I've got this project folder
open in an editor and a terminal in the same folder.

## 1. Publishing changes

Nothing I edit locally is live until I commit and push it. GitHub holds
the code, and Cloudflare watches the repo and rebuilds/redeploys the
site automatically within a minute or two of every push to `main`.

```
git add -A
git commit -m "short description of what changed"
git push
```

If I want to see a change before it's public, `npm run dev` runs the
site locally at `http://localhost:4321`. Draft posts (see §3) only ever
show up there, never on the real site.

## 2. How the site is put together

Every page is a `.astro` file under `src/pages/`. Text I typed directly
(taglines, headings, section copy) sits right there in the markup — I
find the sentence with search and edit it in place. A few pages also
have short constants near the top of the file (between the `---` fences)
for things like URLs, so I don't have to go hunting through markup to
change a link.

The shared header, nav, and footer live in one place —
`src/layouts/Layout.astro` — and wrap every page, so changing something
there changes it everywhere at once.

Reviews/testimonials (short quotes) are kept separately from full posts,
in `src/data/testimonials.ts`. Full posts (refurb logs, reviews, case
studies) are Markdown files, one file per post, under `src/content/`. §3
and §4 cover both.

## 3. Page by page

### Home — `src/pages/index.astro`

Three pieces, top to bottom:

1. **Hero.** The mono label — in the file it's "Workshop · Workspace ·
   Blog" (CSS renders it in caps, but that's not what's in the source, so
   search for the mixed-case version) — my name as the `<h1>`, the
   tagline ("A tech specialist with too many hobbies."), the small
   italic aside right under it, and the bio paragraph. All plain text,
   edit directly.
2. **The four-card grid.** Each card is one `<a class="card">` block with
   a heading, one line of description, and a "go" link like
   "View work →". Current order: Work, Furniture, Tech Projects, Chess —
   I changed this on purpose to lead with Work, and the nav (see §3,
   Layout section) matches it. If I reorder the cards, I should reorder
   the nav to match, or they'll disagree.
3. **The "About this site" strip.** Links to `/about`. Its text is short
   — edit in place same as anywhere else.

Below the closing `</Layout>` tag, there's a `<style>` block scoped to
just this page (grid spacing, the about-strip's look). I only need to
touch that for a layout/visual change, not a copy change.

Note: `index.html` at the repo root is my original approved mockup, kept
as a reference copy of the homepage design. It's not actually served by
the site — only `src/pages/index.astro` is live — but I've been keeping
the two in sync when I change homepage copy, mostly out of habit. Not
required, just tidy.

### Furniture — `src/pages/furniture/index.astro`

Top of the file: `MARKETPLACE_URL` is the one constant here, pointing at
my Facebook Marketplace profile.

The page itself is two sections:

1. **"Projects & Reviews."** Pulled automatically from every Markdown
   post in `src/content/furniture/` — I don't edit this section directly,
   I add/edit post files instead (§4).
2. **"What clients say."** The testimonial carousel, pulled from
   `furnitureTestimonials` in `testimonials.ts` (§5), followed by two
   small notes: the anonymization disclaimer, and the Marketplace link.
   Both are plain `<p class="form-note">` — edit the text or the link
   target right there.

The page header above both sections (span + h1 + intro paragraph) is
plain text, same as Home.

### Tech Projects — `src/pages/tech-projects/index.astro`

No constants — everything here is either page-header text or pulled
from content collections. Two sections:

1. **"Projects"** — from `src/content/tech-projects/`.
2. **"Reviews"** — from `src/content/tech-reviews/` (headphone/IEM
   reviews specifically; these are a separate collection from Projects,
   see §4).

Both list sections auto-populate — same deal as Furniture, I add posts
rather than editing this file for new content.

### Chess — `src/pages/chess.astro`

Top of the file, two constants:
- `LICHESS_URL` — my Lichess profile link.
- `RATES_ARE_PUBLIC` — set to `false` right now (rates shown as
  "available on request"). Flip to `true` and edit the paragraph right
  below it ("Rate details go here once published.") if I ever want to
  publish actual numbers.

Sections top to bottom:

1. **Page header** — the bio paragraph ("Playing chess since 2017,
   coaching since 2021...") with two hardcoded links (Chess Wizards,
   Togetherhood) baked right into the sentence. To change either link or
   the wording, edit the `<p>` directly — the `<a href="...">` tags are
   inline in the text.
2. **"How lessons work"** — three `info-card` blocks (numbered steps),
   then the "Book a lesson" button right after them, linking to
   `/contact?intent=chess`. I moved this button up here on purpose so
   it's not buried at the page bottom.
3. **"Lichess"** — one link, `{LICHESS_URL}`.
4. **"Rates"** — controlled by `RATES_ARE_PUBLIC` (see above).
5. **"Reviews"** — testimonial carousel from `chessTestimonials`, plus
   the same anonymization note as Furniture.

### Work — `src/pages/work.astro`

Top of the file, three constants: `GITHUB_URL`, `LINKEDIN_URL`,
`RESUME_URL` (points at `/resume.pdf` — see §6 for adding the actual
file).

Sections:

1. **Page header** — "Anonymized where they're tied to a prior
   employer."
2. **"Case studies"** — auto-populated from `src/content/work/`, same
   pattern as Furniture/Tech Projects. Each case study's `skills` list
   (if it has one) renders as a small mono line above the write-up.
3. **"Projects"** — currently just one entry, "This website," which
   links to `/about`. If I ever want a second project here, copy the
   `<PostCard ... />` block and change its `href`/`title`/`summary`.
4. **"Skills"** — right now this literally says "Lorem ipsum or
   something." on purpose, as a placeholder — I have not written a real
   skills list yet. Replace that one line whenever I have one.
5. **"Links"** — three cards (Resume, GitHub, LinkedIn), each using one
   of the constants from the top of the file.

### About this site — `src/pages/about.astro`

Not in the main nav — only reachable from the homepage's "About this
site" strip and the Work page's "This website" card. Two parts:

1. **The prose blurb** (left column on desktop) — four paragraphs about
   how the site's built, with links inline in the sentences.
2. **The "Built with" list** (right column on desktop, stacks below on
   mobile) — a plain `<ul>` of links. Add a new tool by copying a
   `<li><a href="...">Name</a></li>` line.

The `<style>` block below `</Layout>` controls the two-column layout —
only touch it for a layout change, not a copy change.

### Contact — `src/pages/contact.astro`

One constant: `FORMSPREE_ENDPOINT`. If I ever need a new Formspree form,
swap this value.

The intent dropdown's options are hardcoded `<option>` tags in the
`<select>`. Order matters for what shows by default, and the values have
to match the `intentMap` in the `<script>` block below the form — that
script reads a `?intent=` URL parameter (e.g. `?intent=chess`) and
pre-selects the matching option. The footer's "Get in touch" link sets
this automatically depending on which page it's clicked from (see the
Layout section below) — if I ever add a new intent option, I'd need to
update it in three places: the `<option>` list here, the `intentMap`
here, and `footerIntent` in `Layout.astro`.

### Layout (header, nav, footer) — `src/layouts/Layout.astro`

Shared by every page. Two things I might actually touch:

- **`navItems`** near the top — an array of `{ href, label }`. This is
  the main nav order (currently Work, Furniture, Tech Projects, Chess).
  Reordering this reorders the nav on every page.
- **`footerIntent`** — decides what `?intent=` value gets appended to
  the footer's "Get in touch" link based on the current page's URL. If I
  add a new section page, I'd add a matching line here.

Everything else in this file (site title fallback, fonts, favicon links,
the mobile menu's open/close script) I'm unlikely to need to touch for a
normal content update.

## 4. Adding a Markdown post

Each collection is a folder of `.md` files in `src/content/`. One file
= one post. I copy an existing file in the right folder, rename it, and
edit the front-matter (the `---`-fenced block up top) and the body below
it.

| Collection | Folder | Shows up on |
|---|---|---|
| Furniture projects/reviews | `src/content/furniture/` | `/furniture` |
| Tech Projects builds/refurbs | `src/content/tech-projects/` | `/tech-projects` |
| Headphone/IEM reviews | `src/content/tech-reviews/` | `/tech-projects` (Reviews section) |
| Work case studies | `src/content/work/` | `/work` |

**Furniture / Tech Projects front-matter:**
```yaml
---
title: "Post title"
date: 2026-01-15
category: "Refurbishment"
summary: "One sentence shown on the list card."
draft: false
---
Body text in plain Markdown below the second `---`.
```

**Tech Reviews front-matter** (same shape, but `product` instead of `category`):
```yaml
---
title: "Review title"
date: 2026-01-15
product: "Product name"
summary: "One sentence shown on the list card."
draft: false
---
```

**Work front-matter** (`skills` is optional):
```yaml
---
title: "Case study title"
date: 2026-01-15
summary: "One-sentence problem statement."
skills: ["Python", "SQL", "Automation"]
draft: false
---
Problem → what I built → result. Anonymized — no company names.
```

A few things worth knowing:
- `draft: true` hides a post from the live site (still visible under
  `npm run dev`) — good for staging something before it's ready to
  publish. Omit `draft`, or set it to `false`, to actually publish.
- Posts sort newest-first by `date` automatically — I don't control
  order manually.
- Standard Markdown works in the body: `##`/`###` headings (not `#` —
  the post title already renders as the page's one `<h1>`), `**bold**`,
  `*italic*`, `- ` bullet lists, `[text](url)` links.
- If I paste something in from elsewhere (a Reddit post, a doc) and it
  has a `#` header, drop it down to `##` for the reason above.

## 5. Adding/editing reviews (testimonials)

Short quotes — not full posts — live in `src/data/testimonials.ts`, as
two arrays: `furnitureTestimonials` and `chessTestimonials`. New one, by
copying an existing entry:

```ts
{
	quote: "The quote text.",
	source: "Attribution label",
},
```

`source` is just a display label — "Marketplace buyer," "Chess student,"
or something more specific if I have a real name/title I'm fine using
(I've done that once already, "Mastery Schools Associate"). These render
in a horizontal scrolling carousel (`TestimonialList.astro`) with
prev/next arrows — I don't need to touch that component for a normal
quote edit, just the array.

## 6. Adding images

1. Save the image into `public/images/<collection>/` — e.g.
   `public/images/furniture/dresser-before.jpg`. Any normal web format
   (jpg, png, webp) works.
2. Reference it in the post's front-matter:
   ```yaml
   images:
     - src: "/images/furniture/dresser-before.jpg"
       alt: "Short description for screen readers"
     - src: "/images/furniture/dresser-after.jpg"
       alt: "Short description for screen readers"
   ```
3. Only Furniture and Tech Projects posts support `images` (Tech Reviews
   and Work don't have an images field). The first image becomes the
   list-card thumbnail; all of them show on the post's own page.

Résumé PDF: save it as `public/resume.pdf` exactly — the Work page's
download button already points there, nothing else to wire up.
