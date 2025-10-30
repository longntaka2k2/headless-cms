import clsx from "clsx";
import EzImage from "../commons/EzImage";
import StrategicIcon from "@/public/images/services/sellInJapan/warehouse/strategic.svg";
import InventoryIcon from "@/public/images/services/sellInJapan/warehouse/inventory.svg";
import orderProcessingIcon from "@/public/images/services/sellInJapan/warehouse/orderProcessing.svg";
import ShippingIcon from "@/public/images/services/sellInJapan/warehouse/shipping.svg";

const WarehouseFullfilment = ({ lang }: any) => {
  const { contents, heading, subHeading } =
    lang.services.sellInJapan.fulfillment;
  const contentItems = [
    {
      img: StrategicIcon,
      ...contents[0],
    },
    {
      img: InventoryIcon,
      ...contents[1],
    },
    {
      img: orderProcessingIcon,
      ...contents[2],
    },
    {
      img: ShippingIcon,
      ...contents[3],
    },
  ];
  return (
    <section className="py-[120px]  container">
      <div className="flex flex-col gap-2 lg:gap-6 items-center pb-6 lg:pb-12 px-4 lg:px-0">
        <h2 className="uppercase font-black text-2xl lg:text-4xl">{heading}</h2>
        <p className="text-sm lg:text-base">{subHeading}</p>
      </div>
      <div className="flex lg:justify-center gap-4 lg:gap-6 w-full lg:flex-wrap items-stretch overflow-auto [&::-webkit-scrollbar]:hidden snap-proximity snap-x">
        {contentItems.map((x, idx) => (
          <article
            key={idx}
            className={clsx(
              "flex flex-col gap-6 p-6 justify-start content-start lg:max-w-[22%]",
              "transition-all duration-200 hover:scale-[1.015] ease-out gap-6 snap-center",
              "border-1 hover:shadow-1 m-1 p-1",
              "shadow-5 bg-[rgba(255,_255,_255,_0.85)] min-w-[244px] "
            )}
          >
            <EzImage
              src={x.img}
              alt={x.title}
              width={40}
              height={40}
              className="self-center"
            />
            <div>
              <h3 className="font-bold text-center">{x?.title}</h3>
              <p className="text-sm">{x?.des}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default WarehouseFullfilment;
