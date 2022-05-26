import type { RichTextItemResponse } from './types';

export function transformRichText(item: Array<RichTextItemResponse>) {
  return item.map((e) => e.plain_text).join(' ');
}
