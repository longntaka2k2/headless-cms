"use client";
import clsx from "clsx";
import CountUp from "react-countup";

const Card = ({
  line1,
  line2,
  color,
}: {
  line1: React.ReactNode;
  line2: string;
  color: string;
}) => (
  <div className="py-4 px-3 lg:px-5 flex gap-3 bg-white rounded-xl shadow-4 card-fx">
    <div className={clsx("w-[6px] rounded ", color)} />
    <div>
      {line1}
      <p className="text-sm lg:text-base font-medium">{line2}</p>
    </div>
  </div>
);

const ImpressiveNumber = ({ lang }: any) => {
  return (
    <section className="bg-[#F2F5FC]">
      <div
        className={clsx(
          "flex flex-col lg:flex-row-reverse lg:justify-between gap-5 lg:gap-[100px] lg:items-center",
          "container py-6 lg:py-10 px-4 lg:px-0"
        )}
      >
        <div className="lg:w-[457px]">
          <h2 className="font-bold text-2xl lg:text-4xl lg:leading-12 mb-2 lg:mb-4">
            {lang.heading}
          </h2>
          <p className="text-sm lg:text-lg">{lang.subHeading}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:gap-6  flex-1">
          <Card
            color="bg-[linear-gradient(0deg,#FF7400_-0.66%,#FFAB52_99.49%)]"
            line1={
              <CountUp
                end={6000}
                suffix="+"
                className="text-brand-secondary text-lg lg:text-2xl font-bold"
              />
            }
            line2={lang.contents[0]}
          />
          <Card
            color="bg-[linear-gradient(180deg,#5E79FF_13.02%,#1D39C4_100%)]"
            line1={
              <CountUp
                end={26000}
                suffix="+"
                className="text-brand-secondary text-lg lg:text-2xl font-bold"
              />
            }
            line2={lang.contents[1]}
          />
          <Card
            color="bg-[#9254DE]"
            line1={
              <p className="text-brand-secondary text-lg lg:text-2xl font-bold">
                <CountUp
                  end={5}
                  className="text-brand-secondary text-lg lg:text-2xl font-bold"
                />
                -
                <CountUp
                  end={8}
                  className="text-brand-secondary text-lg lg:text-2xl font-bold"
                />{" "}
                {lang.days}
              </p>
            }
            line2={lang.contents[2]}
          />
          <Card
            color="bg-[#389E0D]"
            line1={
              <CountUp
                end={220}
                className="text-brand-secondary text-lg lg:text-2xl font-bold"
              />
            }
            line2={lang.contents[3]}
          />
        </div>
      </div>
    </section>
  );
};
export default ImpressiveNumber;
