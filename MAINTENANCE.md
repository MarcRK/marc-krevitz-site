# Maintaining marckrevitz.com

I built this site with Astro and Claude Code, but I won't always have AI help around, so these are my own notes for keeping it updated later: editing text, adding posts, adding images. Assumes I've got the project folder open in an editor and a terminal in the same folder.

## 1. Publishing changes

Editing a file locally doesn't put anything online. GitHub holds the code, and Cloudflare watches the repo and rebuilds the site automatically within a minute or two of every push to `main`.

```
git add -A
git commit -m "short description of what changed"
git push
```

To check a change before it's public, run `npm run dev` and look at `http://localhost:4321`. Draft posts (see section 3) only show up there, never on the real site.

## 2. How the site is put together

Every page is a `.astro` file under `src/pages/`. Whatever I typed directly, taglines, headings, section text, sits right in the markup, so I just search for the sentence and edit it. Some pages also keep short constants near the top of the file, between the `---` fences, for things like URLs, so I don't have to dig through markup to change a link.

The header, nav, and footer are shared across every page and live in one file, `src/layouts/Layout.astro`. Change something there and it changes everywhere.

Reviews are short quotes and live separately from full posts, in `src/data/testimonials.ts`. Full posts, refurb logs, product reviews, case studies, are Markdown files under `src/content/`, one file per post. Sections 3 and 4 below cover both.

## 3. Page by page

### Home

`src/pages/index.astro`. Three pieces: the hero text, the four-card grid, and the "About this site" strip underneath.

