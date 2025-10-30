import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SvgIcon from "@/components/common/SvgIcon";
import Image from "next/image";

export const ContactUs = () => {
  const { t } = useTranslation("pod");
  return (
    <div className="tw-bg-[url('https://cms-strapi.ichiba.net/uploads/CTA_7a5af2e3a5.svg')] tw-bg-cover tw-bg-right tw-bg-no-repeat tw-px-4">
      <div className="tw-container tw-grid lg:tw-grid-cols-2 lg:tw-items-center tw-gap-6 lg:tw-gap-15 tw-pt-6">
        <div>
          <h2 className="tw-text-2xl tw-font-bold lg:tw-text-4xl tw-mb-6 lg:tw-mb-10">
            {t("contactUs.heading")}
          </h2>
          <Link
            // href={"/contact-sales"}
            href={"#"}
            className={clsx(
              "tw-text-center tw-no-underline tw-text-base tw-font-medium tw-bg-brand-primary tw-text-white",
              "tw-py-[14px] tw-px-5 lg:tw-px-3 tw-w-[180px] lg:tw-w-[200px] tw-rounded-lg tw-mx-auto",
            )}
          >
            {t("contactUs.textBtn")}
          </Link>
        </div>
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Group_1171276367_80fe97b97f.png"
          }
          width={505}
          height={294}
          className="tw-mx-auto"
          alt="#"
        />
      </div>
    </div>
  );
};
export default ContactUs;
