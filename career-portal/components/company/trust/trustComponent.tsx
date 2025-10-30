/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
// import trustBanner from "@/public/icons/company/trust/trustBanner.png";
import cpm1 from "@/public/icons/company/trust/cpm1.png";
import cpm2 from "@/public/icons/company/trust/cpm2.png";
import cpm3 from "@/public/icons/company/trust/cpm3.png";
import cpm4 from "@/public/icons/company/trust/cpm4.png";
import cpm5 from "@/public/icons/company/trust/cpm5.png";
import partner1 from "@/public/icons/company/trust/partner1.png";
import partner2 from "@/public/icons/company/trust/partner2.png";
import partner3 from "@/public/icons/company/trust/partner3.png";
import partner4 from "@/public/icons/company/trust/partner4.png";
import partner5 from "@/public/icons/company/trust/partner5.png";
import partner6 from "@/public/icons/company/trust/partner6.png";
import partner7 from "@/public/icons/company/trust/partner7.png";
import partner8 from "@/public/icons/company/trust/partner8.png";
import partner9 from "@/public/icons/company/trust/partner9.png";
import partner10 from "@/public/icons/company/trust/partner10.png";
import partner11 from "@/public/icons/company/trust/partner11.png";
import partner12 from "@/public/icons/company/trust/partner12.png";
import partner13 from "@/public/icons/company/trust/partner13.png";
import partner14 from "@/public/icons/company/trust/partner14.png";
import partner15 from "@/public/icons/company/trust/partner15.png";
import trustBanner from "@/public/icons/company/trust/trustBanner.json";
import trustBannerVi from "@/public/icons/company/trust/trustBannerVi.json";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

import bgQuestion from "@/public/icons/company/trust/bgQuestion.png";

import trustbg2 from "@/public/icons/company/trust/trust-bg2.png";
import compilance1 from "@/public/icons/company/trust/compilance1.png";
import compilance2 from "@/public/icons/company/trust/compilance2.png";
import compilance3 from "@/public/icons/company/trust/compilance3.png";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
// import {
//   BlogDetail,
//   LastestCompany,
//   NewsEvents,
// } from "@/src/lib/__generated/sdk";
// import { client } from "@/src/lib/client";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const components = [
  {
    img: cpm1,
    title: "trust.security.title",
    content: "trust.security.content",
  },
  {
    img: cpm2,
    title: "trust.availability.title",
    content: "trust.availability.content",
  },
  {
    img: cpm3,
    title: "trust.confidentiality.title",
    content: "trust.confidentiality.content",
  },
  {
    img: cpm4,
    title: "trust.privacy.title",
    content: "trust.privacy.content",
  },
  {
    img: cpm5,
    title: "trust.compliance.title",
    content: "trust.compliance.content",
  },
];

