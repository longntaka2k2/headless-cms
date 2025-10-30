/* eslint-disable @next/next/link-passhref */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomerSay from "@/components/home/customerSay";
import Amazon from "@/public/icons/ship4p/slide/amazon.png";
import DHL from "@/public/icons/ship4p/slide/DHL.png";
import ebqy from "@/public/icons/ship4p/slide/ebqy.png";
import EMS from "@/public/icons/ship4p/slide/EMS.png";
import FADO from "@/public/icons/ship4p/slide/FADO.png";
import fb from "@/public/icons/ship4p/slide/fb.png";
import Fedex from "@/public/icons/ship4p/slide/Fedex.png";
import GHTK from "@/public/icons/ship4p/slide/GHTK.png";
import heaven from "@/public/icons/ship4p/slide/heaven.png";
import janbox from "@/public/icons/ship4p/slide/janbox.png";
import japanzon from "@/public/icons/ship4p/slide/japanzon.png";
import JP from "@/public/icons/ship4p/slide/JP.png";
import JT from "@/public/icons/ship4p/slide/JT.png";
import mercari from "@/public/icons/ship4p/slide/mercari.png";
import PCS from "@/public/icons/ship4p/slide/PCS.png";
import QX from "@/public/icons/ship4p/slide/QX.png";
import SAGA from "@/public/icons/ship4p/slide/SAGA.png";
import tik from "@/public/icons/ship4p/slide/tik.png";
import UPS from "@/public/icons/ship4p/slide/UPS.png";
import US from "@/public/icons/ship4p/slide/US.png";
import VNPost from "@/public/icons/ship4p/slide/VNPost.png";
import VTPost from "@/public/icons/ship4p/slide/VTPost.png";
import Janbox from "@/public/icons/ship4p/slide/janbox.png";
import Mercari from "@/public/icons/ship4p/slide/mercari.png";

import bgQuestion from "@/public/icons/company/trust/bgQuestion.png";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Built() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
  };
  const settings1 = {
    dots: false,
    speed: 10000,
    rtl: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
  };
  const { t } = useTranslation("common");
  let host = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <>
      <div className="built">
        <div className="container">
          <div className="save-every-main">
            <div className="row " style={{ width: "100%", height: "100%" }}>
              <div className="col-lg-6">
                <div>
                  <h2 className="fw-7 fs-36">
                    {t("ship.overview.built.title")}
                  </h2>
                  <div className="my-4">
                    <div className="fw-7 fs-16">
                      {t("ship.overview.built.available")}
                    </div>
                    <div className="fs-18 pt-1">
                      {t("ship.overview.built.connect")}
                    </div>
                  </div>
                  <div className="my-4">
                    <div className="fw-7 fs-16">
                      {t("ship.overview.built.fit")}
                    </div>
                    <div className="fs-18 pt-1">
                      {t("ship.overview.built.diverse")}
                    </div>
                  </div>
                  <div className="my-4">
                    <div className="fw-7 fs-16">
                      {t("ship.overview.built.international")}
                    </div>
                    <div className="fs-18 pt-1">
                      {t("ship.overview.built.trustworthy")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carosel">
          <Slider {...settings} className="pb-1">
            <Image src={JP} alt="JP" className="every-img px-2" />
            <Image src={EMS} alt="EMS" className="every-img px-2" />
            <Image src={Janbox} alt="Janbox" className="every-img px-2" />
            <Image src={Fedex} alt="Fedex" className="every-img px-2" />
            <Image src={DHL} alt="DHL" className="every-img px-2" />
            <Image src={Mercari} alt="Mercari" className="every-img px-2" />
            <Image src={tik} alt="tiktok" className="every-img px-2" />
            <Image src={ebqy} alt="ebqy" className="every-img px-2" />
            <Image src={UPS} alt="UPS" className="every-img px-2" />
            <Image src={VNPost} alt="VNPost" className="every-img px-2" />
            <Image src={PCS} alt="PCS" className="every-img px-2" />
            <Image src={FADO} alt="FADO" className="every-img px-2" />
          </Slider>
          <Slider {...settings1} className=" py-2">
            <Image src={VTPost} alt="VTPost" className="every-img px-2" />
            <Image src={Amazon} alt="Amazon" className="every-img px-2" />
            <Image src={GHTK} alt="GHTK" className="every-img px-2" />
            <Image src={SAGA} alt="SAGA" className="every-img px-2" />
            <Image src={heaven} alt="heaven" className="every-img px-2" />
            <Image src={JT} alt="JT" className="every-img px-2" />
            <Image src={fb} alt="fb" className="every-img px-2" />
            <Image src={VNPost} alt="VNPost" className="every-img px-2" />
            <Image src={PCS} alt="PCS" className="every-img px-2" />
            <Image src={FADO} alt="FADO" className="every-img px-2" />
          </Slider>
          <Slider {...settings2} className="pt-1">
            <Image src={japanzon} alt="japanzon" className="every-img px-2" />
            <Image src={janbox} alt="janbox" className="every-img px-2" />
            <Image src={JP} alt="JP" className="every-img px-2" />
            <Image src={QX} alt="QX" className="every-img px-2" />
            <Image src={US} alt="US" className="every-img px-2" />
            <Image src={tik} alt="tik" className="every-img px-2" />
            <Image src={ebqy} alt="ebqy" className="every-img px-2" />
            <Image src={UPS} alt="UPS" className="every-img px-2" />
          </Slider>
        </div>
      </div>
      <CustomerSay data={[]} />
      <div className="container">
        <div
          className="free-up"
          style={{
            backgroundImage: `url(${bgQuestion.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="question-title">
            {t("ship.overview.built.freeUp")}
          </div>
          <div className="py-4" style={{ maxWidth: "736px" }}>
            {t("ship.overview.built.connectWith")}
          </div>

          <Link
            href={
              host === "https://ichiba.vn"
                ? "https://api.ichiba.vn/account/login?redirectUrl=https://app.ichiba.net"
                : "https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
            }
            target="_blank"
            rel="nofollow"
            className="text-decoration-none button text-center"
          >
            {t("ship.overview.built.getStarted")} &ensp;
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </>
  );
}
