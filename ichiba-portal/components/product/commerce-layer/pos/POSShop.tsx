import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useState } from "react";

const POSShop = () => {
  const p = useTranslation("pos").t;
  const [active, setActive] = useState(0);

  return (
    <div className="tw-py-6 tw-px-4 tw-bg-[#EFF3F8] lg:tw-py-15 lg:tw-px-0">
      <div className="lg:tw-container">
        <div className=" lg:tw-flex lg:tw-items-center tw-gap-[50px]">
          <div className="tw-max-w-[689px]">
            <div className="tw-text-[#1135A8] tw-uppercase tw-text-sm tw-font-medium lg:tw-text-base">
              {p("posforshop.label")}
            </div>
            <h3 className="tw-font-bold tw-text-2xl lg:tw-text-4xl lg:tw-mt-2">
              {p("posforshop.title")}
            </h3>
            <div className="tw-grid tw-mt-6 lg:tw-mt-10 lg:tw-max-w-[500px]">
              {(
                p("posforshop.items", {
                  returnObjects: true,
                }) as string[]
              ).map((value: any, index: number) => (
                <div key={index} className="" onClick={() => setActive(index)}>
                  <div
                    className={clsx(
                      "tw-flex tw-gap-2 lg:tw-gap-4 lg:tw-p-6 tw-items-start tw-p-3 tw-rounded-lg",
                      active === index &&
                        "tw-bg-white tw-shadow-[0px_0px_12px_0px_rgba(54,50,46,0.08)]",
                    )}
                  >
                    <Image
                      src={`https://cms-strapi.ichiba.net${
                        active === index
                          ? "/uploads/package_box_5b57601aa9.svg"
                          : "/uploads/Group_1_e36bb3f55c.svg"
                      }`}
                      alt={value.title}
                      width={24}
                      height={24}
                      className="lg:tw-min-w-[32px] "
                    />
                    <div>
                      <div
                        className={clsx(
                          "tw-font-bold lg:tw-text-xl",
                          index === active
                            ? "tw-text-[#F57C00]"
                            : "tw-text-[#666]",
                        )}
                      >
                        {value.title}
                      </div>
                      <div className="tw-mt-3 tw-text-sm lg:tw-text-base">
                        {value.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:tw-flex-1">
            <Image
              src={`https://cms-strapi.ichiba.net${
                active === 0
                  ? "/uploads/Frame_1171276114_b2315d6822.png"
                  : "/uploads/employee_1_5d8ff3615c.png"
              }`}
              width={568}
              height={424}
              alt="posforshop"
              className="tw-w-full tw-mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSShop;
