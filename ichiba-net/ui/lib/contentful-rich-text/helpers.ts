import { BLOCKS, Block, Inline, Text } from '@contentful/rich-text-types';

import { ContentfulRichTextDocument } from './types';

import { createSlug } from '@/utils/common';

export type ContentfulRichTextTableOfContentsEntry = {
  title: string;
  id: string;
  headingLevel: number;
  children: ContentfulRichTextTableOfContentsEntry[];
};

export const getContentfulRichTextInlineText = (nodes: Array<Block | Inline | Text>) => {
  return nodes
    ?.map((node) => (node.nodeType === 'text' ? node.value : null))
    .filter(Boolean)
    .join(' ');
};

export const getContentfullRichTextTableOfContents = (document: ContentfulRichTextDocument) => {
  // Định nghĩa các loại heading từ 1 đến 6
  // Example: BLOCKS.HEADING_1 ~ <h1>, BLOCKS.HEADING_2 ~ <h2>, ...
  const headingBlocks = [
    BLOCKS.HEADING_1,
    BLOCKS.HEADING_2,
    BLOCKS.HEADING_3,
    BLOCKS.HEADING_4,
    BLOCKS.HEADING_5,
    BLOCKS.HEADING_6,
  ];

  // Tạo danh sách các heading dạng phẳng (flat)
  // Example: [ {title: 'A', level: 1, ...}, {title: 'B', level: 2, ...}, {title: 'C', level: 1, ...} ]
  const flatHeadings: ContentfulRichTextTableOfContentsEntry[] = [];
  document.content.forEach((item) => {
    // Kiểm tra node có phải là heading không
    // Example: item.nodeType === BLOCKS.HEADING_2
    const headingIndex = headingBlocks.indexOf(item.nodeType);

    if (headingIndex === -1) return; // Bỏ qua nếu không phải heading

    // Lấy text đầu tiên trong content của heading làm title
    // Example: item.content = [{ value: 'Giới thiệu' }] => title = 'Giới thiệu'
    const title = getContentfulRichTextInlineText(item.content);
    // Level là số thứ tự heading (1-6)
    // Example: BLOCKS.HEADING_2 => level = 2
    const headingLevel = headingIndex + 1;
    // Tạo id dạng slug từ title (dùng cho anchor link)
    // Example: 'Giới thiệu sản phẩm' => 'gioi-thieu-san-pham'

    // Thêm heading vào danh sách phẳng
    flatHeadings.push({ title, headingLevel, children: [], id: createSlug(title) });
  });

  // Hàm xây dựng cây mục lục lồng nhau từ danh sách phẳng
  // Example input: [ {title: 'A', level: 1}, {title: 'B', level: 2}, {title: 'C', level: 1} ]
  // Output: [ {title: 'A', level: 1, children: [{title: 'B', level: 2}]}, {title: 'C', level: 1} ]
  const buildTree = (headings: ContentfulRichTextTableOfContentsEntry[]) => {
    const root: ContentfulRichTextTableOfContentsEntry[] = [];
    const stack: ContentfulRichTextTableOfContentsEntry[] = [];

    headings.forEach((heading) => {
      // Nếu heading hiện tại có level nhỏ hơn hoặc bằng heading trên cùng stack,
      // pop stack cho đến khi tìm được heading cha phù hợp
      // Example: stack = [H1], heading.level = 1 => pop H1
      while (stack.length > 0 && heading.headingLevel <= stack[stack.length - 1].headingLevel) {
        stack.pop();
      }
      // Nếu stack rỗng, heading này là heading cấp cao nhất (root)
      // Example: heading.level = 1 => root.push(heading)
      if (stack.length === 0) {
        root.push(heading);
      } else {
        // Nếu còn stack, heading này là con của heading cha gần nhất
        // Example: stack = [H1], heading.level = 2 => H1.children.push(heading)
        stack[stack.length - 1].children.push(heading);
      }
      // Đẩy heading hiện tại vào stack để làm cha cho các heading tiếp theo nếu có
      // Example: stack.push(heading)
      stack.push(heading);
    });
    return root;
  };

  // Trả về cây mục lục lồng nhau
  // Example output: [ {title: 'A', level: 1, children: [...]}, ... ]
  return buildTree(flatHeadings);
};
