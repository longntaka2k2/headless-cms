import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const API = () => {
  const o = useTranslation("omnichannel-selling").t;

  return (
    <div
      className={clsx(
        "tw-rounded-lg tw-bg-[#F6F9FC] tw-px-4 tw-pt-5 lg:tw-pt-10 lg:tw-px-16 tw-mx-4 ",
        "lg:tw-flex lg:tw-container lg:tw-gap-10 lg:tw-items-center lg:tw-rounded-2xl",
      )}
    >
      <div>
        <h3 className="tw-text-lg tw-font-bold lg:tw-text-2xl">{o("howdo.api.title")}</h3>
        <div className="tw-mt-2 tw-text-sm lg:tw-mt-6 lg:tw-text-base">{o("howdo.api.content")}</div>
      </div>
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Group_1390_2216de8101_1_d1ab917fb4.svg"
        alt=""
        className="tw-relative tw-top-7 tw-mx-auto lg:tw-min-w-[415px]"
        width={303}
        height={209}
      />
    </div>
  );
};
export default API;
