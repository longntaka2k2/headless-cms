import clsx from "clsx";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useState } from "react";

const BuildStoreFront = () => {
  const t = useTranslation("technical-teams").t;
  const [active, setActive] = useState(0);
  return (
    <div className="tw-container tw-py-6 lg:tw-py-15">
      <h2 className="tw-mb-2 tw-text-2xl tw-font-bold lg:tw-text-4xl">
        {t("buildStorefront.title")}
      </h2>
      <p className="tw-mb-4 lg:tw-mb-5 tw-text-sm lg:tw-text-base">
        {t("buildStorefront.subTitle")}
      </p>

      <div
        className={clsx(
          "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171276518_2248b08a0e.svg)] tw-bg-cover tw-rounded-lg lg:tw-rounded-2xl",
          "tw-border-[0.3px] lg:tw-border tw-border-ic-ink-2 tw-pt-4 lg:tw-pt-[55px] tw-px-12",
        )}
      >
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Group_1171275894_d0d2e64947.svg"
          alt="#"
          width={877}
          height={405}
          className="tw-mx-auto"
        />
      </div>
      <div className="tw-grid lg:tw-grid-cols-3 tw-mt-4 lg:tw-mt-7">
        {(
          t(`buildStorefront.items`, {
            returnObjects: true,
          }) as string[]
        )?.map((value: any, index: number) => (
          <div
            key={index}
            className={clsx(
              "tw-border-l-[6px] lg:tw-border-t-[6px] lg:tw-border-l-0 tw-pl-4 lg:tw-pl-0 lg:tw-pt-4 tw-pb-4 lg:tw-pb-0",
              active === index ? "tw-border-brand-secondary" : "",
            )}
            onClick={() => setActive(index)}
          >
            <div className="tw-font-bold lg:tw-text-2xl">{value.title}</div>
            <div className="tw-text-sm tw-mt-1 lg:tw-mt-4 lg:tw-text-base">
              {value.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildStoreFront;
