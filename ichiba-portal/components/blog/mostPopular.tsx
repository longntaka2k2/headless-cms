/* eslint-disable react/jsx-no-undef */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
          {(data?.blogData?.length as number) > 0 && (
            <>
              <h1 className="text-uppercase fw-7 fs-30 mb-5 most-title">
                {t("blog.most")}
              </h1>
              <div className="row">
                {data?.blogData?.map((value: any | null, index: number) => (
                  <div className="col-lg-4  mt-3" key={index}>
                    <div className="most-items cursor">
                      <div className="most-img">
                        <div
                          style={{
                            width: "100%",
                            height: "25vh",
                            backgroundImage: `url(${value?.attributes?.image?.data?.attributes?.url ||
                              ""
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
                              `/blog/category/${value?.attributes?.category_blog?.data?.attributes?.value}`,
                            )
                          }
                        >
                          {
                            value?.attributes?.category_blog?.data?.attributes
                              ?.label
                          }
                        </div>
                        <Link
                          rel="canonical"
                          href={"/blog/" + value?.attributes?.slug}
                          className=" fw-5 fs-18 fs-md-14 color-black text-decoration-none content"
                        >
                          {value?.attributes?.title}
                        </Link>
                        <div className="pt-4 pb-2">
                          <div className="d-inline-block date pe-2">
                            {formatDateToDDMMYYYY(value?.attributes?.createdAt)}
                          </div>
                          <div className="d-inline-block ps-2">
                            {value?.attributes?.author}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
                      <Link
                        className="btn-janbox cursor text-decoration-none"
                        target="_blank"
                        href={`/book-demo`}
                        rel="canonical"
                        style={{ width: "max-content", padding: "12px 42px" }}
                      >
                        {t("blog.detail.request")}&ensp;&ensp;
                        <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
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
                <h3 className="fs-30 pt-2 fw-5">{t("blog.getUpdate")}</h3>
                <div className="pt-1 px-lg-2">{t("blog.detail.seeIChiba")}</div>
                <Link
                  href={
                    host === "https://ichiba.vn"
                      ? "https://api.ichiba.vn/account/login?redirectUrl=https://app.ichiba.net"
                      : "https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
                  }
                  target="_blank"
                  rel="nofollow"
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
