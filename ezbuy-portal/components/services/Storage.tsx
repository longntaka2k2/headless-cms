import clsx from "clsx";
import { SubPanel } from "./SubPanel";

const Storage = ({ lang }: any) => {
  return (
    <section>
      <div
        className={clsx(
          "bg-cover bg-center bg-no-repeat md:h-[587px] h-[279px]",
          "lg:mb-[-15%]"
        )}
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 25, 79, 0.40) 0%, #00194F 100%), url('https://strapi-ezbuy.ichiba.net/uploads/bg_Storage_af8c27856d.png'), lightgray 0px -230.144px / 100% 140.79%",
        }}
      >
        <div
          className={clsx(
            "flex flex-col gap-4 justify-end lg:justify-start",
            "container py-9  lg:pt-[94px]",
            "text-white md:w-[80%] px-4 h-full lg:h-auto"
          )}
        >
          <h2 className="uppercase font-black text-2xl lg:text-4xl">
            {lang?.services.warehouseFulfillment?.storage?.heading}
          </h2>
          <p className="text-sm lg:text-base">
            {lang?.services.warehouseFulfillment?.storage?.subHeading}
          </p>
        </div>
      </div>
      <SubPanel lang={lang} />
    </section>
  );
};

export default Storage;
