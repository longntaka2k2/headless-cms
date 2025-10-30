import clsx from "clsx";
import Image from "next/image";
import { ParterList } from "./PartnerList";

const Partnership = ({ lang }: { lang: any }) => {
  const contents = [
    {
      title: lang.content[0].title,
      description: lang.content[0].description,
    },
    {
      title: lang.content[1].title,
      description: lang.content[1].description,
    },
  ];

  return (
    <section className="text-ic-ink-6 relative">
      <div
        className={clsx(
          "mt-6 pt-5 pb-10 bg-[#F5F8FE]",
          "lg:pt-12 lg:pb-[60px]"
        )}
      >
        <div className="container flex flex-col gap-3 px-4 lg:px-0 lg:flex-row lg:justify-between lg:items-center">
          <div className="lg:w-[587px]">
            <h2 className="text-2xl font-bold lg:text-4xl lg:leading-[48px]">
              {lang.title}
            </h2>
            <ParterList contents={contents} />
          </div>
          <div className="relative flex lg:items-center lg:justify-end lg:w-[507px] lg:h-[382px] lg:pr-[66px]">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/partnership_lg_7576fda44b.svg"
              alt="Partnership"
              width={441}
              height={360}
              className="relative w-[286px] h-[246px] lg:w-[441px] lg:h-[360px] z-10"
              quality={100}
            />
            <div
              className={clsx(
                "bg-[url('https://strapi-efex.ichiba.net/uploads/partnership_bg_6fd572d25d.svg')]",
                "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/partnership_bg_068bcfbed9.svg')]",
                "absolute w-[143px] h-[162px] -bottom-[22px] right-0 lg:w-[228px] lg:h-[228px] lg:bottom-0"
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
