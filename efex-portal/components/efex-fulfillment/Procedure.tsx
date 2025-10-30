"use client";
import clsx from "clsx";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const Procedure = ({ lang }: any) => {
  return (
    <>
      <div
        className={clsx(
          "relative bg-[url('https://strapi-efex.ichiba.net/uploads/BG_acc10f1ad1.svg')] py-6 lg:py-15 overflow-hidden"
        )}
      >
        <div className="container px-4 lg:px-0 text-white grid gap-5 lg:gap-10">
          <h2 className="container px-4 lg:px-0 text-2xl lg:text-4xl font-bold lg:w-[80%] mx-auto text-center lg:leading-12">
            {lang.heading}
            <span className="inline-flex items-center">
              <Image
                src="https://strapi-efex.ichiba.net/uploads/Group_1_106876638a.svg"
                width={114}
                height={36}
                alt="EFEX"
                className="w-[78px] h-[25px] lg:w-[110px] lg:h-9 ml-2"
              />
            </span>
          </h2>
          <Image
            src={
              "https://strapi-efex.ichiba.net/uploads/Process_ab949b3754.svg"
            }
            width={1200}
            height={600}
            alt="EFEX"
            className="mx-auto"
          />

          <div className="grid lg:grid-cols-4 gap-4">
            {lang.items.map((item: any, index: number) => (
              <div
                key={index}
                className="flex lg:flex-col gap-4 lg:gap-5 p-4 rounded-lg bg-[rgba(255,_255,_255,_0.08)]"
              >
                <div
                  className={clsx(
                    "min-w-[60px] h-15 lg:w-20 lg:h-20 lg:mx-auto rounded-lg bg-[rgba(206,204,204,0.08)]",
                    "flex items-center justify-center text-xl lg:text-3xl font-bold"
                  )}
                >
                  {item.numerical}
                </div>
                <div className="lg:text-center">
                  <h3 className="text-base lg:text-xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base">{item.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Procedure;
