import { removeAccent } from "@/utils/ultils";
import clsx from "clsx";
import Image from "next/image";

const Promote = ({ lang }: any) => {
  const data = {
    title: lang.label,
    items: {
      number: "#4",
      title: lang.title,
      content: [
        {
          title: lang.items[0].title,
          content:lang.items[0].content,
          img: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035726/building_122108c38c.svg',
        },
        {
          title: lang.items[1].title,
          content:lang.items[1].content,
          img: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035725/set_Up_And_Run_361f26dc6c.svg',
        },
        {
          title: lang.items[2].title,
          content:lang.items[2].content,
          img: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035726/Livestream_1cc0149aca.svg',
        },
      ],
    },
  }
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
              id={removeAccent(data?.title)}
            >
              {data?.title}
            </div>
            <div className="font-bold lg:text-2xl text-lg mb-5">
              <span className=" text-contact mr-2">{data?.items?.number}</span>
              <span className=" text-brand-secondary">
                {data?.items?.title}
              </span>
            </div>
          </div>
          <div className="flex lg:mt-10 lg:gap-10 overflow-x-scroll snap-x lg:overflow-visible no-scrollbar">
            {data?.items.content.map((value: any, index: number) => (
              <div
                className="w-[90%] lg:w-[30%] py-4 lg:px-6 lg:pt-6 lg:pb-10 bg-white rounded-2xl mx-2 shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] card-fx"
                key={index}
              >
                <Image
                  src={value.img}
                  alt={value.title}
                  width={100}
                  height={85}
                  quality={100}
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
