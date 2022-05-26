import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData, useParams } from '@remix-run/react';
import { getBlogs } from '~/lib/notion';
import { getBlogById } from '~/lib/notion/getBlogById';

export const loader: LoaderFunction = async ({ params }) => {
  const blogs = await getBlogs();
  const blogId = blogs.find((e) => e.slug === params?.slug)?.id;
  if (!blogId) return { blog: null };

  const blog = await getBlogById(blogId);
  return { blog };
};

export default function SingleBlog() {
  const { slug } = useParams();
  const { blog } = useLoaderData();

  console.log(blog);

  return <>{slug}</>;
}
