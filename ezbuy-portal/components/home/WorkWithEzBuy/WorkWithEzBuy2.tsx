"use client";

import Image from "next/image";
import clsx from "clsx";

const WorkWithEzBuy2 = ({ lang }: { lang: any }) => {
  const { workWithEzbuy } = lang.home;
  const contents = [
    {
      ...workWithEzbuy.article[0],
      image:
        "https://strapi-ezbuy.ichiba.net/uploads/global_shipping_9bc20d2be3.png",
    },
    {
      ...workWithEzbuy.article[1],
      image:
        "https://strapi-ezbuy.ichiba.net/uploads/automation_83cd05d7d9.png",
    },
    {
      ...workWithEzbuy.article[2],
      image: "https://strapi-ezbuy.ichiba.net/uploads/ecommerce_ef6e7f0b5e.png",
    },
    {
      ...workWithEzbuy.article[3],
      image: "https://strapi-ezbuy.ichiba.net/uploads/tracking_b2283cfbfd.png",
    },
    {
      ...workWithEzbuy.article[4],
      image: "https://strapi-ezbuy.ichiba.net/uploads/japanese_146c383b8a.png",
    },
    {
      ...workWithEzbuy.article[5],
      image:
        "https://strapi-ezbuy.ichiba.net/uploads/fast_delivery_1_95d920924e.png",
    },
    {
      ...workWithEzbuy.article[6],
      image:
        "https://strapi-ezbuy.ichiba.net/uploads/custom_clearance_ea7311ac33.png",
    },
    {
      ...workWithEzbuy.article[7],
      image:
        "https://strapi-ezbuy.ichiba.net/uploads/home_delivery_c2cac490ad.png",
    },
  ];

  return (
    <section className="py-16 bg-[#F5f5f5]">
      <div className="container mx-auto">
        <div className=" flex flex-col gap-14 w-full">
          <div className="flex flex-col gap-6 text-center ">
            <div
              className={clsx(
                "uppercase font-black",
                "text-2xl leading-9",
                "lg:text-4xl lg:leading-54 text-center",
                "content-center justify-center "
              )}
            >
              {workWithEzbuy.heading}
            </div>
            {/* <div className="self-stretch relative leading-[150%]">
              <p className="m-0 text-sm lg:text-base">
                <span className="lg:block">{workWithEzbuy.subHeading}</span>
                <span>{workWithEzbuy.subHeading1}</span>
              </p>
            </div> */}
          </div>
        </div>
        <div className="py-6 rounded-lg">
          <div
            className={clsx(
              "flex md:grid grid-cols-1 grid-rows-1 md:grid-cols-4  gap-6 w-full",
              "overflow-auto [&::-webkit-scrollbar]:hidden snap-proximity snap-x scroll-px-10"
            )}
          >
            {contents.map((content, idx) => (
              <div
                key={idx}
                className={clsx(
                  "flex flex-col  items-center p-2 min-w-[220px] md:min-w-0",
                  "transition-all duration-200 hover:scale-[1.015] ease-out gap-6 snap-center",
                  "border-1 hover:shadow-1 m-1", "shadow-5 ",
                  "bg-[rgba(255,_255,_255,_0.85)]"
                )}
              >
                <Image
                  src={content.image}
                  alt={content.title}
                  width={90}
                  height={90}
                  quality={100}
                />
                <div>
                  <p className="font-black text-center">{content.title}</p>
                  <p>{content.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkWithEzBuy2;
