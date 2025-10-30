"use client";
import clsx from "clsx";
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image1 from "@/public/images/Image1.png";
import Image2 from "@/public/images/Image2.png";
import Image3 from "@/public/images/Image3.png";
import Image4 from "@/public/images/Image4.png";
import Image5 from "@/public/images/Image5.png";
import Image6 from "@/public/images/Image6.png";
import Image7 from "@/public/images/Image7.png";
import Image8 from "@/public/images/Image8.png";
import Image9 from "@/public/images/Image9.png";
import Image10 from "@/public/images/Image10.png";
import Image11 from "@/public/images/Image11.png";
import Image12 from "@/public/images/Image12.png";
import Image13 from "@/public/images/Image13.png";
import Image14 from "@/public/images/Image14.png";
import Image15 from "@/public/images/Image15.png";
import Image16 from "@/public/images/Image16.png";
import Image17 from "@/public/images/Image17.png";
import Image18 from "@/public/images/Image18.png";
import Image19 from "@/public/images/Image19.png";
import Image20 from "@/public/images/Image20.png";
import Image21 from "@/public/images/Image21.png";
import Image22 from "@/public/images/Image22.png";
import Image23 from "@/public/images/Image23.png";
import Image24 from "@/public/images/Image24.png";
import Image25 from "@/public/images/Image25.png";
import Image26 from "@/public/images/Image26.png";
import Image27 from "@/public/images/Image27.png";

export const items = [
  {
    title: "Hệ thống kho",
    list: [
      {
        image: Image1,
        title: "Kệ kho bán Barcode kiểm soát hàng hoá",
      },
      {
        image: Image2,
        title: "Phân theo các khu",
      },
      {
        image: Image3,
        title: "Phân chia hàng fast moving & slow moving",
      },
    ],
  },
  {
    title: "Trang thiết bị",
    list: [
      {
        image: Image4,
        title: "Phần mềm quản lý kho WMS độc quyền",
      },
      {
        image: Image5,
        title: "Máy quét mã vạch PDA",
      },
      {
        image: Image6,
        title: "Máy quét Barcode",
      },
      {
        image: Image7,
        title: "Xe lấy hàng thông minh",
      },
      {
        image: Image8,
        title: "Camera giám sát, ghi hình đóng gói",
      },
      {
        image: Image9,
        title: "Cân Cubiscan đo kích thước, trọng lượng tự động",
      },
      {
        image: Image10,
        title: "Bàn đóng gói tiêu chuẩn",
      },
      {
        image: Image11,
        title: "Xe nâng hàng tự động",
      },
    ],
  },
  {
    title: "Hình ảnh kho",
    list: [
      {
        image: Image12,
        title: "",
      },
      {
        image: Image13,
        title: "",
      },
      {
        image: Image14,
        title: "",
      },
      {
        image: Image15,
        title: "",
      },
      {
        image: Image16,
        title: "",
      },
      {
        image: Image17,
        title: "",
      },
      {
        image: Image18,
        title: "",
      },
      {
        image: Image19,
        title: "",
      },
      {
        image: Image20,
        title: "",
      },
      {
        image: Image21,
        title: "",
      },
    ],
  },
  {
    title: "Dịch vụ gia tăng",
    list: [
      {
        image: Image22,
        title: "Chèn thiệp cảm ơn",
      },
      {
        image: Image23,
        title: "Gom hàng thành combo",
      },
      {
        image: Image24,
        title: "Đóng gói bảo vệ",
      },
    ],
  },
  {
    title: "Phần mềm quản lý",
    list: [
      {
        image: Image25,
        title: "",
      },
      {
        image: Image26,
        title: "",
      },
      {
        image: Image27,
        title: "",
      },
    ],
  },
];

