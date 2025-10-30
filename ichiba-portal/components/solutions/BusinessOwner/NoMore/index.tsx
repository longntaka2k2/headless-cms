import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
const NoMore = () => {
  const b = useTranslation("business-owner").t;

  return (
    <div className="tw-pb-4 tw-px-4 lg:tw-flex lg:tw-justify-between lg:tw-container lg:tw-px-0 lg:tw-py-8">
      <div className="lg:tw-max-w-[486px] lg:tw-items-center">
        <div className="tw-font-bold tw-text-2xl lg:tw-text-4xl">
          {b("noMore.title")}
        </div>
        <div className="tw-text-sm lg:tw-text-lg lg:tw-mt-2">
          {b("noMore.content")}
        </div>
        <Link
          href={"/contact-sales"}
          target="_blank"
          rel="noreferrer noopener canonical"
          className={clsx(
            "tw-no-underline tw-block tw-mt-4 tw-p-3 lg:tw-px-10 lg:tw-py-4 tw-rounded-lg lg:tw-text-base ",
            "lg:tw-mt-10 tw-bg-[#F57C00] tw-text-white tw-text-sm tw-font-medium tw-w-max",
          )}
        >
          {b("noMore.contactSale")}
        </Link>
      </div>
      <Image
        src={"https://cms-strapi.ichiba.net/uploads/Group_6_4e228f4ca8.png"}
        alt="contactSale"
        width={537}
        height={311}
        className="tw-mt-4 lg:tw-mt-0 lg:tw-w-[588px]"
      />
    </div>
  );
};

export default NoMore;
