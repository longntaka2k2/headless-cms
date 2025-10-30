import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function CanDoWith() {
  const { t } = useTranslation("digital");
  const tt = (key: string) => t(key, { returnObjects: true });

  const contents: any[] = [
    {
      ...tt("canDoWith.contents.0"),
      img: "https://cms-strapi.ichiba.net/uploads/Build_a_new_commerce_website_from_scratch_b60bc9b24f.svg",
    },
    {
      ...tt("canDoWith.contents.1"),
      img: "https://cms-strapi.ichiba.net/uploads/Merchandise_products_e3c0ac8d96.svg",
    },
    {
      ...tt("canDoWith.contents.2"),
      img: "https://cms-strapi.ichiba.net/uploads/Integrate_POS_devices_and_sell_in_physical_stores_8a45f6acd1.svg",
    },
    {
      ...tt("canDoWith.contents.3"),
      img: "https://cms-strapi.ichiba.net/uploads/Create_promotion_e3d0cfee62.svg",
    },
    {
      ...tt("canDoWith.contents.4"),
      img: "https://cms-strapi.ichiba.net/uploads/Manage_inventory_and_orders_9c787d52af.svg",
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
      <div className="container">
        <div className="tw-flex tw-flex-col  tw-items-center lg:tw-text-center tw-pb-9">
          <h2 className="lg:tw-text-4xl tw-text-2xl tw-font-bold lg:tw-mb-6 tw-mb-4">
            {t("canDoWith.heading")}
          </h2>
          <p className="tw-text-ic-ink-5 tw-text-sm lg:tw-text-lg lg:tw-w-4/5 tw-mb-0">
            {t("canDoWith.subHeading")}
          </p>
        </div>
        <div className="tw-flex tw-flex-wrap tw-gap-6 lg:tw-gap-y-12 tw-justify-center tw-items-stretch lg:tw-flex-row tw-flex-col ">
          {contents.map((x, idx) => (
            <div
              key={idx}
              className={clsx(
                "tw-card-fx tw-flex tw-flex-col tw-items-center  lg:tw-max-w-[31.5%]",
                "tw-px-4 tw-py-6 lg:tw-px-6 tw-rounded-lg tw-bg-white ",
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
                <h3 className="lg:tw-text-xl  tw-font-bold lg:tw-mb-2 lg:tw-min-h-[56px]">
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
