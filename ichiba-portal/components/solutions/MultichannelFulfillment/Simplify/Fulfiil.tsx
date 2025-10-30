import { useTranslation } from "next-i18next";
import Image from "next/image";
const Fulfill = () => {
  const s = useTranslation("multichannel-fulfill").t;

  return (
    <div className="tw-mt-4 lg:tw-mt-10 lg:tw-flex tw-items-start lg:tw-gap-[53px] lg:tw-container">
      <div>
        <h3 className="tw-font-bold tw-text-xl lg:tw-text-2xl">{s("simplify.fulfill.title")}</h3>
        {(
          s(`simplify.fulfill.content`, {
            returnObjects: true,
          }) as string[]
        ).map((value: any, index: number) => (
          <div key={index} className="tw-flex tw-gap-3 lg:tw-gap-6 tw-mt-4 lg:tw-mt-10">
            <div className="lg:tw-min-w-[6px] tw-min-w-[4px] tw-bg-[linear-gradient(180deg,#1369FE_0%,#47C4FF_100%)] "></div>
            <div>
              <div className="tw-text-sm lg:tw-text-base tw-pr-4">{value}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="tw-mt-5">
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Frame_1171275978_5e0aa0bb4c.png"
          alt="fulfill"
          width={741}
          height={434}
          className="lg:tw-max-w-[741px]"
        />
      </div>
    </div>
  );
};
export default Fulfill;
