import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";
import { DiscoverCard, DiscoverCardProps } from "./DiscoverCard";

const DiscoverWhy = ({ lang }: { lang: any }) => {
  const cards = (lang.discoverWhy.card as DiscoverCardProps[]).map((o) => ({
    amount: o.amount,
    description: o.description,
  }));

  return (
    <section className="relative h-[590px] lg:h-[540px] overflow-hidden">
      <EzImage
        src={"/uploads/discover_why_lg_68c383553a.svg"}
        alt=""
        width={783}
        height={363}
        className="absolute z-0 bottom-0 left-[20%] lg:bottom-[48px] lg:left-[5%]"
      />
      <div className="relative container px-4 py-6 flex flex-col lg:flex-row lg:gap-[91px] lg:p-0 lg:pt-[80px]">
        <div className="lg:order-2">
          <h2 className="text-lg leading-6 font-bold lg:text-2xl gap-4 lg:max-w-[644px]">
            {lang.discoverWhy.title.first}{" "}
            <span className="text-brand-primary">
              {lang.discoverWhy.title.second}
            </span>{" "}
            {lang.discoverWhy.title.third}
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-x-4 lg:gap-x-6">
            {cards.map((o, idx) => {
              return (
                <DiscoverCard
                  key={idx}
                  amount={o.amount}
                  description={o.description}
                />
              );
            })}
          </div>
        </div>
        <div
          className={clsx(
            "mt-4 mx-auto max-w-[358px] w-full h-[268px] flex justify-between lg:gap-2",
            "lg:m-0 lg:max-w-none lg:w-[445px] lg:h-[332px]"
          )}
        >
          <div className="">
            <EzImage
              src={"/uploads/Frame_427318745_25d8ea428e.png"}
              alt="1"
              width={231}
              height={332}
              className="w-[185px] h-[267px] lg:w-[231px] lg:h-[332px]"
            />
          </div>
          <div className="flex flex-col justify-between">
            <EzImage
              src={"/uploads/discover_2_lg_4c053e3160.webp"}
              alt="2"
              width={206}
              height={121}
              className="w-[165px] h-[97px] lg:w-[206px] lg:h-[121px]"
            />
            <EzImage
              src={"/uploads/discover_3_lg_c74c286057.webp"}
              alt="3"
              width={206}
              height={203}
              className="w-[165px] h-[163px] lg:w-[206px] lg:h-[203px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverWhy;
