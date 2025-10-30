import { FirstBlock } from "./FirstBlock";
import { SecondBlock } from "./SecondBlock";
import { ThirdBlock } from "./ThirdBlock";
import { FourthBlock } from "./FourthBlock";
import { FifthBlock } from "./FifthBlock";
import { SixthBlock } from "./SixthBlock";
import { SeventhBlock } from "./SeventhBlock";

const MaximizeProfit = ({ lang }: { lang: any }) => {
  return (
    <section className="mt-6 lg:mt-15">
      <h2 className="text-2xl font-bold text-center px-4 lg:text-4xl lg:leading-12">
        {lang.maximizeProfit.title}
      </h2>
      <div className="mt-6 flex flex-col gap-6 items-center lg:mt-12">
        <FirstBlock lang={lang.maximizeProfit.first} />
        <SecondBlock lang={lang.maximizeProfit.second} />
        <ThirdBlock lang={lang.maximizeProfit.third} />
        <FourthBlock lang={lang.maximizeProfit.fourth} />
        <FifthBlock lang={lang.maximizeProfit.fifth} />
        <SixthBlock lang={lang.maximizeProfit.sixth} />
        <SeventhBlock lang={lang.maximizeProfit.seventh} />
      </div>
    </section>
  );
};

export default MaximizeProfit;
