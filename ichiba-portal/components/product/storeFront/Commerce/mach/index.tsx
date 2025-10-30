import { useTranslation } from "next-i18next";
import Image from "next/image";
const MACH = () => {
  const b = useTranslation("build-store-front").t;
  return (
    <div className="tw-mx-4 lg:tw-py-15 lg:tw-px-[100px] lg:tw-max-w-[1400px] lg:tw-mx-auto tw-px-3 tw-py-6 tw-bg-[#EFF6FB] tw-rounded-2xl tw-relative tw-z-1">
      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/breakline_white_2_dcab88dc17.svg"
        }
        alt="a"
        width={100}
        height={16}
        className="lg:tw-w-[140px] tw-absolute tw-top-0 tw-left-1/2 -tw-translate-x-1/2"
      />
      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/breakline_white_3_d651e7384b.svg"
        }
        alt="a"
        width={100}
        height={16}
        className="lg:tw-w-[140px] tw-absolute tw-top-[100%] tw-left-1/2 -tw-translate-x-1/2"
      />
      <Image
        src={"https://cms-strapi.ichiba.net/uploads/Ellipse_518_580dc5a9e5.svg"}
        alt="a"
        width={1400}
        height={759}
        className="lg:tw-w-full tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-z-[-1] tw-rounded-2xl"
      />
      <div className="lg:tw-text-center">
      <div className="tw-text-2xl tw-font-bold lg:tw-text-4xl">
        {b("commerceSite.mach.title")}
      </div>
      <div className="tw-mt-1 tw-font-bold lg:tw-text-2xl lg:tw-my-2">
        {b("commerceSite.mach.subtitle")}
      </div>
      <div className="tw-text-sm lg:tw-text-lg tw-text-[#666]">{b("commerceSite.mach.content.0")}</div>
      <div className="tw-text-sm lg:tw-text-lg tw-text-[#666]">{b("commerceSite.mach.content.1")}</div>
      </div>
      <div className="tw-grid tw-gap-3 lg:tw-flex lg:tw-gap-6 tw-mt-5 lg:tw-mt-10">
        <div className="tw-p-4 tw-rounded-lg lg:tw-rounded-2xl tw-bg-[linear-gradient(180deg,#5E79FF_13.02%,#1D39C4_100%)] tw-text-white">
          <Image
            src={b("commerceSite.mach.micro.icons") as string}
            alt={b("commerceSite.mach.micro.title")}
            width={100}
            height={100}
            className="tw-max-w-[60px]"
          />
          <div className="tw-font-bold tw-text-lg tw-mt-4 lg:tw-text-2xl">
            {b("commerceSite.mach.micro.title")}
          </div>
          <div className="tw-text-sm tw-mt-2 lg:tw-text-base">
            {b("commerceSite.mach.micro.content")}
          </div>
        </div>
        <div className="tw-grid tw-gap-3 lg:tw-gap-6">
          {(
          b(`commerceSite.mach.items`, {
            returnObjects: true,
          }) as string[]
        ).map((value : any , index : number) => (
          <div key={index} className="tw-bg-white tw-p-4 tw-rounded-lg lg:tw-rounded-2xl">
            <div className="tw-flex tw-gap-3 tw-items-start">
              <Image className="tw-max-w-10 lg:tw-max-15" src={value.icons} alt={value.title} width={60} height={60}/>
              <div>
              <div className="tw-text-lg tw-font-bold">{value.title}</div>
              <div className="tw-text-sm tw-mt-2">{value.content}</div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};
export default MACH;
