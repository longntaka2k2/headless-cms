import Image from "next/image";
import strengths1 from "@/public/icons/company/discover/strengths1.png";
import strengths2 from "@/public/icons/company/discover/strengths2.png";
import strengths3 from "@/public/icons/company/discover/strengths3.png";
import strengths4 from "@/public/icons/company/discover/strengths4.png";
import { useTranslation } from "next-i18next";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import map from "@/public/icons/company/discover/map.json";
import dynamic from "next/dynamic";

const LottieRenderer = dynamic(
  () => import("@/components/common/lottieRenderer"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

export default function OurNetworks() {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="our-networks">
        <div className="container">
          <div className="our-content  ">
            <h2 className="fs-36 fw-7 fs-md-28 ">
              {t("discover.ourNetworks.title")}
            </h2>
            <div className="py-3 fs-md-14 fs-md-16">
              {t("discover.ourNetworks.content")}
            </div>
          </div>
          <div>
            {/* <Image src={outNetworksBanner} alt="banner" className="banner" /> */}
            {/* <>
              <Player
                src={map}
                loop
                autoplay
                style={{ height: "100%" }}
                className="discover-banner "
              >
                {" "}
                <Controls />{" "}
              </Player>
            </> */}
            <LottieRenderer path={"/icons/company/discover/map.json"} style={{ height: "100%" }} className="discover-banner "/>
          </div>
        </div>
      </div>
      <div className="our-strengths">
        <div className="container">
          <div className="pb-4 text-center">
            <h2 className="fs-36 fw-7 fs-md-28 ">
              {t("discover.ourStrengths.title")}
            </h2>
            <div className="fs-md-14 fs-md-16">
              {t("discover.ourStrengths.content")}
            </div>
          </div>
          <div className="res-pc pt-4">
            <div className="our-strengths-items ">
              <div className="row">
                <div className="col-md-6 align-self-center ">
                  <div className="item">
                    <div className="fs-20 fw-7 pb-2 fs-md-28">
                      {t("discover.ourStrengths.singlePlatform.title")}
                    </div>
                    <div className="fs-md-14">
                      {t("discover.ourStrengths.singlePlatform.content")}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <Image
                    src={strengths1}
                    alt="img"
                    className="our-img float-end"
                  />
                </div>
              </div>
            </div>
            <div className="our-strengths-items ">
              <div className="row ">
                <div className="col-md-6 ">
                  <Image src={strengths2} alt="img" className="our-img" />
                </div>
                <div className="col-md-6 align-self-center ">
                  <div className="item float-end">
                    <h3 className="fs-20 fw-7 pb-2 fs-md-16">
                      {t("discover.ourStrengths.deepIntegration.title")}
                    </h3>
                    <div className="fs-md-14">
                      {t("discover.ourStrengths.deepIntegration.content")} 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="our-strengths-items ">
              <div className="row">
                <div className="col-md-6 align-self-center ">
                  <div className="item">
                    <h3 className="fs-20 fw-7 pb-2 fs-md-20">
                      {t("discover.ourStrengths.realTime.title")}
                    </h3>
                    <div className="fs-md-14">
                      {t("discover.ourStrengths.realTime.content")}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <Image
                    src={strengths3}
                    alt="img"
                    className="our-img float-end"
                  />
                </div>
              </div>
            </div>
            <div className="our-strengths-items ">
              <div className="row ">
                <div className="col-md-6 ">
                  <Image src={strengths4} alt="img" className="our-img" />
                </div>
                <div className="col-md-6 align-self-center ">
                  <div className="item float-end">
                    <h3 className="fs-20 fw-7 pb-2 fs-md-20">
                      {t("discover.ourStrengths.comprehensive.title")}
                    </h3>
                    <div className="fs-16 fs-md-14">
                      {t("discover.ourStrengths.comprehensive.content")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="res-molbie  text-center">
            <div className="our-strengths-items ">
              <div className="row">
                <div className="col-md-6 align-self-center pb-sm-5">
                  <div className="item">
                    <h3 className="fs-20 fs-md-20 fw-7 pb-2">
                      {t("discover.ourStrengths.singlePlatform.title")}
                    </h3>
                    <div className=" fs-md-14">
                      {t("discover.ourStrengths.singlePlatform.content")}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <Image src={strengths1} alt="img" className="our-img " />
                </div>
              </div>
            </div>
            <div className="our-strengths-items ">
              <div className="row ">
                <div className="col-md-6 align-self-center ">
                  <div className="item ">
                    <h3 className="fs-20 fw-7 pb-2 fs-md-20">
                      {t("discover.ourStrengths.deepIntegration.title")}
                    </h3>
                    <div className="fs-md-14">
                      {t("discover.ourStrengths.deepIntegration.content")}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <Image src={strengths2} alt="img" className="our-img" />
                </div>
              </div>
            </div>
            <div className="our-strengths-items ">
              <div className="row">
                <div className="col-md-6 align-self-center ">
                  <div className="item">
                    <h3 className="fs-20 fw-7 pb-2 fs-md-20">
                      {t("discover.ourStrengths.realTime.title")}
                    </h3>
                    <div className="fs-md-14 fs-16">
                      {t("discover.ourStrengths.realTime.content")}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <Image src={strengths3} alt="img" className="our-img " />
                </div>
              </div>
            </div>
            <div className="our-strengths-items ">
              <div className="row ">
                <div className="col-md-6 align-self-center ">
                  <div className="item ">
                    <h3 className="fs-20 fw-7 pb-2 fs-md-20">
                      {t("discover.ourStrengths.comprehensive.title")}
                    </h3>
                    <div className="fs-md-14">
                      {t("discover.ourStrengths.comprehensive.content")}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <Image src={strengths4} alt="img" className="our-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
