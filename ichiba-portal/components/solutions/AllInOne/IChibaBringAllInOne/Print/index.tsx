import { useTranslation } from "next-i18next";
import Image from "next/image";

const Print = () => {
  const a = useTranslation("all-in-one").t;

  return (
    <div className="tw-mx-4 tw-my-5 lg:tw-flex lg:tw-container lg:tw-gap-[104px] lg:tw-items-center">
      <div className="tw-border tw-border-[#DDD] tw-rounded-lg tw-bg-[#EFF3F8] tw-px-4 tw-pb-4 lg:tw-px-10 lg:tw-pb-10">
        <Image
          src={"https://cms-strapi.ichiba.net/uploads/image_2_1_b607509fb9.png"}
          className="tw-mx-auto tw-w-[246px] lg:tw-w-[372px]"
          alt=""
          width={246}
          height={253}
        />
        <h3 className="tw-font-bold tw-text-lg tw-mt-3 lg:tw-mt-8 lg:tw-text-2xl">{a("iChibaBring.print.title")}</h3>
        <div className="tw-pl-6 tw-grid tw-gap-4 tw-mt-4">
          {(
            a(`iChibaBring.print.content`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div className="tw-text-sm lg:tw-text-base" key={index}>
              {value}
            </div>
          ))}
        </div>
      </div>
      <div className="lg:tw-max-w-[508px]">
        <h3 className="tw-font-bold tw-text-lg tw-mt-3 lg:tw-text-2xl">{a("iChibaBring.allow.title")}</h3>
        <div className="tw-pl-6 tw-grid tw-gap-2 lg:tw-gap-5 tw-mt-4 lg:tw-mt-6">
          {(
            a(`iChibaBring.allow.items`, {
              returnObjects: true,
            }) as string[]
          ).map((value : any , index : number) => (
            <div className="tw-flex lg:tw-grid tw-px-4 tw-py-3 lg:tw-py-5 lg:tw-px-6 tw-gap-4 tw-items-start tw-border tw-border-[#ddd] tw-rounded-lg" key={index}>
              <Image src={value.icons} className="tw-w-[40px] lg:tw-w-[48px]" alt="" width={40} height={40} />
              <div className="tw-text-sm lg:tw-text-base">{value.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Print;
