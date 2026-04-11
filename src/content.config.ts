import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['draft', 'published']).default('draft'),
    created_at: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    source_repo: z.string().optional(),
    source_file: z.string().optional(),
    source_url: z.string().url().optional(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string().optional(),
    })).optional(),
  }),
});

export const collections = { recipes };
