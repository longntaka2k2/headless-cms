import imgBannerMB from "@/public/images/caseStudies/img-banner-mb.svg";
import imgBannerDES from "@/public/images/caseStudies/img-banner-des.svg";
import iconBg from "@/public/images/caseStudies/icon-bg.svg";

import Image from "next/image";
import { useTranslation } from "next-i18next";
import CaseStudieSlider from "./Slider";
import Contact from "./Contact.";
import Discover from "./Discover";
import BoxStory from "./BoxStory";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetCaseStudie } from "@/services/strapi";

export default function CaseStudieV2() {
  const { t } = useTranslation("case-studies");
  const [topic, setTopic] = useState("");
  const router = useRouter();
  const [listStories, setListStories] = useState([] as any);

  const listCaseStudie = [
    {
      label: "Global selling in multi-market/ multi channel",
      value: "Global selling in multi-market/ multi channel",
    },
    {
      label: "All-in-one shipping management",
      value: "All-in-one shipping management",
    },
    {
      label: "Proxy shopping/ International shipping",
      value: "Proxy shoppping/ International shipping",
    },
    {
      label: "Boost revenue & customer insights",
      value: "Boost revenue & customer insights",
    },
    { label: "Omnichannel selling", value: "Omichannel selling" },
    { label: "Multi-channel fulfillment", value: "Multi channel fulfillment" },
    { label: "Order fulfillment by EFEX", value: "Order fulfillment by EFEX" },
    {
      label: "Performance marketing & growth solutions",
      value: "Performance marketing & growth solutions",
    },
  ];

  const listCaseProduct = [
    {
      label: "Order Management System (OMS)",
      value: "Order Management System (OMS)",
    },
    { label: "Point of Sale", value: "Point of Sale" },
    {
      label: "Product Information Management (PIM)",
      value: "Product Information Management (PIM)",
    },
    { label: "Build StoreFront", value: "Build StoreFront" },
    { label: "Cross-Border Forwarding", value: "Cross-Border Forwarding" },
    {
      label: "Ship4P - Multi-Carrier Integration",
      value: "Ship4P - Multi-Carrier Integration",
    },
  ];

  const listTag = [
    {
      label: "Global selling in multil-market/ multi channel",
      value: "Global selling in multi-market/ multichannel",
    },
    {
      label: "All-in-one shipping managerment",
      value: "All-in-one shipping managerment",
    },
    {
      label: "Proxy shopping/ International shipping",
      value: "Proxy shopping/ International shipping",
    },
    {
      label: "Boost revenue & customer insights",
      value: "Boost revenue & customer insights",
    },
    { label: "Omnichannel selling", value: "Omnichannel selling" },
    { label: "Multi-channel fulfillment", value: "Multi-channel fulfillment" },
    { label: "Order fulfillment by EFEX", value: "Order fulfillment by EFEX" },
    {
      label: "Performance marketing & growth solutions",
      value: "Performance marketing & growth solutions",
    },
    {
      label: "Order Management System (OMS)",
      value: "Order Manegemet System (OMS)",
    },
    { label: "Point of Sale", value: "Point of Sale" },
    {
      label: "Product Information Management (PIM)",
      value: "Product Information Management (PIM)",
    },
    { label: "Build StoreFront", value: "Build StoreFront" },
    { label: "Cross-Border Forwarding", value: "Cross-Border Forwarding" },
    {
      label: "Ship4P - Multi-Carrier Integration",
      value: "Ship4P - Multi-Carrier Integration",
    },
  ];

  useEffect(() => {
    const getDataByTopic = async () => {
      const data = await GetCaseStudie({
        populate: "deep",
        locale: router?.locale,
        filters: {
          topic_case_studies: topic
            ? {
              value: topic, // value
            }
            : undefined,
        },
        sort: ["publishedAt:desc"],
        pagination: {
          page: 0,
          pageSize: 9,
        },
      });

      setListStories(data);
    };
    getDataByTopic();
  }, [router?.locale]);

  return (
    <section>
      <div
        style={{
          background:
            "linear-gradient(341deg, #C6DDFF 1.97%, #FFEDD8 29.89%, #FFF 51.04%)",
        }}
        className="tw-relative"
      >
        <div
          style={{
            backgroundImage: `url(${iconBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-hidden lg:tw-block -tw-z-"
        ></div>

        <div className="tw-container tw-overflow-hidden tw-pt-6 lg:tw-pt-15">
          <div className="lg:tw-text-center lg:tw-w-[65%] tw-mx-auto tw-mb-6 lg:tw-mb-7">
            <h1 className="tw-mb-4 tw-text-2xl lg:tw-text-5xl tw-font-bold">
              {t("heading.0")}
              <span className="tw-bg-gradient-to-r tw-from-[#0364F6] tw-to-[#FF9528] tw-inline-block tw-text-transparent tw-bg-clip-text">
                {t("heading.1")}
              </span>
            </h1>
            <p className="tw-mb-0 tw-text-sm lg:tw-text-base lg:tw-font-medium">
              {t("subHeading")}
            </p>
          </div>
          <div className="tw-w-full tw-max-h-[200px] lg:tw-max-h-[622px] tw-h-full">
            <Image
              src={imgBannerMB}
              alt="imgBannerMB"
              className="tw-w-full tw-h-full lg:tw-hidden"
            />
            <Image
              src={imgBannerDES}
              alt="imgBannerDES"
              className="tw-w-full tw-h-full tw-hidden lg:tw-block tw-translate-y-8"
            />
          </div>
        </div>
      </div>

      <CaseStudieSlider />

      <div
        style={{
          background:
            "linear-gradient(274deg, #FDE9D3 26.95%, rgba(233, 238, 255, 0.60) 90%)",
        }}
        className="tw-py-6 lg:tw-py-15"
      >
        <div className="tw-container tw-grid tw-gap-6">
          <div className="tw-grid lg:tw-grid-cols-3 tw-gap-6">
            <Select
              id="productInterest"
              //   ref={selectRole}
              isMulti
              inputId="productInterest"
              options={listCaseStudie}
              placeholder={t("Case Studies")}
              className="select-sale"
            //   onChange={(newValue) => setOptions([newValue] as any)}
            />

            <Select
              id="productInterest"
              //   ref={selectRole}
              isMulti
              inputId="productInterest"
              options={listCaseProduct}
              placeholder={t("Products")}
              className="select-sale"
            //   onChange={(newValue) => setOptions([newValue] as any)}
            />
            <Select
              id="productInterest"
              //   ref={selectRole}
              isMulti
              inputId="productInterest"
              options={listTag}
              placeholder={t("Tag")}
              className="select-sale"
            //   onChange={(newValue) => setOptions([newValue] as any)}
            />
          </div>

          <BoxStory list={listStories} />
        </div>
      </div>

      <Contact />

      <Discover />
    </section>
  );
}
