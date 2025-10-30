"use client";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Making = ({ lang }: any) => {
  const locale = usePathname().slice(1, 3);
  return (
    <div className="px-4">
      <div
        className={clsx("relative lg:px-0 pt-15 lg:pt-[100px] overflow-hidden")}
      >
        <div className="relative w-full lg:max-w-[1340px] mx-auto h-[320px] sm:h-[250px] border-2 border-brand-primary-active rounded-3xl px-4">
          <div className="absolute top-[-16%] lg:top-[-23%] left-[50%] translate-x-[-50%] text-center w-[90%] md:w-[80%] bg-white">
            <h2 className="text-2xl font-bold text-center lg:text-4xl mb-1 lg:mb-2">
              {lang.heading[0]}
              <span className="inline-flex items-center">
                <Image
                  src={
                    "https://strapi-efex.ichiba.net/uploads/Logo_Efex_81c3cc5eb8.svg"
                  }
                  alt="efex"
                  width={120}
                  height={37}
                  className="w-[79.083px] h-[24.0974px] mx-2 lg:mx-4 lg:w-[117px] lg:h-[37px] inline"
                  quality={100}
                />
              </span>
              {lang.heading[1]}
            </h2>
            <p className="text-sm lg:text-base mb-4 lg:mb-6 px-4 mx-auto">
              {lang.subHeading}
            </p>
            <div>
              <Link
                href={"https://app.ichiba.net/welcome"}
                target="_blank"
                className={clsx(
                  "p-3 rounded-lg flex justify-center items-center bg-brand-primary text-sm font-medium cursor-pointer",
                  "text-white w-40 hover:bg-brand-primary-active transition-all mx-auto"
                )}
              >
                {lang.textBtn}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container relative px-4 lg:px-0">
        <div className="translate-y-[-100px] p-6 lg:py-12 lg:px-15 rounded-[20px] border-[10px] border-[#203556] bg-[#0D1D37]">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-16">
            {lang.steps.map((item: any, index: number) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-white flex flex-col justify-between"
              >
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <Image
                  src={item.image}
                  width={186}
                  height={188}
                  className="mx-auto"
                  alt="image"
                />
              </div>
            ))}
          </div>
        </div>
        <Image
          src={
            "https://strapi-efex.ichiba.net/uploads/Logo_Efex_db30508ff6.svg"
          }
          width={201}
          height={180}
          className="absolute bottom-10 -right-24 -z-1 hidden lg:block"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Making;
