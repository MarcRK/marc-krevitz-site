---
title: "Example post, replace with a real refurbishment"
date: 2026-01-01
category: "Example"
summary: "This is a placeholder post showing the Markdown format for a furniture project log entry. Swap it out for your first real post."
draft: true
---

This is an example post, not a real project. It's here so I can see how a furniture post is structured before writing the first real one.

## How to add a real post

1. Copy this file into `src/content/furniture/` and rename it, e.g. `walnut-dresser-refurb.md`.
2. Fill in the front-matter at the top. `title` is the post title. `date` is the publish date (`YYYY-MM-DD`). `category` is something like "Refurbishment" or "Restoration". `summary` is one or two sentences shown in the project list card. `draft` should be `false` (or removed) once it's ready to publish.
3. Add an `images` list to the front-matter once there are real photos saved in `public/images/furniture/`:

   ```yaml
   images:
     - src: "/images/furniture/dresser-before.jpg"
       alt: "Dresser before refurbishment, with peeling veneer"
     - src: "/images/furniture/dresser-after.jpg"
       alt: "Dresser after refinishing, natural walnut finish"
   ```

4. Write the post body below the front-matter in plain Markdown: what was done, and an honest take on the result.

This placeholder is marked as a draft, so it won't show up in the live project list once the site is deployed. It only shows locally under `npm run dev`.
