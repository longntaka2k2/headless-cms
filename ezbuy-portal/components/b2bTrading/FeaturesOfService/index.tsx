import React, { useContext } from "react";
import { B2bTradingContext } from "../context";
import AspectRatio from "@/components/commons/AspectRatio";
import Image from "next/image";
import clsx from "clsx";

const FeaturesOfService = () => {
  const { lang } = useContext(B2bTradingContext);

  const features = lang.services?.b2bTrading?.features?.items || [];

  const images = [
    "https://strapi-ezbuy.ichiba.net/uploads/feature_1_7fdfe4ab1c.png",
    "https://strapi-ezbuy.ichiba.net/uploads/feature_2_fd81e1b2ff.png",
    "https://strapi-ezbuy.ichiba.net/uploads/feature_3_dbc76aefff.png",
    "https://strapi-ezbuy.ichiba.net/uploads/feature_4_99e762253d.png",
    "https://strapi-ezbuy.ichiba.net/uploads/feature_5_a319f776a0.png",
    "https://strapi-ezbuy.ichiba.net/uploads/feature_6_7fdf65e01b.png",
    "https://strapi-ezbuy.ichiba.net/uploads/feature_7_38beb84a9e.png",
  ];

  return (
    <div className="flex flex-col container">
      <h3 className="text-2xl font-black uppercase px-4 md:text-3xl lg:text-4xl">
        {lang.services?.b2bTrading?.features?.title}
      </h3>
      <p className="mt-6 px-4">
        {lang.services?.b2bTrading?.features?.subTitle}
      </p>
      <div className="flex flex-col gap-6 md:gap-16 md:mt-14">
        {features.map((item, index) => (
          <div
            key={index}
            className={clsx(
              "flex flex-col md:items-center md:gap-6 lg:gap-10 xl:gap-32",
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            <div className="py-6 px-4 flex flex-col gap-2 w-full md:w-1/2">
              <h5 className="font-bold text-base lg:text-2xl">{item.name}</h5>
              <span className="text-sm">{item.description}</span>
            </div>
            {!!images[index] && (
              <div className="w-full md:w-1/2">
                <AspectRatio x={375} y={200}>
                  <Image src={images[index]} fill alt="Ezbuy" />
                </AspectRatio>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesOfService;
