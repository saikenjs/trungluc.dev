import { blocks } from './client';

export const getBlogById = async (id: string) => {
  const { results } = await blocks.children.list({ block_id: id });

  return results;
};
