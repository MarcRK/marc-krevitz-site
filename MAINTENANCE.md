# Maintaining marckrevitz.com

Practical reference for editing text, adding posts/reviews, and adding
images without AI help. Everything here assumes you're working in this
project folder with a terminal open.

## 1. Publishing changes (do this after every edit)

Editing a file alone does nothing live — you have to commit and push.
Cloudflare auto-deploys within ~1-2 minutes of every push to `main`.

```
git add -A
git commit -m "short description of what changed"
git push
```

To preview locally before publishing: `npm run dev`, then open
`http://localhost:4321`. Draft posts (see §3) only show up here, never
on the live site.

## 2. Editing existing text

Every page is a `.astro` file. Text sits directly in the markup — find
the sentence with your editor's search and change it in place.

| Page | File |
|---|---|
| Home | `src/pages/index.astro` |
| Furniture | `src/pages/furniture/index.astro` |
| Tech Projects | `src/pages/tech-projects/index.astro` |
| Chess | `src/pages/chess.astro` |
| Work | `src/pages/work.astro` |
| About this site | `src/pages/about.astro` |
| Contact | `src/pages/contact.astro` |
| Header/footer/nav (all pages) | `src/layouts/Layout.astro` |
| Client/student review quotes | `src/data/testimonials.ts` |

Some pages have constants near the top of the file for things like URLs
— e.g. `LICHESS_URL` in `chess.astro`, `GITHUB_URL`/`LINKEDIN_URL`/
`RESUME_URL` in `work.astro`, `FORMSPREE_ENDPOINT` in `contact.astro`.
Change the string value, leave the rest of the line alone.

## 3. Adding a Markdown post

Each collection is a folder of `.md` files in `src/content/`. One file =
one post. Copy an existing file in the right folder, rename it, and edit
the front-matter (the `---`-fenced block at the top) and body below it.

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

**Tech Reviews front-matter** (same as above, but `product` instead of `category`):
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

Notes:
- `draft: true` hides a post from the live site (still visible in
  `npm run dev`) — useful for staging something before it's ready.
  Omit `draft` entirely, or set it to `false`, to publish.
- Posts sort newest-first by `date` automatically.
- Standard Markdown works in the body: `##` headings, `**bold**`,
  `*italic*`, `- ` bullet lists, `[text](url)` links.

## 4. Adding/editing reviews (testimonials)

Short quotes (not full posts) live in `src/data/testimonials.ts` as two
arrays: `furnitureTestimonials` and `chessTestimonials`. Add a new one by
copying an existing entry:

```ts
{
	quote: "The quote text.",
	source: "Attribution label",
},
```

`source` is just a display label (e.g. "Marketplace buyer", "Chess
student", or a real name/title if you have permission to use one).

## 5. Adding images

1. Save the image file into `public/images/<collection>/` — e.g.
   `public/images/furniture/dresser-before.jpg`. Any normal web image
   format (jpg, png, webp) works.
2. Reference it in the post's front-matter:
   ```yaml
   images:
     - src: "/images/furniture/dresser-before.jpg"
       alt: "Short description for screen readers"
     - src: "/images/furniture/dresser-after.jpg"
       alt: "Short description for screen readers"
   ```
3. Only Furniture and Tech Projects posts support `images` — the first
   one becomes the list-card thumbnail; all of them show on the post page.

For a résumé PDF: save it as `public/resume.pdf` — the Work page's
download link already points there.
