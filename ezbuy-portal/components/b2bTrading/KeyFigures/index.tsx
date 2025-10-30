import React, { useContext } from "react";
import { B2bTradingContext } from "../context";
import clsx from "clsx";
import CountUp from "react-countup";

const KeyFigures = () => {
  const { lang } = useContext(B2bTradingContext);

  const figures = lang.services?.b2bTrading?.keyFigures?.items || [];

  return (
    <div
      className={clsx(
        "bg-no-repeat bg-contain bg-bottom container",
        "bg-[url('https://strapi-ezbuy.ichiba.net/uploads/key_figures_bg_0f30bc1730.png')]"
      )}
    >
      <div className="px-4">
        <h3 className="text-2xl text-center font-black uppercase md:text-3xl lg:text-4xl">
          {lang.services?.b2bTrading?.keyFigures?.title}
        </h3>
      </div>
      <div
        className={clsx(
          "pt-10 bg-no-repeat bg-cover pb-14 bg-center xl:mt-20",
          "bg-[url('https://strapi-ezbuy.ichiba.net/uploads/key_figures_bg_bottom_41d786b364.png')]"
        )}
      >
        <div className="grid grid-cols-2 gap-3 px-4 xl:grid-cols-4 items-stretch">
          {figures.map((item, idx) => (
            <div
              key={idx}
              className={clsx(
                "p-3 shadow-6 text-center bg-white w-[166px] xl:w-[276px] max-w-full m-auto xl:p-6 h-full",
                {
                  "xl:-translate-y-10": idx % 2 !== 0,
                }
              )}
            >
              <p className="text-xl text-brand-secondary font-black">
                <CountUp end={Number(item.value)} />
                {item.unit}
              </p>
              <p
                className="text-xs xl:text-base"
                dangerouslySetInnerHTML={{
                  __html: item.label || "",
                }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFigures;
