import { removeAccent } from "@/utils/ultils";
import Image from "next/image";
import Link from "next/link";

const Build = ({ lang , params}: any ) => {
  const link = params?.lang === 'en' ? 'https://www.youtube.com/watch?v=livRERkh1Y4' : 'https://www.youtube.com/watch?v=W1OaMmE9B98'
  const data = {
    title: lang.label,
    items: {
      number: "#3",
      title: lang.title,
      img: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035726/build_28db909965.png',
      content: [
        {
          title: lang.items[0].title,
          content:lang.items[0].content,
          img: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035726/build_28db909965.png',
        },
        {
          title: lang.items[1].title,
          content:lang.items[1].content,
          img: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035725/seo_ab008f33f0.svg',
        },
        {
          title: lang.items[2].title,
          content:lang.items[2].content,
          img: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035726/increase_7e1244b8ef.svg',
        },
        {
          title: lang.items[3].title,
          content:lang.items[3].content,
          img: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035725/integrate_73ce6945e7.svg',
          free: lang.items[3].content2,
        },
      ],
    },
  }
  return (
    <div className="lg:container px-4 lg:px-0 pt-3 pb-6 lg:flex lg:justify-between lg:pt-[60px] lg:pb-[80px]">
      <Image
        src={data.items.img}
        alt={data?.items?.title}
        quality={100}
        width={461}
        height={479}
        className="lg:max-w-[461px] lg:relative left-[-40px]"
      />
      <div className="pt-5 lg:pt-0">
        <div
          className="uppercase text-xs lg:text-sm  text-[#666]  scroll-m-24"
          id={removeAccent(data?.title)}
        >
          {data?.title}
        </div>
        <div className="font-bold flex  text-lg lg:text-2xl mb-5">
          <span className="inline-block text-contact mr-2">
            {data?.items?.number}
          </span>
          <span className="inline-block text-brand-secondary">
            {data?.items?.title}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-5  lg:grid-cols-2 lg:mt-10 lg:gap-[40px]">
          {data?.items.content.map((value: any, index: number) => (
            <div
              className="lg:block flex items-start  lg:max-w-[319px]"
              key={index}
            >
              <Image
                src={value.img}
                alt={value.title}
                quality={100}
                className="mr-4 lg:mb-5 block w-[60px] h-[60px] "
                height={60}
                width={60}
              />
              <div>
                <div className="font-bold">{value.title}</div>
                <div className="text-sm ">
                  {value.content}{" "}
                  <Link href={link} className="text-brand-primary underline font-medium ml-1">
                    {value?.free}
                  </Link>
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
