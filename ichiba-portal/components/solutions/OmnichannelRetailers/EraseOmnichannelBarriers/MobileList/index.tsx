import { LocaleNamespace } from "@/const/locale";
import React from "react";
import { useTranslation } from "next-i18next";
import ListItem from "./ListItem";

const MobileList = () => {
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

  return (
    <div className="tw-flex tw-flex-col lg:tw-hidden">
      {items.map((item, index) => (
        <ListItem
          defaultExpanded={index === 0}
          index={index}
          item={{ ...item, image: images[index] }}
          key={index}
        />
      ))}
    </div>
  );
};

export default MobileList;
