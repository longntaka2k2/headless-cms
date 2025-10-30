import clsx from "clsx";
import Image from "next/image";

const TrustSecurity = ({ lang }: { lang: any }) => {
  return (
    <div className="px-3 text-white pt-6 pb-12 lg:py-15">
      <div
        className={clsx(
          "relative container bg-[url(https://strapi-efex.ichiba.net/uploads/southeast_asia_map_with_china_1_a90efde926.svg)]",
          "bg-cover bg-center rounded-xl lg:rounded-2xl pt-[46px] pb-6 px-4 lg:pt-[68px] lg:px-15 lg:pb-15"
        )}
      >
        <h2 className="mb-2 text-xl sm:text-2xl font-bold lg:text-4xl lg:leading-[48px] text-center">
          {lang.heading}
        </h2>
        <p className="mb-6 lg:mb-10 text-sm lg:text-lg text-center">
          {lang.subHeading}
        </p>
        <div className="grid lg:grid-cols-3 gap-6">
          {lang.items.map((item: any, index: number) => {
            return (
              <div key={index} className="grid gap-1 lg:gap-2">
                <Image
                  src={item.icon}
                  alt="EFEX"
                  width={56}
                  height={56}
                  className="mx-auto"
                />
                <p className="text-sm font-bold lg:text-lg text-center">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        <Image
          src="https://strapi-efex.ichiba.net/uploads/breakline_white_1_1_e39925532d.png"
          alt="EFEX"
          width={143}
          height={26}
          className="absolute top-[-2px] left-[50%] translate-x-[-50%]"
        />
        <Image
          src="https://strapi-efex.ichiba.net/uploads/Group_1171275991_1_874886ae9b.png"
          alt="EFEX"
          width={143}
          height={26}
          className="absolute bottom-[-24px] left-[50%] translate-x-[-50%]"
        />
      </div>
    </div>
  );
};

export default TrustSecurity;
