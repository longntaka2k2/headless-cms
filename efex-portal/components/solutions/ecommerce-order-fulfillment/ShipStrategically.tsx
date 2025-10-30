import clsx from "clsx";
import Link from "next/link";
import partTracking from "@/public/images/icons/solutions/partTracking.svg";
import packageTracking from "@/public/images/icons/solutions/packageTracking.svg";
import Image from "next/image";

const ShipStrategically = ({ lang ,locale}: { lang: any , locale : string }) => {
  const contents = [
    {
      icon: partTracking,
      title: lang.content[0].title,
      list: [lang.content[0].list[0], lang.content[0].list[1]],
    },
    {
      icon: packageTracking,
      title: lang.content[1].title,
      list: [lang.content[1].list[0], lang.content[1].list[1]],
    },
  ];
  return (
    <section
      className={clsx(
        "text-ic-white-6 bg-[url('https://strapi-efex.ichiba.net/uploads/Ship_strategically_2fe2059aa9.webp')]",
        "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/Ship_strategically_d37a13bd6d.webp')]"
      )}
    >
      <div className="container px-4 pt-6 pb-7 lg:py-[60px] lg:px-0">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-2xl font-bold lg:text-4xl">{lang.title}</h2>
          <p className="mt-1 text-sm text-ic-white-5 lg:text-lg lg:leading-6">
            {lang.subTitle}
          </p>
          <Link
            href={`/${locale}/solutions/cross-border-shipping`}
            target="_blank"
            className={clsx(
              "p-3 rounded-lg flex justify-center items-center bg-brand-primary text-sm font-medium cursor-pointer hover:bg-brand-primary-active transition-all",
              "mt-4 w-40 lg:mt-6 lg:w-40"
            )}
          >
            {lang.learnMore}
          </Link>
        </div>
        <div className="mt-6 lg:mt-[60px]">
          <ul className="flex flex-col justify-center items-center gap-4 lg:flex-row lg:gap-[25px]">
            {contents.map((content, contentIdx) => (
              <li
                key={contentIdx}
                className={clsx(
                  "faded-border p-4 flex flex-col items-center",
                  "lg:p-10 lg:pt-6 lg:flex-1 lg:self-start"
                )}
              >
                <Image
                  src={content.icon}
                  alt={content.title}
                  className="w-12 h-12"
                  quality={100}
                />
                <h3 className="mt-2 font-bold text-ic-white-6 text-center lg:mt-5 lg:text-xl">
                  {content.title}
                </h3>
                <ul className="mt-3 flex flex-col gap-3 lg:mt-8 lg:gap-6">
                  {content.list.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex justify-center items-center gap-4"
                    >
                      <div>
                        <div className="rounded-full bg-brand-branda w-3 h-3 lg:w-4 lg:h-4" />
                      </div>
                      <p className="text-sm text-ic-white-5 lg:text-base">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ShipStrategically;
