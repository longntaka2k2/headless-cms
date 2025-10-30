import store from "@/public/images/services/siv/whatwedo/store.svg";
import pick from "@/public/images/services/siv/whatwedo/pick.svg";
import last from "@/public/images/services/siv/whatwedo/last.svg";
import manage from "@/public/images/services/siv/whatwedo/manage.svg";

import { removeAccent } from "@/utils/ultils";
import clsx from "clsx";
import Image from "next/image";
const Manage = ({ data, lang, locale }: any) => {
  const content = [
    {
      ...lang.items.content[0],
      img: store,
    },
    {
      ...lang.items.content[1],
      img: pick,
    },
    {
      ...lang.items.content[2],
      img: last,
    },
    {
      ...lang.items.content[3],
      img: manage,
    },
  ];
  return (
    <div className="px-4 py-6 lg:py-[60px] lg:px-0 bg-[linear-gradient(180deg,_#F2F4F8_0.44%,_rgba(242,_244,_248,_0.00)_85.38%)]  ">
      <div className="lg:flex lg:container justify-between   ">
        <div className="lg:relavite">
          <div className="lg:sticky top-[95px]">
            <div
              className="uppercase text-xs lg:text-sm text-[#666]  scroll-m-24"
              id={locale == "ja" ? lang.title : removeAccent(lang?.title)}
            >
              {lang?.title}
            </div>
            <div className="font-bold lg:text-2xl text-lg mb-5 lg:mt-2">
              <span className="text-brand-secondary mr-2">
                {lang?.items?.number} &nbsp;
              </span>
              <span className=" text-brand-secondary">
                {lang?.items?.title}
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:max-w-[792px] lg:w-full lg:relavite flex">
          {content.map((value: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl lg:overflow-hidden lg:sticky top-[95px]"
            >
              <div
                className={clsx(
                  "p-4 lg:p-7 rounded-2xl lg:rounded-none",
                  index % 2 === 0
                    ? "bg-[linear-gradient(159deg,_#023990_0.78%,_rgba(28,_15,_104,_0.79)_70.45%)] text-white"
                    : "bg-[linear-gradient(295deg,_#F1F5FE_9.53%,_#D7D9FC_97.99%)]"
                )}
              >
                <div className="lg:flex lg:items-center justify-between">
                  <div className="lg:max-w-[344px]">
                    <div className="font-bold mb-2 lg:text-xl">
                      {value.title}
                    </div>
                    <div className="text-sm mb-7 lg:text-base">
                      {value.content}
                    </div>
                  </div>
                  <Image src={value.img} alt={value.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manage;
