"use client";
import Contact from "@/components/CaseStudy/CaseStudie/Contact.";
import Discover from "@/components/CaseStudy/CaseStudie/Discover";
import RichText from "./richtext";
import { RelativeImagePathStrapi } from "@/utils/ultils";
import clsx from "clsx";
import { getDictionary } from "@/app/getDictionary";
import Image from "next/image";
import Link from "next/link";
import BoxStory from "@/components/CaseStudy/CaseStudie/BoxStory";
import { useEffect, useState } from "react";
import { getCaseStudies, getCaseStudyBySlug } from "@/public/api/strapiService";
import FromVietNam from "@/components/commons/FromVietNam";
import TableOfContent from "@/components/blog/TableOfContent";

const CaseId = ({
  params,
}: {
  params: {
    lang: string;
    slug: string;
  };
}) => {
  const [lang, setLang] = useState<any>(null);
  const [listStories, setListStories] = useState([] as any);
  const [blogDetail, setBlogDetail] = useState<any>(null);

  useEffect(() => {
    const fetchDictionary = async () => {
      const dictionary = await getDictionary(params.lang ? params.lang : "en");
      setLang(dictionary);
    };

    fetchDictionary();
  }, [params.lang]);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      const data = await getCaseStudyBySlug(params.slug, params.lang as string);
      setBlogDetail(data);
    };

    fetchBlogDetail();
  }, [params.slug, params.lang]);

  useEffect(() => {
    const getDataByTopic = async () => {
      const data = await getCaseStudies(
        params.lang as string,
        1,
        9,
        params.slug
      );
      setListStories(data);
    };

    getDataByTopic();
  }, [params.slug, params.lang]); 

  if (!blogDetail || !lang) {
    return null; 
  }

  return (
    <>
      <head>
        <title>{blogDetail?.Metatitle}</title>
        <meta name="description" content={blogDetail?.description} />
      </head>
      <div className="pt-6 lg:pt-15 overflow-hidden">
        <div
          className={clsx(
            "container flex gap-2 justify-center",
            "flex-wrap mb-6"
          )}
        >
          {blogDetail?.tags &&
            blogDetail?.tags?.data.map((value: any, index: number) => (
              <Link
                key={index}
                rel="canonical noindex"
                href={
                  "/customer-success-studies/tag/" + value?.attributes?.slug
                }
                className={clsx(
                  "bg-primary-3 no-underline text-white rounded-[50px]"
                )}
              >
                <p
                  className={clsx(
                    "line-clamp-1 w-max mb-0",
                    "text-xs lg:text-sm font-medium py-2 px-3"
                  )}
                >
                  #{value?.attributes?.slug}
                </p>
              </Link>
            ))}
        </div>
        <h1
          className={clsx(
            "container text-2xl leading-8 lg:text-5xl lg:leading-[56px]",
            "font-bold text-center mb-6 lg:mb-4"
          )}
        >
          {blogDetail?.title}
        </h1>
        <div className="container flex gap-4 mb-6 lg:mb-10 px-4">
          <div
            className={clsx(
              "max-w-[57px] max-h-[38px] lg:max-w-[83px] lg:max-h-[53px]",
              "w-full h-full rounded-lg overflow-hidden border border-[rgba(51, 51, 51, 0.08)]"
            )}
          >
            <Image
              src={RelativeImagePathStrapi(
                blogDetail?.logoBrand?.data?.attributes?.url
              )}
              alt="brand"
              width={83}
              height={53}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-sm lg:text-base text-ic-black-5">
            {blogDetail?.description}
          </p>
        </div>

        <div className="container mb-6 lg:mb-15 px-4 lg:flex lg:relative justify-between">
          <div className="lg:w-[27%] w-full relative flex lg:block">
            <div className="lg:sticky top-[100px]">
              <TableOfContent lang={params.lang} className="hidden lg:block" />
            </div>
          </div>
          <div className="lg:w-[70%] w-full">
            <div className="content-blog text-[#2c2f34] px-3 border-b border-[#999] pb-4 lg:border-0">
              <RichText content={blogDetail?.content as any} />
            </div>
          </div>
        </div>

        <div
          style={{
            background:
              "linear-gradient(271deg, rgba(212, 222, 248, 0.80) 3.4%, rgba(255, 231, 230, 0.69) 95.17%)",
          }}
          className="py-6 lg:py-15 px-4"
        >
          <div className="container">
            <p className="mb-6 text-2xl lg:text-5xl lg:text-center font-bold">
              {lang?.caseStudies?.relatedStories}
            </p>
            <BoxStory list={listStories} />
          </div>
        </div>
        <Contact lang={lang?.caseStudies} />
        <Discover lang={lang?.caseStudies} />
        <FromVietNam lang={lang} />
      </div>
    </>
  );
};

export default CaseId;
