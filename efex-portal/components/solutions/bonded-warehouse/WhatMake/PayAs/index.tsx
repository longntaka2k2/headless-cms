import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";

const PayAs = ({ data }: any) => {
  return (
    <div
      className={clsx(
        "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5",
        "container px-4 lg:px-0"
      )}
    >
      <div>
        <div className="flex items-center gap-3  mb-4 lg:mb-7">
          <h3 className="font-bold text-lg lg:text-2xl leading-6 lg:leading-8">
            {data.label}
          </h3>
          <div className="h-[1px] bg-[#D9D9D9] flex-1"></div>
        </div>
        <EzImage
          src="/uploads/business_owners_review_tablet_235935861_16_9_1280_1_ed5c877606.png"
          className="rounded-lg"
          alt=""
          width={463}
          height={243}
        />
      </div>
      <div className="flex flex-col gap-3 lg:gap-5 lg:w-1/2">
        <div
          className={clsx(
            "py-3 px-4 text-white rounded-lg card-fx",
            "bg-[linear-gradient(180deg,#023990_0%,_rgba(28,15,104,.79)_100%)]"
          )}
        >
          <p className="font-bold lg:text-xl pb-2 lg:pb-3">
            {data.contents[0].title}
          </p>
          <p className="leading-5 text-sm lg:leading-6 lg:text-base">
            {data.contents[0].des}
          </p>
        </div>
        <div
          className={clsx(
            "py-3 px-4 rounded-lg card-fx",
            "bg-[linear-gradient(276deg,_#F1F5FE_2.49%,_#D7D9FC_104.45%)]"
          )}
        >
          <p className="font-bold lg:text-xl pb-2 lg:pb-3">
            {data.contents[1].title}
          </p>
          <p className="leading-5 text-sm lg:leading-6 lg:text-base">
            {data.contents[1].des}
          </p>
        </div>
        <div
          className={clsx(
            "py-3 px-4 rounded-lg text-white card-fx",
            "bg-[linear-gradient(180deg,#023990_0%,_rgba(28,15,104,.79)_100%)]"
          )}
        >
          <p className="font-bold lg:text-xl pb-2 lg:pb-3">
            {data.contents[2].title}
          </p>
          <p className="leading-5 text-sm lg:leading-6 lg:text-base">
            {data.contents[2].des}
          </p>
        </div>
      </div>
    </div>
  );
};
export default PayAs;
