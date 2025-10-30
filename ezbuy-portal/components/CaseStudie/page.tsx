"use client";
import imgBannerDES from "@/public/images/img-banner-des.svg";
import clsx from "clsx";
import Image from "next/image";
import CaseStudieSlider from "./Slider";
import Contact from "./Contact.";
import Discover from "./Discover";
import BoxStory from "./BoxStory";
import Select from "react-select";
import { useEffect, useState } from "react";
import { getCaseStudies } from "@/public/api/strapiService";

// Change the function signature to use props object
export default function CaseStudie({
  lang,
  locale,
}: {
  lang: any;
  locale: string;
}) {
  const [listStories, setListStories] = useState([] as any);

  useEffect(() => {
    const getDataByTopic = async () => {
      const data = await getCaseStudies(locale as string, 1, 9);

      setListStories(data);
    };
    getDataByTopic();
  }, []);

  return (
    <section>
      <div
        style={{
          background:
            "linear-gradient(341deg, rgba(200, 222, 255, 0.80) 1.97%, rgba(255, 223, 222, 0.80) 39.19%, #FFF 57.81%)",
        }}
        className="relative px-4"
      >
        <div
          style={{
            backgroundImage: ``,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className={clsx(
            "bg-[url('https://strapi-ezbuy.ichiba.net/uploads/icon_bg_f7ad0e827d.svg')]",
            "absolute top-0 left-0 w-full h-full hidden lg:block bg-no-repeat bg-center"
          )}
        ></div>

        <div className="container overflow-hidden pt-28 lg:pt-32">
          <div className="lg:text-center lg:w-[65%] mx-auto mb-6 lg:mb-7">
            <h1 className="mb-4 text-2xl lg:text-5xl leading-8 lg:leading-54 font-bold">
              {lang.caseStudies.heading[0]}
              <span className="bg-gradient-to-r gradient-text inline-block text-transparent bg-clip-text">
                {lang.caseStudies.heading[1]}
              </span>
            </h1>
            <p className="mb-0 text-sm lg:text-base lg:font-medium">
              {lang.caseStudies.subHeading}
            </p>
          </div>
          <div className="w-full max-h-[200px] lg:max-h-[622px] h-full">
            <Image
              src={
                "https://strapi-ezbuy.ichiba.net/uploads/Group_1171276208_9a222edd69.png"
              }
              width={2748}
              height={1332}
              alt="imgBannerDES"
              className="w-full h-full translate-y-8"
            />
          </div>
        </div>
      </div>

      <CaseStudieSlider lang={lang.caseStudies} />

      <div
        style={{
          background:
            "linear-gradient(270deg, rgba(212, 222, 248, 0.80) 17.14%, rgba(255, 231, 230, 0.69) 89.48%)",
        }}
        className="py-6 lg:py-15 px-4"
      >
        <div className="container grid gap-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {lang.caseStudies.listSearchs.map((item: any, index: number) => (
              <Select
                key={index}
                isMulti
                options={item.items}
                placeholder={item.title}
                className="select-sale"
                //   onChange={(newValue) => setOptions([newValue] as any)}
              />
            ))}
          </div>

          <BoxStory list={listStories} />
        </div>
      </div>

      <Contact lang={lang.caseStudies} />

      <Discover lang={lang.caseStudies} />
    </section>
  );
}
