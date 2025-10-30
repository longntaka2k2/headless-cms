import clsx from "clsx";
import EzImage from "@/components/commons/EzImage";
import iconWarehouse from "@/public/images/icons/bonded-warehouse/warehouse.svg";
import iconStorage from "@/public/images/icons/bonded-warehouse/storage.svg";

const Facilities = ({ data }: any) => {
  return (
    <section
      className={clsx(
        "lg:py-10 lg:w-[1600px] lg:mx-auto rounded-2xl  px-4",
        "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/Frame_427318701_c4aa87d8e7.png')]"
      )}
    >
      <div className="container">
        <h3 className="text-lg w-4/5 mb-6">
          <span
            className={clsx(
              "block  mb-2 lg:text-black text-brand-secondary",
              "font-bold text-lg lg:text-2xl leading-6 lg:leading-8"
            )}
          >
            {data.label}
          </span>
          <span className="block w-[104px] lg:w-[144px] bg-gradient-red-1 h-1 rounded" />
        </h3>
        <div
          className={clsx(
            "relative",
            "flex flex-col lg:flex-row lg:justify-between gap-16 lg:gap-[105px]"
          )}
        >
          <div>
            <div className="relative">
              <EzImage
                src={"/uploads/image_832_bf12a09e1e.png"}
                className="pb-8 lg:pb-14 relative z-[2]"
                alt=""
                width={512}
                height={306}
              />
              <EzImage
                src={"/uploads/Group_19765_7f7428f9ee.svg"}
                className="absolute z-[1] top-[10%] -left-16 lg:hidden"
                alt=""
                width={775}
                height={308}
              />
            </div>
            <div className="flex gap-3 lg:gap-5 items-start">
              <EzImage src={iconWarehouse} alt="icon warehouse" />
              <div className="">
                <p className="font-bold lg:text-xl pb-1 lg:pb-2">
                  {data.contents[0].title}
                </p>
                <p className="text-sm lg:text-base">{data.contents[0].des}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <EzImage
                src={"/uploads/image_599_611cb82803.png"}
                className="pb-8 lg:pb-14 relative z-[2]"
                alt=""
                width={512}
                height={306}
              />
              <EzImage
                src={"/uploads/Group_19764_613e485204.svg"}
                className="absolute z-[1] top-[-20%] -right-4  lg:hidden"
                alt=""
                width={165}
                height={359}
              />
            </div>
            <div className="flex gap-3 lg:gap-5 items-start">
              <EzImage src={iconStorage} alt="icon storage" />
              <div className="">
                <p className="font-bold lg:text-xl pb-1 lg:pb-2">
                  {data.contents[1].title}
                </p>
                <p className="text-sm lg:text-base">{data.contents[1].des}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
