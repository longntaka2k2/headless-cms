/* eslint-disable @next/next/link-passhref */

import customerImg from "@/public/icons/customerSay/customer.webp";
import borderActive from "@/public/icons/customerSay/borderActive.svg";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import useWidth from "@/const/withCount";
import {
  faAngleLeft,
  faAngleRight,
  faArrowDown,
  faArrowRight,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { animated, useTransition } from "react-spring";

import Link from "next/link";

export default function CustomerSay(props: any) {
  let host = typeof window !== "undefined" ? window.location.origin : "";
  const [isOpen, setIsOpen] = useState(0);
  const { t } = useTranslation("common");
  const [up, setUp] = useState(true);
  const widthCount = useWidth();
  const [selectedProduct, setSelectedProduct] = useState<any>(undefined);
  const [activeProduct, setActiveProduct] = useState(0);

  useEffect(() => {
    let selectedProductIndex = 0;
    setActiveProduct(selectedProductIndex);

    setInterval(() => {
      selectedProductIndex++;

      if (selectedProductIndex >= (props?.CustomerSayItem?.length ?? 0)) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        selectedProductIndex = 0;
      }
      setActiveProduct(selectedProductIndex);
    }, 7000000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSmoothScroll = (value: string) => {
    let selectedProductIndex = activeProduct;
    if (value === "left") {
      if (activeProduct <= 0) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        selectedProductIndex = props?.CustomerSayItem?.length;
      }
      setActiveProduct(selectedProductIndex - 1);
    } else {
      if (selectedProductIndex === props?.CustomerSayItem?.length - 1) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setActiveProduct(0);
      } else {
        setActiveProduct(selectedProductIndex + 1);
      }
    }
  };
  const handleNextSlide = () => {
    setUp(true);
    setActiveProduct(
      (prevSlide) => (prevSlide + 1) % props?.CustomerSayItem?.length,
    );
  };

  const handlePrevSlide = () => {
    setUp(false);
    setActiveProduct(
      (prevSlide) =>
        (prevSlide - 1 + props?.CustomerSayItem?.length) %
        props?.CustomerSayItem?.length,
    );
  };
  // const plus = () => {
  //   if (isOpen === items.length - 1) {
  //     setActive(0);
  //   } else {
  //     setActive(active + 1);
  //   }
  // };
  // const minus = () => {
  //   if (isOpen === 0) {
  //     setActive(items.length - 1);
  //   } else {
  //     setActive(active - 1);
  //   }
  // };
  const transitions = useTransition(activeProduct, {
    from: {
      opacity: 0,
      transform:
        up === true ? "translate3d(0, -50%, 0)" : "translate3d(0, 50%, 0)",
    },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: {
      opacity: 0,
      transform:
        up === true ? "translate3d(0, 50%, 0)" : "translate3d(0, -50%, 0)",
    },
  });
  return (
    <div key={`${props.id}_${props.__component}`}>
      {props && (props?.CustomerSayItem?.length as number) > 0 && (
        <div className="customer-stories tw-relative  lg:tw-bg-[#FAFAFD] lg:tw-bg-none tw-bg-[linear-gradient(273deg,_#FDE9D3_2.84%,_rgba(233,_238,_255,_0.60)_78.16%)]">
          <div className="tw-px-4  lg:tw-px-0  lg:tw-flex lg:tw-items-center ">
            <div className="lg:tw-max-w-[48%] lg:tw-w-full lg:tw-pr-10 tw-py-7 lg:tw-pt-[150px] lg:tw-pb-[150px] lg:tw-bg-[linear-gradient(273deg,_#FDE9D3_2.84%,_rgba(233,_238,_255,_0.60)_78.16%)]">
              <div className="lg:tw-max-w-[423px] tw-float-right lg:tw-mr-[80px] tw-mb-4 lg:tw-mb-0">
                <div dangerouslySetInnerHTML={{ __html: props?.title }} />
              </div>
            </div>
            <div className="tw-mt-7 tw-text-[#333] lg:tw-flex">
              <div className="tw-absolute tw-right-4 tw-top-[43%] tw-z-[1]  tw-hidden lg:tw-block">
                {props?.CustomerSayItem?.map((value: any, index: number) => (
                  <div
                    key={index}
                    className={`tw-rounded-[4px] tw-w-1 tw-my-[3px] tw-mx-auto  ${
                      index === activeProduct
                        ? "tw-h-8 tw-bg-[#1135A8]"
                        : "tw-h-2 tw-bg-[#85A5FF]"
                    }`}
                  ></div>
                ))}
                <div className="tw-my-4 ">
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className={`tw-rounded-full tw-border tw-px-[10px] tw-py-[8px] tw-text-[#1135A8] tw-border-[#1135A8]`}
                    onClick={() => handleSmoothScroll("left")}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className={`tw-rounded-full tw-border tw-px-[10px] tw-py-[8px] tw-text-[#1135A8] tw-border-[#1135A8]`}
                    onClick={() => handleSmoothScroll("right")}
                  />
                </div>
              </div>

              <div className="tw-absolute tw-right-4 tw-top-[43%] lg:tw-hidden">
                {props?.CustomerSayItem?.map((value: any, index: number) => (
                  <div
                    key={index}
                    className={`tw-rounded-[4px] tw-w-1 tw-my-[3px] tw-mx-auto ${
                      index === activeProduct
                        ? "tw-h-8 tw-bg-[#1135A8]"
                        : "tw-h-2 tw-bg-[#85A5FF]"
                    }`}
                  ></div>
                ))}
                <div className="tw-my-4">
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className={`tw-rounded-full tw-border tw-px-[10px] tw-py-[8px] tw-text-[#1135A8] tw-border-[#1135A8]`}
                    onClick={() => handleSmoothScroll("left")}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className={`tw-rounded-full tw-border tw-px-[10px] tw-py-[8px] tw-text-[#1135A8] tw-border-[#1135A8]`}
                    onClick={() => handleSmoothScroll("right")}
                  />
                </div>
              </div>
              <div className="lg:tw-hidden tw-h-max pb-4 lg:pb-0">
                {props?.CustomerSayItem?.map((value: any, index: number) => (
                  <div
                    className={`${
                      index === activeProduct
                        ? "lg:tw-flex fadein_items"
                        : "tw-hidden "
                    }`}
                    key={index}
                  >
                    <Image
                      src={value.imgOpen?.data?.attributes?.url}
                      alt={
                        value.imgOpen?.data?.attributes?.url
                          ? value.imgOpen?.data?.attributes?.url
                          : ""
                      }
                      className="tw-max-w-[85%] lg:tw-max-w-[306px] tw-rounded-[12px] lg:tw-mr-10"
                      width={1000}
                      height={1000}
                    />

                    <div
                      className={`tw-text-[#333] tw-pt-6 lg:tw-max-w-[383px] lg:tw-grid lg:tw-content-between lg:tw-py-4 `}
                    >
                      <div className="text-[14px] lg:text-base">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: value?.content,
                          }}
                        />
                      </div>
                      <div className="tw-mt-4 tw-flex tw-items-center ">
                        <Image
                          src={value.imgOpen?.data?.attributes?.url}
                          alt="avt"
                          className="tw-rounded-full tw-h-[40px] tw-w-[40px] "
                          width={1000}
                          height={1000}
                        />
                        <div className="tw-ml-4 ">
                          <div
                            className=""
                            dangerouslySetInnerHTML={{
                              __html: value.customer,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lg:tw-block tw-hidden tw-static ">
                {transitions((style, index) => {
                  const direction = index > isOpen ? "up" : "down";
                  return (
                    <animated.div
                      className={` ${direction} lg:tw-absolute lg:tw-top-[100px] lg:tw-left-[44%]`}
                      style={{
                        ...style,
                        willChange: "transform",
                      }}
                    >
                      <div className="lg:tw-flex tw-items-center">
                        <Image
                          // src={
                          //   props?.CustomerSayItem[activeProduct].imgOpen?.data
                          //     ?.attributes?.url
                          // }
                          src={
                            props?.CustomerSayItem[activeProduct]?.imgOpen?.data
                              ?.attributes?.url
                          }
                          alt="imgCustomer"
                          className="tw-max-w-[85%] lg:tw-h-[331px] lg:tw-max-w-[306px] tw-rounded-[12px] lg:tw-mr-10 tw-cursor-pointer tw-object-cover"
                          width={1000}
                          height={1000}
                        />
                        <div
                          className={`tw-pt-6 lg:tw-max-w-[383px] lg:tw-grid lg:tw-content-between lg:tw-py-4 tw-text-[#333]`}
                        >
                          <div className="text-[14px] lg:text-base">
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  props?.CustomerSayItem[activeProduct]
                                    ?.content,
                              }}
                            />
                          </div>
                          <div className="tw-mt-4 tw-flex tw-items-center ">
                            <Image
                              src={
                                props?.CustomerSayItem[activeProduct]?.imgOpen
                                  ?.data?.attributes?.url
                              }
                              alt="avt"
                              className="tw-rounded-full tw-h-[40px] tw-w-[40px] "
                              width={1000}
                              height={1000}
                            />
                            <div className="tw-ml-4 ">
                              <div
                                className=""
                                dangerouslySetInnerHTML={{
                                  __html:
                                    props?.CustomerSayItem[activeProduct]
                                      ?.customer,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </animated.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
