import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    route: z.string(),
    primaryKeyword: z.string(),
    relatedKeywords: z.array(z.string()).default([]),
    pageType: z.string(),
    sourceLevel: z.enum(["official", "mixed", "community"]).default("mixed"),
    lastVerified: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = {
  pages
};
