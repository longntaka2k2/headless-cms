"use client";
import EzImage from "@/components/commons/EzImage";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

const OtherRelate = ({ lang }: any) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const [active, setActive] = useState(0);
  const getLink = (index: number) => {
    const locale = pathName.split("/").at(1);
    const links = [
      `/${locale}/solutions/ecommerce-order-fulfillment`,
      `/${locale}/solutions/b2b-retail-fulfillment`,
      `/${locale}/solutions/cross-border-shipping`,
      `/${locale}/solutions/custom-clearance`,
    ];
    return links[index];
  };
  return (
    <section className={clsx("bg-[#F5F8FE]")}>
      <div
        className={clsx(
          "flex flex-col lg:flex-row lg:justify-between lg:items-center",
          "container px-4 py-6 lg:py-[60px]"
        )}
      >
        <div className="">
          <h2 className=" font-bold text-lg lg:text-2xl mb-4 lg:mb-10">
            {lang.heading}
          </h2>
          <div
            className={clsx(
              "flex lg:flex-col gap-4 lg:gap-4 overflow-auto no-scrollbar mb-5"
            )}
          >
            {lang.contents.map((x: any, idx: number) => (
              <div
                key={idx}
                role="button"
                onClick={() => setActive(idx)}
                className={clsx(
                  active == idx
                    ? "bg-gradient-to-r from-[#959db9]  to-brand-primary text-brand-primary font-bold"
                    : "bg-ic-ink-5 font-medium",
                  "p-0.5 rounded-[40px]  min-w-max lg:w-fit"
                )}
              >
                <div className="bg-[#F5F8FE] rounded-[32px] lg:text-base text-sm text-center py-2 px-5">
                  {x.title}
                </div>
              </div>
            ))}
          </div>
        </div>
        <article className="rounded-xl shadow-3 lg:px-10 lg:py-9 p-3 bg-white ">
          <EzImage
            src={"/uploads/Rectangle_6380_1_e9945cda3e.png"}
            alt=""
            className="mb-10"
            width={518}
            height={277}
          />
          <div className="flex flex-col gap-4 lg:gap-6 lg:max-w-[661px]">
            <div>
              <h3 className="font-bold lg:text-2xl pb-2 text-base">
                {lang.contents[active].title}
              </h3>
              <p className="text-sm lg:text-base">
                {lang.contents[active].des}
              </p>
            </div>
            <Link
              href={getLink(active)}
              className="text-brand-primary group self-end font-medium"
              target="_blank"
            >
              {lang.cta}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-1 transition-all ml-2"
              />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};
export default OtherRelate;
