/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import listImg from "./listImgWeSave";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function SaveEveryCareer() {
  const {t} = useTranslation("common");

  const settings = {
    dots: false,
    infinite: true,
    speed: 14000,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1000,
   
  };
  return (
    <>
      <div className="save-every">

      <div className="container">
          <div className="save-every-main">
            <div className="row mx-md-auto" >
              <div className="col-lg-6">
                <div>
                <div className="fw-7 fs-36 fs-md-28 pb-3">
                {t("careers.employee.weSave")}
                </div>
                <div className="fs-md-14" >
                 <Link href={'https://www.facebook.com/ichibacareers'} target="_blank" rel="nofollow" className="text-decoration-none">
                  <div className="button text-center">{t("careers.employee.followUs")} @Facebook &ensp;<FontAwesomeIcon icon={faArrowRight} style={{color:"white"}}/> </div>
                  </Link>
                  <Link href={'https://www.linkedin.com/company/ichiba-global/'} target="_blank" rel="nofollow" className="text-decoration-none ms-3">
                  <div className="button-linkedin text-center">{t("careers.employee.followUs")} @LinkedIn &ensp;<FontAwesomeIcon icon={faArrowRight} style={{color:"#F57C00"}}/> </div>
                  </Link>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carosel">
          <Slider {...settings}>
            {listImg.listImgGala.map((value,index) => (
              <Image src={value?.img} alt="" className="every-img" key={index} />
            ))}

          </Slider>
        </div>

      </div>
    </>
  );
}
