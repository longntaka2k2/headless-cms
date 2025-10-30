import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";

const StreamlineManage = () => {
  const router = useRouter();
  const { t } = useTranslation("brand-commerce");
  const items = [
    t("globalBrand.steamline.content.take"),
    t("globalBrand.steamline.content.make"),
    t("globalBrand.steamline.content.quick"),
  ];
  return (
    <div className="tw-container tw-px-4 lg:tw-px-0 tw-py-10 lg:tw-py-15">
      <div className="lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-10">
        <div>
          <div className="tw-text-xl tw-font-bold lg:tw-text-3xl">
            {t("globalBrand.steamline.title")}
          </div>
          <div className="tw-grid tw-grid-cols-1 tw-gap-4 tw-mt-4">
            {items.map((value: any, index: number) => (
              <div
                className="tw-flex  tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] tw-px-3 tw-py-4 lg:tw-px-6 tw-rounded-xl"
                key={index}
              >
                <div className="tw-mr-4">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="tw-text-[#0F62FE]"
                  />
                </div>
                <div>{value}</div>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/brand_ecom_2_1_e2674f0c17.png"
          }
          alt="https://cms-strapi.ichiba.net/uploads/brand_ecom_2_1_e2674f0c17.png"
          width={400}
          height={400}
          quality={100}
          className="tw-mt-6 tw-w-full lg:tw-hidden"
        />
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Frame_427318497_d92c0deeec.png"
          }
          alt="https://cms-strapi.ichiba.net/uploads/Frame_427318497_d92c0deeec.png"
          width={400}
          height={400}
          quality={100}
          className=" tw-w-full tw-hidden lg:tw-block"
        />
      </div>
    </div>
  );
};

export default StreamlineManage;
