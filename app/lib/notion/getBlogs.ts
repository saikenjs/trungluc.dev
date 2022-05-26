import { databases } from './client';
import type { Blog } from '~/shared/types';
import { transformRichText } from './transform';

export const getBlogs = async () => {
  const { results } = await databases.query({
    database_id: process.env.NOTION_DATABASE_ID || '',
    page_size: 10,
  });

  const blogs = results.reduce<Blog[]>((res, cur) => {
    if (!('properties' in cur)) return res;

    const { properties: p } = cur;

    res.push({
      id: cur.id,
      title: 'title' in p.title ? transformRichText(p.title.title) : '',
      description:
        'rich_text' in p.description
          ? transformRichText(p.description.rich_text)
          : '',
      tags:
        'multi_select' in p.tags
          ? p.tags.multi_select.map((e) => ({
              text: e.name,
              color: e.color.toString(),
            }))
          : [],
      thumbnail:
        'files' in p.thumbnail &&
        p.thumbnail.files.length &&
        'file' in p.thumbnail.files[0]
          ? p.thumbnail.files[0].file.url
          : undefined,
      created_at: cur.created_time,
      updated_at: cur.last_edited_time,
      isPublished: 'checkbox' in p.isPublished && p.isPublished.checkbox,
      slug:
        'rich_text' in p.slug
          ? p.slug.rich_text.map((e) => e.plain_text).join(' ')
          : '#',
    });

    return res;
  }, []);

  return blogs;
};
