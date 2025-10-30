"use client";
import {
  faArrowDown,
  faArrowRight,
  faArrowUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgCustomer from "@/public/images/x-border-shipping/customer.webp";
import avt from "@/public/images/home/customer/avt.webp";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { animated, useTransition } from "react-spring";
import YouTube, { YouTubeProps } from "react-youtube";
import clsx from "clsx";
import { usePathname } from "next/navigation";
var cElement: any = null;

const CustomerStories = ({ lang }: { lang: any }) => {
  const [items, setItems] = useState([
    {
      key: 0,
      content: `“${lang?.xBorderShippin.customerStories.contents[0]?.content}”.`,
      name: lang?.xBorderShippin.customerStories.contents[0]?.name,
    },
    {
      key: 1,
      content: `“${lang?.xBorderShippin.customerStories.contents[1]?.content}”.`,
      name: lang?.xBorderShippin.customerStories.contents[1]?.name,
    },
    {
      key: 2,
      content: `“${lang?.xBorderShippin.customerStories.contents[2]?.content}”.`,
      name: lang?.xBorderShippin.customerStories.contents[2]?.name,
    },
  ]);

  const [active, setActive] = useState(items[0].key as number);
  const [prevActive, setPrevActive] = useState(items.length);

  useEffect(() => {
    let selectedProductIndex = items.findIndex((item) => item.key === active);
    if (selectedProductIndex === -1) {
      selectedProductIndex = 0; // Nếu không tìm thấy, đặt lại về phần tử đầu tiên
    } else {
      selectedProductIndex++;
      if (selectedProductIndex === items.length) {
        selectedProductIndex = 0; // Nếu đã đạt cuối danh sách, quay lại phần tử đầu tiên
      }
    }
    const timeoutID = setTimeout(() => {
      setActive(items[selectedProductIndex]?.key);
      if (selectedProductIndex === 0) {
        setPrevActive(items.length - 1);
      } else {
        setPrevActive(selectedProductIndex - 1);
      }
    }, 5000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [active, items]);

  const plus = () => {
    if (active === items.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  const minus = () => {
    if (active === 0) {
      setActive(items.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  const [up, setUp] = useState(true);

  const transitions = useTransition(active, {
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

  const handleNextSlide = () => {
    setUp(true);
    setActive((prevSlide) => (prevSlide + 1) % items.length);
  };

  const handlePrevSlide = () => {
    setUp(false);
    setActive((prevSlide) => (prevSlide - 1 + items.length) % items.length);
  };

  const [overLayVisible1, setOverlayVisible1] = useState(false);
  const [video, setVideo] = useState("");

  // const hide = (value: any) => {
  //   setVideo(items[value].videoId);
  //   setOverlayVisible1(false);
  //   cElement?.target?.stopVideo();
  // };

  const display = () => {
    setOverlayVisible1(true);
    cElement?.target?.playVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "315",
    width: "560",
    // playerVars: {
    //   // https://developers.google.com/youtube/player_parameters
    //   autoplay: 1,
    // },
  };
  const locale = usePathname().slice(1, 3);

  return (
    <div
      className={clsx(
        " relative ",
        "bg-[linear-gradient(to_bottom,_#F6F7F9_0%,_#F6F7F9_40%,_#0C172D_40%,_#0C172D_100%)]",
        "lg:bg-[linear-gradient(to_right,_#F6F7F9_0%,_#F6F7F9_50%,_#0C172D_50%,_#0C172D_100%)]"
        // classes
      )}
    >
      <div className="px-4 py-7 lg:py-[100px] lg:px-0 container lg:flex lg:items-center lg:h-[540px] ">
        <div className="lg:max-w-[432px] lg:w-full lg:mr-10">
          <h3 className="font-bold text-2xl lg:text-4xl text-[#333] mb-2">
            {lang?.xBorderShippin.customerStories.heading}
          </h3>
          <div className="text-[#666] lg:text-base text-sm">
            {lang?.xBorderShippin.customerStories.subHeading}
          </div>
          <Link
            href={`/${locale}/blog`}
            className="block w-max rounded-[8px] text-sm bg-contact text-white py-2 px-3 lg:px-5 my-5 lg:mt-10 lg:mb-0 hover:bg-[#A30505]"
          >
            {lang?.xBorderShippin.customerStories.cta}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <div className="mt-7 text-white lg:flex flex flex-col-reverse">
          <div className="absolute right-4 top-[43%] z-[1]  hidden lg:block">
            {items.map((value: any, index: number) => (
              <div
                key={index}
                className={`rounded-[4px] w-1  my-[3px] mx-auto ${
                  active === index
                    ? "h-8 bg-white"
                    : "h-2 bg-[rgba(255,_255,_255,_0.4)]"
                }`}
              ></div>
            ))}
            <div className="my-4 ">
              <FontAwesomeIcon
                icon={faArrowUp}
                className={`rounded-full border px-[10px] py-[8px]`}
                onClick={() => handlePrevSlide()}
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faArrowDown}
                className={`rounded-full border px-[10px] py-[8px]`}
                onClick={() => handleNextSlide()}
              />
            </div>
          </div>

          <div className="mt-4 lg:hidden flex items-center justify-between">
            <div className="flex gap-[6px]">
              {items.map((value: any, index: number) => (
                <div
                  key={index}
                  className={clsx(
                    `rounded-[4px] h-1  my-[3px] mx-auto`,
                    active === index
                      ? "w-8 bg-white"
                      : "w-2 bg-[rgba(255,_255,_255,_0.4)]"
                  )}
                ></div>
              ))}
            </div>
            <div className="flex gap-6">
              <div className="">
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className={`rounded-full border px-[10px] py-[8px] -rotate-90`}
                  onClick={() => minus()}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className={`rounded-full border px-[10px] py-[8px] -rotate-90`}
                  onClick={() => plus()}
                />
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            {items.map((value: any, index: number) => (
              <div
                className={clsx(
                  active === index ? "lg:flex fadein_items" : "hidden",
                  "rounded-2xl bg-white text-[#333]"
                )}
                key={index}
              >
                <Image
                  src={'https://strapi-efex.ichiba.net/uploads/Image_4_cbb82ca788.png'}
                  alt="imgCustomer"
                  width={500}
                  height={500}
                  className="w-full rounded-t-[12px] lg:mr-10 max-h-[220px] lg:max-h-full object-cover"
                  onClick={() => display()}
                  quality={100}
                />

                <div
                  className={`p-4 lg:max-w-[383px] flex flex-col gap-4 lg:py-4 `}
                >
                  <div>{value.content}</div>
                  <Link
                    href={`/${locale}/blog`}
                    className="text-brand-primary group font-medium self-end"
                  >
                    {lang?.xBorderShippin.customerStories.readCase}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* desktop */}
          <div className="lg:block hidden">
            {transitions((style, index) => {
              const direction = index > active ? "up" : "down";
              return (
                <animated.div
                  className={`${direction} lg:absolute lg:top-[120px]`}
                  style={{
                    ...style,
                    willChange: "transform",
                  }}
                >
                  <div className="lg:flex bg-white rounded-2xl text-[#333] items-center pr-6 gap-6">
                    <Image
                      src={'https://strapi-efex.ichiba.net/uploads/Image_4_cbb82ca788.png'}
                      alt="imgCustomer"
                      className={clsx(
                        "max-w-[85%] lg:max-w-[306px] rounded-[12px] cursor-pointer hover:transition-all",
                        "hover:translate-y-[-5px] hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)]",
                        "hover:duration-300 hover:ease-linear"
                      )}
                      width={500}
                      height={500}
                      onClick={() => display()}
                      quality={100}
                    />

                    <div
                      className={`pt-6 lg:max-w-[383px] flex lg:flex-col justify-center lg:py-4 gap-6`}
                    >
                      <p>{items[index].content}</p>
                      <p className="ml-auto font-bold"> {items[index].name}</p>
                      <Link
                        href={`/${locale}/blog`}
                        className="text-brand-primary group font-medium self-end"
                      >
                        {lang?.xBorderShippin.customerStories.readCase}
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </animated.div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div
        className={clsx(
          " justify-center items-center fixed  h-[100vh]",
          "bg-[rgba(_0,_0,_0,_0.5)] z-50 top-0 right-0 left-0 bottom-0",
          overLayVisible1 ? "block" : "hidden"
        )}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="text-right text-white ">
            <span className=" w-fit " onClick={() => hide("1")}>
              <FontAwesomeIcon
                icon={faXmark}
                size="3x"
                className="ring-transparent ring-2 hover:scale-125 transition duration-300 cursor-pointer"
              />
            </span>
          </div>
          <YouTube
            videoId={video}
            opts={opts}
            iframeClassName="w-[95vw] h-[35vh] md:w-[44.8vw] md:h-[50vh]"
            onReady={(e) => (cElement = e)}
            loading="lazy"
          />
        </div>
      </div> */}
    </div>
  );
};
export default CustomerStories;
