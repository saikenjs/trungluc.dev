import type { LoaderFunction } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { getBlogs } from '~/lib/notion';
import type { Blog } from '~/shared/types';

export const loader: LoaderFunction = async () => {
  return await getBlogs();
};

export default function BlogPage() {
  const blogs = useLoaderData<Blog[]>();

  return (
    <>
      <h1>Saiken Space</h1>
      <ul>
        {blogs.map((e) => (
          <li key={e.id}>
            <Link className='text-blue-400' to={`/blog/${e.slug}`}>
              {e.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
