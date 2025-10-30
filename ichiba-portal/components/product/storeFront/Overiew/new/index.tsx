/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFileCircleCheck,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import backgroundNews from "@/public/icons/banner-global.png";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { formatDateToDDMMYYYY } from "@/convert";
import Image from "next/image";
import endpoints from "@/const/endpoints";
import qs from "qs";
import { RelativeImagePath } from "@/utils/utils";

export default function News(props: any) {
  const router = useRouter();
  const { t } = useTranslation("common");
  // const locale = router?.locale === "en" ? "en-US" : "vi";
  const [newsBlogs, setNewsBlogs] = useState([]);
  const b = useTranslation("build-store-front").t;

  const getBlogs = async (locale?: string) => {
    const query = qs.stringify({
      populate: ["category-blogs", "image", "title"],
      locale: locale,
      pagination: {
        page: 1,
        pageSize: 3,
      },
      sort: ["publishedAt:desc"],
    });
    const { data } = await fetch(`${endpoints.blog}?${query}`).then((x) =>
      x.json(),
    );
    setNewsBlogs(data);
  };
  const getNav = async (locale?: string) => {
    const query = qs.stringify({
      populate: ["deep"],
      locale: locale,
      pagination: {
        page: 1,
        pageSize: 3,
      },
      sort: ["publishedAt:desc"],
    });
    const { data } = await fetch(`${endpoints.navbarv2}?${query}`).then((x) =>
      x.json(),
    );
    setNewsBlogs(data);
  };

  useEffect(() => {
    getBlogs(router?.locale);
 
  }, []);

  return (
    <>
      <div id="news-events" className="!tw-bg-[linear-gradient(0deg,_#F2F4F8_0%,rgba(242,244,248,0.00)_100%)] !tw-bg-inherit lg:tw-py-10 tw-py-6">
        <div className="container">
          <div className="tw-text-[#F57C00] tw-text-sm tw-font-medium">
            {b("new.label")}
          </div>
          <div className="lg:tw-text-4xl tw-font-bold tw-text-xl tw-mt-2">
            {b("new.title")}
          </div>
          <div className="news-items tw-py-1.5 tw-px-1 lg:tw-mt-6 tw-mt-4">
            {(newsBlogs?.length as number) > 0 &&
              newsBlogs?.map((value: any, index: number) => (
                <div
                  key={index}
                  className="news-item !tw-p-0 tw-overflow-hidden"
                >
                  <Link
                    rel="canonical"
                    href={"/blog/" + value?.attributes?.slug}
                    target={"_blank"}
                    className="text-decoration-none text-link text-dark"
                  >
                    <div>
                      <Image
                        className="!tw-rounded-none !tw-w-full !tw-max-w-full tw-object-cover"
                        src={RelativeImagePath(
                          value?.attributes?.image?.data?.attributes.url || "",
                        )}
                        width={value?.attributes?.image?.data?.attributes.width}
                        height={
                          value?.attributes?.image?.data?.attributes.height
                        }
                        alt={
                          value?.attributes?.image?.data?.attributes.url
                            ? value?.attributes?.image?.data?.attributes.url
                            : "news-item"
                        }
                      />
                    </div>
                    <div className="lg:tw-p-5 tw-p-4">
                      <span
                        className="d-block text-decoration-none mt-2 "
                        // href={`/blog/category/${value?.attributes?.category_blog?.data?.attributes?.value}`}
                      >
                        {
                          value?.attributes?.category_blog?.data?.attributes
                            ?.label
                        }
                      </span>
                      <div className="fw-7 fs-md-16 fs-20 py-1 card-heading">
                        <span>{value?.attributes?.title}</span>
                      </div>
                      <div className="fs-14 pb-2">
                        <span>
                          {formatDateToDDMMYYYY(value?.attributes?.createdAt)}
                        </span>
                      </div>
                      <div
                      // className="d-flex flex-column justify-content-between mh-100"
                      >
                        <span
                          className="cursor text-decoration-none read-more"
                          // href={"/blog/" + value?.attributes?.slug}
                        >
                          {t("readMore")} &ensp;
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
