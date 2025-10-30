"use client";
import clsx from "clsx";
import FormEFEXFulfillment from "./FormEFEXFulfillment";

export const countries = [
  {
    icon: "https://strapi-efex.ichiba.net/uploads/VN_90509915d1.svg",
    label: "Việt Nam",
    value: "Vietnam",
  },
  {
    icon: "https://strapi-efex.ichiba.net/uploads/JP_0171a481a8.svg",
    label: "Japan",
    value: "Japan",
  },
  {
    icon: "https://strapi-efex.ichiba.net/uploads/US_d420c94289.svg",
    label: "United State",
    value: "United State",
  },
  {
    icon: "https://strapi-efex.ichiba.net/uploads/TH_f9330e3abb.svg",
    label: "Thailand",
    value: "Thailand",
  },
  {
    icon: "https://strapi-efex.ichiba.net/uploads/SG_b72279fb22.svg",
    label: "Singapore",
    value: "Singapore",
  },
  {
    icon: "https://strapi-efex.ichiba.net/uploads/PH_ef8481b6b0.svg",
    label: "Philippines",
    value: "Philippines",
  },
  {
    icon: "https://strapi-efex.ichiba.net/uploads/Group_9778d1edf3.svg",
    label: "Other",
    value: "Other",
  },
];

const Committed = ({ lang }: any) => {
  return (
    <>
      <div
        className={clsx(
          "relative bg-[url('https://strapi-efex.ichiba.net/uploads/Hero_711e9f7aad.svg')] py-6 lg:py-15 bg-cover bg-bottom bg-no-repeat"
        )}
      >
        <div className="container grid lg:grid-cols-2 gap-4 lg:gap-10 px-4 lg:px-0">
          <div className="">
            <h1 className="text-2xl lg:text-5xl lg:leading-56 font-bold mb-2 lg:mb-3">
              {lang.heading[0]}
              <span className="text-brand-primary">{lang.heading[1]}</span>
              {lang.heading[2]}
              {lang.heading[3]}
              <span className="text-brand-primary">{lang.heading[4]}</span>
            </h1>
            <p className="text-sm lg:text-lg mb-4 lg:mb-10">
              {lang.subHeading}
            </p>

            <div className="grid grid-cols-2 gap-2 lg:gap-3 ">
              {lang.items.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex gap-3 items-center p-3 lg:px-5"
                >
                  <div className="w-[6px] rounded h-12 lg:h-[70px] bg-brand-primary"></div>
                  <div>
                    <p className="text-lg lg:text-2xl font-bold text-brand-secondary mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm lg:text-base">{item.subTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <FormEFEXFulfillment lang={lang.form} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Committed;
