import rss from '@astrojs/rss';
import { SITE } from '../site.config';
import { getPosts } from '../lib';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: SITE.title,
    description: SITE.tagline,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `${SITE.base.replace(/\/$/, '')}/posts/${p.id}/`,
    })),
  });
}
