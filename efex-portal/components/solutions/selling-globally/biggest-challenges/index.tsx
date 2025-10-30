import Image from "next/image";
import { Challenges } from "./Challenges";

const BiggestChallenges = ({ lang }: { lang: any }) => {
  const contents = [
    {
      title: lang.items[0].title,
      subTitle: lang.items[0].subTitle,
    },
    {
      title: lang.items[1].title,
      subTitle: lang.items[1].subTitle,
    },
    {
      title: lang.items[2].title,
      subTitle: lang.items[2].subTitle,
    },
    {
      title: lang.items[3].title,
      subTitle: lang.items[3].subTitle,
    },
    {
      title: lang.items[4].title,
      subTitle: lang.items[4].subTitle,
    },
  ];

  return (
    <div className="py-6 lg:py-15 relative overflow-hidden">
      <div className="container px-3">
        <h2 className="mb-6 lg:mb-10 text-2xl font-bold lg:text-4xl lg:leading-[48px]">
          {lang.heading}
        </h2>
        <div className="flex flex-col gap-3 px-4 lg:px-0 lg:flex-row lg:justify-between lg:items-center">
          <div className="lg:w-[40%]">
            <Challenges contents={contents} />
          </div>
          <div className="lg:w-[60%] lg:translate-x-10">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Group_1171275926_92802753a2.svg"
              alt="Efex"
              width={729}
              height={503}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <Image
        src="https://strapi-efex.ichiba.net/uploads/Group_1171275921_57b683b261.svg"
        alt="Efex"
        width={1143}
        height={1143}
        className="absolute bottom-[-10%] right-[-5%] -z-10"
      />
    </div>
  );
};
export default BiggestChallenges;
