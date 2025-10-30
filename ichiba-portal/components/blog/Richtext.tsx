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

const RichText = ({ content, tags, author }: any) => {
  const [processedContent, setProcessedContent] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [headings, setHeadings] = useState<
    { id: string; title: string; level: number }[]
  >([]);

  const currentUrl =
    content.locale == "vi"
      ? `https://ichiba.vn${content.resolvedUrl}`
      : `https://ichiba.net${content.resolvedUrl}`;
  // const currentUrl = "https://ichiba.vn${content.resolvedUrl}";

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
        <div className="lg:tw-grid lg:tw-grid-cols-12 lg:tw-gap-5 lg:tw-relative lg:tw-col-span-3">
          <div className="lg:tw-col-span-3">
            <div className="lg:tw-sticky tw-top-[100px] tw-flex tw-flex-col lg:tw-block">
              <TableOfContents
                className="tw-my-2 lg:tw-mt-0"
                lang={content.locale}
              />
              <Share url={currentUrl} />
            </div>
          </div>
          <div className="lg:tw-col-span-9">
            <div dangerouslySetInnerHTML={{ __html: processedContent }} />

            {author && (
              <>
                {author?.data?.attributes?.avatar?.data?.attributes?.url && (
                  <div className="tw-h-[1px] tw-w-full tw-bg-black tw-mt-2"></div>
                )}
                <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-4 tw-pt-5 lg:tw-items-start">
                  {author?.data?.attributes?.avatar?.data?.attributes?.url && (
                    <div
                      className="tw-max-w-[70px] tw-max-h-[70px] tw-mx-auto tw-w-full tw-h-full 
                    tw-rounded-full tw-overflow-hidden tw-bg-[#cccc]
                    tw-border-[2px] tw-border-black"
                    >
                      <Image
                        src={
                          author?.data?.attributes?.avatar?.data?.attributes
                            ?.url
                            ? `https://cms-strapi.ichiba.net${author?.data?.attributes?.avatar?.data?.attributes?.url}`
                            : ""
                        }
                        alt="avatar"
                        width={70}
                        height={70}
                        className="tw-w-full tw-h-full"
                      />
                    </div>
                  )}
                  {author?.data?.attributes?.author_name && (
                    <div className="tw-grid">
                      <span className="tw-text-base tw-font-bold tw-pb-1">
                        {author?.data?.attributes?.author_name}
                      </span>
                      <span className="tw-text-sm">
                        {author?.data?.attributes?.description}
                      </span>
                    </div>
                  )}
                </div>

                <div className="tw-flex tw-justify-end tw-gap-2 tw-mt-1">
                  {author?.data?.attributes?.link_facebook && (
                    <Link
                      href={
                        author?.data?.attributes?.link_facebook
                          ? author?.data?.attributes?.link_facebook
                          : "#"
                      }
                    >
                      <Image
                        alt="fb"
                        src={facebook}
                        className="tw-w-10 tw-h-10"
                      />
                    </Link>
                  )}
                  {author?.data?.attributes?.link_linkedin && (
                    <Link
                      href={
                        author?.data?.attributes?.link_linkedin
                          ? author?.data?.attributes?.link_linkedin
                          : "#"
                      }
                    >
                      <Image
                        alt="lindekin"
                        src={linkedin}
                        className="tw-w-10 tw-h-10"
                      />
                    </Link>
                  )}
                  {author?.data?.attributes?.link_twitter && (
                    <Link
                      href={
                        author?.data?.attributes?.link_twitter
                          ? author?.data?.attributes?.link_twitter
                          : "#"
                      }
                    >
                      <Image
                        alt="lindekin"
                        src={twitter}
                        className="tw-w-10 tw-h-10"
                      />
                    </Link>
                  )}
                </div>
              </>
            )}

            <div
              className={clsx(
                "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/background_mobile_93573a9964.png')] tw-bg-cover tw-bg-no-repeat",
                "lg:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/background_d422d4b297.png')]",
                "tw-text-center tw-pt-16 tw-pb-15 lg:tw-pt-16 lg:tw-pb-14 tw-px-6 lg:tw-px-10 tw-text-white tw-mt-6",
              )}
            >
              <div className="tw-uppercase !tw-text-xl lg:tw-text-4xl !tw-mb-2 tw-font-semibold text-shadow-title">
                Unlock high-end technology to master dropship now!
              </div>
              <p className="tw-text-xs tw-mb-2 tw-tracking-wider text-shadow-subTitle tw-leading-5">
                Surpass dropship opponents with IChiba Commerce Layer
              </p>
              <Link
                target="_blank"
                href={"/contact-sales"}
                className="tw-bg-[rgb(253,120,38)] tw-py-3 tw-px-8 !tw-text-white tw-rounded tw-no-underline tw-text-sm lg:tw-text-base tw-font-semibold"
              >
                Contact us
              </Link>
            </div>

            <div className="tw-mt-5">
              <div
                className={clsx(
                  "tw-text-base tw-font-bold tw-mb-1",
                  tags?.length > 0 ? "tw-block" : "tw-hidden",
                )}
              >
                Tags:
              </div>
              <div className="tw-flex tw-gap-1 lg:tw-gap-3 tw-mb-5">
                {tags?.map((item: any, idx: number) => (
                  <Link
                    key={idx}
                    href={`/blog/tags/${item.attributes.value}`}
                    className={clsx(
                      "tw-bg-gray-200 tw-py-1 tw-px-2 tw-rounded-2xl tw-text-sm lg:tw-text-base tw-font-medium",
                      "tw-w-max tw-no-underline tw-text-ic-ink-6 hover:tw-opacity-80",
                    )}
                  >
                    {item.attributes.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
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

export default RichText;
