
import EzImage from "@/components/commons/EzImage";
import accelerate from "@/public/images/customerClearance/accelerate.svg";
import simplify from "@/public/images/customerClearance/simplify.svg";
import unify from "@/public/images/customerClearance/unify.svg";
import clsx from "clsx";

const Capabilities = ({ lang }: any) => {
  const icons = [simplify, accelerate, unify];
  return (
    <section className="lg:pb-[200px]">
      <div
        className={clsx(
          "mx-auto lg:max-w-[1470px]  py-6 lg:py-15 lg:px-[135px] ",
          "bg-[url('https://strapi-efex.ichiba.net/uploads/Marketing_Service_2_5876e1cefb.png')]",
          "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/Marketing_Service_1_4f27547898.png')]",
          "bg-cover bg-no-repeat"
        )}
      >
        <h2 className="text-center text-2xl lg:text-4xl px-4 mb-5 lg:mb-10">
          {lang.heading}
        </h2>
        <div className="flex overflow-auto no-scrollbar gap-4 lg:gap-6 lg:mb-[-200px] px-4 snap-x  snap-mandatory">
          {lang.contents.map((x: any, idx: number) => (
            <div
              className={clsx(
                "bg-white shadow-3 card-fx lg:flex-1",
                "px-3 py-6 lg:p-6 rounded-2xl min-w-[280px]  m-0.5 snap-center"
              )}
              key={idx}
            >
              <EzImage
                src={icons[idx]}
                className="mx-auto mb-7"
                alt=""
                width={100}
                height={85}
              />
              <h3 className="font-bold text-center">{x.title}</h3>
              <p className="lg:text-base text-sm">{x.des}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Capabilities;
