import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import Image from "next/image";

const WhatYouCanDo = () => {
  const b = useTranslation("build-store-front").t;
  const [active, setActive] = useState(0);
  const [showOn, setShowOn] = useState("");
  const items = (
    b(`commerceSite.whatYou.items`, {
      returnObjects: true,
    }) as string[]
  ).map((x: any) => ({
    icon: x.icon as string,
    img: x.img as string,
    label: x.label as string,
    title: x.title as string,
    content: x.content as string,
  }));
  useEffect(() => {
    setShowOn("tw-opacity-0");
    const timeout = setTimeout(() => {
      setShowOn("tw-animate-showOn");
    }, 50);

    return () => clearTimeout(timeout); // Clear timeout nếu active thay đổi trước khi timeout được kích hoạt
  }, [active]);
  return (
    <div className="lg:tw-py-20 tw-py-6 lg:tw-px-0 tw-px-4">
      <div className="tw-text-center">
        <h2 className="tw-text-2xl tw-font-bold lg:tw-text-4xl">
          {b("commerceSite.whatYou.title")}
        </h2>
        <div className="tw-text-sm lg:tw-text-lg">{b("commerceSite.whatYou.subtitle")}</div>
      </div>
      <div className="lg:tw-flex lg:tw-container lg:tw-gap-12 lg:tw-mt-15">
        <div className="lg:tw-flex tw-hidden tw-items-center tw-px-6 tw-py-5 tw-max-w-[768px] tw-gap-6 tw-rounded-xl tw-border tw-border-[#F2F2F2] tw-mt-4 tw-shadow-[0px_17px_30px_0px_rgba(0,0,0,0.07)]">
          <div className="tw-py-[48px] tw-rounded-lg tw-bg-[#E7F5FF]">
            <Image
              src={b(`commerceSite.whatYou.items.${active}.img`) as string}
              alt="whatYou"
              className="tw-mx-auto tw-max-w-[340px]"
              width={1020}
              height={657}
              quality={100}
            />
          </div>
          <div>
            <div className="tw-text-2xl tw-font-bold">
              {b(`commerceSite.whatYou.items.${active}.title`)}
            </div>
            <div className="tw-mt-6 tw-text-sm">
              {b(`commerceSite.whatYou.items.${active}.content`)}
            </div>
          </div>
        </div>
        <div className="tw-mt-4 tw-grid  tw-grid-cols-2 tw-gap-2 tw-max-w-[400px] tw-mx-auto lg:tw-max-w-[400px] lg:tw-py-6">
          {items.map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-cursor-pointer tw-rounded-lg tw-bg-white tw-pt-3 tw-pb-2 tw-px-4 tw-text-center tw-flex tw-items-center tw-justify-center",
                active === index
                  ? "tw-border-[1.5px] tw-border-[#F57C00]"
                  : "tw-border tw-border-[#D6E4FF]",
              )}
              onClick={() => setActive(index)}
            >
              <div>
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={24}
                  height={24}
                  className={clsx(
                    "tw-mx-auto",
                    active === index ? "" : "tw-brightness-0",
                  )}
                />
                <div
                  className={clsx(
                    "tw-mt-1 tw-h-[40px] tw-flex tw-items-center tw-justify-center lg:tw-text-base tw-text-sm tw-font-bold",
                    active === index ? "tw-text-[#F57C00]" : "",
                  )}
                >
                  {value.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:tw-hidden tw-px-3 tw-pt-3 tw-pb-5 tw-rounded-xl tw-border tw-border-[#F2F2F2] tw-mt-4 tw-shadow-[0px_17px_30px_0px_rgba(0,0,0,0.07)]">
          <div className="tw-py-[48px] tw-rounded-lg tw-bg-[#E7F5FF]">
            <Image
              src={b(`commerceSite.whatYou.items.${active}.img`) as string}
              alt="whatYou"
              className="tw-mx-auto tw-max-w-[340px] tw-w-full"
              width={1020}
              height={657}
              quality={100}
            />
          </div>
          <div className="tw-mt-3 tw-text-lg tw-font-bold">
            {b(`commerceSite.whatYou.items.${active}.title`)}
          </div>
          <div className="tw-mt-1 tw-text-sm">
            {b(`commerceSite.whatYou.items.${active}.content`)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatYouCanDo;
