import { useTranslation } from "next-i18next";
import logoPartner from "@/public/solutions/logo-partner.png";
import vietNamFlag from "@/public/solutions/vietnam-flag.png";
import Image from "next/image";
import clsx from "clsx";

export const OurPartners = () => {
  const { t } = useTranslation("order-fulfillment-by-efex");
  const market = [
    {
      image:
        "https://cms-strapi.ichiba.net/uploads/Logo_merchant_701b038b3f.svg",
      link: "#",
    },
    {
      image:
        "https://cms-strapi.ichiba.net/uploads/Logo_merchant_1_64a9071745.svg",
      link: "#",
    },
    {
      image:
        "https://cms-strapi.ichiba.net/uploads/Logo_merchant_2_c1872b8d0a.svg",
      link: "#",
    },
    {
      image:
        "https://cms-strapi.ichiba.net/uploads/Logo_merchant_3_0a605abaec.svg",
      link: "#",
    },
    {
      image:
        "https://cms-strapi.ichiba.net/uploads/Logo_merchant_4_58daab7a79.svg",
      link: "#",
    },
  ];

  const carriers = [
    {
      carrier: {
        title: t("ourPartners.items.1.childCate.0"),
        icon: "https://cms-strapi.ichiba.net/uploads/Vietnam_flag_4dcd71fdf6.png",
        item: [
          {
            image:
              "https://cms-strapi.ichiba.net/uploads/Logo_merchant_1_1_1b007f8a24.svg",
            link: "",
          },
          {
            image:
              "https://cms-strapi.ichiba.net/uploads/Logo_merchant_1_000708a266.svg",
            link: "",
          },
          {
            image:
              "https://cms-strapi.ichiba.net/uploads/Logo_merchant_2_1_08c8875a62.svg",
            link: "",
          },
          {
            image:
              "https://cms-strapi.ichiba.net/uploads/Logo_merchant_3_1_0990a6bb7c.svg",
            link: "",
          },
          {
            image:
              "https://cms-strapi.ichiba.net/uploads/Logo_merchant_4_1_da8f5ba147.svg",
            link: "",
          },
          {
            image:
              "https://cms-strapi.ichiba.net/uploads/Logo_merchant_5_2e6f560969.svg",
            link: "",
          },
          {
            image:
              "https://cms-strapi.ichiba.net/uploads/Logo_merchant_4_2_3b9769b93a.svg",
            link: "",
          },
          {
            image:
              "https://cms-strapi.ichiba.net/uploads/Logo_merchant_2_2_bba49612e9.svg",
            link: "",
          },
        ],
      },
    },
    {
      carrier: {
        title: t("ourPartners.items.1.childCate.1"),
        icon: "https://cms-strapi.ichiba.net/uploads/Group_f1f15b2b4f.png",
        item: [
          {
            image: "https://cms-strapi.ichiba.net/uploads/Logo_merchant_1_2_d0ecd9d338.svg",
            link: "",
          },
          {
            image: "https://cms-strapi.ichiba.net/uploads/Logo_merchant_2_0c6120407d.svg",
            link: "",
          },
          {
            image: "https://cms-strapi.ichiba.net/uploads/Logo_merchant_4_1_da8f5ba147.svg",
            link: "",
          }
        ],
      },
    },
  ];
  return (
    <div className="tw-container tw-mb-5 lg:tw-mb-15 tw-flex tw-flex-col tw-gap-4 lg:tw-gap-10">
      <div>
        <h2 className="tw-text-2xl tw-font-bold lg:tw-text-4xl">
          {t("ourPartners.title")}
        </h2>
        <p className="text-sm text-ic-ink-5 lg:text-lg">
          {t("ourPartners.subTitle")}
        </p>
      </div>

      <div>
        <p className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-3 lg:tw-mb-6">
          {t("ourPartners.items.0.category")}
        </p>
        <div className="tw-grid tw-grid-cols-3 lg:tw-grid-cols-5 tw-gap-3 lg:tw-gap-4">
          {market.map((item, index) => {
            return (
              <Image
                key={index}
                src={item.image}
                width={226}
                height={90}
                className={clsx("w-[120px] lg:w-[226px] h-[48px] lg:h-[90px]")}
                alt="partner"
              />
            );
          })}
        </div>
      </div>

      <div>
        <p className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-3 lg:tw-mb-6">
          {t("ourPartners.items.1.category")}
        </p>
        <div className="tw-flex tw-flex-col tw-gap-6">
          {carriers.map((carrier, index) => {
            return (
              <div key={index} className="tw-flex tw-flex-col tw-gap-3">
                <div className="tw-flex tw-gap-2 lg:tw-gap-4">
                  <div className="tw-w-6 tw-h-6 lg:tw-w-8 lg:tw-h-8">
                    <Image
                      src={carrier.carrier.icon}
                      width={32}
                      height={32}
                      alt="icon-flag"
                      className="tw-w-full tw-h-full tw-object-fill"
                    />
                  </div>
                  <p className="tw-text-sm lg:tw-text-lg tw-font-bold">
                    {carrier.carrier.title}
                  </p>
                </div>
                <div className="tw-grid tw-grid-cols-3 lg:tw-grid-cols-5 tw-gap-3 lg:tw-gap-4">
                  {carrier.carrier.item.map((item, ind) => {
                    return (
                      <Image
                        key={ind}
                        src={item.image}
                        width={226}
                        height={90}
                        className={clsx(
                          "w-[120px] lg:w-[226px] h-[48px] lg:h-[90px]",
                        )}
                        alt="partner"
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
