import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const BannerStoreFront = () => {
  const b = useTranslation("build-store-front").t;
  return (
    <div
      className="tw-bg-cover"
      style={{
        backgroundImage: `url(https://cms-strapi.ichiba.net/uploads/Frame_1171275922_c4b941241f.svg)`,
      }}
    >
      <div className="lg:tw-py-20 tw-py-8 tw-container lg:tw-px-0 tw-px-4">
        <h1 className="tw-text-center lg:tw-text-5xl tw-text-2xl tw-font-bold tw-animate-showOn ">
          {b("banner.title.0")} <br />
          {b("banner.title.1")}
          <span className="tw-text-[#F57C00] tw-animate-changeColor tw-ease tw-delay-500">
            {b("banner.title.2")}
          </span>
          {b("banner.title.3")}
          <span className="tw-text-[#F57C00] tw-animate-changeColor tw-ease tw-delay-500">
            {b("banner.title.4")}
          </span>
        </h1>
        <div className="lg:tw-mt-6 tw-text-center lg:tw-text-base tw-text-sm tw-animate-showOn">
          <div>{b("banner.subtitle.0")} </div>
          <div>{b("banner.subtitle.1")}</div>
        </div>
        <div className="tw-mt-10 tw-flex tw-justify-center tw-text-center lg:tw-text-base tw-text-sm tw-font-medium">
          <Link
            target="_blank"
            href={"https://org.ichiba.net/"}
            className="tw-no-underline tw-block lg:tw-max-w-[200px] tw-w-full tw-max-[170px] tw-py-[13px] tw-border tw-rounded-lg tw-border-[#F57C00] tw-bg-[#F57C00] tw-text-white"
          >
            {b("banner.getStart")}
          </Link>
        </div>
        <div className="tw-animate-shaking2 lg:tw-block tw-hidden tw-bg-[url(https://cms-strapi.ichiba.net/uploads/BG_1_1cd253a168.svg)] tw-bg-cover lg:tw-py-10 tw-rounded-2xl lg:tw-mt-20 tw-relative tw-overflow-hidden">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Fulfillment_process_min_3fcb9dbb63.svg"
            loading="lazy"
            alt="thumbnail_Fulfillmen"
            quality={50}
            className="tw-max-w-[813px] tw-mx-auto "
            width={813}
            height={492}
          />
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Fulfillment_process_1_b047e11286.png"
            alt="Fulfillment_process"
            className="tw-absolute tw-bottom-[-60px] tw-left-6"
            width={230}
            height={316}
          />
          <div className="tw-absolute tw-right-10 tw-top-[150px] tw-px-3 tw-py-2 tw-rounded-full tw-text-sm tw-bg-white">
            <FontAwesomeIcon icon={faLock} className="tw-text-[#0F62FE]" />{" "}
            https://www.yourstore.com
          </div>
        </div>
        <div className="lg:tw-hidden tw-mt-6">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_427318530_fb7927a712.png"
            alt="Fulfillment_process"
            className="tw-w-full"
            quality={100}
            width={358}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};
export default BannerStoreFront;
