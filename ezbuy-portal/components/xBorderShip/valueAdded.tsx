import clsx from "clsx";
import Image from "next/image";
import EzImage from "../commons/EzImage";

const ValueAdded = ({ lang }: any) => {
  const { valueAdded } = lang.services.xBorderShip;
  const contents = [
    {
      img: "/uploads/Rectangle_6529_9f8cf0401e.png",
      ...valueAdded.contents[0],
    },
    {
      img: "/uploads/Rectangle_6529_1_60b9c030ab.png",
      ...valueAdded.contents[1],
    },
    {
      img: "/uploads/Rectangle_6529_2_8b4657373f.png",
      ...valueAdded.contents[2],
    },
    {
      img: "/uploads/Rectangle_6529_3_31981771ef.png",
      ...valueAdded.contents[3],
    },
    {
      img: "/uploads/Rectangle_6529_4_19cf66fb54.png",
      ...valueAdded.contents[4],
    },
  ];
  return (
    <section className="pt-14 lg:py-[120px] container">
      <div className="flex flex-col gap-2 lg:gap-6 items-center pb-6 lg:pb-12 px-4 lg:px-0">
        <h2 className="uppercase font-black text-2xl lg:text-4xl">
          {valueAdded.heading}
        </h2>
        <p className="text-sm lg:text-base">{valueAdded.subHeading}</p>
      </div>
      <div className="flex lg:justify-center gap-4 lg:gap-6 w-full lg:flex-wrap items-stretch overflow-auto [&::-webkit-scrollbar]:hidden snap-proximity snap-x">
        {contents.map((x, idx) => (
          <article
            key={idx}
            className={clsx(
              "flex flex-col gap-6 p-4 lg:py-4 justify-start content-center lg:max-w-[31%]",
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
export default ValueAdded;
