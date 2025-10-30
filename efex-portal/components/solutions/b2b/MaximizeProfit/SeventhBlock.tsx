import EzImage from "@/components/commons/EzImage";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export const SeventhBlock = ({ lang }: { lang: any }) => {
  const content = lang.content as string[];

  return (
    <div className="container mt-14 px-4 lg:mt-10 lg:px-0 max-w-[1058px]">
      <div
        className={clsx(
          "relative bg-[#F3F7FE] flex flex-col justify-between gap-[132px] rounded-xl",
          "lg:flex-row lg:h-[360px] lg:gap-[260px] lg:pr-10"
        )}
      >
        <EzImage
          src={"/uploads/special_services_fb1ff2961a.webp"}
          alt="Special services"
          width={374}
          height={373}
          className={clsx(
            "rounded-lg absolute left-1/2 -translate-x-1/2 top-[-53px] w-[334px] h-[332px]",
            "lg:left-[88px] lg:translate-x-0 lg:top-[-49px] lg:w-[374px] lg:h-[373px]"
          )}
        />
        <div className="">
          <div className="h-[147px] bg-[#0C172D] rounded-t-xl lg:rounded-r-none lg:rounded-l-xl lg:w-[282px] lg:h-full" />
        </div>
        <div className="px-3 py-4 lg:self-center lg:p-0">
          <h2 className="flex text-lg leading-6 font-bold gap-3 lg:text-2xl">
            <p className="text-brand-primary">#7</p>
            <p className="text-brand-secondary">{lang.title}</p>
          </h2>
          <ul className="mt-2 ml-10 mr-3 flex flex-col gap-3 lg:mt-6 lg:ml-7 lg:gap-3">
            {content.map((item, index) => (
              <li key={index} className="flex gap-2 lg:gap-4">
                <div>
                  <div className="flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-brand-brandb text-xl lg:text-2xl"
                    />
                  </div>
                </div>
                <p className="text-sm lg:text-base">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
