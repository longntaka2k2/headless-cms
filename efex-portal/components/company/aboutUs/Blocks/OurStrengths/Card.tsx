import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Fragment, ReactNode } from "react";

const highLight = (input: string, key: number) => (
  <span className="text-[#0F62FE] font-bold" key={key}>
    {input}
  </span>
);

const HighLightNumber = ({ text }: { text: string }) => {
  const exp = /\d+\.?\d+%/;
  let result: ReactNode[] = [];
  let found = false;

  text.split(/\s/).forEach((x, idx, arr) => {
    if (found) {
      result.push(x);
    } else {
      let isMatch = exp.test(x);
      if (isMatch) {
        result.push(highLight(x, idx));
        found = true;
      } else {
        result.push(x);
      }
    }

    if (arr.length != idx + 1)
      result.push(<Fragment key={idx + arr.length}> </Fragment>);
  });
  return <p className="text-sm lg:text-base">{result}</p>;
};

export const Card = ({
  icon,
  title,
  des,
}: {
  icon: StaticImport;
  title: string;
  des: string;
}) => {
  return (
    <div
      className={clsx(
        "lg:max-w-[609px] px-4 pt-3 pb-4 lg:py-6 lg:px-7",
        "flex flex-col lg:flex-row gap-4 lg:gap-7",
        "card-fx bg-[#F8F8F8] rounded-xl"
      )}
    >
      <EzImage
        src={icon}
        className={clsx("w-fit")}
        width={60}
        height={60}
        quality={100}
        alt=""
      />
      <div>
        <h3 className="lg:text-lg font-bold mb-2 text-base"> {title}</h3>
        <HighLightNumber text={des} />
      </div>
    </div>
  );
};
