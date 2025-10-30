import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

const WeAre = () => {
  const g = useTranslation("global-selling").t;

  return (
    <div className="tw-px-4 lg:tw-container tw-mt-6 lg:tw-my-20">
      <div className="lg:tw-flex tw-grid tw-gap-4 tw-justify-between">
        <h2 className="tw-text-2xl tw-font-bold lg:tw-text-4xl lg:tw-max-w-[612px]">
          {g("weAre.heading")}
        </h2>
        <Link
          target="_blank"
          href={"/contact-sales"}
          className="tw-no-underline tw-text-center tw-rounded-lg tw-text-sm lg:tw-text-base tw-text-white lg:tw-font-medium tw-bg-[#F57C00] tw-border tw-border-[#F57C00] tw-w-full tw-max-w-[170px] tw-py-3 lg:tw-w-[180px] tw-h-max"
        >
          {g("weAre.contact")}
        </Link>
      </div>
      <div className="lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-15 lg:tw-mt-10">
        <div className="tw-mt-6 lg:tw-mt-0 tw-relative tw-mx-auto tw-w-max">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/6267c2ed51bc4c9ad5d0d4b2_Frame_13297_p_500_1_b33b5bec66.png"
            alt=""
            width={358}
            height={280}
            className="tw-rounded-lg lg:tw-hidden"
          />
          <Image
            src="https://cms-strapi.ichiba.net/uploads/6267c2ed51bc4c9ad5d0d4b2_Frame_13297_p_500_1_8a48b6657e.png"
            alt=""
            width={542}
            height={532}
            className="tw-rounded-lg lg:tw-block tw-hidden"
          />
          <div className="tw-absolute tw-top-0 tw-p-4 lg:tw-p-6 tw-text-white tw-text-sm lg:tw-text-lg tw-opacity-80">
            {g("weAre.content")}
          </div>
        </div>
        <div className="tw-mt-4 lg:tw-mt-0">
          <div className="tw-text-base tw-font-bold tw-text-[#389E0D] lg:tw-text-lg">
            IChiba OnePlatform completely solved my worry named “Delivery”.{" "}
          </div>
          <div className="tw-mt-2 tw-text-sm lg:tw-text-base">
            Instead of spending too much time tracking each shipping unit on
            each website, I can now track my packages right on Ship4P screen
            with just a fex clicks. Thanks to IChiba, I have reduced lots of
            time and effort in tracking orders to have more time to research and
            develop products. I hope IChiba OnePlatform can connect more
            carriers in the world in the future.
          </div>
          <div className="tw-mt-4 lg:tw-mt-5 tw-flex tw-gap-3">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Avatar_823752d816.svg"
              alt=""
              className="lg:tw-w-[44px]"
              width={36}
              height={36}
            />
            <div>
              <div className="lg:tw-text-base tw-text-sm tw-font-bold">
                Mrs.Hoai Thuong
              </div>
              <div className="lg:tw-text-sm tw-text-xs  tw-text-[#666]">
                Omnichannel Retailer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeAre;
