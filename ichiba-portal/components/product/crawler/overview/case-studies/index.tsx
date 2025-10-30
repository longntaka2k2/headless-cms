import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { GetCaseStudie } from "@/services/strapi";
import ListStories from "./ListStories";
const CaseStudies = () => {
  const { t: crawler } = useTranslation("crawler");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);
  const [topic, setTopic] = useState("");
  const router = useRouter();
  const [listStories, setListStories] = useState([] as any);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 / 3 },
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

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
  }, [router?.locale, topic]);

  return (
    <>
      {listStories && (
        <div className="tw-pb-6 lg:tw-pb-10" ref={elementRef}>
          <div className="tw-container">
            <div
              className={clsx(
                "tw-flex lg:tw-justify-center tw-mb-2",
                isVisible ? "tw-animate-showOn" : "tw-opacity-0",
              )}
            >
              <div className="tw-bg-violet-1 tw-rounded-[50px] tw-py-2 tw-px-3 tw-flex tw-gap-2 tw-items-center tw-w-max">
                <p className="tw-text-sm tw-mb-0 tw-text-violet-6">
                  {crawler("caseStudies.label")}
                </p>
              </div>
            </div>
            <h2
              className={clsx(
                "tw-text-2xl lg:tw-text-3xl tw-font-bold tw-mb-6 lg:tw-mb-7 lg:tw-w-[65%] tw-mx-auto lg:tw-text-center",
                isVisible ? "tw-animate-showOn" : "tw-opacity-0",
              )}
            >
              {crawler("caseStudies.heading")}
            </h2>

            <div
              className={clsx(isVisible ? "tw-animate-showOn" : "tw-opacity-0")}
            >
              <ListStories list={listStories} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CaseStudies;
