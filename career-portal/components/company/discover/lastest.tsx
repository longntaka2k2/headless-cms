/* eslint-disable @next/next/link-passhref */
import React, { Component } from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faArrowRight,
  faFileCircleCheck,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
// import backgroundNews from '@/public/icons/banner-global.png'
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import qs from "qs";
import { getPosts } from "@/payload-client";

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

export default function Lastest(data: any) {
  const [listLast, setlistLast] = useState([]);
  const router = useRouter();
  const { t } = useTranslation("common");

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
      <div id="lastest" style={{ background: "#F2F2F2" }}>
        <div className="container">
          <div className="text-center">
            <h2 className="title fs-36 fs-md-28 fw-7 pt-3">
              {t("discover.lastest")}
            </h2>
          </div>
          <div className="pt-lg-4 pt-2 " >
            <Slider {...settings}>
              {listLast &&
                data?.data?.docs?.map((value: any, index: number) => (
                  <div key={index}>
                    <div className="news-items ">
                      <div className="text-center">
                        <Image src={value?.layout[0]?.blog[0]?.media?.url}
                          width={value?.layout[0]?.blog[0]?.media
                            ?.width}
                          height={value?.layout[0]?.blog[0]?.media
                            ?.height}
                          style={{
                            width: "100%",
                            height: value?.layout[0]?.blog[0]?.media
                              ?.height,
                            maxHeight: "170px",
                          }} alt={""} />
                      </div>
                      <Link
                        href={`/blog?type=${value?.layout[0]?.blog[0]?.type
                          }`}
                        className="text-decoration-none d-block py-1  text-uppercase fs-12 pt-3"
                      >
                        {value?.layout[0]?.blog[0]?.type}
                      </Link>
                      <Link className="fw-7 fs-16 fs-md-14 text-decoration-none color-black d-block" href={`/blog/${value?.slugs}`}>
                        <span>

                          {value?.title}
                        </span>
                      </Link>
                      <div className="fs-12 date-item">
                        <span>Wednesday, February 22, 2023</span>
                      </div>
                      <div className="read-more fs-16 date-item cursor fs-md-14">
                        <div
                          className="text-decoration-none"
                          onClick={() => router.push(`/blog/${value?.slugs}`)}
                        >
                          {t("readMore")} &ensp;
                          <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className={
            router?.pathname === "/careers" ? "d-none" : "need-support "
          }
        >
          <div className="row">
            <div className="col-lg-6 pb-lg-1 pb-5">
              <div className="fs-36 fw-7 fs-md-28 title pb-3">
                <div>{t("needSupport.title")}</div>
                <div>{t("needSupport.title1")}</div>
              </div>
              <div className="fs-md-14">
                <span>{t("needSupport.content")}</span>
              </div>
              <div>
                <div
                  className="text-decoration-none color-white btn-sales fs-md-14 d-inline-block cursor mt-3 mt-lg-4"
                  onClick={() =>
                    router.push(
                      `https://ichiba.${router?.locale === "vi" ? "vn" : "net"
                      }/contact-sale`
                    )
                  }
                >
                  {t("needSupport.btnContact")}
                </div>
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
                    <Link
                      className="text-decoration-none color-white cursor"
                      href={
                        "https://docs.ichiba.net/"
                      }
                    >
                      {t("needSupport.discover")}
                    </Link>
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
                      className=" text-decoration-none text-link "
                      style={{ color: "#FFFFFF" }}
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
      {/* <div id="ichiba-power" style={{
                backgroundImage: `url(${backgroundNews.src})`,
                backgroundRepeat: 'no-repeat',
            }}>
                <div className="container">
                    <div className="text-center py-5">
                        <div>IChiba OnePlatform</div>
                        <div>A power that glows your business</div>
                    </div>
                </div>
            </div> */}
    </>
  );
}
