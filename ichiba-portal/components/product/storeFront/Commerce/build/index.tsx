import { useTranslation } from "next-i18next";
import Link from "next/link";

const Build = () => {
  const b = useTranslation("build-store-front").t;

  return (
    <div className="tw-py-6 lg:tw-py-10 tw-px-4 tw-bg-[url(https://cms-strapi.ichiba.net/uploads/y_X0s_O7_HJ_0ft_W_Dbx7_B_Freb29_AAI_1_bd1c0f2baf.png)]">
      <div className="tw-text-center">
        <div className="tw-text-xl tw-font-bold tw-mb-6 lg:tw-mb-8 lg:tw-text-3xl">
          {b("commerceSite.build.title")}
        </div>
        <Link href={'https://org.ichiba.net/'} className="tw-no-underline tw-inline-block tw-py-3 tw-px-5 tw-rounded-lg tw-bg-[#F57C00] tw-text-white tw-text-sm lg:tw-text-base tw-font-medium">{b("commerceSite.build.button")}</Link>
      </div>
    </div>
  );
};
export default Build;
