/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/jsx-no-undef */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Gutter } from "../Gutter";
import RichText from "../RichText";
import Related from "./related";
import rocket from "@/public/icons/blog/rocket.webp";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import Image from "next/image";
import { formatDateToDDMMYYYY } from "@/convert";
import { useRouter } from "next/router";

export default function BlogDetailComponent(data: any) {
  const layout = data?.data?.layout[0]?.blog[0];
  let host = typeof window !== "undefined" ? window.location.origin : "";
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <>
      <div id="blog-detail">
        <div className="container">
          <div className="row px-lg-5">
            <div className="col-lg-10">
              <div className="title">{data?.data?.title}</div>
            </div>
            <div className="col-lg-8">
              <div className="banner">
                <div
                  style={{
                    width: "100%",
                    height: layout?.media?.height,
                    maxHeight: "400px",
                    backgroundImage: `url(${layout?.media?.url || ""})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
            <div className="right-info  col-lg-4 fs-14">
              <div className="text-uppercase pb-3">{t("blog.pubicshed")}</div>
              <div>{formatDateToDDMMYYYY(data?.data?.createdAt)}</div>
              <div className="text-uppercase py-3">{t("blog.author")}</div>
              <div style={{ color: "#F9A236" }}>{data?.data?.author?.name}</div>
              <div className="text-uppercase py-3">{t("blog.category")}</div>
              <div>{layout?.type}</div>
            </div>

            <div className="col-lg-8 pt-4">
              {
                <Gutter>
                  {layout && <RichText content={layout?.richText} />}
                </Gutter>
              }

              <div className="pt-4">
                <div className="d-flex align-items-center row takeATour">
                  <div className="fw-5 col-3 fs-20 ">
                    {t("blog.detail.takeAtour")}
                  </div>
                  <div className="px-4 col-6 fs-16">
                    {t("blog.detail.seeIChiba")}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 "
              style={{ position: "sticky", height: "400px", top: "80px" }}
            >
              <div className=" get-started">
                <Image
                  src={rocket}
                  alt=""
                  width={500}
                  height={500}
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="px-3">
                  <div>Sign up to Ichiba SASS in minutes</div>
                  <div className="text-uppercase mt-2">
                    <Link
                      target="_blank"
                      href={
                        router.locale === "vi"
                          ? "https://ichiba.vn/book-demo"
                          : "https://ichiba.net/book-demo"
                      }
                      className="text-decoration-none color-jb"
                    >
                      {t("getStartedFor")}&ensp;&ensp;
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
              </div>
              <Related />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
