import { removeAccent } from "@/utils/ultils";
import create from "@/public/images/services/siv/whatwedo/create.svg";
import increase from "@/public/images/services/siv/whatwedo/increase.svg";
import integrate from "@/public/images/services/siv/whatwedo/integrate.svg";
import seo from "@/public/images/services/siv/whatwedo/seo.svg";
import build from "@/public/images/services/siv/whatwedo/build.webp";

import Image from "next/image";

const Build = ({ data, lang, locale }: any) => {
  const content = [
    { ...lang.items.content[0], img: create },
    {
      ...lang.items.content[1],
      img: seo,
    },
    {
      ...lang.items.content[2],
      img: increase,
    },
    {
      ...lang.items.content[3],
      img: integrate,
      free: "free",
    },
  ];
  return (
    <div className="lg:container px-4 lg:px-0 pt-3 pb-6 lg:flex lg:justify-between lg:pt-[60px] lg:pb-[80px]">
      <Image
        src={build}
        alt={lang?.items?.title}
        className="lg:max-w-[461px] lg:relative -left-10"
        quality={100}
      />
      <div className="pt-5 lg:pt-0">
        <div
          className="uppercase text-xs lg:text-sm  text-[#666]  scroll-m-24"
          id={locale == "ja" ? lang.title : removeAccent(lang?.title)}
        >
          {lang?.title}
        </div>
        <div className="font-bold flex  text-lg lg:text-2xl mb-5">
          <span className="inline-block text-brand-secondary mr-2">
            {lang?.items?.number} &nbsp;
          </span>
          <span className="inline-block text-brand-primary">
            {lang?.items?.title}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-5  lg:grid-cols-2 lg:mt-10 lg:gap-10">
          {content.map((value: any, index: number) => (
            <div
              className="lg:block flex items-start lg:max-w-[319px]"
              key={index}
            >
              <Image
                src={value.img}
                alt={value.title}
                className="mr-4 lg:mb-5"
              />
              <div>
                <div className="font-bold">{value.title}</div>
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
  );
};
export default Build;
