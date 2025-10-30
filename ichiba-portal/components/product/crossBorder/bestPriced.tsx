import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgQuestion from "@/public/icons/crossBorder/imgProduct.png";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import Link from "next/link";

const products = [
  {
    title: "Apple Watch Series 3 - 38mm GPS/Cellularation",
    price: "$10.000.000",
    oldPrice: "đ10.000.000",
    img: bgQuestion,
  },
  {
    title: "Apple Watch Series 3 - 38mm GPS/Cellularation",
    price: "$10.000.000",
    oldPrice: "đ10.000.000",
    img: bgQuestion,
  },
  {
    title: "Apple Watch Series 3 - 38mm GPS/Cellularation",
    price: "$10.000.000",
    oldPrice: "đ10.000.000",
    img: bgQuestion,
  },
  {
    title: "Apple Watch Series 3 - 38mm GPS/Cellularation",
    price: "$10.000.000",
    oldPrice: "đ10.000.000",
    img: bgQuestion,
  },
  {
    title: "Apple Watch Series 3 - 38mm GPS/Cellularation",
    price: "$10.000.000",
    oldPrice: "đ10.000.000",
    img: bgQuestion,
  },
  {
    title: "Apple Watch Series 3 - 38mm GPS/Cellularation",
    price: "$10.000.000",
    oldPrice: "đ10.000.000",
    img: bgQuestion,
  },
  {
    title: "Apple Watch Series 3 - 38mm GPS/Cellularation",
    price: "$10.000.000",
    oldPrice: "đ10.000.000",
    img: bgQuestion,
  },
  {
    title: "Apple Watch Series 3 - 38mm GPS/Cellularation",
    price: "$10.000.000",
    oldPrice: "đ10.000.000",
    img: bgQuestion,
  },
  {
    title: "Apple Watch Series 3 - 38mm GPS/Cellularation",
    price: "$10.000.000",
    oldPrice: "đ10.000.000",
    img: bgQuestion,
  },
  {
    title: "Apple Watch Series 3 - 38mm GPS/Cellularation",
    price: "$10.000.000",
    oldPrice: "đ10.000.000",
    img: bgQuestion,
  },
  {
    title: "Apple Watch Series 3 - 38mm GPS/Cellularation",
    price: "$10.000.000",
    oldPrice: "đ10.000.000",
    img: bgQuestion,
  },
  {
    title: "Apple Watch Series 3 - 38mm GPS/Cellularation",
    price: "$10.000.000",
    oldPrice: "đ10.000.000",
    img: bgQuestion,
  },
  {
    title: "Apple Watch Series 3 - 38mm GPS/Cellularation",
    price: "$10.000.000",
    oldPrice: "đ10.000.000",
    img: bgQuestion,
  },
  {
    title: "Apple Watch Series 3 - 38mm GPS/Cellularation",
    price: "$10.000.000",
    oldPrice: "đ10.000.000",
    img: bgQuestion,
  },
  {
    title: "Apple Watch Series 3 - 38mm GPS/Cellularation",
    price: "$10.000.000",
    oldPrice: "đ10.000.000",
    img: bgQuestion,
  },
  {
    title: "Apple Watch Series 3 - 38mm GPS/Cellularation",
    price: "$10.000.000",
    oldPrice: "đ10.000.000",
    img: bgQuestion,
  },
];
export default function BestPrice() {
  const { t } = useTranslation("common");

  let host = typeof window !== "undefined" ? window.location.origin : "";

  const handleSlideChange = (currentSlide: any) => {
    // Lấy phần tử thứ 3 có class "slick-active"
    const slickActiveElements = document.querySelectorAll(".slick-active");
    if (slickActiveElements.length >= 7) {
      const thirdActiveElement = slickActiveElements[5];
      thirdActiveElement.classList.add("active");
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          speed: 3000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
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
      <div className="best-price">
        <div className="container">
          <div>
            <div className="mx-auto text-center fs-40 fw-7 container-child">
              {t("crossBorder.bestPrice.title")}
            </div>
            <div className="mx-auto text-center pt-2 pb-5">
              {t("crossBorder.bestPrice.content")}
            </div>
          </div>
        </div>

        <Slider {...settings} className="slide-prod">
          {products.map((value, index) => (
            <>
              <div>
                <div className="center">
                  <Image src={value.img} alt="product-map" className="" />
                  <div className="p-3 content-prod">
                    <div>{value.title}</div>
                    <div className="fw-7" style={{ fontFamily: "Oswald" }}>
                      {value.price}
                    </div>
                    <div
                      className="fs-14"
                      style={{ fontFamily: "Oswald", color: "#666666" }}
                    >
                      {value.oldPrice}
                    </div>
                    <div className="fs-14">Free Domestic Shipping</div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </Slider>
        <div className="text-center mx-auto">
          <Link
            href={
              host === "https://ichiba.vn"
                  ? "https://api.ichiba.vn/account/login?redirectUrl=https://app.ichiba.net"
                  : "https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
            }
            className="text-decoration-none btn-janbox d-inline-block py-2 px-5 cursor"
            rel="nofollow"
          >
            {t("crossBorder.features.banner.exploreNow")}
          </Link>
        </div>
      </div>
    </>
  );
}
