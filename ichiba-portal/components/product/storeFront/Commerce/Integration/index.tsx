import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

const Intergration = () => {
  const b = useTranslation("build-store-front").t;
  return (
    <div className="tw-mt-5 lg:tw-mb-10 lg:tw-mt-20 tw-py-6 lg:tw-py-0 tw-px-4 lg:tw-px-0 tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Background_1764cdfc4b.svg)]">
      <div className="lg:tw-container ">
        <div className="lg:tw-flex tw-justify-between tw-items-center">
          <div className="tw-text-center">
            <div className="tw-font-bold tw-text-2xl tw-mb-4 lg:tw-mb-10 lg:tw-text-4xl">
              {b("commerceSite.integration.title")}
            </div>
            <Link
              href={"/products/integrations"}
              className="tw-no-underline tw-rounded-lg tw-text-white tw-bg-[#F57C00] tw-px-5 tw-py-3 tw-font-medium tw-text-sm tw-w-max tw-mx-auto tw-block lg:tw-text-base"
            >
              {b("commerceSite.integration.viewAll")}
            </Link>
          </div>
          <div className="tw-rounded-lg tw-bg-[#EFF1F5] tw-mt-6 lg:tw-mt-0">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Aniamtion_da10fadff4.svg"
              }
              width={993}
              height={800}
              alt="integration"
              className="lg:tw-max-w-[800px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intergration;
