import EzImage from "@/components/commons/EzImage";
import { Tree } from "./Tree";
import clsx from "clsx";
import { Circle } from "./Circle";

const ClearanceProcess = async ({
  lang,
  params,
}: {
  lang: any;
  params: any;
}) => {
  return (
    <section className="bg-[#091A3E] relative">
      <div className="pt-6 lg:pt-10 relative text-center text-white">
        <h2>{lang.heading}</h2>
      </div>
      <div
        className={clsx(
          "absolute lg:static ",
          "flex items-center justify-center",
          "container rotate-90 lg:rotate-0 origin-[10%_5%] translate-y-20 lg:translate-y-0"
        )}
      >
        <Circle className="bg-[#005AF8] " content={lang.import} />
        <div className="w-[550px] lg:w-1/2 h-2 bg-[linear-gradient(89deg,#005AF8_0%,_#4EF0BA_100.62%)]" />
        <Circle className="bg-[#4EF0BA]" content={lang.export} />
      </div>
      <div
        className={clsx(
          "flex flex-col lg:flex-row items-center gap-6",
          "container lg:mt-[-30px]"
        )}
      >
        <div className="flex-1 h-full relative mt-8 lg:mt-0">
          <EzImage
            src={params.lang  == 'en' ? "/uploads/Frame_427318725_d368349b13.png": "/uploads/Frame_427318725_6b60e2b465.png" }
            alt=""
            width={503}
            height={423}
            className="pl-15 pt-6 lg:py-6"
          />
        </div>
        <Tree
          contents={lang.contents}
          className="flex-1 bg-linear1 pt-[142px] pb-24  px-4 lg:px-0"
        />
      </div>
    </section>
  );
};
export default ClearanceProcess;
