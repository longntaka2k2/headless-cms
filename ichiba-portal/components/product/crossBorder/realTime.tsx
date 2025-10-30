import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "next-i18next";
import img1 from "@/public/icons/crossBorder/features/img1.png";
import img2 from "@/public/icons/crossBorder/features/img2.png";
import img3 from "@/public/icons/crossBorder/features/img3.png";
import img4 from "@/public/icons/crossBorder/features/img4.png";
import bgPhone from "@/public/icons/crossBorder/features/bgPhone.png";

import Image from "next/image";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const realTime = [
  { img: img1, title: "Taobao discount 50%", header: "Hot deals world wide" },
  { img: img2, title: "Taobao discount 50%", header: "Hot deals world wide 1" },
  { img: img3, title: "Taobao discount 50%", header: "Hot deals world wide 2" },
  { img: img4, title: "Taobao discount 50%", header: "Hot deals world wide 3" },
  { img: img1, title: "Taobao discount 50%", header: "Hot deals world wide 4" },
  { img: img1, title: "Taobao discount 50%", header: "Hot deals world wide" },
  { img: img2, title: "Taobao discount 50%", header: "Hot deals world wide 1" },
  { img: img3, title: "Taobao discount 50%", header: "Hot deals world wide 2" },
  { img: img4, title: "Taobao discount 50%", header: "Hot deals world wide 3" },
  { img: img1, title: "Taobao discount 50%", header: "Hot deals world wide 4" },
  { img: img1, title: "Taobao discount 50%", header: "Hot deals world wide" },
  { img: img2, title: "Taobao discount 50%", header: "Hot deals world wide 1" },
  { img: img3, title: "Taobao discount 50%", header: "Hot deals world wide 2" },
  { img: img4, title: "Taobao discount 50%", header: "Hot deals world wide 3" },
  { img: img1, title: "Taobao discount 50%", header: "Hot deals world wide 4" },
  { img: img1, title: "Taobao discount 50%", header: "Hot deals world wide" },
  { img: img2, title: "Taobao discount 50%", header: "Hot deals world wide 1" },
  { img: img3, title: "Taobao discount 50%", header: "Hot deals world wide 2" },
  { img: img4, title: "Taobao discount 50%", header: "Hot deals world wide 3" },
  { img: img1, title: "Taobao discount 50%", header: "Hot deals world wide 4" },
  { img: img1, title: "Taobao discount 50%", header: "Hot deals world wide" },
  { img: img2, title: "Taobao discount 50%", header: "Hot deals world wide 1" },
  { img: img3, title: "Taobao discount 50%", header: "Hot deals world wide 2" },
  { img: img4, title: "Taobao discount 50%", header: "Hot deals world wide 3" },
  { img: img1, title: "Taobao discount 50%", header: "Hot deals world wide 4" },
  { img: img1, title: "Taobao discount 50%", header: "Hot deals world wide" },
  { img: img2, title: "Taobao discount 50%", header: "Hot deals world wide 1" },
  { img: img3, title: "Taobao discount 50%", header: "Hot deals world wide 2" },
  { img: img4, title: "Taobao discount 50%", header: "Hot deals world wide 3" },
  { img: img1, title: "Taobao discount 50%", header: "Hot deals world wide 4" },
];

export default function RealTime() {
  const { t } = useTranslation("common");
  const sliderRef = useRef(null); // Ref để truy cập vào Slider component

  const handleSlideChange = (currentSlide: any) => {
    // Lấy phần tử thứ 3 có class "slick-active"
    const slickActiveElements = document.querySelectorAll(".slick-active");
    const checkActive = document.querySelectorAll(".active");

    if (slickActiveElements.length >= 5) {
      if (checkActive.length > 0) {
        slickActiveElements.forEach((slide) => {
          slide.classList.remove("active");
        });
        const thirdActiveElement = slickActiveElements[4];
        thirdActiveElement.classList.add("active");
      } else {
        const thirdActiveElement = slickActiveElements[4];
        thirdActiveElement.classList.add("active");
      }
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          speed: 3000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 3000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 4000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 5000,
        },
      },
    ],
    beforeChange: (current: any, next: any) => {
      handleSlideChange(next);
    },
  };
  return (
    <>
      <div className="real-time">
        <div className="container">
          <div>
            <div className="fw-7 fs-40">{t("crossBorder.realTime.title")}</div>
            <div className="row mt-3 tw-max-w-[588px]">
              <div className="col-6">
                <div className="color-note">
                  {t("crossBorder.realTime.deals")}
                </div>
                <div className="fw-7 fs-24">+5000</div>
              </div>
              <div className="col-6">
                <div className="color-note">
                  {t("crossBorder.realTime.deals")}
                </div>
                <div className="fw-7 fs-24">
                  5 {t("crossBorder.realTime.minutes")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slider ref={sliderRef} {...settings} className="slide-prod ps-lg-5">
          {realTime.map((value, index) => (
            <>
              <div>
                <div className="slide-items">
                  <div className="img-slide  ">
                    <Image src={value.img} alt="img-slide" />
                  </div>
                  {/* <div className="p-3">
                <div className="slide-phone" style={{
                  backgroundImage: `url(${bgPhone.src})`,
                  backgroundSize:'cover',
                  backgroundRepeat: 'round',
                }}>
                  <div className="">

                  <div className="p-2 pt-5">{value.title}</div>
                  <Image src={value.img} alt="" />
                  
                  </div>
                  <div className="p-2">
                  The 50% discount voucher advertising campaign offers customers a significant saving opportunity when purchasing their favorite products. 

                  </div>
                  
                </div>
              </div> */}
                </div>
              </div>
            </>
          ))}
        </Slider>
        <div className="container mt-5">
          <span className="btn-janbox py-3 px-4">
            {t("crossBorder.realTime.allDeal")}
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </div>
    </>
  );
}

function handleSlideChange(next: any) {
  throw new Error("Function not implemented.");
}
