import clsx from "clsx";
import Image from "next/image";

const InventoryMangement = ({ lang }: any) => {
  const contents = [
    {
      img: "/uploads/Multi_warehouse_management_2237fd615d.png",
      ...lang.services.warehouseFulfillment.inventory.contents[0],
    },
    {
      img: "/uploads/Real_time_inventory_tracking_33f20e1cf2.png",
      ...lang.services.warehouseFulfillment.inventory.contents[1],
    },
    {
      img: "/uploads/Automated_stock_reordering_f765e35740.png",
      ...lang.services.warehouseFulfillment.inventory.contents[2],
    },
    {
      img: "/uploads/Centralized_inventory_control_b777d8d152.png",
      ...lang.services.warehouseFulfillment.inventory.contents[3],
    },
    {
      img: "/uploads/FIFO_First_In_First_Out_System_2ef6868ee4.png",
      ...lang.services.warehouseFulfillment.inventory.contents[4],
    },
  ];
  return (
    <section className="pt-14 lg:py-[120px] container">
      <div className="flex flex-col gap-2 lg:gap-6 items-center pb-6 lg:pb-12 px-4 lg:px-0">
        <h2 className="uppercase font-black text-2xl lg:text-4xl">
          {lang.services.warehouseFulfillment.inventory.heading}
        </h2>
        <p>{lang.services.warehouseFulfillment.inventory.subHeading}</p>
      </div>
      <div className="flex justify-center gap-4 lg:gap-6 w-full flex-wrap items-stretch ">
        {contents.map((x, idx) => (
          <article
            key={idx}
            className={clsx(
              "flex flex-col gap-6 p-4 lg:p-6 justify-start content-center lg:max-w-[31.25%]",
              "transition-all duration-200 hover:scale-[1.015] ease-out gap-6 snap-center",
              "border-1 hover:shadow-1 m-1 p-1",
              "shadow-5 bg-[rgba(255,_255,_255,_0.85)]"
            )}
          >
            <Image
              src={"https://strapi-ezbuy.ichiba.net" + x.img}
              alt={x.title}
              width={344}
              height={200}
            />
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
export default InventoryMangement;
