import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

export default function DreamWebsite() {
  const { t } = useTranslation("digital");
  const c = useTranslation("common").t;
  const tt = (key: string) => t(key, { returnObjects: true });

  const contents: any[] = [
    {
      ...tt("build.contents.0"),
      img: "https://cms-strapi.ichiba.net/uploads/Frame_21374_11ac7959f9.png",
    },
    {
      ...tt("build.contents.1"),
      img: "https://cms-strapi.ichiba.net/uploads/Frame_21374_1_dc977be65d.png",
    },
    {
      ...tt("build.contents.2"),
      img: "https://cms-strapi.ichiba.net/uploads/Frame_21374_2_3f3e0b96e1.png",
    },
    {
      ...tt("build.contents.3"),
      img: "https://cms-strapi.ichiba.net/uploads/Frame_21374_3_7b240449d1.png",
    },
    {
      ...tt("build.contents.4"),
      img: "https://cms-strapi.ichiba.net/uploads/Frame_21374_4_796e4cdb9f.png",
    },
    {
      ...tt("build.contents.5"),
      img: "https://cms-strapi.ichiba.net/uploads/Frame_21374_5_4bd873453b.png",
    },
    {
      ...tt("build.contents.6"),
      img: "https://cms-strapi.ichiba.net/uploads/Frame_21374_6_16cda35371.png",
    },
  ];
  return (
    <section
      className={clsx(
        "tw-bg-white",
        "tw-bg-center tw-bg-cover",
        "tw-py-6 lg:tw-px-0 lg:tw-py-16",
      )}
    >
      <div className="tw-container">
        <div className="tw-flex tw-flex-col lg:tw-text-center tw-items-center tw-mb-6">
          <h2 className="lg:tw-text-4xl tw-text-2xl tw-font-bold">
            {t("build.heading")}
          </h2>
        </div>
        <div
          className={clsx(
            "tw-flex lg:tw-flex-wrap tw-gap-x-6 tw-gap-y-12 lg:tw-justify-center tw-items-stretch lg:tw-flex-row",
            " lg:tw-w-full tw-overflow-auto tw-no-scrollbar tw-p-1 tw-snap-x tw-mb-6",
          )}
        >
          {contents.map((x, idx) => (
            <div
              key={idx}
              className={clsx(
                "tw-card-fx tw-flex tw-flex-col tw-min-w-[283px] lg:tw-min-w-0 lg:tw-max-w-[23%] tw-gap-4",
                "tw-px-4 tw-py-6 lg:tw-px-6 tw-rounded-lg tw-bg-neutral-1 tw-justify-between tw-snap-center",
              )}
            >
              <div className="tw-flex-col tw-items-center">
                <Image
                  src={x.img}
                  alt={x.title}
                  width={231}
                  height={168}
                  className="tw-object-contain tw-pb-6 tw-h-[214px]"
                />
                <div>
                  <h3
                    className={clsx(
                      "tw-font-bold tw-mb-4 tw-pb-4 tw-min-h-[48px] tw-text-base tw-border-b-[4px] ",
                      "tw-border-[#d9d9d9] lg:tw-text-xl",
                    )}
                  >
                    {x.heading}
                  </h3>
                  <p className="tw-font-medium tw-mb-0 tw-text-sm tw-pb-4 lg:tw-text-lg">
                    {x.title}
                  </p>
                  <p className="tw-mb-0 tw-text-sm lg:tw-text-base">{x.des}</p>
                </div>
              </div>
              <Link
                href={"#"}
                className="tw-text-link tw-self-start tw-no-underline tw-font-medium lg:tw-hidden"
                passHref
              >
                {c("learnMore")} <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          ))}
        </div>
        <Link
          href={"/products/storefront-layer/features"}
          className={clsx(
            "tw-cta-primary tw-rounded-lg tw-self-start tw-no-underline tw-hidden lg:tw-block ",
            "tw-p-4 tw-text-white text-center tw-w-fit tw-mx-auto tw-font-medium",
          )}
          passHref
        >
          {c("learnMore")} <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </section>
  );
}
