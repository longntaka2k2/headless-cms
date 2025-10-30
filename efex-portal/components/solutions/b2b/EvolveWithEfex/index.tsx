import efex from "@/public/images/icons/solutions/efex.svg";
import Image from "next/image";
import { ReasonList } from "./ReasonList";
import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";

const EvolveWithEfex = ({ lang }: { lang: any }) => {
  const contents = lang.evolveWithEfex.content;

  return (
    <section className="container px-4 mt-6 lg:px-0 lg:mt-15 max-w-screen-xl">
      <div className="px-3 py-6 bg-[#F4F9FE] rounded-lg lg:p-10 lg:rounded-2xl">
        <h2 className="text-2xl font-bold lg:text-4xl lg:leading-12">
          {lang.evolveWithEfex.title}
          <span className="inline-flex items-center">
            <Image
              src={efex}
              alt="efex"
              width={117}
              height={37}
              quality={100}
              className="w-[79px] h-[24px] mx-2 lg:mx-4 lg:w-[117px] lg:h-[37px] inline"
            />
          </span>
        </h2>
        <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:justify-between">
          <div className="lg:max-w-[586px] flex-1">
            <ReasonList contents={contents} />
          </div>
          <div className="relative mx-auto h-[339px] lg:-order-1 lg:mt-8 w-full max-w-[512px]">
            <EzImage
              src={"/uploads/evolve_1_lg_54b64f697f.webp"}
              alt="Why evolve with Efex"
              width={416}
              height={436}
              className="w-[274px] h-[287px] rounded-lg lg:w-[416px] lg:h-[436px]"
            />
            <div
              className={clsx(
                "absolute border-ic-ink-1 bg-[rgba(255,255,255,0.80)] backdrop-blur-lg shadow-[0px_5.27022px_10.54043px_0px_rgba(0,0,0,0.05)]",
                "rounded-lg border px-4 py-[10px] bottom-0 right-0",
                "lg:rounded-xl lg:border-2 lg:px-5 lg:py-4 lg:-bottom-[176px]"
              )}
            >
              <EzImage
                src={"/uploads/evolve_2_lg_75ab0deddb.svg"}
                alt="Why evolve with Efex"
                width={218}
                height={172}
                className="w-[143px] h-[113px] lg:w-[218px] lg:h-[172px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolveWithEfex;
