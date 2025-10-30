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

function CustomNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={" arrowNext"}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function CustomPrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " arrowPrev"}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default function News(props: any) {
  const router = useRouter();
  const { t } = useTranslation("common");
  // const locale = router?.locale === "en" ? "en-US" : "vi";
  const [newsBlogs, setNewsBlogs] = useState([]);

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

  useEffect(() => {
    getBlogs(router?.locale);
  }, []);

  return (
    <>
      <div id="news-events">
        <div className="container lg:tw-py-10 tw-py-6">
          <div className="text-lg-center head">
            <h2 className="fs-36 fs-md-28 fw-7 lh-7 tw-mb-0">{props?.heading}</h2>
            <div className="sub-heading fs-phone-14">
              <span>{props?.subHeading}</span>
            </div>
          </div>
          <div className="news-items tw-py-1.5 tw-px-1">
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
          <div className="text-center tw-mt-4">
            <Link
              className=" btn-janbox cursor tw-py-3 tw-px-6  text-decoration-none color-white "
              href={"/blog"}
              target={"_blank"}
              rel="canonical"
            >
              {t("viewMore")} &ensp;
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="need-support">
            <div className="row">
              <div className="col-lg-6 pb-lg-1 pb-5">
                <h2 className="fs-36 fw-7 title pb-3 fs-phone-24 tw-mb-0">
                  {t("needSupport.title")}
                </h2>
                <div className="fs-sm-14 fs-md-16">
                  <div>{t("needSupport.content1")}</div>
                  <div>{t("needSupport.content2")}</div>
                </div>
                <div>
                  <Link
                    target={"_blank"}
                    href={"/contact-sales"}
                    className="color-white"
                    rel="canonical"
                  >
                    <span className="btn-sales d-inline-block cursor mt-4 fs-phone-14">
                      {t("needSupport.btnContact")}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 resource ps-xl-5 ps-sm-3 ">
                <div className="pb-3 fs-phone-14">
                  <span>{t("needSupport.checkout")}</span>
                </div>

                <div className="fs-phone-14">
                  <div className="d-flex justify-content-between align-items-center pb-3">
                    <div className="d-flex">
                      <span className="d-inline-block icon me-2 ">
                        <FontAwesomeIcon icon={faFileCircleCheck} />
                      </span>
                      <Link
                        href={`https://docs.ichiba.net/${
                          router.locale !== "vi" ? router.locale : ""
                        }`}
                        target={"_blank"}
                        rel="nofollow"
                        className=" text-decoration-none text-link"
                      >
                        {t("needSupport.discover")}
                      </Link>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className="px-2" />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="d-inline-block icon me-2 ">
                      <FontAwesomeIcon icon={faFolder} />
                    </span>
                    <Link
                      href={"https://org.ichiba.net"}
                      target={"_blank"}
                      rel="nofollow"
                      className=" text-decoration-none text-link"
                    >
                      <span>{t("needSupport.experience")}</span>
                    </Link>
                    <FontAwesomeIcon icon={faArrowRight} className="px-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="ichiba-power"
        style={{
          backgroundImage: `url(${backgroundNews.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="text-lg-center py-5 fs-phone-24 fw-phone-700 lh-phone-32">
            <div>IChiba OnePlatform</div>
            <div>{t("footer.powerGlow")}</div>
          </div>
        </div>
      </div>
    </>
  );
}
