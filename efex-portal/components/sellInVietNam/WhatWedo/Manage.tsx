import { removeAccent } from "@/utils/ultils";
import clsx from "clsx";
import Image from "next/image";
const Manage = ({ lang }: any) => {
  const data = {
    title: lang.label,
    items: {
      number: "#5",
      title: lang.title,
      content: [
        {
          title: lang.items[0].title,
          content:lang.items[0].content,
          img: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035726/store_1d297db237.svg',
        },
        {
          title: lang.items[1].title,
          content:lang.items[1].content,
          img: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035726/pick_85e612d3f7.svg',
        },
        {
          title: lang.items[2].title,
          content:lang.items[2].content,
          img: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035726/last_3406dbab09.svg',
        },
        {
          title: lang.items[3].title,
          content:lang.items[3].content,
          img: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035725/manage_4148c00020.svg',
        },
      ],
    },
  }
  return (
    <div className="px-4 py-6 lg:py-[60px] lg:px-0 bg-[linear-gradient(180deg,_#F2F4F8_0.44%,_rgba(242,_244,_248,_0.00)_85.38%)]  ">
      <div className="lg:flex lg:container justify-between   ">
        <div className="lg:relavite">
          <div className="lg:sticky top-[95px]">
            <div
              className="uppercase text-xs lg:text-sm text-[#666]  scroll-m-24"
              id={removeAccent(data?.title)}
            >
              {data?.title}
            </div>
            <div className="font-bold lg:text-2xl text-lg mb-5 lg:mt-2">
              <span className=" text-contact mr-2">{data?.items?.number}</span>
              <span className=" text-brand-secondary">
                {data?.items?.title}
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:max-w-[792px] lg:w-full lg:relavite ">
          {data?.items.content.map((value: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl lg:overflow-hidden lg:sticky top-[95px]"
            >
              <div
                className={clsx(
                  ` p-4 lg:p-7 rounded-2xl`,
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
                  <Image src={value.img} alt={value.title} width={340} height={285} quality={100} />
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
