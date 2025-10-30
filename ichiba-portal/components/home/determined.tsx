/* eslint-disable @next/next/link-passhref */
import { stripHtmlTags } from "@/utils/utils";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

export default function DeterminedICB(props: any) {
  const { t } = useTranslation("common");
  return (
    <>
      {props && (
        <div
          key={`${props.id}_${props.__component}`}
          style={{
            backgroundImage: `url('https://cms-strapi.ichiba.net${
              props?.background?.data?.attributes?.url as string
            }')`,
            backgroundSize: "cover",
          }}
          id="determined"
        >
          <div>
            <div className="container">
              <div className="row">
                <div className=" text-md-center text-sm-start">
                  <h2 className="fw-7 title pb-lg-1 pb-2 mx-auto">
                    <span>{props?.heading}</span>
                  </h2>
                  <div className="fw-4 content-text sub-heading">
                    <span>{props?.subHeading}</span>
                  </div>
                </div>
              </div>
              <div className="row items py-md-4 pb-sm-1">
                {(props?.cards?.length as number) > 0 &&
                  props?.cards?.map((value: any, index: number) => (
                    <div className="col-lg-4 px-2" key={index}>
                      <div className="item">
                        <div className="img">
                          {value?.image?.data?.attributes && (
                            <Image
                              src={value?.image?.data?.attributes.url || ""}
                              width={value?.image?.data?.attributes.width}
                              height={value?.image?.data?.attributes.height}
                              alt={value?.image?.data?.attributes.alt ?? ""}
                            />
                          )}
                        </div>
                        <div className="fw-5 fs-16 ">
                          <span>{value?.heading}</span>
                        </div>
                        <div className="content-text fs-14 pt-2">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: stripHtmlTags(value?.content),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div id="audits">
            <div className="container ">
              <div className="row">
                <div className="col-lg-6">
                  <div className="fs-24 fw-6 pb-3 tw-mt-4 ">
                    <span>{props?.heading2}</span>
                  </div>
                  <div className="content-text">
                    <span>{props.subHeading2}</span>
                  </div>
                  <div className="audits-btn mt-3 cursor fw-5 fs-16">
                    <Link
                      href="/trust-security "
                      rel="nofollow"
                      target="_blank"
                      className="text-decoration-none"
                      style={{ color: "#FFFFFF" }}
                    >
                      <span>{t("header.company.trust.title")}</span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 pt-md-4 mt-md-4">
                  {(props?.iconAudits?.data?.length as number) > 0 &&
                    props?.iconAudits?.data?.map(
                      (value: any, index: number) => (
                        <div
                          className="d-inline-block pt-md-2 pr-md-4 audit-icons"
                          key={index}
                        >
                          {value?.attributes && (
                            <Image
                              src={value?.attributes?.url || ""}
                              width={value?.attributes?.width}
                              height={value?.attributes?.height}
                              alt={
                                value?.attributes?.url
                                  ? value?.attributes?.url
                                  : ""
                              }
                            />
                          )}
                        </div>
                      ),
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
