import clsx from "clsx";
import Image from "next/image";
import EzImage from "../commons/EzImage";

const ServiceFlow = ({ lang }: any) => {
  const { services } = lang.services.xBorderEcom;
  const contents = [
    {
      img: "/uploads/F1_3428a5e4f1.svg",
      ...services.contents[0],
    },
    {
      img: "/uploads/F1_1_ae69e37e9e.svg",
      ...services.contents[1],
    },
    {
      img: "/uploads/F1_2_6d64c8d437.svg",
      ...services.contents[2],
    },
    {
      img: "/uploads/F1_6_d8489cd1a2.svg",
      ...services.contents[3],
    },
    {
      img: "/uploads/F1_3_ae5be627a9.svg",
      ...services.contents[4],
    },
    {
      img: "/uploads/F1_5_44788fde59.svg",
      ...services.contents[5],
    },
    {
      img: "/uploads/F1_4_d255097005.svg",
      ...services.contents[6],
    },
  ];
  return (
    <section className="pt-14 lg:py-[120px] container">
      <div className="flex flex-col gap-2 lg:gap-6 items-center pb-6 lg:pb-12 px-4 lg:px-0">
        <h2 className="uppercase font-black text-2xl lg:text-4xl">
          {services.heading}
        </h2>
        <p className="text-sm lg:text-base">{services.subHeading}</p>
      </div>
      <div className="flex lg:justify-center gap-4 lg:gap-6 w-full lg:flex-wrap items-stretch overflow-auto [&::-webkit-scrollbar]:hidden snap-proximity snap-x">
        {contents.map((x, idx) => (
          <article
            key={idx}
            className={clsx(
              "flex flex-col gap-6 p-4 lg:py-4 justify-start content-center lg:max-w-[22%]",
              "transition-all duration-200 hover:scale-[1.015] ease-out gap-6 snap-center",
              "border-1 hover:shadow-1 m-1 p-1",
              "shadow-5 bg-[rgba(255,_255,_255,_0.85)] min-w-[244px] "
            )}
          >
            <EzImage src={x.img} alt={x.title} width={344} height={200} />
            <div>
              <h3 className="font-bold ">{x.title}</h3>
              <p className="text-sm">{x.des}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default ServiceFlow;
