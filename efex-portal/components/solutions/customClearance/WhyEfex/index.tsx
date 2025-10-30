import EzImage from "@/components/commons/EzImage";
import logo from "@/public/images/icons/logo-mini.svg";
import Dizitization from "./Digitization";
import Clearance from "./customClearance";
import PayAs from "./PayAs";
import Specialists from "./Specialists";
import clsx from "clsx";

const WhyEfex = ({ lang }: any) => {
  return (
    <section className="py-6 lg:py-15">
      <h2 className="mb-5 lg:mb-15 text-center">
        {lang.heading[0]}<EzImage src={logo} className="inline-block mb-2" alt="" />
        {lang.heading[1]}
      </h2>
      <div className="flex flex-col gap-6 lg:gap-15">
        <Dizitization lang={lang.digitization} />
        <Clearance lang={lang.customClearance} />
        <PayAs lang={lang.payAs} />
        <Specialists lang={lang.specialists} />
        <div className="container px-4 lg:px-0">
          <div className={clsx("flex flex-col lg:flex-row gap-6 lg:gap-15")}>
            {[{ ...lang.stay }, { ...lang.secure }].map(
              (x: any, idx: number) => (
                <div className="flex-1" key={idx}>
                  <EzImage
                    src={"/uploads/Image_13_885b80a0f2.png"}
                    alt=""
                    width={570}
                    height={306}
                    className="mb-4 lg:mb-6"
                  />
                  <h3 className="mb-2 lg:mb-3">{x.title}</h3>
                  <p className="text-sm lg:text-base">{x.des}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyEfex;
