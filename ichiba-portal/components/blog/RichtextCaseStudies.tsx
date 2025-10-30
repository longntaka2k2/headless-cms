/* eslint-disable @next/next/link-passhref */
// components/RichText.tsx
import bgOurData from "@/public/images/404.jpg";
import { RelativeImagePath } from "@/utils/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import TableOfContents from "./TableOfContents";
import Link from "next/link";
import Share from "./Share";
import clsx from "clsx";
import facebook from "@/public/icons/facebook.png";
import linkedin from "@/public/icons/Linkedin.png";
import twitter from "@/public/icons/Twitter.png";

const RichTextCaseStudies = ({ content, tags, author }: any) => {
  const [processedContent, setProcessedContent] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [headings, setHeadings] = useState<
    { id: string; title: string; level: number }[]
  >([]);

  useEffect(() => {
    if (content) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, "text/html");

      // Xử lý các thẻ img
      const imgElements = doc.querySelectorAll("img");
      imgElements.forEach((imgElement) => {
        const src = imgElement.getAttribute("src");
        if (src) {
          const absoluteSrc = RelativeImagePath(src);
          imgElement.setAttribute("src", absoluteSrc);
          imgElement.setAttribute("srcset", absoluteSrc);
        }
      });

      // Lấy các tiêu đề h2
      const headingElements = doc.querySelectorAll("h2");
      const headingList = Array.from(headingElements).map((heading) => {
        const rawId =
          heading.id || heading.textContent?.replace(/\s+/g, "-").toLowerCase();
        const id =
          rawId ?? `heading-${Math.random().toString(36).substr(2, 9)}`;
        heading.setAttribute("id", id);
        return {
          id,
          title: heading.textContent || "",
          level: parseInt(heading.tagName.replace("H", "")),
        };
      });

      setHeadings(headingList);
      setProcessedContent(doc.documentElement.innerHTML);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [content]);

  return (
    <div>
      {processedContent ? (
        <div>
          <div dangerouslySetInnerHTML={{ __html: processedContent }} />
        </div>
      ) : (
        !isLoading && (
          <Image
            src={bgOurData}
            alt="Janbox"
            className="mx-auto d-block"
            width={500}
            height={500}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        )
      )}
    </div>
  );
};

export default RichTextCaseStudies;
