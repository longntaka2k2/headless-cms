import StoryCard from "./StoryCard";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { GetCaseStudie } from "@/services/strapi";
import { useRouter } from "next/router";
import { RelativeImagePath } from "@/utils/utils";

interface PropsBoxStory {
  list?: [],
}

export default function BoxStory(props: PropsBoxStory) {

  return (
    <div className="tw-grid lg:tw-grid-cols-3 tw-gap-6">
      {props?.list?.map((item: any, index: number) => {
        return (
          <StoryCard
            key={index}
            image={RelativeImagePath(item?.attributes?.image?.data?.attributes?.url)}
            width={item?.attributes?.image?.data?.attributes?.width}
            height={item?.attributes?.image?.data?.attributes?.height}
            logoBrand={RelativeImagePath(item?.attributes?.logoBrand?.data?.attributes?.url)}
            title={item?.attributes?.title}
            content={item?.attributes?.content}
            slug={item?.attributes?.slug}
            description={item?.description}
          />
        );
      })}
    </div>
  );
}
