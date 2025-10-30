import clsx from "clsx";
import { useTranslation } from "next-i18next";

const GoOmnichannel = () => {
  const o = useTranslation("omnichannel-selling").t;

  return (
    <div
      className={clsx(
        "tw-py-6 tw-px-4 lg:tw-py-15 tw-bg-[url(https://cms-strapi.ichiba.net/uploads/641dbd42118dea1144e78b7c_bg_jpg_1_d09d10fab9.png)] tw-mx-4 lg:tw-mx-0",
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/641dbd42118dea1144e78b7c_bg_jpg_1_76a00da50e.png)] tw-bg-cover tw-bg-no-repeat tw-bg-[#221031]",
      )}
    >
      <div className="tw-text-white lg:tw-container ">
        <div className="tw-mx-auto lg:tw-max-w-[800px] lg:tw-text-center">
        <h2 className="tw-text-2xl tw-font-bold lg:tw-text-4xl">
          {o("goOmnichannel.title")}
        </h2>
        <div className="tw-mt-2 tw-text-sm tw-opacity-80 lg:tw-text-base">{o("goOmnichannel.content")}</div>
        </div>
        <div className="tw-mt-4 tw-grid tw-gap-6 lg:tw-mt-8 lg:tw-grid-cols-3 lg:tw-gap-10">
          {(
          o(`goOmnichannel.items`, {
            returnObjects: true,
          }) as string[]
        ).map((value : any , index : number) => (
          <div className="" key={index}>
            <div className="tw-flex tw-items-start tw-gap-2 lg:tw-grid">
              <div className="tw-text-[#61A3FF] lg:tw-text-lg">0{index + 1}</div>
              <div className="tw-text-white tw-font-bold lg:tw-text-lg">{value.title}</div>
            </div>
            <div className="tw-mt-2 lg:tw-text-base">{value.content}</div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};
export default GoOmnichannel;
