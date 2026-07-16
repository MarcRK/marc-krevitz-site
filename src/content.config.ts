import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Furniture project log — one Markdown file per refurbishment post.
const furniture = defineCollection({
	loader: glob({ base: "./src/content/furniture", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		category: z.string(),
		summary: z.string(),
		images: z
			.array(
				z.object({
					src: z.string(),
					alt: z.string(),
				}),
			)
			.optional(),
		draft: z.boolean().optional().default(false),
	}),
});

// Tech Projects ("The Bench") — refurbs and DIY audio builds.
const techProjects = defineCollection({
	loader: glob({ base: "./src/content/tech-projects", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		category: z.string(),
		summary: z.string(),
		images: z
			.array(
				z.object({
					src: z.string(),
					alt: z.string(),
				}),
			)
			.optional(),
		draft: z.boolean().optional().default(false),
	}),
});

// Headphone / IEM reviews — posts, distinct from the project log above.
const techReviews = defineCollection({
	loader: glob({ base: "./src/content/tech-reviews", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		product: z.string(),
		summary: z.string(),
		draft: z.boolean().optional().default(false),
	}),
});

// Work case studies — anonymized problem / what I built / result writeups.
const work = defineCollection({
	loader: glob({ base: "./src/content/work", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		summary: z.string(),
		skills: z.array(z.string()).optional(),
		draft: z.boolean().optional().default(false),
	}),
});

export const collections = { furniture, techProjects, techReviews, work };
