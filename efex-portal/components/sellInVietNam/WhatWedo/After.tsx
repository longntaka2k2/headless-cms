import { removeAccent } from "@/utils/ultils";
import Image from "next/image";
const After = ({ lang }: any) => {
  const data = {
    title: lang.label,
    items: {
      number: "#6",
      title: lang.title,
      content: [
        {
          title: lang.realTime.title,
          content:lang.realTime.content,
           img: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035726/realtime_68090ffc7e.jpg',
        },
        {
          title: lang.design.title,
          content:lang.design.content,
          img: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035725/design_63f5ac4c67.svg',
        },
      ],
    },
  }
  return (
    <div className="lg:p y-[60px]">
      <div className="px-4 lg:pb-10 ">
        <div className="text-center">
          <div
            id={removeAccent(data?.title)}
            className="uppercase text-[12px] lg:text-[14px] lg:text-sm  text-[#666] lg:pb-2  scroll-m-32"
          >
            {data?.title}
          </div>
          <div className="font-bold lg:text-[24px] text-lg lg:text-2xl mb-5">
            <span className=" text-contact mr-2">{data?.items?.number}</span>
            <span className=" text-brand-secondary">{data?.items?.title}</span>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F0E2] py-5 px-4 lg:bg-[linear-gradient(90deg,#F7F0E2_50%,#fff_0)] ">
        <div className="lg:container">
          {data?.items.content.map((value: any, index: number) => (
            <div
              key={index}
              className={`pt-6 lg:flex gap-20 lg:justify-between lg:items-center ${
                index === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              <Image src={value.img} alt="" className="rounded-2xl " quality={100} width={539} height={230} />
              <div className="max-w-[581px]">
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
