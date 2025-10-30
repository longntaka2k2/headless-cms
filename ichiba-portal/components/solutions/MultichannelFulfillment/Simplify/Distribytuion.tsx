import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const Distribution = () => {
  const s = useTranslation("multichannel-fulfill").t;

  return (
    <div className={clsx("tw-p-4 lg:tw-py-15 lg:tw-px-0 tw-bg-black tw-bg-[url(https://cms-strapi.ichiba.net/uploads/641dbd42118dea1144e78b7c_bg_jpg_1_3624a0805e.png)] tw-bg-cover tw-mt-6 ", "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/641dbd42118dea1144e78b7c_bg_jpg_1_1_db356af0c0.png)]")}>
      <div className="tw-grid lg:tw-grid-cols-2 tw-gap-5 lg:tw-gap-6 lg:tw-container">
      <div className="tw-bg-[rgba(75,75,80,0.25)] tw-p-3 lg:tw-pt-8 lg:tw-px-6 tw-rounded-lg lg:tw-rounded-xl tw-overflow-hidden">
        <h3 className="tw-font-bold tw-text-xl lg:tw-text-2xl tw-text-white">
          {s("simplify.distribution.title")}
        </h3>
        <ul className="tw-list-disc tw-mt-2 lg:tw-mt-6 tw-list-outside">
          {(
            s(`simplify.distribution.content`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <li
              key={index}
              className="tw-text-white tw-opacity-80 tw-text-sm lg:tw-text-base tw-mt-2 lg:tw-mt-4 tw-relative tw-right-3"
            >
              {value}
            </li>
          ))}
        </ul>
        <div className="tw-flex tw-relative tw-justify-center tw-items-center tw-top-10 lg:tw-top-15">
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Group_1171275907_f34d76b8f7.svg"
            }
            alt="simplify"
            width={45}
            height={153}
            className="lg:tw-w-[76px]"
          />
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/6284a7b450fa03a4fe60af4b_Flywheel_1_f0fbc01673.svg"
            }
            alt="simplify"
            width={191}
            style={{
              transitionTimingFunction: "ease",
              transformStyle: "preserve-3d",
            }}
            height={192}
            className={clsx("dom-sroll", "tw-transition-all lg:tw-w-[324px]")}
          />
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Group_1171275906_b7cefb7735.svg"
            }
            alt="simplify"
            width={45}
            height={153}
            className="lg:tw-w-[76px]"
          />
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Group_1171275908_93d1401aaa.svg"
            }
            alt="simplify"
            width={105}
            height={102}
            className="tw-absolute lg:tw-w-[176px]"
          />
        </div> 
      </div>
      <div className="tw-bg-[rgba(75,75,80,0.25)] tw-p-3 lg:tw-pt-8 lg:tw-px-6 tw-rounded-lg lg:tw-rounded-xl tw-overflow-hidden">
        <h3 className="tw-font-bold tw-text-xl lg:tw-text-2xl tw-text-white">
          {s("simplify.allocate.title")}
        </h3>
        <ul className="tw-list-disc tw-mt-2 lg:tw-mt-6 tw-list-outside">
          {(
            s(`simplify.allocate.content`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <li
              key={index}
              className="tw-text-white tw-opacity-80 tw-text-sm lg:tw-text-base tw-mt-2 lg:tw-mt-4 tw-relative tw-right-3"
            >
              {value}
            </li>
          ))}
        </ul>
        <Image src="https://cms-strapi.ichiba.net/uploads/Frame_1171275985_ca19f41ef1.svg" alt="allocate" width={588} height={285} className="tw-w-full lg:tw-mt-[120px] tw-mt-10" />
      </div>
      </div>
    </div>
  );
};

export default Distribution;
