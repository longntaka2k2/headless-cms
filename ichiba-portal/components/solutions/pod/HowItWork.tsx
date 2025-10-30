import { useTranslation } from "next-i18next";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";

export const HowItWork = () => {
  const { t } = useTranslation("pod");
  const router = useRouter();
  return (
    <section
      className={clsx("tw-container tw-px-4 xl:tw-px-0 tw-py-6 lg:tw-py-15")}
    >
      <p className="tw-text-center tw-font-medium tw-text-sm lg:tw-text-base tw-text-brand-primary tw-uppercase tw-mb-2">
        {t("howItWork.label")}
      </p>
      <h2 className="tw-relative tw-w-full tw-text-2xl lg:tw-text-4xl tw-font-bold tw-text-center tw-leading-8 lg:tw-leading-[48px] tw-mb-6 lg:tw-mb-12">
        {t("howItWork.heading.0")}
        <span className="tw-relative">
          {t("howItWork.heading.1")}
          <Image
            src={"https://cms-strapi.ichiba.net/uploads/Circle_90d031d23c.svg"}
            width={178}
            height={106}
            className={clsx(
              "tw-absolute tw-top-[50%] tw-translate-y-[-50%] tw-left-0 -tw-z-1",
              "tw-w-[114px] tw-h-14 lg:tw-w-[178px] lg:tw-h-[106px]",
            )}
            alt="#"
          />
        </span>
      </h2>

      <Image
        src={
          router.locale === "en"
            ? "https://cms-strapi.ichiba.net/uploads/Diagrams1_c381407922.svg"
            : "https://cms-strapi.ichiba.net/uploads/Diagrams_3dc7e3662c.svg"
        }
        width={1200}
        height={775}
        alt="imgYouAreRunningDES"
        className="tw-hidden lg:tw-block tw-mx-auto"
      />
      <Image
        src={
          router.locale === "en"
            ? "https://cms-strapi.ichiba.net/uploads/Step_guide_e16b7498c0.svg"
            : "https://cms-strapi.ichiba.net/uploads/Diagrams2_2d1d2977ac.svg"
        }
        width={358}
        height={1356}
        alt="imgYouAreRunningMB"
        className="lg:tw-hidden tw-mx-auto"
      />
    </section>
  );
};

export default HowItWork;
