import React from "react";
import GroupItems from "./GroupItems";
import { useTranslation } from "next-i18next";
import { LocaleNamespace } from "@/const/locale";

const DesktopList = () => {
  const { t } = useTranslation(LocaleNamespace.OmnichannelRetailers);

  const images = [
    "https://cms-strapi.ichiba.net/uploads/section_1_e013e0de6d.webp",
    "https://cms-strapi.ichiba.net/uploads/section_2_8ca651513d.webp",
    "https://cms-strapi.ichiba.net/uploads/section_3_736fc08de1.webp",
    "https://cms-strapi.ichiba.net/uploads/section_4_8e87083428.webp",
    "https://cms-strapi.ichiba.net/uploads/section_5_5b802136b2.webp",
    "https://cms-strapi.ichiba.net/uploads/section_6_f99befbe7f.webp",
    "https://cms-strapi.ichiba.net/uploads/section_7_651e19f6bf.webp",
  ];

  const items = t(`eraseBarriers.items`, {
    returnObjects: true,
  }) as { title: string; contents: string[] }[];
  

  const groupItems1 = items.slice(0, 3);
  const groupImages1 = images.slice(0, 3);

  const groupItems2 = items.slice(3);
  const groupImages2 = images.slice(3);

  return (
    <div className="container tw-hidden lg:tw-block">
      <div className="tw-flex tw-flex-col tw-gap-14 xl:tw-gap-28 tw-mb-20">
        <GroupItems
          items={groupItems1.map((item, index) => ({
            ...item,
            image: groupImages1[index],
          }))}
        />
        <GroupItems
          className="tw-flex-row-reverse"
          items={groupItems2.map((item, index) => ({
            ...item,
            image: groupImages2[index],
          }))}
        />
      </div>
    </div>
  );
};

export default DesktopList;
