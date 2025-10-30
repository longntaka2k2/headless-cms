"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Head from "next/head";
import { getCaseStudiesByTag } from "@/public/api/strapiService";
import BoxStory from "@/components/CaseStudie/BoxStory";

const TagDetail = ({
  params,
}: {
  params: {
    lang: string;
    tagId: string; // Changed from slug to tagId to match the folder structure
  };
}) => {
  const [listStories, setListStories] = useState([] as any);
  useEffect(() => {
    const fetchBlogDetail = async () => {
      const data = await getCaseStudiesByTag(
        params.lang as string,
        1,
        9,
        [params?.tagId] // Pass as array since tags is a list
      );
      setListStories(data);
    };

    fetchBlogDetail();
  }, [params.tagId, params.lang]);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex"></meta>
      </Head>

      <div className="container pt-20 lg:pt-28">
        <h1 className="text-2xl lg:text-4xl lg:leading-[58px] mb-6 font-bold gradient-text text-center">
          {params.tagId.charAt(0).toUpperCase() + params.tagId.slice(1)}
        </h1>
        <BoxStory list={listStories} />
      </div>
    </>
  );
};

export default TagDetail;
