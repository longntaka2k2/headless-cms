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


export default function Discover() {
  const router = useRouter();
  const { t } = useTranslation("common");
  // const locale = router?.locale === "en" ? "en-US" : "vi";
  const [newsBlogs, setNewsBlogs] = useState([]);

  const getBlogs = async (
    locale?: string
  ) => {
    const query = qs.stringify({
      populate: ["category-blogs", "image", "title"],
      locale:locale,
      pagination: {
        page: 1,
        pageSize: 3,
      },
      sort: ["publishedAt:desc"],
    });
    const { data } = await fetch(`${endpoints.blog}?${query}`).then(
      (x) => x.json(),
    );
    setNewsBlogs(data)
  };

  useEffect(() => {
    getBlogs(router?.locale)
  }, [])
  const a = useTranslation("all-in-one").t;

  return (
    <>
      <div id="news-events" >
        <div className="container lg:tw-py-10 tw-py-6">
          <div className="lg:tw-max-w-[800px] tw-mx-auto">
            <div className="tw-text-2xl tw-font-bold tw-text-center lg:tw-text-4xl">
              <span>{a("discover.title")}</span>
            </div>
          </div>
          <div className="news-items tw-py-1.5 tw-px-1 lg:tw-mt-10">
            {(newsBlogs?.length as number) > 0 &&
              newsBlogs?.map((value: any, index: number) => (
                <div key={index} className="news-item ">
                  <Link
                    rel="canonical"
                    href={"/blog/" + value?.attributes?.slug}
                    target={"_blank"}
                    className="text-decoration-none text-link text-dark"
                  >
                    <div>
                      <Image
                        src={
                          RelativeImagePath(value?.attributes?.image?.data?.attributes.url || "")
                        }
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
                  </Link>
                </div>
              ))}
          </div>      
        </div>
      </div>
     
    </>
  );
}


