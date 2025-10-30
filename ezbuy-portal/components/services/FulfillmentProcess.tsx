import clsx from "clsx";
import EzImage from "../commons/EzImage";

const contents = (contents: any) => [
  {
    img: "/uploads/receiving_aab1c38e43.svg",
    ...contents[0],
  },
  {
    img: "/uploads/put_away_6bdd3a959a.svg",
    ...contents[1],
  },
  {
    img: "/uploads/picking_And_Packing_42890e1647.svg",
    ...contents[2],
  },
  {
    img: "/uploads/Shipping_903908ae61.svg",
    ...contents[3],
  },
  {
    img: "/uploads/Returns_8cd425c6e3.svg",
    ...contents[4],
  },
];
const FulfillmentProcess = ({ lang }: any) => {
  return (
    <section className="py-14 lg:py-32 container">
      <h2 className="text-center text-2xl lg:text-4xl font-black uppercase">
        {lang.services.warehouseFulfillment.process.heading}
      </h2>
      <div
        className={clsx(
          "pt-8 flex justify-between lg:gap-6 overflow-auto  px-4",
          "[&::-webkit-scrollbar]:hidden snap-proximity snap-x scroll-px-10"
        )}
      >
        {contents(lang.services?.warehouseFulfillment?.process.contents).map(
          (x, idx) => (
            <article
              className={clsx(
                "lg:flex-1 flex flex-col gap-6 justify-start items-center min-w-[220px] lg:min-w-0",
                "transition-all duration-200 hover:scale-[1.015] ease-out gap-6 snap-center",
                "border-1 hover:shadow-1 m-1",
                "shadow-5 p-1",
                "bg-[rgba(255,_255,_255,_0.85)]"
              )}
              key={idx}
            >
              <EzImage
                src={x.img}
                alt={x.title}
                width={150}
                height={150}
                quality={100}
              />
              <div className="text-center">
                <h3 className="font-bold text-base">{x.title}</h3>
                <p>{x.des}</p>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
};
export default FulfillmentProcess;
