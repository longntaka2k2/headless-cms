import clsx from "clsx";
import EzImage from "../commons/EzImage";

const ShippingPartner = ({ lang }: any) => {
  const { heading, contents, subHeading } = lang.services.sellInJapan.shipping;

  const contentss = [
    {
      ...contents[0],
      image: "/uploads/Rectangle_6529_5_fe16a08fc6.png",
    },
    {
      ...contents[1],
      image: "/uploads/Rectangle_6529_6_f823f93d09.png",
    },
    {
      ...contents[2],
      image: "/uploads/Rectangle_6529_7_cc5587ddfa.png",
    },
    {
      ...contents[3],
      image: "/uploads/Rectangle_6529_8_efee7eb74c.png",
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
      <div className="overflow-auto [&::-webkit-scrollbar]:hidden snap-proximity snap-x scroll-px-10">
        <div className="grid grid-cols-4 w-max lg:w-full justify-between gap-6">
          {contentss.map((x, idx) => (
            <article
              key={idx}
              className={clsx(
                "w-[276px] lg:min-w-0 snap-center",
                "transition-all duration-200 hover:scale-[1.015] ease-out gap-6 snap-center",
                "border-1 hover:shadow-1 m-1",
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
export default ShippingPartner;
