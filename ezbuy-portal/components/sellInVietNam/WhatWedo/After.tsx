import { removeAccent } from "@/utils/ultils";
import Image from "next/image";
import realtime from "@/public/images/services/siv/whatwedo/realtime.svg";
import design from "@/public/images/services/siv/whatwedo/design.svg";

const After = ({ data, lang, locale }: any) => {
  const content = [
    {
      ...lang.items.content[0],
      img: realtime,
    },
    {
      ...lang.items.content[1],
      img: design,
    },
  ];
  return (
    <div className="lg:p y-[60px]">
      <div className="px-4 lg:pb-10 ">
        <div className="text-center">
          <div
            id={locale == "ja" ? lang.title : removeAccent(lang?.title)}
            className="uppercase text-[12px] lg:text-[14px] lg:text-sm  text-[#666] lg:pb-2  scroll-m-32"
          >
            {lang?.title}
          </div>
          <div className="font-bold lg:text-[24px] text-lg lg:text-2xl mb-5">
            <span className=" text-brand-secondary mr-2">
              {lang?.items?.number} &nbsp;
            </span>
            <span className=" text-brand-secondary">{lang?.items?.title}</span>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F0E2] py-5 px-4 lg:bg-[linear-gradient(90deg,#F7F0E2_51%,#fff_0)] ">
        <div className="lg:container">
          {content.map((value: any, index: number) => (
            <div
              key={index}
              className={`pt-6 lg:flex lg:justify-between lg:items-center ${
                index === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              <Image src={value.img} alt={value.title} className="rounded-2xl " />
              <div>
                <div className="font-bold pt-4 lg:pb-3 lg:text-[20px]">
                  {value.title}
                </div>
                <div className="text-sm lg:text-base pt-2 lg:max-w-[540px]">
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
  );
};

export default After;
