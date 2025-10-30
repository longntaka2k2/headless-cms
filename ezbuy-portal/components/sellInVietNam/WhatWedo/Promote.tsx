import { removeAccent } from "@/utils/ultils";
import clsx from "clsx";
import Image from "next/image";
import building from "@/public/images/services/siv/whatwedo/building.svg";
import setUpAndRun from "@/public/images/services/siv/whatwedo/setUpAndRun.svg";
import livestream from "@/public/images/services/siv/whatwedo/Livestream.svg";

const Promote = ({ data, locale, lang }: any) => {
  const content = [
    {
      ...lang.items.content[0],
      img: building,
    },
    {
      ...lang.items.content[1],
      img: setUpAndRun,
    },
    {
      ...lang.items.content[2],
      img: livestream,
    },
  ];

  return (
    <div className="lg:pb-[133px]">
      <div
        className={clsx(
          " px-4 lg:px-0 pt-3 pb-6 lg:flex lg:justify-between lg:pt-[60px] lg:pb-[80px] ",
          "bg-[radial-gradient(55.87%_55.87%_at_50%_50%,_#F3F7F7_0.32%,_#F7F7F8_37.54%,_#DDEAF6_100%);]",
          "lg:max-w-[1472px] lg:mx-auto lg:max-h-[378px]"
        )}
      >
        <div className="pt-5 lg:pt-0 lg:container">
          <div className="text-center">
            <div
              className="uppercase text-xs lg:text-sm text-[#666]  scroll-m-24"
              id={locale == "ja" ? lang.title : removeAccent(lang?.title)}
            >
              {lang?.title}
            </div>
            <div className="font-bold lg:text-2xl text-lg mb-5">
              <span className="text-brand-secondary mr-2">
                {lang?.items?.number} &nbsp;
              </span>
              <span className=" text-brand-secondary">
                {lang?.items?.title}
              </span>
            </div>
          </div>
          <div className="flex lg:mt-10 lg:gap-10 overflow-x-scroll snap-x lg:overflow-visible no-scrollbar">
            {content.map((value: any, index: number) => (
              <div
                className={clsx(
                  "w-[90%] lg:w-[30%] py-4 lg:px-6 lg:pt-6 lg:pb-10 snap-center snap-proximity",
                  " bg-white rounded-2xl mx-2 shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] card-fx"
                )}
                key={index}
              >
                <Image
                  src={value.img}
                  alt={value.title}
                  className="w-[60px] h-[51px] lg:w-[100px] lg:h-[85px] mx-auto"
                />
                <div className="min-w-[280px] px-3 pt-3 lg:pt-7">
                  <div className="font-bold pb-2 lg:pb-3 ">{value.title}</div>
                  <div className="text-sm ">
                    {value.content}{" "}
                    <span className="text-[#0F62FE] uppercase">
                      {value?.free}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Promote;
