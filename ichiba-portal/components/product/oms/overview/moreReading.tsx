/* eslint-disable @next/next/link-passhref */
import React, { Component } from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
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
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { formatDateToDDMMYYYY } from "@/convert";

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

export default function MoreReading(props: any) {
  const [eventItems, setEventItems] = useState<any>();
  const router = useRouter();
  const { t } = useTranslation("common");
  const locale = router?.locale === "en" ? "en-US" : "vi";

  useEffect(() => { }, [router?.locale]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <CustomNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <CustomPrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <div key={`${props.id}_${props.__component}`}>
        {props && (
          <div className="more-reading">
            <div className="container user-select-none">
              <div dangerouslySetInnerHTML={{ __html: props?.title }} />
              <div className="pt-4 pb-5">
                <Slider {...settings}>
                  {(props?.blogs?.data?.length as number) > 0 &&
                    props?.blogs?.data?.map(
                      (value: any | null, index: number) => (
                        <div key={index} className="news-item ">
                          <div>
                            <img
                              src={
                                value?.attributes?.image?.data?.attributes
                                  .url || ""
                              }
                              alt={
                                value?.attributes?.image?.data?.attributes.url
                                  ? value?.attributes?.image?.data?.attributes
                                    .url
                                  : "url"
                              }
                            />
                          </div>
                          <Link
                            rel="canonical"
                            className="d-block text-decoration-none mt-2"
                            href={`/blog/category/${value?.attributes?.category_blog?.data?.attributes?.value}`}
                          >
                            {
                              value?.attributes?.category_blog?.data?.attributes
                                ?.label
                            }
                          </Link>
                          <div className="fw-7 fs-md-16 fs-20 py-1 card-heading">
                            <span>{value?.attributes?.title}</span>
                          </div>
                          <div className="fs-14 pb-2">
                            <span>
                              {formatDateToDDMMYYYY(
                                value?.attributes?.createdAt,
                              )}
                            </span>
                          </div>
                          <div
                          // className="d-flex flex-column justify-content-between mh-100"
                          >
                            <Link
                              className="cursor text-decoration-none read-more"
                              href={"/blog/" + value?.attributes?.slug}
                              rel="canonical"
                            >
                              {t("readMore")} &ensp;
                              <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                          </div>
                        </div>
                      ),
                    )}
                </Slider>
              </div>
              <div className="need-support">
                <div className="row">
                  <div className="col-lg-6 pb-lg-1 pb-5">
                    <div className="fs-36 fw-7 title pb-3">
                      <span>{t("needSupport.title")}</span>
                    </div>
                    <div className="fs-phone-14">
                      <div>{t("needSupport.content1")}</div>
                      <div>{t("needSupport.content2")}</div>
                    </div>
                    <div>
                      <span
                        className="btn-sales d-inline-block cursor mt-4"
                        onClick={() => router.push("/contact-sales")}
                      >
                        {t("needSupport.btnContact")}
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6 resource ps-xl-5 ps-sm-3 ">
                    <div className="pb-3">
                      <span>{t("needSupport.checkout")}</span>
                    </div>

                    <div>
                      <div className="d-flex justify-content-between align-items-center pb-3">
                        <div>
                          <span className="d-inline-block icon me-2 ">
                            <FontAwesomeIcon icon={faFileCircleCheck} />
                          </span>
                          <span
                            className="text-link"
                            onClick={() =>
                              router.push("https://docs.ichiba.net/")
                            }
                          >
                            {t("needSupport.discover")}
                          </span>
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} className="px-2" />
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="d-inline-block icon me-2 ">
                            <FontAwesomeIcon icon={faFolder} />
                          </span>
                          <Link
                            href={"https://org.ichiba.net"}
                            target={"_blank"}
                            className=" text-decoration-none text-link"
                            rel="nofollow"
                          >
                            <span>{t("needSupport.experience")}</span>
                          </Link>
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} className="px-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        id="ichiba-power"
        style={{
          backgroundImage: `url(${backgroundNews.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="text-center py-5">
            <div>IChiba OnePlatform</div>
            <div>{t("footer.powerGlow")}</div>
          </div>
        </div>
      </div>
    </>
  );
}
