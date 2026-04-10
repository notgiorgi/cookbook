import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    status: z.enum(['draft', 'published']).default('draft'),
    tags: z.array(z.string()).default([]),
    source_repo: z.string().optional(),
    source_file: z.string().optional(),
    source_url: z.string().url().optional(),
  }),
});

export const collections = { recipes };