The hero has the mono label (in the file it's "Workshop · Workspace · Blog," mixed case, even though CSS shows it in all caps on the page, so search for the mixed-case version), my name as the h1, the tagline, a small italic aside under that, and the bio paragraph. All plain text.

The grid is four `<a class="card">` blocks, each with a heading, one line of description, and a "go" link like "View work →". They're ordered Work, Furniture, Tech Projects, Chess right now. I put Work first on purpose, and the nav order in Layout.astro matches it. If I reorder the cards I should reorder the nav too, or they won't agree.

The about strip just links to `/about`. Short text, edit it same as anywhere else. Below the closing Layout tag there's a small style block for this page's own spacing, only worth touching for a layout change, not a copy change.

`index.html` at the repo root is the original mockup I approved before the real build, worth remembering it exists. It isn't served, only `src/pages/index.astro` is live, but I've kept the two in sync out of habit whenever homepage copy changes. Not required, just tidy.

### Furniture

`src/pages/furniture/index.astro`. One constant at the top, `MARKETPLACE_URL`, pointing at my Facebook Marketplace profile.

Two sections: "Projects & Reviews," which pulls automatically from every Markdown post in `src/content/furniture/` (I don't edit this section directly, I add post files instead, see section 4), and "What clients say," the testimonial carousel pulled from `furnitureTestimonials` in `testimonials.ts`, followed by two small notes in plain `<p class="form-note">` tags: the anonymization line and the Marketplace link. Edit either right there.

The intro text above both sections is plain, same deal as Home.

### Tech Projects

`src/pages/tech-projects/index.astro`. No constants here. Two sections, both auto-populated: "Projects" from `src/content/tech-projects/`, and "Reviews" from `src/content/tech-reviews/`, which is headphone and IEM reviews specifically, a separate collection from Projects (more on that in section 4). Same as Furniture, I add posts rather than editing this file for new content.

### Chess

`src/pages/chess.astro`. Two constants up top: `LICHESS_URL`, my Lichess link, and `RATES_ARE_PUBLIC`, currently `false` so rates show as "available on request." Want to publish real numbers someday? Flip it to `true` and edit the paragraph right below it that currently says "Rate details go here once published."

The page runs: the bio paragraph up top ("Playing chess since 2017, coaching since 2021...") with the Chess Wizards and Togetherhood links written straight into the sentence, so change the wording or the links by editing that paragraph directly. Then "How lessons work," three info-card blocks for the numbered steps, followed by the "Book a lesson" button linking to `/contact?intent=chess`. I moved that button up here on purpose instead of leaving it at the bottom of the page. Then "Lichess," one link. Then "Rates," controlled by the constant above. Then "Reviews," the testimonial carousel plus the same anonymization note as Furniture.

### Work

`src/pages/work.astro`. Three constants: `GITHUB_URL`, `LINKEDIN_URL`, and `RESUME_URL`, which points at `/resume.pdf` (section 6 covers actually adding that file).

Page header just says "Anonymized where they're tied to a prior employer." Below that, "Case studies" pulls from `src/content/work/` the same way Furniture and Tech Projects pull their posts, and each case study's skills list, if it has one, shows as a small mono line above the write-up. "Projects" currently has one entry, "This website," linking to `/about`; add a second by copying that PostCard block and changing its href, title, and summary. "Skills" right now literally says "Lorem ipsum or something." on purpose, a placeholder until I write a real list. "Links" is three cards, Resume, GitHub, LinkedIn, each pulling one of the constants from the top of the file.

### About this site

`src/pages/about.astro`. Isn't in the main nav, only reachable from the homepage strip and the Work page's "This website" card.

Two parts: the prose blurb on the left with links written into the sentences, and a "Built with" list on the right, a plain unordered list of links, add a new one by copying an existing `<li><a href="...">Name</a></li>` line. There's a style block below Layout controlling the two-column layout, only needed for a layout change.

### Contact

`src/pages/contact.astro`. One constant, `FORMSPREE_ENDPOINT`, swap it if I ever set up a new form.

The intent dropdown's options are hardcoded in the select element, and their order is what shows by default. The values have to match the `intentMap` object in the script block below the form, which reads a `?intent=` URL parameter and pre-selects the matching option. The footer's "Get in touch" link sets that parameter automatically depending on which page it's clicked from. Adding a new intent option means updating three places together: the option list here, `intentMap` here, and `footerIntent` in `Layout.astro`.

### Layout (header, nav, footer)

`src/layouts/Layout.astro`, shared by every page. Two things worth touching: `navItems` near the top, an array of href/label pairs that sets the nav order (currently Work, Furniture, Tech Projects, Chess), and `footerIntent`, which decides what `?intent=` value the footer's "Get in touch" link carries based on the current page's URL. Add a new section page, add a matching line here.

Everything else in this file, fonts, favicon links, the mobile menu script, I'm unlikely to need for a normal content update.

## 4. Adding a Markdown post

Each collection is a folder of `.md` files under `src/content/`. One file is one post. Copy an existing file in the right folder, rename it, edit the front-matter between the `---` fences, and write the body below it.

| Collection | Folder | Shows up on |
|---|---|---|
| Furniture projects/reviews | `src/content/furniture/` | `/furniture` |
| Tech Projects builds/refurbs | `src/content/tech-projects/` | `/tech-projects` |
| Headphone/IEM reviews | `src/content/tech-reviews/` | `/tech-projects` (Reviews section) |
| Work case studies | `src/content/work/` | `/work` |

Furniture and Tech Projects front-matter:
```yaml
---
title: "Post title"
date: 2026-01-15
category: "Refurbishment"
summary: "One sentence shown on the list card."
draft: false
---
Body text in plain Markdown below the second ---.
```

Tech Reviews front-matter is the same shape, but `product` instead of `category`:
```yaml
---
title: "Review title"
date: 2026-01-15
product: "Product name"
summary: "One sentence shown on the list card."
draft: false
---
```

Work front-matter, `skills` is optional:
```yaml
---
title: "Case study title"
date: 2026-01-15
summary: "One-sentence problem statement."
skills: ["Python", "SQL", "Automation"]
draft: false
---
Problem, what I built, result. Anonymized, no company names.
```

Setting `draft: true` hides a post from the live site but still shows it under `npm run dev`, good for staging something before it's ready. Omit `draft`, or set it to `false`, to actually publish. Posts sort newest first by date automatically, I don't set order by hand. Standard Markdown works in the body: `##` or `###` headings (not a single `#`, since the post title already renders as the page's one h1), bold, italic, bullet lists, links. If I'm pasting something in from Reddit or a doc that used a single `#` for its headers, drop it down to `##`.

## 5. Adding or editing reviews

Short quotes, not full posts, live in `src/data/testimonials.ts` as two arrays, `furnitureTestimonials` and `chessTestimonials`. Add one by copying an existing entry:

```ts
{
	quote: "The quote text.",
	source: "Attribution label",
},
```

`source` is just a display label, "Marketplace buyer," "Chess student," or something more specific if I have a real name or title I'm fine using (already done that once, "Mastery Schools Associate"). These render in a horizontal scrolling carousel with prev/next arrows, no need to touch the component itself for a normal quote edit, just the array.

## 6. Adding images

Save the image into `public/images/<collection>/`, for example `public/images/furniture/dresser-before.jpg`. Any normal web format works. Then reference it in the post's front-matter:

```yaml
images:
  - src: "/images/furniture/dresser-before.jpg"
    alt: "Short description for screen readers"
  - src: "/images/furniture/dresser-after.jpg"
    alt: "Short description for screen readers"
```

Only Furniture and Tech Projects posts support images, Tech Reviews and Work don't have that field. The first image becomes the list-card thumbnail, all of them show on the post's own page.

For a résumé PDF, save it as `public/resume.pdf` exactly. The Work page's download button already points there.
