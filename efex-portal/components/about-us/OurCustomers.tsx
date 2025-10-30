import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
const OurCustomers = ({ lang, locale }: { lang: any; locale: string }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="container py-6 lg:py-20 px-4">
        <h2 className="text-2xl lg:text-4xl font-bold lg:leading-[48px] lg:w-[60%] text-center mx-auto mb-2 lg:mb-4">
          {lang.heading}
        </h2>
        <p className="text-sm lg:text-base text-ic-ink-5 text-center mb-6 lg:mb-15">
          {lang.subHeading}
        </p>

        <div
          className={clsx(
            "container flex flex-nowrap gap-4 lg:gap-6 pt-[48px] lg:pt-[66px] pb-2",
            "overflow-x-auto scroll-snap-type-x mandatory"
          )}
        >
          {lang.items.map((item: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "relative grid gap-4 bg-white rounded-xl px-4 pb-4 lg:px-6 lg:pb-6",
                "shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] w-full min-w-[265px] lg:w-[282px]"
              )}
            >
              <div
                className={clsx(
                  "w-full h-[80px] lg:h-[70px]"
                )}
              ></div>
              <Link
                href={`/${locale}/blog/${item.link}`}
                className="text-sm lg:text-base"
              >
                {item.content}
              </Link>
              <div className="flex justify-center items-center">
                <Link
                  href={`/${locale}/blog/${item.link}`}
                  target="_blank"
                  className="w-max text-sm text-[#AF0000] font-medium"
                >
                  {lang?.readMore}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>

              <Link
                href={`/${locale}/blog/${item.link}`}
                className="w-[234px] absolute top-[-48px] lg:top-[-66px] left-[50%] translate-x-[-50%] rounded-2xl overflow-hidden"
              >
                <Image src={item.image} width={828} height={497} alt="EFEX" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Image
        src="https://strapi-efex.ichiba.net/uploads/Group_260913_9729aafc4c.svg"
        width={869}
        height={533}
        alt="EFEX"
        className="absolute bottom-[-100px] right-[-52px] -z-1"
      />
    </div>
  );
};

export default OurCustomers;
