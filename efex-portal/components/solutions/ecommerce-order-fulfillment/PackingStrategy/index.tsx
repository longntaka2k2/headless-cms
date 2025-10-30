"use client";
import clsx from "clsx";
import { DesktopDonutChart } from "./DesktopDonutChart";
import { DesktopPackingList } from "./DesktopPackingList";
import { MobileDonutChart } from "./MobileDonutChart";
import { MobilePackingList } from "./MobilePackingList";
import SvgIcon from "@/components/commons/IconSvg";

export type IconProps = Partial<{
  width: number;
  height: number;
  className: string;
}>;

const PackingStrategy = ({ lang }: { lang: any }) => {
  const strategies = [
    {
      title: lang.content[0].title,
      icon: (props: IconProps) => <SvgIcon icon="package-box" {...props} />,
      list: lang.content[0].list,
    },
    {
      title: lang.content[1].title,
      icon: (props: IconProps) => <SvgIcon icon="package-box-2" {...props} />,
      list: lang.content[1].list,
    },
  ];

  return (
    <section className="relative text-ic-ink-6">
      <div
        className={clsx(
          "hidden lg:block absolute -top-[214px] l-0 w-[497px] h-[468px] -z-10",
          "bg-[url('https://strapi-efex.ichiba.net/uploads/arrow_bg_f1ba0647d0.svg')]"
        )}
      />
      <div className="container">
        {/** mobile */}
        <div className="lg:hidden py-6 px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-center max-w-[240px] mx-auto">
              {lang.title}
            </h2>
            <p className="text-sm text-ic-ink-5 mt-1">{lang.subTitle}</p>
          </div>
          <div className="mt-5">
            <MobilePackingList strategies={strategies} />
          </div>
          <div className="mt-4">
            <MobileDonutChart lang={lang} />
          </div>
        </div>

        {/** desktop */}
        <div className="hidden lg:flex justify-between pt-20 pb-[60px] gap-8">
          <div>
            <DesktopDonutChart lang={lang} />
          </div>
          <div className="w-[532px]">
            <h2 className="text-4xl font-bold text-left max-w-xs">
              {lang.title}
            </h2>
            <p className="text-lg leading-6 text-left text-ic-ink-5 mt-1">
              {lang.subTitle}
            </p>
            <div className="mt-[60px]">
              <DesktopPackingList strategies={strategies} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackingStrategy;
