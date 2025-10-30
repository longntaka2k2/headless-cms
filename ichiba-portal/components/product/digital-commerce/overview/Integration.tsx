import clsx from "clsx";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const LottieRenderer = dynamic(
  () => import("@/components/common/lottieRenderer"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);

const Integration = () => {
  const { t } = useTranslation("digital");

  return (
    <section
      className={clsx(
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/BG_86c8df40af.png')]",
        "md:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/BG_desktop_5d15cd9040.png')]",
        "tw-bg-center tw-bg-cover",
        "tw-px-4 tw-py-6 lg:tw-px-0 lg:tw-py-16",
      )}
    >
      <div className="tw-container tw-text-center tw-flex tw-flex-col tw-items-center">
        <h2 className="tw-mb-2 tw-font-bold tw-text-xl lg:tw-text-4xl lg:tw-mb-6">
          {t("integration")}
        </h2>
        <LottieRenderer
          path="https://cms-strapi.ichiba.net/uploads/block_2_0766508209_fae233cfd8.json"
          className="lg:tw-h-[682px]"
        />
        <Link
          className="tw-cta tw-cta-primary tw-px-4 tw-py-[14px]"
          href={"/products/integrations"}
        >
          {t("cta.viewAllInteg")}
        </Link>
      </div>
    </section>
  );
};

export default Integration;
