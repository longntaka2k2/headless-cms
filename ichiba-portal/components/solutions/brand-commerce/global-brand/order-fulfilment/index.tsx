import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import clsx from "clsx";

const OrderFulfillment = () => {
  const { t } = useTranslation("brand-commerce");
  const items = [
    {
      icons:
        "https://cms-strapi.ichiba.net/uploads/Group_19695_43f30d4cf4.svg",
      title: t("globalBrand.orderFulfill.content.detailedly"),
    },
    {
      icons:
        "https://cms-strapi.ichiba.net/uploads/Group_19695_1_caa794d736.svg",
      title: t("globalBrand.orderFulfill.content.get"),
    },
    {
      icons:
        "https://cms-strapi.ichiba.net/uploads/Group_19695_2_ebc87868fb.svg",
      title: t("globalBrand.orderFulfill.content.align"),
    },
  ];
  return (
    <div
      className={clsx(
        " tw-px-4 lg:tw-px-0 tw-py-10 lg:tw-py-16",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Section_3_1_ec385a36ff.png)] ",
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Section_8_f6d3c457cd.png)]",
      )}
    >
      <div className="tw-container lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-10 lg:tw-items-center">
        <div>
          <div className="tw-text-xl tw-font-bold lg:tw-text-3xl">
            {t("globalBrand.orderFulfill.subtitle")}
          </div>
          <div className="tw-grid tw-grid-cols-1 tw-gap-4 tw-my-6">
            {items.map((value: any, index: number) => (
              <div className="tw-flex tw-px-3 lg:tw-px-6 " key={index}>
                <Image
                  src={value.icons}
                  alt={value.icons}
                  width={64}
                  height={64}
                  quality={100}
                  className="tw-w-16 tw-h-16 tw-mr-6"
                />
                <div>{value.title}</div>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/image_6_dc65bde6fc.png"
          }
          alt="https://cms-strapi.ichiba.net/uploads/image_6_dc65bde6fc.png"
          width={400}
          height={400}
          quality={100}
          className="tw-mt-6 tw-w-full"
        />
      </div>
    </div>
  );
};
export default OrderFulfillment;
