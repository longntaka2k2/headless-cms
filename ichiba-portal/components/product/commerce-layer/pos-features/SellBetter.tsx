import SvgIcon from "@/components/common/SvgIcon";
import bgSupport from "@/public/images/products/bg-support.svg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function SelleBetter() {
  const { t } = useTranslation("pos");

  return (
    <div className="tw-container tw-py-6 lg:tw-py-15">
      <div
        className={clsx(
          "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/y_X0s_O7_HJ_0ft_W_Dbx7_B_Freb29_AAI_1_0119a266e5.svg')]",
          "tw-w-full tw-rounded-lg tw-text-white tw-pt-5 tw-px-5 tw-pb-10",
          "lg:tw-rounded-xl lg:tw-py-10 lg:tw-px-14 lg:tw-items-center",
        )}
      >
        <div className="tw-text-center">
          <h2 className="tw-mb-3 lg:tw-mb-4 tw-text-2xl lg:tw-text-4xl tw-font-bold lg:tw-w-[70%] tw-mx-auto tw-text-ic-black-6">
            {t("feature.sellBetter.title")}
          </h2>

          <p className="tw-text-sm lg:tw-text-base tw-text-ic-black-5 tw-mb-6 lg:tw-mb-8">
            {t("feature.sellBetter.subTitle")}
          </p>

          <div className="tw-flex tw-gap-[10px] lg:tw-gap-4 tw-items-center tw-justify-center">
            <Link
              href={"/contact-sales"}
              target="_blank"
              rel="nofollow"
              className="tw-text-white"
            >
              <button className="tw-bg-[#F57C00] tw-py-3 tw-px-3 tw-w-[200px] tw-text-sm tw-font-medium tw-rounded-lg">
                {t("feature.sellBetter.textBtn.0")}
                <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
              </button>
            </Link>

            <Link
              href={"/contact-sales"}
              target="_blank"
              rel="nofollow"
              className="tw-text-white"
            >
              <button className="tw-bg-[#ffffff] tw-py-3 tw-px-3 tw-w-[200px] tw-text-sm tw-font-medium tw-rounded-lg tw-text-brand-primary tw-border tw-border-brand-primary">
                {t("feature.sellBetter.textBtn.1")}
                <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