const listImg = [
  partner12,
  partner11,
  partner10,
  partner9,
  partner8,
  partner7,
  partner6,
  partner5,
  partner1,
  partner4,
  partner3,
  partner2,
  partner13,
  partner14,
  partner15,
];
export default function TrustComponent(data: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const { t } = useTranslation("common");

  // const [eventItems, setEventItems] = useState<NewsEvents>({} as NewsEvents);
  const router = useRouter();
  const locale = router?.locale === "en" ? "en-US" : "vi";

  const fetchData = async () => {
    // let result = await client.trustBlogEntry({ locale: locale });
    // const ichibacom = result?.newsEventsCollection?.items[0] as NewsEvents;
    // setEventItems(ichibacom);
  };
  useEffect(() => {
    fetchData();
  }, [router?.locale]);
  return (
    <>
      <div className="banner ">
        <Player
          src={locale === "vi" ? trustBannerVi : trustBanner}
          loop
          autoplay
          style={{ height: "100%" }}
        >
          {" "}
          <Controls />{" "}
        </Player>
      </div>
      <div className="trust-components">
        <div className="container">
          <div>
            <div className="trust-title fw-7 fs-36 pb-4 fs-md-28">
              {t("trust.title")}
            </div>
          </div>
          <div
            style={{ padding: "0 0 40px 0" }}
            className="trust-content fs-md-14"
          >
            {t("trust.content")}
          </div>

          <div className="row">
            {components.map((value: any, index: number) => (
              <>
                <div className="col-lg-4 col-md-6 " key={index}>
                  <div style={{ height: "100%" }} className="trust-items">
                    <Image
                      src={value.img || ""}
                      alt={t(value.title)}
                      style={{ width: "75px", height: "75px" }}
                    />
                    <div className="fw-7 pt-3 pb-1 fs-20 fs-md-16">
                      {t(value.title)}
                    </div>
                    <div className="trust-item-content fs-md-14">
                      {t(value.content)}
                    </div>
                    {/* <div className="pt-3">
                            <a href="#" className="text-decoration-none">
                              Learn More &ensp;{" "}
                              <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                          </div> */}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div
        className="compliance"
        style={{
          backgroundImage: `url(${trustbg2.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 ">
              <div className="mb-4 title-compliance fs-36 fw-7 fs-md-28">
                {t("trust.certificates.title")}
              </div>
              <div className="fs-md-14">{t("trust.certificates.content")}</div>

              <div className="row text-sm-center ">
                <div className="col-sm-4 mt-5 icons">
                  <Image src={compilance1} alt="" />
                </div>
                <div className="col-sm-4 mt-5 icons">
                  <Image src={compilance2} alt="" />
                </div>
                <div className="col-sm-4 mt-5 icons">
                  <Image src={compilance3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nurture-trust">
        <div className="container">
          <div className="text-center nurture-title fs-md-28 fs-36 fw-7">
            {t("trust.nurture.title")}
          </div>
          <div className="row">
            {(data?.data?.posts?.docs?.length as number) > 0 &&
              data?.data?.posts?.docs?.map(
                (value: any | null, index: number) => (
                  <>
                    {index < 2 && (value?.layout?.length as number) > 0 ? (
                      <>
                        <div className="col-md-6 px-lg-4 my-3 " key={index}>
                          <div className="trust-item">

                            <Image
                              src={
                                value?.layout[0]?.blog[0]?.media?.url || ""
                              }
                              alt=""
                              width={1000}
                              height={1000}
                              style={{
                                objectFit: "cover",
                                objectPosition: "center center",
                              }}
                              className="nurture-img"
                            />
                            <div className="">
                              <div className="type text-uppercase fs-12 py-2 category-content" onClick={() =>
                              router.push(
                                `/blog?type=${
                                  value?.layout[0]?.blog[0]?.type ?? "news"
                                }`
                              )
                            }>
                                {value?.layout[0]?.blog[0]?.type}
                              </div>
                              <Link
                                href={"/blog/" + value?.slugs}
                                className=" fw-5 fs-18 fs-md-14 color-black text-decoration-none "
                              >
                                {value?.title}
                              </Link>
                            </div>
                            <div className="pt-2 fw-5">
                              <div
                                className="text-decoration-none cursor"
                                style={{ color: "rgb(11, 106, 230)" }}
                                onClick={() =>
                                  router.push("/blog/" + value?.slugs)
                                }
                              >
                                {t("learnMore")} &ensp;{" "}
                                <FontAwesomeIcon icon={faArrowRight} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                )
              )}
          </div>
        </div>
      </div>
      <div className="security">
        <div className="container">
          <div className="text-center security-title fs-36 fs-md-28 fw-7">
            {t("trust.securityPartners.title")}
          </div>
          <div className="text-center mt-1 fs-md-14">
            {t("trust.securityPartners.content")}
          </div>
          <div className="row icons align-sefl-center">
            {listImg.map((value, index) => (
              <>
                <div className="icon-item my-4" key={index}>
                  <Image
                    src={value}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </>
            ))}
          </div>
          <div
            className="question"
            style={{
              backgroundImage: `url(${bgQuestion.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="fs-36 fs-md-28 fw-7">
              {t("trust.question.title")}
            </div>
            <div className="py-4" style={{ maxWidth: "736px" }}>
              {t("trust.question.content")}
            </div>

            <a href={router.locale == 'vi' ? 'https://ichiba.vn/book-demo' : 'https://ichiba.net/book-demo'} target="_blank" rel="noreferrer" className="text-decoration-none fs-md-14 ">
              <div
                className="button fs-md-14 mx-auto mx-lg-0 d-block"
                
              >
                {t("trust.question.support")} &ensp;
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
