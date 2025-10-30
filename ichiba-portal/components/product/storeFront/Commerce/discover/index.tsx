import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useState } from "react";

const Discover = () => {
  const b = useTranslation("build-store-front").t;
  const [active, setActive] = useState(0);
  const [activeChil, setActiveChil] = useState(0);
  useEffect(() => {
    setActiveChil(0);
    setShowOn("tw-opacity-0");
    const timeout = setTimeout(() => {
      setShowOn("tw-animate-showOn");
    }, 50);

    return () => clearTimeout(timeout);
  }, [active]);
  const [showOn, setShowOn] = useState("");
  useEffect(() => {
    setShowOn("tw-opacity-0");
    const timeout = setTimeout(() => {
      setShowOn("tw-animate-showOn");
    }, 50);

    return () => clearTimeout(timeout);
  }, [activeChil]);
  return (
    <div className="tw-py-6 tw-px-4 lg:tw-px-0 lg:tw-container lg:tw-pt-15 lg:tw-pb-20">
      <div className="tw-text-center tw-max-w-[900px] tw-mx-auto">
        <div className="tw-inline-block tw-text-[#0F62FE] tw-text-sm tw-px-5 tw-py-[2px] tw-rounded-full tw-bg-[#E6F3FF] tw-mx-auto">
          {b("commerceSite.discover.label")}
        </div>
        <div className="tw-text-2xl tw-font-bold lg:tw-text-4xl tw-mt-1 ">
          {b("commerceSite.discover.title")}
        </div>
      </div>
      <div className="tw-flex tw-overflow-x-scroll tw-no-scrollbar tw-gap-3 tw-mt-4 lg:tw-mt-6 lg:tw-justify-center">
        {(
          b(`commerceSite.discover.items`, {
            returnObjects: true,
          }) as string[]
        ).map((value: any, index: number) => (
          <div
            key={index}
            className={clsx(
              "tw-py-2 tw-px-3 tw-rounded-full tw-whitespace-nowrap",
              active === index
                ? "tw-font-bold tw-text-white tw-bg-[#333]"
                : " tw-bg-[#F2F2F2]",
            )}
            onClick={() => setActive(index)}
          >
            {value.label}
          </div>
        ))}
      </div>
      <div className="tw-mt-5 tw-grid tw-gap-2 lg:tw-hidden">
        {(
          b(`commerceSite.discover.items.${active}.content`, {
            returnObjects: true,
          }) as string[]
        ).map((value: any, index: number) => (
          <div className="" key={index}>
            <div
              className="tw-flex tw-items-start tw-gap-4 tw-py-2"
              onClick={() => setActiveChil(index)}
            >
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Group_c70c28a4e4.svg"
                }
                alt={value.title}
                width={32}
                height={32}
                className={clsx(
                  activeChil === index ? "" : "tw-brightness-[0.3]",
                  "tw-max-w-6 lg:tw-max-w-8",
                )}
              />
              <div>
                <div
                  className={clsx(
                    "tw-flex tw-justify-between",
                    activeChil === index
                      ? "tw-text-[#F57C00]"
                      : "tw-text-[#666]",
                  )}
                >
                  <div className={clsx("tw-font-bold ")}>{value.title}</div>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={clsx(
                      "tw-transition-all tw-duration-200",
                      activeChil === index
                        ? "tw-rotate-180 tw-text-[#F57C00]"
                        : "tw-rotate-0",
                    )}
                  />
                </div>
                <div className="tw-text-sm">{value.subtitle}</div>
              </div>
            </div>
            <Image
              src={value.img}
              alt={value.title}
              width={588}
              height={452}
              unoptimized
              quality={50}
              className={clsx(
                "tw-w-full tw-mt-4",
                activeChil === index ? "tw-animate-fade-in" : "tw-hidden",
              )}
            />
          </div>
        ))}
      </div>
      <div className="tw-mt-15 lg:tw-grid tw-grid-cols-2 tw-hidden tw-gap-6 ">
        <div className="tw-flex tw-flex-col ">
          {(
            b(`commerceSite.discover.items.${active}.content`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div className="" key={index}>
              <div
                className="tw-flex tw-items-start tw-gap-4 tw-py-2 lg:tw-py-4 tw-cursor-pointer"
                onClick={() => setActiveChil(index)}
              >
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Group_c70c28a4e4.svg"
                  alt={value.title}
                  width={32}
                  height={32}
                  className={clsx(
                    activeChil === index ? "" : "tw-brightness-[0.3]",
                    "tw-max-w-6 lg:tw-max-w-8",
                  )}
                />
                <div className="tw-max-w-[432px]">
                  <div
                    className={clsx(
                      activeChil === index
                        ? "tw-text-[#F57C00]"
                        : "tw-text-[#666]",
                    )}
                  >
                    <div className={clsx("tw-font-bold tw-text-xl")}>{value.title}</div>
                  </div>
                  <div>{value.subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="tw-max-w-[588px] tw-rounded-lg">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_1171275810_2_a5ae4210f6.webp"
            alt={"cms-strapi"}
            width={882}
            height={678}
            unoptimized
            className={clsx("tw-w-full tw-mt-4 tw-max-w-[588px]",showOn)}
          />
        </div>
      </div>
    </div>
  );
};
export default Discover;
