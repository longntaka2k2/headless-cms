/* eslint-disable @next/next/link-passhref */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import useWidth from "@/hooks/useWidth";
import { useEffect, useMemo } from "react";

export default function Community(props: any) {
  const router = useRouter();
  const { t } = useTranslation("common");
  const width = useWidth();
  const desktopStyle = {
    backgroundImage: `url('${props.background?.data?.attributes?.url || ""}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  };
  // a_vflip.90

  const style = useMemo(() => {
    if (width >= 990) return desktopStyle;
    else {
      let transformUrl;
      if (props.background?.data?.attributes?.url) {
        transformUrl = props.background?.data?.attributes?.url
          .split("/upload")
          .join("/upload/a_vflip.270");
      }
      return {
        backgroundImage: `url('${
          transformUrl || props.background?.data?.attributes?.url || ""
        }')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      };
    }
  }, [width]);

  return (
    <div key={`${props.id}_${props.__component}`} style={style}>
      <div className="container ichiba-community tw-text-[#333]">
        <div className="row pb-md-4">
          <div className="col-lg-4 pb-3">
            <h2 className="title lg:tw-text-white tw-mb-0">{props?.heading}</h2>
            <div className="tw-text-[#333] lg:tw-text-white fs-16 fw-4 py-4 fs-phone-14">
              <span>{props?.subHeading}</span>
            </div>
            <Link
              href="https://www.facebook.com/groups/ichiba.saas"
              target="_blank"
              rel="nofollow"
              className="btn btn-join"
            >
              <span>{t("takeATour")}</span>
            </Link>
          </div>
          <div className="col-lg-8 img text-center">
            {props.media?.data?.attributes && (
              <Image
                src={props.media?.data?.attributes?.url}
                width={props.media?.data?.attributes.width}
                height={props.media?.data?.attributes.height}
                alt={
                  props.media?.data?.attributes?.url
                    ? props.media?.data?.attributes?.url
                    : "props"
                }
              />
            )}
          </div>
        </div>
        <div className="row pt-md-3 items">
          {(props.cards?.length as number) > 0 &&
            props.cards?.map((value: any, index: number) => {
              return (
                <div className="col-lg-4 " key={index}>
                  <div className="item-content">
                    <Link
                      target="_blank"
                      href={value?.link}
                      rel="nofollow"
                      className="text-decoration-none text-dark"
                    >
                      <div>
                        <Image
                          src={value?.image?.data?.attributes?.url || ""}
                          width={value?.image?.data?.attributes.width}
                          height={value?.image?.data?.attributes.height}
                          alt={value?.heading}
                        />
                      </div>
                      <div className="item-title">
                        <div className="fw-7">
                          <span className="title">{value?.heading}</span>
                        </div>
                        <div>
                          <span
                            className="fs-14"
                            dangerouslySetInnerHTML={{ __html: value?.content }}
                          />
                        </div>
                        <span
                          className="cursor visit pt-2 text-decoration-none"
                          // href={value?.link}
                        >
                          {t("readMore")}{" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
