/* eslint-disable @next/next/link-passhref */
import topic from "@/pages/case-studies/topic";
import { GetCaseStudie } from "@/services/strapi";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import router from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Offer = () => {
  const m = useTranslation("marketing-teams").t;
  const [listStories, setListStories] = useState([] as any);

  useEffect(() => {
    const getData = async () => {
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
          pageSize: 3,
        },
      });
      setListStories(data);
    };
    getData();
  }, []);
  return (
    <div className="tw-bg-[linear-gradient(180deg,#00194F_75%,#ffffff_25%)] tw-text-white">
      <div className="tw-py-6 tw-px-4 lg:tw-px-0 lg:tw-py-10 lg:tw-container">
        <div className="tw-max-w-[800px] tw-mx-auto">
          <h3 className="tw-text-2xl tw-font-bold tw-text-center lg:tw-text-4xl">
            {m("offer.title")}
          </h3>
          <div className="tw-text-sm tw-mt-2 tw-text-center lg:tw-text-base">
            {m("offer.content")}
          </div>
        </div>
        <div className="tw-overflow-x-auto tw-overflow-y-visible tw-mt-6">
          <div className="tw-grid tw-grid-cols-3 tw-w-max lg:tw-w-full tw-gap-4 lg:tw-gap-6">
            {listStories?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "tw-rounded-lg  tw-relative tw-overflow-hidden",
                  "tw-w-[293px] tw-h-[180px] lg:tw-w-full lg:tw-max-w-[384px] lg:tw-max-h-[192px]",
                )}
              >
                <Image
                  className="tw-object-cover tw-w-full"
                  src={`https://cms-strapi.ichiba.net${value.attributes.image.data.attributes.url}`}
                  alt="caseStudies"
                  width={293}
                  height={180}
                />
                <div
                  className={clsx(
                    "tw-absolute tw-top-0 tw-right-0 tw-left-0 tw-bottom-0 tw-py-7 lg:tw-px-6 tw-px-3",
                    "tw-bg-[linear-gradient(180deg,rgba(0,0,0,0.50)_47.4%,rgba(0,0,0,0.15)_100%)]",
                  )}
                >
                  <div className="tw-uppercase tw-text-xs">
                    {m("offer.caseStudies")}
                  </div>
                  <div className="tw-font-bold tw-text-sm tw-mt-2 lg:tw-text-base lg:tw-mt-4">
                    {value.attributes.title}
                  </div>
                  <Link
                    target="_blank"
                    rel="noreferrer noopener canonical"
                    href={"/case-studies/" + value.attributes.slug}
                    className="tw-mt-5 lg:tw-mt-4 tw-rounded-lg tw-px-5  tw-py-2 tw-bg-[#F57C00] tw-text-white tw-block tw-w-max"
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
