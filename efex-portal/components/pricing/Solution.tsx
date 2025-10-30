"use client";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnchorLinksPricing from "./AnchorLinksPricing";
import { removeAccent } from "@/utils/ultils";
import { useEffect, useRef, useState } from "react";
import OurFulfillment from "./ourFulfillment/page";
import Link from "next/link";
import clsx from "clsx";
import ShippingFees from "./ShippingFees";
import Other from "./Other";
import { usePathname } from "next/navigation";
const Solution = ({ lang }: { lang: any }) => {
  const [scrolledToEnd, setScrolledToEnd] = useState(false);
  const locale = usePathname().split("/")[1];

  useEffect(() => {
    const handleScroll = () => {
      const aaElement = document.getElementById("aa");

      if (aaElement) {
        const elementRect = aaElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (elementRect.bottom < 0) {
          setScrolledToEnd(true);
        } else {
          setScrolledToEnd(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lg:mt-[140px] mt-[170px] ">
      <div
        className="grid grid-cols-2 gap-4 lg:grid-cols-4 px-4 lg:px-0 container"
        id="aa"
      >
        {lang?.item?.map((x: any, index: number) => (
          <div
            key={index}
            className="text-center px-2 py-4 border border-[#ddd] rounded-lg lg:rounded-xl  grid content-between"
          >
            <div>
              <h3 className="lg:text-[18px] font-bold max-h-12 h-max line-clamp-2">
                {x.title}
              </h3>
              <div className="my-2 text-sm lg:text-base lg:max-h-[96px] lg:h-full">
                {x.content}
              </div>
            </div>
            <div
              className="mt-1 text-sm lg:text-base text-brand-primary cursor-pointer"
              onClick={(e) => {
                document
                  .getElementById(removeAccent(x?.title!))
                  ?.scrollIntoView({
                    behavior: "smooth",
                    inline: "start",
                  });
              }}
            >
              {lang?.detail}{" "}
              <FontAwesomeIcon
                icon={faArrowDown}
                size="sm"
                width={14}
                height={11}
              />
            </div>
          </div>
        ))}
      </div>
      {scrolledToEnd ? (
        <AnchorLinksPricing
          items={[...lang?.item].map((x) => ({
            label: x?.title!,
            content: x?.content,
            href: "#" + removeAccent(x?.title!),
          }))}
        />
      ) : (
        <div></div>
      )}
      <OurFulfillment lang={lang?.ourFulfill} />
      <div
        className={clsx(
          "lg:my-[78px] my-5 text-center lg:text-start p-5 mx-4 lg:px-0 lg:py-11 rounded-xl",
          "lg:bg-[url(https://strapi-efex.ichiba.net/uploads/Background_3fc485bfee.svg)] bg-[url(https://strapi-efex.ichiba.net/uploads/Background_ec42968d25.svg)] bg-cover bg-no-repeat max-w-[1050px] lg:mx-auto"
        )}
      >
        <div className="lg:flex lg:justify-between lg:items-center lg:px-[55px]">
          <div className="text-white font-bold lg:max-w-[447px] text-xl">
            {lang?.haveYou}
          </div>
          <div className="mt-4">
            <Link
              href={`/${locale}/contact-sales`}
              target="_blank"
              className="font-medium text-white bg-brand-primary rounded-lg py-2 px-5 lg:text-base text-sm"
            >
              {lang?.getASui}
            </Link>
          </div>
        </div>
      </div>
      <ShippingFees lang={lang?.shippingFees} />
      <Other lang={lang?.other} />
    </div>
  );
};
export default Solution;
