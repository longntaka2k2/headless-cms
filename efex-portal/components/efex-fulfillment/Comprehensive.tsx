"use client";
import clsx from "clsx";
import Image from "next/image";

const Comprehensive = ({ lang }: any) => {
  return (
    <>
      <div className="relative py-6 lg:py-15 grid gap-6 lg:gap-10 overflow-hidden">
        <h2 className="container px-4 lg:px-0 text-2xl lg:text-4xl font-bold lg:w-[45%] mx-auto text-center lg:leading-12">
          {lang.heading}
          <span className="inline-flex items-center">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Group_1_8315320315.svg"
              width={114}
              height={36}
              alt="EFEX"
              className="w-[78px] h-[25px] lg:w-[110px] lg:h-9 ml-2"
            />
          </span>
        </h2>
        <div className="max-w-[1600px] w-full lg:rounded-xl mx-auto py-6 lg:pb-10 lg:pt-15 bg-[#F0F3F7] overflow-hidden">
          <div className="container px-4 lg:px-0 grid lg:grid-cols-2 gap-6 lg:gap-36">
            <div className="grid gap-7 lg:gap-14">
              <div className="relative rounded-xl w-full max-w-[328px] h-[194px] lg:max-w-[512px] lg:h-[306px] mx-auto">
                <Image
                  src={lang.items[0].image}
                  width={512}
                  height={306}
                  alt="EFEX"
                  className="rounded-xl object-cover w-full h-full"
                />
                <div className="absolute top-7 left-[50%] translate-x-[-50%] bg-[#00194F] opacity-10 w-[360px] h-[181px] lg:w-[594px] lg:h-[308px]"></div>
              </div>
              <div className="flex gap-3 lg:gap-5 items-start">
                <Image
                  src={lang.items[0].icon}
                  width={40}
                  height={40}
                  alt="EFEX"
                  className="w-7 h-7 lg:w-10 lg:h-10"
                />
                <div>
                  <h3 className="text-base lg:text-xl font-bold mb-1 lg:mb-3">
                    {lang.items[0].title}
                  </h3>
                  <p className="text-sm lg:text-base">
                    {lang.items[0].subTitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-7 lg:gap-14">
              <div className="relative rounded-xl w-full max-w-[328px] h-[194px] lg:max-w-[512px] lg:h-[306px] mx-auto">
                <div className="absolute right-[-16px] lg:right-[-130px] top-[50%] translate-y-[-50%] bg-[#DBE8F5] w-[152px] h-[236px] lg:w-[356px] lg:h-[373px]"></div>
                <Image
                  src={lang.items[1].image}
                  width={512}
                  height={306}
                  alt="EFEX"
                  className="rounded-xl object-cover w-full h-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
                />
              </div>
              <div className="flex gap-3 lg:gap-5 items-start">
                <Image
                  src={lang.items[1].icon}
                  width={40}
                  height={40}
                  alt="EFEX"
                  className="w-7 h-7 lg:w-10 lg:h-10"
                />
                <div>
                  <h3 className="text-base lg:text-xl font-bold mb-1 lg:mb-3">
                    {lang.items[1].title}
                  </h3>
                  <p className="text-sm lg:text-base">
                    {lang.items[1].subTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 lg:px-0 relative pb-[150px] lg:pb-16">
          <div className="px-4">
            <div className="relative">
              <Image
                src={lang.items[2].image}
                width={1055}
                height={524}
                alt="EFEX"
                className="mx-auto"
              />
              <div className="absolute -bottom-4 lg:-bottom-10 -right-4 lg:-right-10 rounded-xl bg-[rgba(0,_25,_79,_0.80)] w-[164px] h-[164px] lg:w-[408px] lg:h-[408px] -z-1"></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-4 lg:left-0 w-[302px] lg:w-[556px] rounded-xl p-4 lg:p-12 bg-[linear-gradient(226deg,_#F6FAFF_7.9%,_#EDEEFF_81.05%)] flex gap-3 lg:gap-5 items-start">
            <Image
              src={lang.items[2].icon}
              width={40}
              height={40}
              alt="EFEX"
              className="w-7 h-7 lg:w-10 lg:h-10"
            />
            <div>
              <h3 className="text-base lg:text-xl font-bold mb-1 lg:mb-3">
                {lang.items[2].title}
              </h3>
              <p className="text-sm lg:text-base">{lang.items[2].subTitle}</p>
            </div>
          </div>
        </div>

        <div className="container px-4 lg:px-0 relative pb-[232px] lg:pb-0">
          <Image
            src={lang.items[3].image}
            width={515}
            height={355}
            alt="EFEX"
            className="w-[302px] h-[198px] lg:w-[515px] lg:h-[355px]"
          />
          <div
            className={clsx(
              "absolute right-0 top-24 lg:top-[50%] lg:translate-y-[-50%] bg-white -z-1",
              "flex flex-col lg:flex-row border-2 border-brand-primary-active rounded-2xl p-4 lg:py-10 lg:px-20 w-full lg:max-w-[700px]"
            )}
          >
            <div className="md:w-[500px] xl:w-[4%] h-28 lg:h-auto"></div>
            <div className="flex gap-3 lg:gap-5 items-start">
              <Image
                src={lang.items[2].icon}
                width={40}
                height={40}
                alt="EFEX"
                className="w-7 h-7 lg:w-10 lg:h-10"
              />
              <div>
                <h3 className="text-base lg:text-xl font-bold mb-1 lg:mb-3">
                  {lang.items[2].title}
                </h3>
                <p className="text-sm lg:text-base">{lang.items[2].subTitle}</p>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={
            "https://strapi-efex.ichiba.net/uploads/Group_19150_600e256b47.svg"
          }
          width={602}
          height={546}
          alt="EFEX"
          className="absolute left-[-20%] top-[60%] translate-y-[-60%] -z-1 hidden lg:block"
        />

        <Image
          src={
            "https://strapi-efex.ichiba.net/uploads/Group_19150_600e256b47.svg"
          }
          width={602}
          height={546}
          alt="EFEX"
          className="absolute right-[-10%] bottom-[-15%] -z-1 hidden lg:block"
        />
      </div>
    </>
  );
};

export default Comprehensive;
