import Image from "next/image";
import culture1 from "@/public/icons/company/career/culture1.jpg";
import culture2 from "@/public/icons/company/career/culture2.jpg";
import culture3 from "@/public/icons/company/career/culture3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";
import router from "next/router";
import { useState, useEffect } from "react";

function useScrollCount() {
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setScrollCount(scrollTop);
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  return scrollCount;
}
export default function CultureCareer() {
  const { t } = useTranslation("common");
  
  return (
    <>
      <div className="culture">
        <div className="container">
          <div className="text-center pb-lg-4 pb-md-3" >
            <h1 className="fw-7 fs-36 culture-title fs-md-28">
              {t("careers.ourCulture.title")} 
            </h1>
            <div className="pt-2 fs-md-14">
            {t("careers.ourCulture.content")}
            </div>
          </div>
          <div className="mx-auto container-child-md mt-lg-0 mt-4">
            <div className="row pb-2">
              <div className="col-lg-6">
                <Image
                  src={culture1}
                  alt=""
                  className=""
                  style={{ width: "100%", height: "auto",borderRadius:'10px' }}
                />
              </div>
              <div className="col-lg-6 ps-3 d-flex ">
                <div className="">
                  <div className="title-item pt-3 pt-lg-0 pb-3 fw-7 fs-20 fs-md-16">
                    {t("careers.ourCulture.diversity.title")}
                  </div>
                  <div className="content-item fs-md-14">
                    {t("careers.ourCulture.diversity.content")}
                  </div>

                </div>
              </div>
            </div>
            <div className="row my-5 culture-item-pc">
              <div className="col-lg-6 d-flex ">
                <div className="">
                  <div className="title-item pt-3 pt-lg-0 pb-3 fw-7 fs-20 fs-md-16">
                    {t("careers.ourCulture.interview.title")}
                  </div>
                  <div className="content-item fs-md-14">
                    {t("careers.ourCulture.interview.content")}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ps-3">
                <Image
                  src={culture2}
                  alt=""
                  className=""
                  style={{ width: "100%", height: "auto" ,borderRadius:'10px' }}
                />
              </div>
            </div>
            <div className="row my-5 culture-item-mobile">
            <div className="col-lg-6 ps-3">
                <Image
                  src={culture2}
                  alt=""
                  className=""
                  style={{ width: "100%", height: "auto" ,borderRadius:'10px' }}
                />
              </div>
              <div className="col-lg-6 d-flex ">
                <div className="">
                  <div className="title-item pt-3 pt-lg-0 pb-3 fw-7 fs-20 fs-md-16">
                    {t("careers.ourCulture.interview.title")}
                  </div>
                  <div className="content-item fs-md-14">
                    {t("careers.ourCulture.interview.content")}
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-3 pt-lg-0">
              <div className="col-lg-6">
                <Image src={culture3} alt="" className=""
                  style={{ width: "100%", height: "auto" ,borderRadius:'10px'}}/>
              </div>
            <div className="col-lg-6 ps-3 d-flex ">
              <div className="">
                <div className="title-item pt-3 pt-lg-0 pb-3 fw-7 fs-20 fs-md-16">
                  {t("careers.ourCulture.agile.title")}
                </div>
                <div className="content-item fs-md-14">
                  {t("careers.ourCulture.agile.content")}
                </div>
                {/* <div className=" pt-3 pt-lg-0">
                  <a href="" className="fw-5 text-decoration-none">
                    {t("careers.ourCulture.agile.learnMore")}{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ color: "#1D39C4" }}
                    />
                  </a>
                </div> */}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
