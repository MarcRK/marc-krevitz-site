# marckrevitz.com

Source for my personal site: furniture refurbishment, tech projects, chess coaching, and professional work.

## Stack

Astro, static output, no client-side framework. Content collections for posts (`src/content/`), one Markdown file per post. Plain hand-written CSS, no design framework.

## Running locally

```
npm install
npm run dev
```

Runs at `localhost:4321`. Draft posts (front-matter `draft: true`) only show up here, not in production builds.

```
npm run build
```

Builds to `./dist/`.

## Deploy

Cloudflare Workers static assets, configured in `wrangler.jsonc`. Every push to `main` auto-deploys, no manual step.

## Updating content

See `MAINTENANCE.md` for how to edit text, add posts, and add images without touching code.
