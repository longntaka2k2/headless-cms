import accelerate from "@/public/images/customerClearance/accelerate.svg";
import simplify from "@/public/images/customerClearance/simplify.svg";
import unify from "@/public/images/customerClearance/unify.svg";
import clsx from "clsx";
import Image from "next/image";
import { removeAccent } from "@/utils/ultils";

const ManagementSoftware = ({ lang }: any) => {
  const icons = [simplify, accelerate, unify];
  return (
    <div id={removeAccent(lang?.label)} className="py-10 lg:py-24 mb-[200px]">
      <div
        className={clsx(
          "mx-auto lg:max-w-[1470px] bg-[url('https://strapi-efex.ichiba.net/uploads/Marketing_Service_1_92c9d7ae5f.svg')]",
          "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/Marketing_Service_266d58df2e.svg')]",
          "bg-cover bg-no-repeat lg:rounded-3xl",
          "pt-6 pl-5 lg:px-32 h-[363px] lg:h-[444px]"
        )}
      >
        <p className="text-base lg:text-lg mb-2 lg:mb-5 text-center">
          {lang?.label}
        </p>
        <h3 className="text-xl lg:text-3xl font-semibold text-center mb-5 lg:mb-8">
          <span className="text-brand-primary">#4</span> {lang?.title}
        </h3>

        <div className="container p-1 flex xl:grid xl:grid-cols-3 overflow-auto no-scrollbar gap-4 xl:gap-6 px-4">
          {lang.contents.map((x: any, idx: number) => (
            <div
              className={clsx(
                "bg-white flex-1 p-4 rounded-2xl shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)]",
                "flex flex-col gap-4 min-w-[320px]"
              )}
              key={idx}
            >
              <Image
                src={x.image}
                alt="#"
                width={338}
                height={236}
                className="w-[280px] h-[180px] lg:w-[338px] lg:h-[235px]"
              />
              <h3 className="text-base lg:text-xl font-bold mb-2">{x.title}</h3>
              <div className="flex flex-col gap-2">
                {x.content.map((y: any, index: number) => (
                  <li key={index} className="text-sm lg:text-base">
                    {y}
                  </li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ManagementSoftware;
