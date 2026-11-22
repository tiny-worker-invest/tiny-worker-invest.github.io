import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Accepts a bare ID or any YouTube URL (watch?v=, youtu.be/, shorts/, embed/)
const ytId = (v: string) =>
  v.match(/(?:v=|youtu\.be\/|shorts\/|embed\/|live\/)([\w-]{11})/)?.[1] ?? v.trim();

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),          // shown in Google results
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tickers: z.array(z.string()).default([]),   // e.g. ['NVDA', 'TSLA']
    tags: z.array(z.string()).default([]),
    strategy: z.array(z.enum(['dividend', 'growth'])).default([]), // which investing style the post belongs to
    keyword: z.string().optional(),            // main English search phrase you want to rank for (not shown)
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]), // shown at the end + FAQ rich result
    youtubeId: z.string().transform(ytId).optional(),        // main video, embedded at the top (ID or full URL)
    relatedVideos: z.array(z.string().transform(ytId)).default([]), // more videos, shown under the article
    originalUrl: z.string().url().optional(),   // link to the Korean Naver post / video
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
