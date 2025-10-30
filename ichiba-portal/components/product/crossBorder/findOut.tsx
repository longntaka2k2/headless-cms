/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import oms from "@/public/icons/crossBorder/findout/oms.svg";
import digital from "@/public/icons/crossBorder/findout/digital.svg";
import cross from "@/public/icons/crossBorder/findout/cross.svg";
import multi from "@/public/icons/crossBorder/findout/multi.svg";
import omni from "@/public/icons/crossBorder/findout/omni.svg";
import ship4p from "@/public/icons/crossBorder/findout/ship4p.svg";
import sme from "@/public/icons/crossBorder/findout/sme.svg";
import wms from "@/public/icons/crossBorder/findout/wms.svg";
import Link from "next/link";

import { useTranslation } from "next-i18next";
import clsx from "clsx";

const listProd = [
  { title: "Order Management System", img: oms, url: "/products/oms/features" },
  {
    title: "Product Information Management",
    img: "https://cms-strapi.ichiba.net/uploads/Logo_PIM_83befad08b.png",
    url: "/products/pim/features",
  },
  {
    title: "Point of Sale",
    img: "https://cms-strapi.ichiba.net/uploads/Logo_POS_61b2818952.png",
    url: "#",
  },
  {
    title: "Build StoreFront Tool",
    img: digital,
    url: "/products/storefront-layer/overview",
  },
  {
    title: "Cross-Border Forwarding",
    img: "https://cms-strapi.ichiba.net/uploads/Logo_Smart_Cross_border_0ac86808fe.png",
    url: "/products/cross-border-forwarding/features",
  },
  { title: "Ship4P", img: ship4p, url: "/products/ship4p/features" },

  {
    title: "Customer Data & Experience Platform",
    img: "https://cms-strapi.ichiba.net/uploads/Logo_CDXP_9aadedd44c.png",
    url: "#",
  },
];

export default function FindOut() {
  const { t } = useTranslation("common");

  return (
    <>
      <div
        className={clsx(
          "tw-py-6 md:tw-py-16",
          "find-out",
          "md:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/image_17_7a860d73e4.webp')] ",
          "tw-bg-cover tw-bg-no-repeat",
        )}
      >
        <div className="container">
          <div className="mx-auto text-center pb-4 container-child">
            <div className="fw-7 fs-20 fs-md-28 color-brand-primary">
              {t("crossBorder.findout.find")}
            </div>
            <div className="fw-7 fs-36 fs-md-28">
              {t("crossBorder.findout.tour")}
            </div>
            <div className="">{t("crossBorder.findout.content")}</div>
          </div>
          <div className="row justify-content-center tw-gap-6 md:tw-gap-y-10">
            {listProd.map((value, index) => (
              <div
                className={clsx(
                  "col-md-3  tw-shadow-5 tw-rounded-xl !tw-p-3 !md:tw-p-6",
                  "hover:tw-border-brand-primary tw-border tw-border-transparent",
                  index == listProd.length - 1
                    ? "col-11"
                    : "col-5 md:!tw-max-w-[23%]",
                )}
                key={index + value.title}
              >
                <Link
                  href={value.url}
                  className="text-decoration-none color-black "
                >
                  <div className="text-center py-4 cursor tw-flex tw-flex-col tw-items-center">
                    <Image
                      src={value.img}
                      alt={value.title ? value.title : "title"}
                      width={64}
                      height={64}
                    />
                    <div className="fw-5 pt-3">{value.title}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
