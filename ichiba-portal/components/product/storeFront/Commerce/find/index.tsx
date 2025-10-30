import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import Image from "next/image";
const FindOut = () => {
  const b = useTranslation("build-store-front").t;
  const [active, setActive] = useState(0);
  const [showOn, setShowOn] = useState("");

  useEffect(() => {
    setShowOn("tw-opacity-0");
    const timeout = setTimeout(() => {
      setShowOn("tw-animate-showOn");
    }, 50);

    return () => clearTimeout(timeout);
  }, [active]);
  return (
    <div className="tw-px-4 tw-py-6 tw-relative lg:tw-pt-[60px] lg:tw-pb-[80px] tw-overflow-hidden">
      <Image
        src={'https://cms-strapi.ichiba.net/uploads/Background_23f3f911db.svg'}
        alt={"commerceSite"}
        width={1920}
        height={587}
        className="tw-absolute tw-bottom-0 tw-z-[-1] tw-hidden lg:tw-block"
      />
      <div className="tw-font-bold tw-text-2xl lg:tw-text-4xl tw-max-w-[800px] tw-mx-auto lg:tw-text-center">
        {b("commerceSite.findout.title")}
      </div>
      <div className="lg:tw-hidden tw-grid tw-gap-4 tw-mt-4">
        {(
          b(`commerceSite.findout.items`, {
            returnObjects: true,
          }) as string[]
        ).map((value: any, index: number) => (
          <div key={index} onClick={() => setActive(index)}>
            <div
              className={clsx(
                "tw-px-4 tw-py-3 ",
                active === index
                  ? "tw-border tw-rounded-lg tw-border-[#F57C00]"
                  : "tw-border-b tw-border-[#ddd]",
              )}
            >
              <div className="tw-flex tw-justify-between">
                <div className="tw-font-bold ">{value.brand}</div>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={clsx(
                    "tw-transition-all tw-duration-200",
                    active === index
                      ? "tw-rotate-180 tw-text-[#F57C00]"
                      : "tw-rotate-0",
                  )}
                />
              </div>
              <div
                className={clsx(
                  "tw-mt-1 !tw-duration-500",
                  active === index ? "tw-animate-fade-in" : "tw-hidden",
                )}
              >
                <div className="tw-text-sm">{value.bioBrand}</div>
                <div className="tw-mt-3 tw-grid tw-grid-cols-2 tw-gap-5  ">
                  <div className="tw-flex tw-gap-2">
                    <div className="tw-rounded tw-bg-[#F2F2F2] tw-p-3">
                      <Image
                        src="https://cms-strapi.ichiba.net/uploads/Frame_1_2884304860.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="tw-max-w-[20px] lg:tw-max-w-[24px]"
                      />
                    </div>
                    <div>
                      <div className="tw-font-bold tw-text-sm">
                        {value.numberUser}
                      </div>
                      <div className="tw-text-[#666] tw-text-xs">
                        {value.users}
                      </div>
                    </div>
                  </div>
                  <div className="tw-flex tw-gap-2">
                    <div className="tw-rounded tw-bg-[#F2F2F2] tw-p-3">
                      <Image
                        src="https://cms-strapi.ichiba.net/uploads/Frame_2_0cfd0bc3ff.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="tw-max-w-[20px] lg:tw-max-w-[24px]"
                      />
                    </div>
                    <div>
                      <div className="tw-font-bold tw-text-sm">
                        {value.numberItems}
                      </div>
                      <div className="tw-text-[#666] tw-text-xs">
                        {value.items}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={clsx(
                "tw-shadow-[0px_0px_20px_0px_rgba(0,0,0,0.11)] tw-p-3 tw-rounded-lg tw-mt-3 ",
                active === index ? "tw-animate-showdown" : "tw-hidden",
              )}
            >
              <div className="tw-text-sm">{value.content}</div>
              <div className="tw-border-l-[2px] tw-border-[#333] tw-pl-2 tw-mt-4">
                <div className="tw-font-bold tw-text-sm">{value.name}</div>
                <div className="tw-text-xs">{value.bio}</div>
              </div>
              <div className="tw-mt-5 ">
                <Image
                  src={value.img}
                  alt={value.name}
                  width={1380}
                  height={920}
                  className="tw-rounded-xl"
                  unoptimized
                  quality={100}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="tw-hidden lg:tw-flex tw-gap-[60px] lg:tw-container tw-mt-[60px] ">
        <div className="tw-grid ">
          {(
            b(`commerceSite.findout.items`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div key={index} onClick={() => setActive(index)}>
              <div
                className={clsx(
                  "tw-p-6 tw-w-[348px] tw-cursor-pointer",
                  active === index
                    ? "tw-border tw-rounded-lg tw-border-[#F57C00] tw-bg-white"
                    : "tw-border-b tw-border-[#ddd]",
                )}
              >
                <div className="tw-flex tw-justify-between ">
                  <div className="tw-font-bold tw-text-xl">{value.brand}</div>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={clsx(
                      "tw-transition-all tw-duration-200",
                      active === index
                        ? "tw-rotate-180 tw-text-[#F57C00]"
                        : "tw-rotate-0",
                    )}
                  />
                </div>
                <div
                  className={clsx(
                    "tw-mt-1 !tw-duration-500",
                    active === index ? "tw-animate-fade-in" : "tw-hidden",
                  )}
                >
                  <div className="tw-text-sm">{value.bioBrand}</div>
                  <div className="tw-mt-3 tw-grid tw-gap-5  ">
                    <div className="tw-flex tw-gap-2">
                      <div className="tw-rounded tw-bg-[#F2F2F2] tw-p-3">
                        <Image
                          src="https://cms-strapi.ichiba.net/uploads/Frame_1_2884304860.svg"
                          alt=""
                          width={24}
                          height={24}
                          className="tw-max-w-[20px] lg:tw-max-w-[24px]"
                        />
                      </div>
                      <div>
                        <div className="tw-font-bold tw-text-lg">
                          {value.numberUser}
                        </div>
                        <div className="tw-text-[#666] tw-text-sm">
                          {value.users}
                        </div>
                      </div>
                    </div>
                    <div className="tw-flex tw-gap-2">
                      <div className="tw-rounded tw-bg-[#F2F2F2] tw-p-3">
                        <Image
                          src="https://cms-strapi.ichiba.net/uploads/Frame_2_0cfd0bc3ff.svg"
                          alt=""
                          width={24}
                          height={24}
                          className="tw-max-w-[20px] lg:tw-max-w-[24px]"
                        />
                      </div>
                      <div>
                        <div className="tw-font-bold tw-text-lg">
                          {value.numberItems}
                        </div>
                        <div className="tw-text-[#666] tw-text-sm">
                          {value.items}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={clsx(
            "tw-shadow-[0px_0px_20px_0px_rgba(0,0,0,0.11)] tw-py-6 tw-px-7 tw-rounded-lg tw-flex tw-gap-10 tw-items-center tw-bg-white",
            showOn,
          )}
        >
          <div>
            <div className="tw-text-sm">
              {b(`commerceSite.findout.items.${active}.content`)}
            </div>
            <div className="tw-border-l-[2px] tw-border-[#333] tw-pl-2 tw-mt-5">
              <div className="tw-font-bold">
                {b(`commerceSite.findout.items.${active}.name`)}
              </div>
              <div className="tw-text-xs">
                {b(`commerceSite.findout.items.${active}.bio`)}
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src={b(`commerceSite.findout.items.${active}.img`) as string}
              alt={b(`commerceSite.findout.items.${active}.name`)}
              width={1380}
              height={920}
              className="tw-rounded-xl tw-w-[280px] tw-min-w-[280px] tw-min-h-[312px] tw-object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FindOut;
