"use client";
import EzImage from "@/components/commons/EzImage";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState } from "react";
import { Element } from "react-scroll";

const Statement = ({ lang }: any) => {
  const [expand, setExpand] = useState(false);
  return (
    <Element name="statement" className="relative h-full pb-2">
      {/* <EzImage
        src={"/uploads/CEO_statement_14b08d4a92.png"}
        className="relative hidden lg:block lg:pb-20 xl:pb-0"
        alt="background"
        width={1920}
        height={844}
      />
      <EzImage
        src={"/uploads/CEO_statement_1_d84337e56c.png"}
        className="block lg:hidden mb-[-50%]"
        alt="background"
        width={1920}
        height={844}
      /> */}
      <div
        className={clsx(
          "bg-[url(https://strapi-efex.ichiba.net/uploads/CEO_statement_14b08d4a92.png)] bg-no-repeat",
          ""
        )}
      >
        <div className="container">
          <div className={clsx("lg:w-2/3 lg:ml-auto lg:py-15 py-8 px-4 lg:px-0 ")}>
            <div className="bg-white rounded-lg p-4 lg:p-8 shadow-7 ">
              <h2 className="text-lg lg:text-2xl mb-4 lg:mb-6 ">
                {lang.heading}
              </h2>
              <div
                className={clsx(
                  "text-[#333] text-ellipsis xl:line-clamp-none mb-3",
                  "text-sm lg:text-base",
                  expand ? "line-clamp-none" : "line-clamp-[9]"
                )}
              >
                {lang.contents.map((x: string, idx: number) => (
                  <p key={idx} className="mb-4 lg:mb-6">
                    {x}
                  </p>
                ))}
              </div>
              <div
                role="button"
                className={clsx(
                  " text-brand-primary text-center",
                  expand ? "hidden" : "block xl:hidden"
                )}
              >
                View More
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="ml-2"
                  onClick={() => setExpand(true)}
                />
              </div>
              <div className="ml-auto w-fit">
                <div className=" flex flex-col justify-center text-center text-sm lg:text-base">
                  <div className="font-medium ">{lang.managingDirector}</div>
                  <EzImage
                    src="/uploads/Screen_Shot_2023_07_29_at_5_41_1_33316d429b.png"
                    alt="sign"
                    width={122}
                    height={80}
                    quality={100}
                    unoptimized
                  />
                  <div>Mr.Lex Le</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Statement;
