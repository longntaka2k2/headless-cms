/* eslint-disable react/jsx-no-undef */
import { useRouter } from "next/router";
import Link from "next/link";
import seeIchiba from "@/public/icons/blog/seeIchiba.png";
import getUpdate from "@/public/icons/blog/getUpdate.png";
import { formatDateToDDMMYYYY } from "@/convert";
import { useTranslation } from "next-i18next";

export default function MostPorpular(data: any) {
  const router = useRouter();
  const { t } = useTranslation("common");
  let host = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <>
      <div id="most-porpular">
        <div className="container user-select-none">
          {(data?.blogData?.docs?.length as number) > 0 && (
            <>
              <h2 className="text-uppercase fw-7 fs-30 mb-5 most-title">
                {t("blog.most")}
              </h2>
              <div className="row">
                {(data?.blogData?.docs?.length as number) > 0 &&
                  data?.blogData?.docs?.map(
                    (value: any | null, index: number) => (
                      <>
                        {value?.slugs && (
                            <div className="col-lg-4  mt-3" key={index}>
                              <div className="most-items cursor">
                                <div className="most-img">                        
                                  <div
                                    style={{
                                      width: "100%",
                                      height: "25vh",
                                      backgroundImage: `url(${
                                        value?.layout[0]?.blog[0]?.media
                                          ?.url || ""
                                      })`,
                                      backgroundRepeat: "no-repeat",
                                      backgroundPosition: "center",
                                      backgroundSize: "cover",
                                    }}
                                  ></div>
                                </div>
                                <div className="most-content p-md-3 p-4">
                                  <div
                                    className="type text-uppercase fs-12 py-2 category-content"
                                    onClick={() =>
                                      router.push(
                                        `/blog?type=${
                                          value?.layout[0]?.blog[0]
                                            ?.type ?? "news"
                                        }`
                                      )
                                    }
                                  >
                                    {value?.layout[0]?.blog[0]?.type}
                                  </div>
                                  <Link
                                    href={"/blog/" + value?.slugs}
                                    className=" fw-5 fs-18 fs-md-14 color-black text-decoration-none content"
                                  >
                                    {value?.title}
                                  </Link>
                                  <div className="pt-4 pb-2">
                                    <div className="d-inline-block date pe-2">
                                      {formatDateToDDMMYYYY(value?.createdAt)}
                                    </div>
                                    <div className="d-inline-block ps-2">
                                      {value?.author?.name}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        )}
                      </>
                    )
                  )}
              </div>
            </>
          )}

          <div className="row pt-5 ">
            <div className="col-lg-8 ">
              <div
                className="banner d-flex align-items-center"
                style={{
                  backgroundImage: `url(${seeIchiba.src})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="row p-4 ">
                  <div className=" ">
                    <div className="get-start">
                      <div
                        className="d-block fs-30 fw-7 pb-2 see-ichiba"
                        style={{ maxWidth: "450px" }}
                      >
                        {t("blog.detail.seeIChiba")}
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4  text-center ">
              <div
                className="subscrible color-white"
                style={{
                  backgroundImage: `url(${getUpdate.src})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="fs-14 text-uppercase pt-4 fw-4">
                  {t("blog.dontMiss")}
                </div>
                <div className="fs-24 pt-2 fw-5">{t("blog.getUpdate")}</div>
                <div className="pt-1 px-lg-2">{t("blog.detail.seeIChiba")}</div>
                <Link
                  href={
                    host === "https://ichiba.net"
                      ? "https://api.ichiba.net/account/login?redirectUrl=https%3A%2F%2Fichiba.net?returnUrl=https%3A%2F%2Forg.ichiba.net"
                      : "https://api.ichiba.vn/account/login?redirectUrl=https%3A%2F%2Fichiba.vn?returnUrl=https%3A%2F%2Forg.ichiba.net"
                  }
                  target="_blank"
                  className="text-decoration-none d-block btn-outline-janbox mx-auto mt-4 py-2 px-5 cursor"
                  style={{ width: "max-content" }}
                >
                  {t("footer.subscribe")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
