import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import bannerDesktop from "@/public/icons/brand-commerce/bannerpc.png";
import banneMobile from "@/public/icons/brand-commerce/bannermobile.png";
import Image from "next/image";

const BannerBrand = () => {
  const router = useRouter();
  const { t } = useTranslation("brand-commerce");

  return (
    <div className="tw-px-4 tw-pt-6 lg:tw-p-0 lg:tw-pt-10 tw-container">
      <div className="tw-text-center lg:tw-max-w-[900px] tw-mx-auto">
        <h1 className="tw-font-bold tw-text-2xl lg:tw-text-5xl">
          <div>Brand Commerce</div>
          {t("banner.title")}
        </h1>
        <div className="">{t("banner.subtitle")}</div>
      </div>
      <div className="tw-flex mx-auto tw-justify-between lg:tw-justify-center gap-4 tw-mt-6 lg:tw-mt-8">
        <Link
          href={`https://id.ichiba.net/Account/Register?redirectUrl=https%3A%2F%2Forg.ichiba.${
            router.locale === "en" ? "net" : "vn"
          }`}
          className="tw-bg-brand-primary tw-rounded-lg tw-text-white tw-no-underline tw-text-sm lg:tw-text-xl tw-py-3 tw-w-[171px] lg:tw-w-[220px] tw-text-center"
        >
          {t("banner.learn")}
        </Link>
        <Link
          href={`/contact-sales`}
          className="tw-border tw-border-brand-primary tw-rounded-lg tw-text-brand-primary tw-no-underline tw-text-sm lg:tw-text-xl tw-py-3 tw-w-[171px] lg:tw-w-[220px] tw-text-center"
        >
          {t("banner.contact")}
        </Link>
      </div>
      <div className="lg:tw-mt-12 tw-mt-6">
        <Image
          src={banneMobile}
          alt={"Brand Commerce"}
          className=" lg:tw-hidden"
        />
        <Image
          src={bannerDesktop}
          alt={"Brand Commerce"}
          className="tw-hidden lg:tw-block"
        />
      </div>
    </div>
  );
};
export default BannerBrand;
