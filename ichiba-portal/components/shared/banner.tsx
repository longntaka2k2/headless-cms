import LottieRenderer from "@@/common/lottieRenderer";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export interface Props {
  heading: string;
  subHeading: string;
  link?: string;
  media?: string;
}
const Banner = (props: Props) => {
  const { t } = useTranslation("common");
  return (
    <section className="banner tw-my-5">
      <div className="tw-container">
        <div className="tw-grid tw-grid-cols-2 tw-gap-2 lg:tw-gap-6">
          <div className="md:tw-col-span-1 tw-col-span-2 left-side d-flex">
            <div className="md:tw-mt-[86px] sm:tw-mt-[0px]">
              <h2 className="heading tw-text-2xl md:tw-text-4xl tw-font-bold">
                {props.heading}
              </h2>
              <p className="tw-text-sm md:tw-text-base subHeading">
                {props.subHeading}{" "}
              </p>
              <Link
                href={props.link ?? "/contact-sales"}
                className="cta tw-rounded-lg tw-text-center tw-text-white tw-px-2 tw-py-3
                 tw-bg-brand-primary tw-no-underline tw-min-w-[120px] md:tw-min-w-[200px] tw-inline-block"
              >
                {t("contactSale")}
              </Link>
            </div>
          </div>
          <div className="md:tw-col-span-1 tw-col-span-2 right-side">
            <div
              className="tw-rounded-md md:tw-rounded-none
             tw-bg-gray-300 tw-h-[243px] md:tw-h-[462px]"
            ></div>
            {/* <LottieRenderer /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