const RealImage = ({ lang }: any) => {
  const [active, setActive] = useState(items[0]);
  const [sliderActive, setSliderActive] = useState<number>(0);
  const sliderRef = useRef<SwiperClass>();
  const [loading, setLoading] = useState(false);

  const handleActiveChange = async (x: any) => {
    setLoading(true);
    // Simulate data loading (replace with your data fetching logic)
    await new Promise((resolve) => setTimeout(resolve, 200)); // Simulate a delay

    setActive(x);
    setLoading(false);
  };

  return (
    <div className="py-6 lg:py-15 overflow-hidden">
      <div className="container px-4 lg:px-0">
        <h2 className="text-2xl lg:text-4xl font-bold lg:w-[80%] mx-auto text-center lg:leading-12 mb-4">
          {lang.heading}
          <span className="inline-flex items-center">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Group_1_8315320315.svg"
              width={114}
              height={36}
              alt="EFEX"
              className="w-[78px] h-[25px] lg:w-[110px] lg:h-9 ml-2"
            />
          </span>
        </h2>

        <div
          className={clsx(
            "grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-3 items-center lg:justify-center mb-6 lg:mb-10"
          )}
        >
          {items.map((x: { title: any }, idx: number) => (
            <div
              role="button"
              key={idx}
              className={clsx(
                "relative z-[1]",
                "text-black bg-white rounded-[40px]",
                "border-2 border-solid border-transparent",
                "after:absolute after:-left-0.5 after:-top-0.5 after:-right-0.5 after:-bottom-0.5 after:z-[1] after:rounded-[42px]",
                idx === 4 ? "col-span-2 lg:col-span-1" : "",
                active.title === x.title
                  ? "after:bg-linear"
                  : "after:bg-[#EBEEFA]"
              )}
              onClick={() => handleActiveChange(x)}
            >
              <div
                className={clsx(
                  "relative z-[2] text-center",
                  "px-5 py-2 bg-white rounded-[19px] transition duration-100 ease-linear min-w-max",
                  loading && active.title === x.title
                    ? "text-gray-400"
                    : "text-brand-secondary",
                  "text-sm lg:text-base"
                )}
              >
                <p
                  className={clsx(
                    active.title === x.title ? "gradient-text font-bold" : ""
                  )}
                >
                  {x.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <Swiper
            onBeforeInit={(swiper) => {
              sliderRef.current = swiper;
            }}
            spaceBetween={24}
            onSlideChange={(e) => setSliderActive(e.activeIndex)}
            className="w-full"
            // slidesOffsetBefore={16}
            // slidesOffsetAfter={16}
            slidesPerView={"auto"}
            breakpoints={{
              640: {
                spaceBetween: 12,
              },
              1024: {
                spaceBetween: 24,
                // slidesOffsetAfter: 64,
                // slidesOffsetBefore: 64,
              },
            }}
          >
            {active?.list?.map((x: any, idx: number) => (
              <SwiperSlide
                className=" max-w-[340px] lg:max-w-[384px]"
                key={idx}
              >
                <div key={idx} className="relative">
                  <Image
                    src={x.image}
                    width={384}
                    height={460}
                    alt="EFEX"
                    className=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <FontAwesomeIcon
            role="button"
            width={16} 
            height={16}
            icon={faArrowLeft}
            onClick={() => sliderRef.current?.slidePrev()}
            className={clsx(
              "absolute top-[50%] translate-x-[-50%] left-8 z-10",
              "p-3 bg-[rgba(51,_51,_51,_0.60)] rounded-full",
              "text-white opacity-50 hover:opacity-100"
            )}
          />
          <FontAwesomeIcon
            role="button"
            width={16} 
            height={16}
            onClick={() => sliderRef.current?.slideNext()}
            icon={faArrowRight}
            className={clsx(
              "absolute top-[50%] translate-x-[-50%] right-0 z-10",
              "p-3 bg-[rgba(51,_51,_51,_0.60)] rounded-full",
              "text-white opacity-50 hover:opacity-100"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default RealImage;
