import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";

export const SixthBlock = ({ lang }: { lang: any }) => {
  const content = lang.content as string[];

  return (
    <div className="w-full overflow-hidden lg:pb-5">
      <div className="container relative pb-6 px-4 lg:px-0 lg:flex lg:justify-between">
        <div className="flex flex-col gap-3 lg:h-fit lg:max-w-[644px] lg:gap-7">
          <h2 className="flex text-lg leading-6 font-bold gap-3 lg:text-2xl">
            <p className="text-brand-primary">#6</p>
            <p className="text-brand-secondary">{lang.title}</p>
          </h2>
          <ul className="mt-[15px] flex flex-col gap-[15px] lg:flex-row lg:justify-between lg:gap-6">
            {content.map((item, index) => (
              <li
                key={index}
                className={clsx(
                  "h-24 p-[2px] pb-0 bg-[linear-gradient(180deg,#af0000,#fff)] rounded-t-lg mb-4 lg:flex-1",
                  "lg:h-fit"
                )}
              >
                <div className="w-full h-full bg-white rounded-t-[6px] p-4 pb-0 lg:p-7 lg:pt-6 lg:pb-5">
                  <p className="text-sm lg:text-base">{item}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-2 lg:mb-0">
          <EzImage
            src={"/uploads/route_optimization_ede42df674.webp"}
            alt="Route optimization"
            width={412}
            height={320}
            className="rounded-xl w-[293px] h-[228px] lg:w-[412px] lg:h-[320px]"
          />
        </div>
        <EzImage
          src={"/uploads/Background_e2c57fc373.svg"}
          alt="bg"
          width={478}
          height={388}
          className="absolute -z-1 bottom-0 right-4 w-[304px] h-[247px] lg:w-[478px] lg:h-[388px] lg:-bottom-5 lg:-right-[138px]"
        />
      </div>
    </div>
  );
};
