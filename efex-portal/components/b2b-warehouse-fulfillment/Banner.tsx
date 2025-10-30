"use client";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";

const BannerB2B = ({ lang }: any) => {
  const locale = usePathname().slice(1, 3);
  return (
    <div
      className={clsx(
        "relative px-4 lg:px-0 py-6 lg:py-[70px] overflow-hidden",
        "bg-[url('https://strapi-efex.ichiba.net/uploads/Background_f5c63fca63.svg')] bg-no-repeat bg-cover"
      )}
    >
      <Image
        src={
          "https://strapi-efex.ichiba.net/uploads/Group_1171275969_2_a6581c9f5f.svg"
        }
        width={677}
        height={718}
        className={clsx(
          "absolute top-[70px] left-[-140px] -z-1",
          "w-[207px] h-[256px] lg:w-[677px] lg:h-[718px]"
        )}
        alt="bg"
      />
      <Image
        src={
          "https://strapi-efex.ichiba.net/uploads/Group_1171275969_2_a6581c9f5f.svg"
        }
        width={677}
        height={718}
        className={clsx(
          "absolute bottom-0 right-[-5%] -z-1",
          "w-[207px] h-[256px] lg:w-[677px] lg:h-[718px]"
        )}
        alt="bg"
      />
      <div className="container text-center">
        <div className="bg-[linear-gradient(90deg,_#00194f_0%,_#ce0202_100%)] w-max p-[2px] rounded-[100px] mx-auto mb-4 lg:mb-10">
          <div className="flex items-center gap-2 py-2 px-4 rounded-[100px] bg-white">
            <Image
              src={
                "https://strapi-efex.ichiba.net/uploads/Logo_Efex_81c3cc5eb8.svg"
              }
              width={75}
              height={24}
              className="w-[50px] h-[16px] lg:w-[75px] lg:h-[24px]"
              alt="Logo EFEX"
            />
            <Image
              src={
                "https://strapi-efex.ichiba.net/uploads/Frame_427318759_fb6e56f08a.svg"
              }
              width={24}
              height={24}
              className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]"
              alt="icon"
            />
            <Image
              src={"https://strapi-efex.ichiba.net/uploads/Logo_357dec21b2.svg"}
              width={85}
              height={24}
              className="w-[57px] h-[16px] lg:w-[85px] lg:h-[24px]"
              alt="Logo Ichiba"
            />
          </div>
        </div>

        <h1 className="headingGradient text-2xl lg:text-5xl lg:leading-56 mb-2 lg:mb-3">
          {lang.heading}
        </h1>
        <p className="text-base lg:text-2xl mb-4 lg:mb-6 font-medium">
          {lang.label}
        </p>
        <p className="text-sm lg:text-base mb-9 lg:mb-12 lg:w-[80%] mx-auto">
          {lang.subHeading}
        </p>

        <Image
          src={"https://strapi-efex.ichiba.net/uploads/Video_ea97340e60.svg"}
          width={1198}
          height={599}
          alt="Image"
        />
      </div>
    </div>
  );
};

export default BannerB2B;
