import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const GetStarted = () => {
  const { t } = useTranslation("pos");
  const strapiDomain = "https://cms-strapi.ichiba.net";
  return (
    <div className="tw-container tw-mb-4 lg:tw-mb-15">
      <div
        className={clsx(
          "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Light_Background_2_1_7bf7934784.svg)] tw-bg-cover",
          "tw-rounded-2xl lg:tw-rounded-3xl tw-flex tw-flex-col lg:tw-flex-row tw-gap-10 tw-justify-between tw-items-center",
          "tw-py-6 tw-px-5 lg:tw-px-10 lg:tw-pb-0 tw-bg-bg-light",
        )}
      >
        <div className="lg:tw-w-[60%]">
          <h2 className="tw-text-xl lg:tw-text-3xl tw-font-bold tw-mb-4">
            {t("getStarted.title")}
          </h2>
          <p className="tw-mb-8 tw-text-sm lg:tw-text-base">
            {t("getStarted.subtitle")}
          </p>
          <Link href={"/contact-sales"}>
            <button
              // onClick={handleContactSale}
              className="tw-text-ic-white-6 tw-w-[200px] tw-py-3 tw-px-3 tw-rounded-lg tw-bg-brand-primary"
            >
              {t("getStarted.contact")}
            </button>
          </Link>
        </div>
        <Image
          src={`${strapiDomain}` + "/uploads/Group_27ae28d015.svg"}
          height={324}
          width={197}
          alt="slide"
          className="tw-w-[323px] tw-h-[196px] tw-mt-15"
        />
      </div>
    </div>
  );
};

export default GetStarted;
