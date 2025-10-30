import Image from "next/image";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import {
  StrapiRelationModel,
  StrapiMediaModel,
} from "@/src/lib/models/StrapiModel";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface Props {
  heading: string;
  subHeading: string;
  id: number;
  story: {
    content: string;
    heading: string;
    id: number;
    image: StrapiRelationModel<StrapiMediaModel>;
    link?: string;
  }[];
}

const GlobalShopping = (props: Props) => {
  const { t } = useTranslation("common");
  const [active, setActiveItem] = useState<any>();

  useEffect(() => {
    if (props.story[0]) {
      setActiveItem(props.story[0]);
    }
  }, [props.story]);

  return (
    <div className="tw-py-6 md:tw-py-16 globalShopping ">
      <div className=" tw-container">
        <div className="mx-auto text-center container-child">
          <h2 className="tw-font-bold tw-text-2xl md:tw-text-4xl">
            {props?.heading}
          </h2>
          <div className="tw-text-sm md:tw-text-base tw-mb-5 md:tw-mb-10">
            {props?.subHeading}
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 md:tw-gap-6">
          {props?.story.map((value, index: number) => (
            <div
              className={clsx(
                "tw-col-span-1 tw-flex md:tw-border-b tw-border-border tw-gap-4 tw-relative",
                "after:tw-absolute after:tw-left-[22px] after:tw-h-full",
                "[&:not(:last-child)]:after:tw-bg-brand-primary",
                "after:tw-min-w-[2px] after:tw-z-[-1] after:md:tw-hidden tw-pb-5",
              )}
              key={index + value.heading}
            >
              <div
                className="tw-min-w-[46px] tw-min-h-[46px]"
                onClick={() => setActiveItem(value)}
              >
                {value.image.data.attributes && (
                  <Image
                    className="tw-bg-white"
                    src={value.image.data.attributes.url}
                    alt={
                      value.image.data.attributes.url
                        ? value.image.data.attributes.url
                        : "url"
                    }
                    width={46}
                    height={46}
                  />
                )}
              </div>
              <div className="tw-gap-4 tw-flex tw-flex-col tw-justify-between tw-pb-5 md:tw-pb-0">
                <div>
                  <div className="tw-font-bold md:tw-text-xl tw-pb-2">
                    {value.heading}
                  </div>
                  <div
                    className={clsx(
                      active?.heading && value.heading != active.heading
                        ? "tw-hidden md:tw-block"
                        : "",
                    )}
                    dangerouslySetInnerHTML={{ __html: value.content }}
                  />
                </div>
                <div
                  className={clsx(
                    active?.heading && value.heading != active.heading
                      ? "tw-hidden md:tw-block"
                      : "",
                  )}
                >
                  <a href={value.link ?? "#"} className="text-decoration-none">
                    {t("learnMore")} &ensp;
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalShopping;
