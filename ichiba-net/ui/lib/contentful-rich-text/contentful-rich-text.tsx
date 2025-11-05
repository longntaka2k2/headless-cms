import Image from "next/image";
import { Asset } from "contentful";
import clsx from "clsx";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { getContentfulRichTextInlineText } from "./helpers";
import { ContentfulRichTextProps } from "./types";
import { createSlug } from "@/utils/common";

const NODE_SPACING = "1rem";

export const ContentfulRichText = ({
  document,
  options,
  classes,
}: ContentfulRichTextProps) => {
  if (!document) return null;

  const renderNode = {
    [BLOCKS.HEADING_1]: (node: any, children: any) => {
      const title = getContentfulRichTextInlineText(node.content);
      return (
        <h1
          id={createSlug(title)}
          className={clsx("text-max-3xl font-medium mb-3", classes?.[BLOCKS.HEADING_1])}
        >
          {children}
        </h1>
      );
    },

    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const asset = node.data.target as Asset;
      const file = asset?.fields?.file as any;

      const fileUrl: string | undefined =
        typeof file?.url === "string"
          ? file.url.startsWith("http")
            ? file.url
            : `https:${file.url}`
          : undefined;

      const imageWidth =
        typeof file?.details?.image?.width === "number"
          ? file.details.image.width
          : undefined;
      const imageHeight =
        typeof file?.details?.image?.height === "number"
          ? file.details.image.height
          : undefined;

      // Nếu không có URL hoặc không phải hình ảnh -> bỏ qua
      if (!fileUrl || !file?.contentType?.startsWith("image/")) return null;

      return (
        <div className="my-4">
          <Image
            src={fileUrl}
            alt={"Content image"}
            width={imageWidth || 800}
            height={imageHeight || 450}
            className={clsx("rounded-2xl object-cover w-full h-auto", classes?.[BLOCKS.EMBEDDED_ASSET])}
          />
        </div>
      );
    },

    [BLOCKS.PARAGRAPH]: (_: any, children: any) => (
      <p className={clsx("mb-4 leading-relaxed", classes?.[BLOCKS.PARAGRAPH])}>{children}</p>
    ),

    [BLOCKS.UL_LIST]: (_: any, children: any) => (
      <ul className={clsx("list-disc ml-5 mb-4 space-y-1", classes?.[BLOCKS.UL_LIST])}>{children}</ul>
    ),

    [BLOCKS.LIST_ITEM]: (_: any, children: any) => <li>{children}</li>,

    [BLOCKS.HR]: () => <hr className="my-6" />,

    ...options?.renderNode,
  };

  const renderText = (text: string) =>
    text.split("\n").map((segment, i) =>
      i > 0 ? (
        <span key={i}>
          <br />
          {segment}
        </span>
      ) : (
        segment
      )
    );

  return (
    <div style={{ "--node-spacing": NODE_SPACING } as React.CSSProperties}>
      {documentToReactComponents(document, {
        ...options,
        renderNode,
        renderText,
      })}
    </div>
  );
};
