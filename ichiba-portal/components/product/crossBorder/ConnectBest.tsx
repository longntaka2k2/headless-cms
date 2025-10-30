import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const ConnectBest = () => {
  const { t } = useTranslation("common");
  const items = [
    {
      price: "3,100 ¥",
      oldPrice: "3,300 ¥",
      value: "24,578,999đ",
      img: "https://cms-strapi.ichiba.net/uploads/image_15_1a76235e9f.png",
      sale: "30%",
    },
    {
      price: "3,100 ¥",
      oldPrice: "3,300 ¥",
      value: "24,578,999đ",
      img: "https://cms-strapi.ichiba.net/uploads/image_15_1a76235e9f.png",
      sale: "30%",
    },
    {
      price: "3,100 ¥",
      oldPrice: "3,300 ¥",
      value: "24,578,999đ",
      img: "https://cms-strapi.ichiba.net/uploads/image_15_1a76235e9f.png",
      sale: "30%",
    },
    {
      price: "3,100 ¥",
      oldPrice: "3,300 ¥",
      value: "24,578,999đ",
      img: "https://cms-strapi.ichiba.net/uploads/image_15_1a76235e9f.png",
      sale: "30%",
    },
    {
      price: "3,100 ¥",
      oldPrice: "3,300 ¥",
      value: "24,578,999đ",
      img: "https://cms-strapi.ichiba.net/uploads/image_15_1a76235e9f.png",
      sale: "30%",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 0,
    arrows: true,
  };
  return (
    <div
      className={clsx(
        " tw-px-4 lg:tw-px-0 tw-py-12 tw-text-white lg:tw-py-[108px] ",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_2608936_4f311c8f41.png)] tw-bg-cover tw-bg-no-repeat",
        "connectBest",
      )}
    >
      <div className="tw-container ">
        <div className="tw-text-center lg:tw-max-w-[790px] lg:tw-mx-auto lg:tw-mb-10">
          <div className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mt-2 tw-mb-4 lg:tw-mb-6">
            {t("smartCrossBorder.connectBesst.title")}
          </div>
          <div className="tw-text-sm lg:tw-text-base tw-mt-2">
            {t("smartCrossBorder.connectBesst.content")}
          </div>
        </div>
        <div className=" tw-mt-4 tw-flex tw-snap-x tw-overflow-x-scroll tw-w-full tw-gap-6 tw-pb-4 scroll-1 scroll tw-p-1 lg:tw-flex ">
          {items.map((value: any, index: number) => (
            <div
              className="tw-bg-white tw-rounded-2xl tw-min-w-[204px] lg:tw-min-w-[283px] tw-snap-center tw-text-[#333]"
              key={index}
            >
              <Image
                src={value.img}
                alt={value.img}
                width={275}
                height={275}
                quality={100}
                className="tw-w-full"
              />
              <div className="tw-pt-2 tw-px-4 tw-pb-3">
                <span className="tw-font-bold tw-text-xl tw-text-[#F57C00]">
                  {value.price}
                </span>
                <span className="tw-line-through tw-inline-block tw-ml-1">
                  {value.oldPrice}
                </span>
                <div className="tw-text-[#666]">{value.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center tw-mt-6 ">
          <Link
            href="/contact-sales"
            target="_blank"
            className="tw-text-sm lg:tw-text-base tw-bg-brand-primary tw-text-white tw-rounded-lg tw-px-8 tw-py-3 tw-no-underline tw-inline-block "
          >
            {t("smartCrossBorder.connectBesst.contactSale")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConnectBest;
