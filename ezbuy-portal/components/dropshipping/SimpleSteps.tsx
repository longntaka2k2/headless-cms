"use client";
import { isThisMinute } from "date-fns";
import EzImage from "../commons/EzImage";

const SimpleSteps = ({ lang }: { lang: any }) => {
  const { heading, items } = lang.services.dropshipping.simpleSteps;

  return (
    <section className="pt-6 lg:pt-15 bg-[url('https://strapi-ezbuy.ichiba.net/uploads/More_than_just_picking_packing_and_shipping_4d05eff13e.svg')] bg-cover bg-no-repeat">
      <div className="container px-4">
        <h2 className="text-[28px] lg:text-4xl font-black uppercase lg:text-center pb-6 lg:mb-10 text-white">
          {heading}
        </h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {items.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] border border-[#F5F5F5]"
              >
                <div className="mb-6 w-20 h-20 rounded-full bg-[#F2F4F8] flex items-center justify-center">
                  <EzImage src={item.icon} width={57} height={57} alt="step" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-4">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base">{item.subTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default SimpleSteps;
