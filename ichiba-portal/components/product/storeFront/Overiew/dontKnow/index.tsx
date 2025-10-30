import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
const DontKnow = () => {
  const b = useTranslation("build-store-front").t;

  return (
    <div className="lg:tw-px-0 tw-px-4">
      <div
        className={clsx(
          "lg:tw-my-20 tw-my-6 tw-container tw-rounded-2xl lg:tw-mx-auto",
          " lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/thumbnail_Frame_1171275927_2ee5ed9381.png)]",
          " tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171275928_9a2319e739.png)] tw-bg-cover tw-py-6 tw-px-4 lg:tw-px-[80px] lg:tw-py-10",
        )}
      >
        <div className="tw-grid tw-gap-8 lg:tw-flex lg:tw-justify-between">
          <div>
            <div className="tw-text-xl tw-font-bold lg:tw-text-3xl lg:tw-w-[50%]">
              {b("dontKnow.title")}
            </div>
            <div className="tw-mt-3 tw-text-sm">{b("dontKnow.content")}</div>
            <Link
            target="_blank"
              href={"/contact-sales"}
              className="tw-no-underline tw-px-6 tw-py-3 tw-rounded-lg tw-bg-[#F57C00] tw-border tw-border-[#F57C00] tw-text-sm lg:tw-text-base tw-w-max tw-mt-4 tw-inline-block tw-text-white"
            >
              {b("dontKnow.contact")}
            </Link>
          </div>
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Group_d1a8f8b486.svg"
            alt="dontKnow"
            width={334}
            height={203}
          />
        </div>
      </div>
    </div>
  );
};
export default DontKnow;
