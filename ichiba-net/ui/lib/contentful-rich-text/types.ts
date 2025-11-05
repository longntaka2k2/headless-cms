import { Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document, TopLevelBlockEnum } from '@contentful/rich-text-types';

export type ContentfulRichTextDocument = Document;

export type ContentfulRichTextNodeType = TopLevelBlockEnum;

export type ContentfulRichTextProps = {
  options?: Options;
  document: ContentfulRichTextDocument;
  classes?: Partial<Record<BLOCKS, string>>;
};
