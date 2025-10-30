import clsx from "clsx";
import React, { useContext } from "react";
import { B2bTradingContext } from "../context";
import AspectRatio from "@/components/commons/AspectRatio";
import { useParams } from "next/navigation";
import EzImage from "@/components/commons/EzImage";

const B2bTradingHeader = () => {
  const { lang } = useContext(B2bTradingContext);
  const params = useParams();

  const breadcrumbs = [
    {
      label: lang.services?.header?.homePage,
      path: "/",
    },
    {
      label: lang.services?.b2bTrading?.title,
      path: "/services/b2b-trading",
    },
  ];

  return (
    <div
      className={clsx(
        "pt-20 lg:pt-28 bg-no-repeat bg-contain bg-top relative bg-brand-primary"
      )}
    >
      <div className="absolute inset-0 flex flex-col">
        <div
          className={clsx(
            "h-[208px] lg:h-[240px] bg-no-repeat bg-bottom bg-cover",
            "bg-[url('https://strapi-ezbuy.ichiba.net/uploads/header_title_7c888ce509.png')]",
            "lg:bg-[url('https://strapi-ezbuy.ichiba.net/uploads/Header_tittle_3cfda74e39.png')]"
          )}
        />
        <div className="flex-1 flex justify-end">
          <div
            className={clsx(
              "overflow-hidden relative h-full bg-no-repeat bg-left bg-cover",
              "lg:bg-[url('https://strapi-ezbuy.ichiba.net/uploads/header_ellipse_desktop_4a421c03a5.png')]"
            )}
            style={{
              paddingLeft: `35%`,
            }}
          />
        </div>
      </div>
      <div className={clsx(" text-white text-center relative py-10")}>
        <div className={clsx("absolute inset-x-0 bottom-0")}>
          <div
            className={clsx(
              "w-full h-[194px] bg-top bg-cover bg-no-repeat lg:bg-none lg:hidden",
              "bg-[url('https://strapi-ezbuy.ichiba.net/uploads/header_ellipse_03905a0ccb.png')]"
            )}
          />
        </div>
        <div className="px-4">
          <h1
            className={clsx(
              "font-semibold lg:font-medium",
              "leading-[30px] lg:leading-9 ",
              "text-xl md:text-2xl "
            )}
          >
            {lang.services?.b2bTrading?.title}
          </h1>
          <div className="text-sm">
            {breadcrumbs.map((x, idx) => (
              <>
                <span className={idx == 0 ? "opacity-60" : ""} key={idx}>
                  {x.label}
                </span>
                {breadcrumbs.length - 1 != idx ? <span>{"  /  "}</span> : ""}
              </>
            ))}
          </div>
        </div>
        <div className="pt-28 flex flex-col gap-5 lg:flex-row lg:items-center container">
          <div className="text-left sm:text-center px-4 lg:text-left flex-1">
            <h2 className="text-2xl font-black uppercase md:text-3xl lg:text-4xl">
              {lang.services?.b2bTrading?.subTitle}
            </h2>
            <p className="mt-4 text-sm">{lang.services?.b2bTrading?.content}</p>
            <div className="mt-8">
              <a
                target="_blank"
                href={`/${params.lang}/contact-sales`}
                className="px-4 py-3 uppercase min-w-[166px] bg-brand-secondary"
              >
                {lang.services?.b2bTrading?.btn?.contactUs}
              </a>
            </div>
          </div>
          <div className={clsx("relative w-[295px] sm:w-[558px] m-auto")}>
            <AspectRatio x={676} y={528}>
              <EzImage
                src="/uploads/header_image_58d6614e2e.png"
                alt="Ezbuy"
                fill
                className="w-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2bTradingHeader;
