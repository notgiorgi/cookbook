import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['draft', 'published']).default('draft'),
    tags: z.array(z.string()).default([]),
    source_repo: z.string().optional(),
    source_file: z.string().optional(),
    source_url: z.string().url().optional(),
  }),
});

export const collections = { recipes };
