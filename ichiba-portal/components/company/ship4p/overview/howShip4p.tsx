import Lottie from "react-lottie";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import icon1 from "@/public/icons/ship4p/icon1.json";
import icon2 from "@/public/icons/ship4p/icon2.json";
import icon3 from "@/public/icons/ship4p/icon3.json";
import icon4 from "@/public/icons/ship4p/icon4.json";
import icon5 from "@/public/icons/ship4p/icon5.json";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Options = (value: any) => {
  return {
    loop: true,
    autoplay: true,
    animationData: value,
    renderer: "svg",
  };
};

const ship = [
  {
    img: icon1,
    title: "connect",
  },
  {
    img: icon2,
    title: "createShipments",
  },
  {
    img: icon3,
    title: "choseaShipping",
  },
  {
    img: icon4,
    title: "export",
  },
  {
    img: icon5,
    title: "track",
  },
];

export default function HowShip4p() {
  const { t } = useTranslation("common");
  let host = typeof window !== "undefined" ? window.location.origin : "";
  return (
    <>
      <div className="how-ship4p">
        <div className="container">
          <div className="text-center">
            <h2 className="fw-7 fs-36 fs-md-28 title tw-mb-0">
              {t("ship.overview.howItWorks.title")}
            </h2>
            <div className="fs-20 pt-3">
              {t("ship.overview.howItWorks.content")}
            </div>
          </div>
          <div className="row my-5">
            {ship.map((value: any, index: number) => (
              <>
                <div
                  className={
                    index === 3
                      ? "offset-lg-2 col-lg-4 col-md-6 text-center  my-3"
                      : "col-lg-4 col-md-6 text-center my-3"
                  }
                >
                  <div className="animation">
                    <Player
                      src={value.img}
                      loop
                      autoplay
                      style={{ width: "160px", height: "160px" }}
                    >
                      {" "}
                      <Controls />{" "}
                    </Player>
                  </div>
                  <div className="fs-20 fw-7 py-1">
                    {t(`ship.overview.howItWorks.${value.title}.title`)}
                  </div>
                  <div>
                    {t(`ship.overview.howItWorks.${value.title}.content`)}
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="text-center">
            <Link
              href={
                host === "https://ichiba.vn"
                  ? "https://api.ichiba.vn/account/login?redirectUrl=https://app.ichiba.net"
                  : "https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
              }
              target="_blank"
              className="text-decoration-none btn-free cursor"
              rel="nofollow"
            >
              {t("ship.overview.howItWorks.startFree")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
