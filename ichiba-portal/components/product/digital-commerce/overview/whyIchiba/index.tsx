import clsx from "clsx";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function WhyIchiba() {
  const { t } = useTranslation("digital");
  const tt = (key: string) => t(key, { returnObjects: true });
  const contents: any[] = [
    {
      ...tt("whyIchiba.contents.0"),
      img: "https://cms-strapi.ichiba.net/uploads/Frame_2_a8bb9f130b.png",
    },
    {
      ...tt("whyIchiba.contents.1"),
      img: "https://cms-strapi.ichiba.net/uploads/Frame_1_504f6b02cd.png",
    },
    {
      ...tt("whyIchiba.contents.2"),
      img: "https://cms-strapi.ichiba.net/uploads/Frame_350f1ff2a9.png",
    },
  ];
  return (
    <section
      className={clsx(
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/BG_1_fae3291976.png')]",
        "md:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/BG_dfee26bb45.png')]",
        "tw-bg-center tw-bg-cover",
        "tw-px-4 tw-py-6 lg:tw-px-0 lg:tw-py-16",
      )}
    >
      <div className="tw-container tw-px-0">
        <div className="tw-flex tw-flex-col  tw-items-center lg:tw-text-center tw-pb-9">
          <h2 className="lg:tw-text-4xl tw-text-2xl tw-font-bold lg:tw-mb-6 tw-mb-4">
            {t("whyIchiba.heading")}
          </h2>
          <p className="tw-text-ic-ink-5 tw-text-sm lg:tw-text-lg lg:tw-w-4/5 lg:tw-mb-0">
            <span className="tw-block">{t("whyIchiba.subHeading")}</span>
            <span>{t("whyIchiba.subHeading2")}</span>
          </p>
        </div>
        <div className="tw-flex tw-flex-wrap tw-gap-4 lg:tw-gap-6  tw-justify-center tw-items-stretch lg:tw-flex-row tw-flex-col ">
          {contents.map((x, idx) => (
            <div
              key={idx}
              className={clsx(
                "tw-card-fx tw-flex tw-flex-col tw-items-center  lg:tw-max-w-[31.5%]",
                "tw-p-6 lg:tw-px-6 tw-rounded-lg tw-bg-white ",
                "tw-border-[1px] tw-border-pending-2  tw-text-center",
              )}
            >
              <Image
                src={x.img}
                alt={x.title}
                width={96}
                height={96}
                className="tw-object-contain lg:tw-pb-6 tw-pb-4"
              />
              <div>
                <h3 className="lg:tw-text-xl  tw-font-bold lg:tw-mb-2">
                  {x.title}
                </h3>
                <p className="tw-mb-0">{x.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
