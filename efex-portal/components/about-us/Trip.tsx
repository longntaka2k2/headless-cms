import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Trip = ({ lang, locale }: { lang: any; locale: string }) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className={clsx(
          "bg-[url('https://strapi-efex.ichiba.net/uploads/Timeline_1_840f851cdf.svg')]",
          "md:bg-[url('https://strapi-efex.ichiba.net/uploads/Group_260912_915fcb00bb.svg')]",
          "bg-no-repeat bg-cover bg-top px-4 pt-6 lg:pt-20 "
        )}
      >
        <h2 className="container text-2xl lg:text-4xl font-bold lg:leading-[48px] lg:w-[60%]">
          {lang.heading[0]}
          <span className="text-brand-primary">{lang.heading[1]}</span> <br />
          {lang.heading[2]}
        </h2>

        <div className="overflow-x-auto scroll-snap-type-x h-full">
          <div className="relative w-[888px] py-[170px] lg:py-[240px] lg:w-[1518px] mx-auto ">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Timeline_f13c9cfa00.svg"
              width={1518}
              height={75}
              objectPosition="center"
              alt="EFEX"
              className="w-full h-[75px] mx-auto"
            />

            <div className="absolute top-[60%] left-[15%] max-w-[190px] flex flex-col gap-3 lg:gap-4">
              <p className="text-2xl lg:text-4xl font-bold gradient-text">
                {lang.items[0].year}
              </p>
              <p className="text-sm lg:text-base border-l-4 border-brand-primary pl-4">
                {lang.items[0].label[0]}
                <span className="font-bold">{lang.items[0].label[1]}</span>
              </p>
            </div>

            <div className="absolute bottom-[60%] left-[25%] max-w-[190px] flex flex-col gap-3 lg:gap-4">
              <p className="text-sm lg:text-base border-l-4 border-brand-primary pl-4">
                {lang.items[1].label[0]}
                <span className="font-bold">{lang.items[1].label[1]}</span>
                {lang.items[1].label[2]}
              </p>
              <p className="text-2xl lg:text-4xl font-bold gradient-text">
                {lang.items[1].year}
              </p>
            </div>

            <div className="absolute top-[60%] right-[35%] lg:right-[30%] max-w-[120px] lg:max-w-[190px] flex flex-col gap-3 lg:gap-4">
              <p className="text-2xl lg:text-4xl font-bold gradient-text">
                {lang.items[2].year}
              </p>
              <p className="text-sm lg:text-base border-l-4 border-brand-primary pl-4">
                {lang.items[2].label[0]} <br />
                <span className="font-bold">{lang.items[2].label[1]}</span>
                <br />
                {lang.items[2].label[2]}
                <span className="font-bold">{lang.items[2].label[3]}</span>
                <br />
                {lang.items[2].label[4]}
              </p>
            </div>

            <div className="absolute bottom-[60%] right-[10%] lg:right-[15%] max-w-[250px] flex flex-col gap-3 lg:gap-4">
              <p className="text-sm lg:text-base border-l-4 border-brand-primary pl-4">
                {lang.items[3].label[0]}
                <span className="font-bold">{lang.items[3].label[1]}</span>
                {lang.items[3].label[2]}
              </p>
              <p className="text-2xl lg:text-4xl font-bold gradient-text">
                {lang.items[3].year}
              </p>
            </div>

            <div className="absolute top-[60%] right-[5%] lg:right-[15%] max-w-[190px] flex flex-col gap-3 lg:gap-4">
              <p className="text-2xl lg:text-4xl font-bold gradient-text">
                {lang.items[4].year}
              </p>
              <p className="text-sm lg:text-base border-l-4 border-brand-primary pl-4">
                {lang.items[4].label[0]}
                <span className="font-bold">{lang.items[4].label[1]}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "bg-[url('https://strapi-efex.ichiba.net/uploads/HOW_8b7c970fac.svg')]",
          "pt-6 pb-10 lg:py-20 h-[600px] lg:h-[800px] text-white"
        )}
      >
        <div className="container px-4 w-full h-full flex flex-col justify-between">
          <p className="text-lg lg:text-2xl max-w-[283px] lg:max-w-[581px] font-medium">
            <span className="text-brand-primary font-bold">
              {lang.content[0]}
            </span>
            {lang.content[1]}
          </p>
          <div className="w-full">
            <Link
              target="_blank"
              href={
                locale === "vi"
                  ? "https://efex.vn/vi/start"
                  : "https://efex.vn/en/start"
              }
            >
              <p className="text-2xl lg:text-4xl font-bold max-w-[208px] lg:max-w-[306px] ml-auto hover:opacity-80">
                {lang.weDoIt}
              </p>
              <Image
                src="https://strapi-efex.ichiba.net/uploads/Arrow_1_26847c3b93.svg"
                width={253}
                height={38}
                alt="EFEX"
                className="w-[203px] lg:w-[253px] ml-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trip;
