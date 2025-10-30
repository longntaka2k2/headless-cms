"use client";
import {
  faArrowDown,
  faArrowRight,
  faArrowUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgCustomer from "@/public/images/home/customer/imgCustomer.webp";
import avt from "@/public/images/home/customer/avt.webp";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { animated, useTransition } from "react-spring";
import YouTube, { YouTubeProps } from "react-youtube";
import clsx from "clsx";
import { usePathname } from "next/navigation";
var cElement: any = null;

const CustomerStories = ({ lang }: { lang: any }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const items = [
    {
      key: 0,
      content: `“${lang?.homePage?.customer?.story[0]?.content}”.`,
      name: lang?.homePage?.customer?.story[0]?.name,
      bio: lang?.homePage?.customer?.story[0]?.bio,
      videoId: "GJJtVp88fKk",
    },
    {
      key: 1,
      content: `“${lang?.homePage?.customer?.story[1]?.content}”.`,
      name: lang?.homePage?.customer?.story[1]?.name,
      bio: lang?.homePage?.customer?.story[1]?.bio,
      videoId: "GJJtVp88fKk",
    },
    {
      key: 2,
      content: `“${lang?.homePage?.customer?.story[2]?.content}”.`,
      name: lang?.homePage?.customer?.story[2]?.name,
      bio: lang?.homePage?.customer?.story[2]?.bio,
      videoId: "GJJtVp88fKk",
    },
    {
      key: 3,
      content: `“${lang?.homePage?.customer?.story[3]?.content}”.`,
      name: lang?.homePage?.customer?.story[3]?.name,
      bio: lang?.homePage?.customer?.story[3]?.bio,
      videoId: "GJJtVp88fKk",
    },
  ];
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

  const hide = (value: any) => {
    setVideo(items[value].videoId);
    setOverlayVisible1(false);
    cElement?.target?.stopVideo();
  };
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
    <div className="customer-stories relative bg-[linear-gradient(to_bottom,_#F6F7F9_0%,_#F6F7F9_40%,_#0C172D_40%,_#0C172D_100%);] lg:bg-[linear-gradient(to_right,_#F6F7F9_0%,_#F6F7F9_45%,_#0C172D_45%,_#0C172D_100%);]">
      <div className="px-4 py-7 lg:py-[100px] lg:px-0 container lg:flex lg:items-center lg:h-[540px] ">
        <div className="lg:max-w-[432px] lg:w-full lg:pr-10">
          <h2 className="font-bold text-2xl lg:text-4xl text-[#333] ">
            {lang?.homePage?.customer?.title}
          </h2>
          <div className="text-[#666] lg:text-base text-sm mt-3">
            {lang?.homePage?.customer?.content}
          </div>
          <Link
            href={`/${locale}/blog`}
            className="block w-max rounded-[8px] text-sm bg-contact text-white py-2 px-3 lg:px-5 my-5 lg:mt-10 lg:mb-0 hover:bg-[#A30505]"
          >
            {lang?.viewMore}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <div className="mt-7 text-white lg:flex">
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

          <div className="absolute right-4 top-[43%] lg:hidden">
            {items.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "rounded-[4px] w-1  my-[3px] mx-auto",
                  active === index
                    ? "h-8 bg-white"
                    : "h-2 bg-[rgba(255,255,255,.4)]"
                )}
              ></div>
            ))}
            <div className="my-4">
              <FontAwesomeIcon
                icon={faArrowUp}
                className={`rounded-full border px-[10px] py-[8px]`}
                onClick={() => minus()}
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faArrowDown}
                className={`rounded-full border px-[10px] py-[8px]`}
                onClick={() => plus()}
              />
            </div>
          </div>
          <div className="lg:hidden">
            {items.map((value: any, index: number) => (
              <div
                className={`${
                  active === index ? "lg:flex fadein_items" : "hidden"
                }`}
                key={index}
              >
                <Image
                  src={imgCustomer}
                  alt="imgCustomer"
                  className="max-w-[85%] lg:max-w-[306px] rounded-xl lg:mr-10"
                  onClick={() => display()}
                  quality={100}
                />

                <div
                  className={`pt-6 lg:max-w-[383px] lg:grid lg:content-between lg:py-4 `}
                >
                  <div>{value.content}</div>
                  <div className="mt-4 flex items-center ">
                    <Image
                    quality={100}
                      src={avt}
                      alt="avt"
                      className="rounded-full h-[40px] w-[40px] "
                    />
                    <div className="ml-4 ">
                      <div className="text-lg lg:text-xl font-bold">
                        {value.name}
                      </div>
                      <div className="text-sm opacity-80">{value.bio}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:block hidden">
            {transitions((style, index) => {
              const direction = index > active ? "up" : "down";
              return (
                <animated.div
                  className={` ${direction} lg:absolute lg:top-[120px]`}
                  style={{
                    ...style,
                    willChange: "transform",
                  }}
                >
                  <div className="lg:flex">
                    <Image
                      src={imgCustomer}
                      alt="imgCustomer"
                      quality={100}
                      className="max-w-[85%] lg:max-w-[306px] rounded-[12px] lg:mr-10 cursor-pointer hover:translate-y-[-5px] hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] hover:transition-all hover:duration-300 hover:ease-linear" 
                      onClick={() => display()}
                    />

                    <div
                      className={`pt-6 lg:max-w-[383px] lg:grid lg:content-between lg:py-4 `}
                    >
                      <div className="text-lg">{items[index].content}</div>
                      <div className="mt-4 flex items-center ">
                        <Image
                          src={avt}
                          alt="avt"
                          quality={100}
                          className="rounded-full h-[40px] w-[40px] "
                        />
                        <div className="ml-4 ">
                          <div className="text-lg lg:text-xl font-bold">
                            {items[index].name}
                          </div>
                          <div className="text-sm opacity-80">
                            {items[index].bio}
                          </div>
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
      <div
        className={clsx(
          "justify-center items-center fixed  h-[100vh]",
          "bg-[rgba(0,0,0,.5)] z-50 top-0 right-0 left-0 bottom-0",
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
            videoId={locale === 'en' ? 'DaQoGCoLG9g' :'uV85GA7H0bY'}
            opts={opts}
            iframeClassName="w-[95vw] h-[35vh] md:w-[44.8vw] md:h-[50vh]"
            onReady={(e: any) => (cElement = e)}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
export default CustomerStories;
