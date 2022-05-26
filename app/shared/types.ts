export interface Blog {
  id: string;
  title: string;
  description: string;
  content?: any;
  created_at: Date | string;
  updated_at: Date | string;
  thumbnail?: string;
  isPublished: boolean;
  tags: Array<{ text: string; color: string } | string>;
  slug: string;
}
