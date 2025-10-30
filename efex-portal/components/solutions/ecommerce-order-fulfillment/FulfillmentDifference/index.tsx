"use client";
import efex from "@/public/images/icons/solutions/efex.svg";
import uncheckedCircle from "@/public/images/icons/solutions/uncheckedCircle.svg";
import checkedCircle from "@/public/images/icons/solutions/checkedCircle.svg";
import Image from "next/image";

const FulfillmentDifference = ({ lang }: { lang: any }) => {
  const FBM = [
    {
      title: lang.FBM.content[0].title,
      description: lang.FBM.content[0].description,
    },
    {
      title: lang.FBM.content[1].title,
      description: lang.FBM.content[1].description,
    },
    {
      title: lang.FBM.content[2].title,
      description: lang.FBM.content[2].description,
    },
  ];

  const FBE = [
    {
      title: lang.FBE.content[0].title,
      children: (
        <p className="mt-1 text-sm lg:text-base">
          {lang.FBE.content[0].description.first}{" "}
          <span className="text-[#0F62FE] font-medium">
            {lang.FBE.content[0].description.second}
          </span>{" "}
          {lang.FBE.content[0].description.third}{" "}
          <span className="text-brand-primary font-bold">
            {lang.FBE.content[0].description.fourth}
          </span>
        </p>
      ),
    },
    {
      title: lang.FBE.content[1].title,
      children: (
        <p className="mt-1 text-sm lg:text-base">
          {lang.FBE.content[1].description.first}
          <span className="text-[#0F62FE] font-medium">
            {" "}
            {lang.FBE.content[1].description.second}
          </span>
        </p>
      ),
    },
    {
      title: lang.FBE.content[2].title,
      children: (
        <p className="mt-1 text-sm lg:text-base">
          {lang.FBE.content[2].description.first}{" "}
          <span className="text-[#0F62FE] font-medium">
            {lang.FBE.content[2].description.second}
          </span>
          {lang.FBE.content[2].description.third}
        </p>
      ),
    },
  ];
  return (
    <section className="container px-4 py-6 lg:py-[60px] lg:px-0">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-center lg:text-4xl">
          {lang.title.first}
          <span className="inline-flex items-center">
            <Image
              src={efex}
              alt="efex"
              width={120}
              height={37}
              className="w-[79.083px] h-[24.0974px] mx-2 lg:mx-4 lg:w-[117px] lg:h-[37px] inline"
              quality={100}
            />
          </span>
          {lang.title.second}
        </h2>
        <p className="mt-1 text-sm text-ic-ink-5 lg:text-lg lg:leading-6">
          {lang.subTitle}
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-3 lg:mt-10 lg:flex-row lg:gap-6">
        <div className="lg:flex lg:flex-col lg:flex-1">
          <div className="lg:w-[505px] h-full">
            <div className="rounded-t-[20px] bg-ic-ink-2 py-3 lg:flex-1 lg:py-7">
              <h3 className="font-bold text-lg leading-6 text-center lg:text-2xl">
                {lang.FBM.title}
              </h3>
            </div>
            <div className="rounded-b-[19.7px] bg-ic-ink-1 p-4 flex flex-col gap-5 lg:px-10 lg:py-7 lg:gap-10 lg:flex-1">
              {FBM.map((item, index) => (
                <div key={index} className="flex">
                  <Image
                    src={uncheckedCircle}
                    alt="uncheckedCircle"
                    width={32}
                    height={32}
                    className="w-6 h-6 mt-[2px] lg:w-8 lg:h-8"
                    quality={100}
                  />
                  <div className="ml-3 lg:ml-4">
                    <h4 className="font-bold lg:text-lg lg:leading-6">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm lg:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-col">
          <div className="rounded-t-[20px] bg-[#001033] bg-[url('https://strapi-efex.ichiba.net/uploads/FBE_lg_e91ceb16ca.webp')] bg-cover py-3 lg:py-7">
            <h3 className="font-bold text-lg leading-6 text-center text-white lg:text-2xl">
              {lang.FBE.title}
            </h3>
          </div>
          <div className="rounded-b-[19.7px] bg-[#EEF5FB] p-4 flex flex-col gap-5 lg:px-10 lg:py-7 lg:gap-10 lg:flex-1">
            {FBE.map((item, index) => (
              <div key={index} className="flex">
                <Image
                  src={checkedCircle}
                  alt="checkedCircle"
                  width={32}
                  height={32}
                  className="w-6 h-6 mt-[2px] lg:w-8 lg:h-8"
                  quality={100}
                />
                <div className="ml-3 lg:ml-4">
                  <h4 className="font-bold text-brand-secondary lg:text-lg lg:leading-6">
                    {item.title}
                  </h4>
                  {item.children}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FulfillmentDifference;
