import { clsx } from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const Compatible = () => {
  const p = useTranslation("pos").t;

  return (
    <div
      className={clsx(
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/0784b1_9368be18d0db41a5be73131f3e1517de_mv2_1_2412356c12.png)]",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/0784b1_9368be18d0db41a5be73131f3e1517de_mv2_1_1f267e2c3e.png)] tw-bg-cover",
      )}
    >
      <div className="tw-container">
      <div className="tw-py-6 tw-px-4 lg:tw-pt-15 tw-text-center">
        <h4 className="tw-text-2xl tw-font-bold lg:tw-text-4xl">{p("compatible.title")}</h4>
        <div className="tw-mt-2 tw-text-sm lg:tw-text-base">{p("compatible.subtitle")}</div>
      </div>
      <div className="tw-overflow-x-auto tw-pb-4">
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Frame_1171276577_e29487e052.png"
          }
          width={1580}
          height={678}
          alt=""
          className="tw-min-w-[733px]"
        />
      </div>
      </div>
    </div>
  );
};

export default Compatible;
