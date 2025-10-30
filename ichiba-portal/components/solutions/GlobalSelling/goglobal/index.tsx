/* eslint-disable @next/next/link-passhref */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
const GoGlobal = () => {
  const g = useTranslation("global-selling").t;

  return (
    <div className="tw-px-4 tw-py-10 ">
      <div
        className={clsx(
          "tw-relative tw-pt-4 tw-pb-6 lg:tw-py-20 tw-rounded-lg tw-bg-cover tw-container",
          "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/y_X0s_O7_HJ_0ft_W_Dbx7_B_Freb29_AAI_1_39e06dcb64.png)]",
          "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/ddd_45483149d4.png)]",
        )}
      >
        <div className="tw-text-center tw-relative tw-z-10">
          <h2 className="tw-font-bold tw-text-xl lg:tw-text-4xl tw-mb-0">
            {g("goGlobal.title")}
          </h2>
          <div className="tw-text-sm tw-text-[#666] tw-mt-2 ">
            {g("goGlobal.content")}
          </div>
          <Link
            href="/contact-sales"
            className="tw-text-sm tw-block tw-no-underline tw-mt-6 tw-w-max tw-mx-auto tw-font-medium tw-rounded-lg tw-bg-[#F57C00] tw-px-4 lg:tw-px-6 tw-py-3 tw-text-white"
          >
            {g("goGlobal.contactSale")}{" "}
            <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
          </Link>
        </div>
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Ellipse_42_828cdaead2.png"
          alt=""
          width={114}
          height={117}
          className="tw-w-[70px] tw-absolute tw-right-4 tw-top-[-10%] lg:tw-w-[110px] lg:tw-right-[12%]"
        />
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Ellipse_43_d241502dcf.png"
          alt=""
          width={114}
          height={117}
          className="tw-w-[50px] tw-absolute tw-right-2 tw-bottom-[5%] lg:tw-w-[90px] lg:tw-right-[15%]"
        />
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Ellipse_45_0255621ed6.png"
          alt=""
          width={114}
          height={117}
          className="tw-w-[60px] tw-absolute tw-left-4 tw-top-[7%] lg:tw-w-[100px] lg:tw-left-[15%]"
        />
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Ellipse_44_6f1708e4b8.png"
          alt=""
          width={114}
          height={117}
          className="tw-w-[70px] tw-absolute tw-left-4 tw-bottom-[-10%] lg:tw-w-[110px] lg:tw-left-[19%]"
        />
      </div>
    </div>
  );
};
export default GoGlobal;
