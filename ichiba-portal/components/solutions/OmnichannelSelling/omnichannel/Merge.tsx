import { clsx } from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const Merge = () => {
  const o = useTranslation("omnichannel-selling").t;

  return (
    <div className="tw-mx-4 lg:tw-mx-0 ">
      <div
        className={clsx(
          "lg:tw-rounded-2xl tw-rounded-lg tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)]",
          "lg:tw-flex lg:tw-max-w-[1060px] tw-justify-between lg:tw-mx-auto tw-items-center tw-bg-white",
        )}
      >
        <div className="tw-px-4 tw-py-6 lg:tw-p-10">
          <h3 className="tw-font-bold tw-text-lg lg:tw-text-2xl">
            {o("howdo.merge.title")}
          </h3>
          <div className="tw-mt-2 tw-text-sm lg:tw-mt-4 lg:tw-text-base lg:tw-max-w-[483px]">{o("howdo.merge.content")}</div>
        </div>
        <div
          className={clsx(
            "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/0784b1_9368be18d0db41a5be73131f3e1517de_mv2_1_549a2f3881.png)]",
            " tw-p-7 tw-rounded-b-lg lg:tw-rounded-r-2xl tw-bg-cover",
          )}
        >
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Group_8d8f1b6039.svg"
            alt=""
            width={396}
            height={362}
          />
        </div>
      </div>
    </div>
  );
};

export default Merge;
