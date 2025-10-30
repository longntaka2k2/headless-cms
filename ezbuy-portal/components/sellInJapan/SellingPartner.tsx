import clsx from "clsx";
import EzImage from "../commons/EzImage";

const SellingPartner = ({ lang }: any) => {
  const { heading, subHeading } = lang.services.sellInJapan.selling;

  const contents = [
    {
      image: "/uploads/Rectangle_6529_9_764727b384.png",
      title: "Amazon Japan",
    },
    // {
    //   image: "/uploads/Rectangle_6529_10_6784206216.png",
    //   title: "Rakuten",
    // },
    // {
    //   image: "/uploads/Rectangle_6529_11_8b5baedc71.png",
    //   title: "Yahoo! Shopping",
    // },
    {
      image: "/uploads/Rectangle_6529_12_371f955c1f.png",
      title: "Mercari",
    },
    // {
    //   image: "/uploads/Rectangle_6529_13_0ab9c44714.png",
    //   title: "Yahoo! Auction",
    // },
    {
      image: "/uploads/Rectangle_6529_14_93e0ee3214.png",
      title: "Locondo",
    },
    {
      image: "/uploads/Rectangle_6529_15_eec8aade24.png",
      title: "Muji",
    },
    {
      image: "/uploads/Rectangle_6529_16_fc187cb1d4.png",
      title: "Panpare Mall",
    },
    ,
    {
      image: "/uploads/Rectangle_6529_17_035fd54ad5.png",
      title: "JMTY",
    },
    ,
    {
      image: "/uploads/Rectangle_6529_18_2e0e3364e2.png",
      title: "Plaza Style",
    },
  ];
  return (
    <section className=" pt-14 container px-4 ">
      <div className="flex flex-col gap-2 lg:gap-6 items-center pb-10 lg:pb-12 lg:px-0">
        <h2 className="uppercase font-black text-2xl lg:text-4xl">{heading}</h2>
        <p className="text-sm lg:text-base lg:w-[80%] text-center">
          {subHeading}
        </p>
      </div>
      <div className="overflow-auto [&::-webkit-scrollbar]:hidden snap-mandatory snap-x scroll-px-10">
        <div className="flex flex-wrap w-max lg:w-full justify-center gap-y-4">
          {contents.map((x, idx) => (
            <article
              key={idx}
              className={clsx(
                "lg:min-w-0 snap-center w-fit",
                "transition-all duration-200 hover:scale-[1.015] ease-out gap-6 snap-center",
                "hover:shadow-1 m-1",
                "bg-[rgba(255,_255,_255,_0.85)]"
              )}
            >
              <EzImage
                src={x!.image}
                alt={x!.title}
                className="mb-6 object-contain h-[100px] object-center"
                width={276}
                height={148}
                quality={100}
              />
              <div className="text-center">
                <h3 className="font-semibold">{x!.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SellingPartner;
