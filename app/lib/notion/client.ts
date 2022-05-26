import { Client } from '@notionhq/client';

export const { blocks, databases } = new Client({
  auth: process.env.NOTION_KEY,
});
