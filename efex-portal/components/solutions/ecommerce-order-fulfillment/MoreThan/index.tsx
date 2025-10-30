import circle from "@/public/images/icons/solutions/24circle.svg";
import headphone from "@/public/images/icons/solutions/headphone.svg";
import message from "@/public/images/icons/solutions/message.svg";
import { StaticList } from "./StaticList";
import { SwiperList } from "./SwiperList";
import clsx from "clsx";

const MoreThan = ({ lang }: { lang: any }) => {
  const contents = [
    {
      icon: message,
      title: lang.content[0].title,
      description: lang.content[0].description,
    },
    {
      icon: circle,
      title: lang.content[1].title,
      description: lang.content[1].description,
    },
    {
      icon: headphone,
      title: lang.content[2].title,
      description: lang.content[2].description,
    },
  ];

  return (
    <section className="relative mt-6 lg:h-[546px] bg-background-light">
      <div
        className={clsx(
          "absolute w-full h-[303px] bg-[url('https://strapi-efex.ichiba.net/uploads/more_than_bg_da6e614dab.svg')]",
          "lg:h-[392px] lg:bg-[url('https://strapi-efex.ichiba.net/uploads/more_than_bg_lg_552189e9bf.webp')]"
        )}
      />
      <div className="relative container pt-6">
        <div className="px-4 text-center mx-auto lg:px-0 lg:mt-[60px]">
          <h2 className="text-white text-2xl font-bold lg:text-4xl lg:leading-[48px]">
            {lang.title}
          </h2>
          <p className="text-ic-white-5 text-sm mt-1 lg:text-lg lg:leading-6 lg:max-w-[800px] mx-auto">
            {lang.subTitle}
          </p>
        </div>
        {/**desktop */}
        <div className="mt-[54px] hidden lg:block">
          <StaticList contents={contents} />
        </div>

        {/**mobile */}
        <div className="lg:hidden mt-6">
          <SwiperList contents={contents} />
        </div>
      </div>
    </section>
  );
};

export default MoreThan;
