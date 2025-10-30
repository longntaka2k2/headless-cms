import useWidth from "@/hooks/useWidth";
import {
  StrapiMediaModel,
  StrapiRelationModel,
} from "@/src/lib/models/StrapiModel";
import clsx from "clsx";
import Image from "next/image";
import React, { CSSProperties, useEffect, useState } from "react";
import { useRouter } from "next/router";

export interface Props {
  heading?: string;
  subHeading?: string;
  __component?: string;
  id: number;
  items: {
    titleIcon: string;
    icon?: StrapiRelationModel<StrapiMediaModel>;
    id: number;
    link?: string;
    description?: string;
    media?: StrapiRelationModel<StrapiMediaModel>;
    desktopMedia?: StrapiRelationModel<StrapiMediaModel>;
    heading?: string;
    upsides?: string[];
  }[];
  style?: CSSProperties;
  className?: string;
}
const ContentMediaRender = ({
  media,
}: {
  media?: StrapiRelationModel<StrapiMediaModel>;
}) => {
  return (
    <>
      {media?.data?.attributes && media?.data?.attributes?.ext === ".webm" ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={media?.data?.attributes.url}
        >
          <source
            src={media?.data?.attributes.url}
            type="video/webm; codecs=vp9"
          />
        </video>
      ) : (
        <Image
          src={media?.data?.attributes?.url ?? ""}
          alt={
            media?.data?.attributes?.url
              ? media?.data?.attributes.url
              : "component"
          }
          className=" position-static"
          fill={true}
        />
      )}
    </>
  );
};
const ContentBodyRenderer = ({
  heading,
  description,
  className,
  upsides,
  media,
  style,
  link,
}: {
  heading: string;
  description: string;
  className?: string;
  upsides?: string[];
  media?: StrapiRelationModel<StrapiMediaModel>;
  style?: React.CSSProperties;
  link?: string;
}) => {
  const checkIconStyle = { color: "#0F62FE", margin: "10px 5px 0px 0px" };
  const locale = useRouter();

  return (
    <div className={clsx(`row content-app `, className)} style={style}>
      <div className="d-flex flex-wrap">
        <div className="text-start feature ">
          <div className="title d-none d-sm-block">{heading}</div>
          <div
            className="sub-title"
            dangerouslySetInnerHTML={{
              __html: description ?? "",
            }}
          />

          <div className="feature-items">
            {upsides?.map((x, idx) => (
              <div className="feature-item" key={`${x}_${idx}`}>
                <i
                  className="fa-solid fa-lg fa-circle-check"
                  style={checkIconStyle}
                />
                <span>{x}</span>
              </div>
            ))}
          </div>
          <div className="link">
            <a href={link ?? "#"} target="_blank" rel="noreferrer">
              {locale.locale === "en" ? "Learn more" : "Tìm hiểu thêm"}
            </a>{" "}
            <i className="fa-solid fa-arrow-right" />
          </div>
        </div>
        <div className="media">
          <ContentMediaRender media={media} />
        </div>
      </div>
    </div>
  );
};
export default function OurProductNew(props?: Props) {
  const [selectedProduct, setSelectedProduct] = useState<any>(props?.items[0]);
  const [stopProduct, setStopProduct] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const width = useWidth();

  const selected = (value: any) => {
    setSelectedProduct(value);
    setStopProduct(true);
  };

  useEffect(() => {
    let selectedProductIndex = 0;

    if (!stopProduct) {
      if (width >= 766) {
        const id = setInterval(() => {
          selectedProductIndex++;
          if (selectedProductIndex >= (props?.items?.length ?? 0)) {
            selectedProductIndex = 0;
          }
          setSelectedProduct(props?.items[selectedProductIndex]);
        }, 5000);

        setIntervalId(id as any);
      }
    } else {
      clearInterval(intervalId as any);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, stopProduct]);
  return (
    <div className={`our-product-new`} style={props?.style}>
      <div className="container user-select-none text-center">
        <h2 className="h1-section">{props?.heading}</h2>
        <p className="sub-heading">{props?.subHeading}</p>
        <div className="body">
          <div className="navigation-app ">
            {props?.items?.map((x, idx) => {
              const iconUrl = (
                x.icon?.data as {
                  id: number;
                  attributes: StrapiMediaModel;
                }
              ).attributes;
              return (
                <div
                  className={clsx(
                    "product lg:tw-w-[172px] lg:tw-h-[110px] lg:tw-border lg:tw-border-[#ddd] lg:tw-bg-[#fff] lg:tw-rounded-[12px]",
                    iconUrl.url ==
                      selectedProduct?.icon?.data?.attributes.url && "active",
                  )}
                  key={`${iconUrl.url}_${idx}`}
                  onClick={() => selected(x)}
                >
                  <div className="d-flex d-md-block product-wrapper">
                    <Image
                      src={iconUrl.url || ""}
                      alt="app"
                      className={`img-fluid icon position-static lg:tw-mx-auto lg:tw-pt-3`}
                      width={48}
                      height={48}
                    />
                    <div className="tw-hidden lg:tw-block tw-pt-2 tw-font-bold title-product">
                      {x.titleIcon}
                    </div>
                    <div className="d-md-none detail text-start">
                      <p className="title">{x.heading}</p>
                      {iconUrl.url ==
                        selectedProduct?.icon?.data?.attributes.url && (
                        <ContentBodyRenderer
                          className={`d-md-none ${
                            x.icon == selectedProduct?.icon ? "" : "d-none"
                          }`}
                          upsides={x.upsides}
                          media={x.media}
                          style={props.style}
                          link={x.link}
                          heading={selectedProduct?.heading}
                          description={selectedProduct?.description}
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <ContentBodyRenderer
            className="d-none d-md-block"
            upsides={selectedProduct?.upsides}
            media={selectedProduct?.media}
            link={selectedProduct?.link}
            heading={selectedProduct?.heading}
            description={selectedProduct?.description}
          />
        </div>
      </div>
    </div>
  );
}
