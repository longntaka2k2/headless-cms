import clsx from "clsx";
import EzImage from "../commons/EzImage";

const ShoppingSite = ({ lang }: any) => {
  const { site } = lang.services.xBorderEcom;

  const contents = [
    // {
    //   ...site.contents[0],
    //   image: "/uploads/rakuten_2_ab899e7999.png",
    // },
    // {
    //   ...site.contents[1],
    //   image: "/uploads/yahoo_Japan_97ff3d2de0.png",
    // },
    // {
    //   ...site.contents[2],
    //   image: "/uploads/yahoo_Auc_cc0a0bb6e4.png",
    // },
    {
      ...site.contents[3],
      image: "/uploads/mer_0835661194.png",
    },
    {
      ...site.contents[4],
      image: "/uploads/zozo_Town_a1ec491391.png",
    },
    {
      ...site.contents[5],
      image: "/uploads/suru_93fecd9d15.png",
    },
    {
      ...site.contents[6],
      image: "/uploads/ebay_2_79f9cd6ecc.png",
    },
    {
      ...site.contents[7],
      image: "/uploads/jomashop_22616c2702.png",
    },
  ];
  return (
    <section className="pt-[120px] pb-14 container px-4 ">
      <div className="flex flex-col gap-2 lg:gap-6 items-center pb-10 lg:pb-12 lg:px-0">
        <h2 className="uppercase font-black text-2xl lg:text-4xl">
          {site.heading}
        </h2>
        <p className="text-sm lg:text-base lg:w-[80%] text-center">{site.subHeading}</p>
      </div>
      <div className="overflow-auto [&::-webkit-scrollbar]:hidden snap-proximity snap-x scroll-px-10">
        <div className="grid grid-cols-3 grid-rows-2 w-max lg:w-full justify-between gap-6">
          {contents.map((x, idx) => (
            <article
              key={idx}
              className={clsx(
                "w-[276px] lg:min-w-0 snap-center",
                "transition-all duration-200 hover:scale-[1.015] ease-out gap-6 snap-center",
                "border-1 hover:shadow-1 m-1 mx-auto",
                "shadow-5 ",
                "bg-[rgba(255,_255,_255,_0.85)]"
              )}
            >
              <EzImage
                src={x.image}
                alt={x.title}
                className="mb-6 object-cover h-[128px] object-center"
                width={276}
                height={148}
                quality={100}
              />
              <div className="text-center p-2">
                <h3 className="font-semibold">{x.title}</h3>
                <p className="text-sm">{x.des}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ShoppingSite;
