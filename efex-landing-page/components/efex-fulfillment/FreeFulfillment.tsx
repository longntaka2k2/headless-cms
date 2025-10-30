"use client";
import clsx from "clsx";
import Image from "next/image";

const FreeFulfillment = ({ lang }: any) => {
  return (
    <>
      <div
        className={clsx(
          "bg-[url('https://strapi-efex.ichiba.net/uploads/Quote_dc28a5eddd.svg')] bg-cover bg-bottom bg-no-repeat mb-[34px] lg:mb-[74px]"
        )}
      >
        <div className="container relative flex gap-4 lg:gap-20 px-4 lg:px-0 text-white">
          <div className="w-[75%] ml-auto py-6 lg:py-[46px] z-1">
            <p className="text-sm lg:text-2xl font-bold mb-2">{lang.subHeading}</p>
          </div>

          <Image
            src={"https://strapi-efex.ichiba.net/uploads/EFEX_b9cc269ed0.svg"}
            width={187}
            height={177}
            alt="#"
            className={clsx(
              "absolute bottom-[-34px] lg:bottom-[-74px] left-4 lg:left-[50px]",
              "w-20 h-20 lg:w-[186px] lg:h-44"
            )}
          />
        </div>
      </div>
    </>
  );
};

export default FreeFulfillment;
