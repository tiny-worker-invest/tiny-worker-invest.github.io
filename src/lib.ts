import { getCollection } from 'astro:content';
import { SITE } from './site.config';

export async function getPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const href = (path: string) => (SITE.base.replace(/\/$/, '') + '/' + path.replace(/^\//, '')) || '/';

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
