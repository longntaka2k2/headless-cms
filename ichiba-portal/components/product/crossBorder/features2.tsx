import { useTranslation } from "next-i18next";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { scroller, Link, Events } from "react-scroll";
import Fearture1 from "@/public/icons/crossBorder/features/Features1.json";
import Fearture2 from "@/public/icons/crossBorder/features/Features2.json";
import Fearture3 from "@/public/icons/crossBorder/features/Fearture3.json";
import Fearture4 from "@/public/icons/crossBorder/features/Feartures4.json";
import Fearture5 from "@/public/icons/crossBorder/features/Fearture5.json";
import Fearture6 from "@/public/icons/crossBorder/features/Fearture6.json";
import Fearture7 from "@/public/icons/crossBorder/features/freature7.json";
import Fearture8 from "@/public/icons/crossBorder/features/fearture8.json";
import useWidth from "@/hooks/useWidth";
import AnchorLinks from "../pim/features/anchor-links";
import { removeAccent } from "@/utils/utils";

const featuresObject = [
  {
    img: Fearture1,
  },
  {
    img: Fearture2,
  },
  {
    img: Fearture3,
  },
  {
    img: Fearture4,
  },
  {
    img: Fearture5,
  },
  {
    img: Fearture6,
  },
  {
    img: Fearture7,
  },
  {
    img: Fearture8,
  },
];
export default function FeaturesComponent() {
  const { t } = useTranslation("common");

  const scrollToElement = (id: string) => {
    scroller.scrollTo(id, {
      duration: 0,
      delay: 5,
      smooth: true,
      offset: -50,
    });
  };
  // function scrollToTop(value : number) {
  //   if (typeof window !== 'undefined') {
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   }
  //   setOpenNavItem(value)
  // }
  const widthCount = useWidth();
  const iconStyle = {
    background: "#1D39C4",
    borderRadius: "50px",
    padding: "3px 4px",
    margin: "15px 16px 0 0",
  };

  return (
    <>
      <div className="features">
        <div className="container">
          <AnchorLinks
            items={(
              t(`crossBorder.features.contents`, {
                returnObjects: true,
              }) as string[]
            ).map((x: any, index: number) => ({
              label: x.title as string,
              href: "#" + removeAccent(x.title),
            }))}
          />
          <div className="row">
            {featuresObject.map((value: any, index: number) => (
              <>
                {widthCount > 1430 ? (
                  <div
                    className="text-decoration-none "
                    id={`${removeAccent(
                      t(`crossBorder.features.contents.${index}.title`),
                    )}`}
                    style={{ color: "#333333" }}
                    key={index}
                  >
                    {index % 2 == 0 ? (
                      <div className="row !tw-mb-[120px]">
                        <div className="col-6 pt-4 tw-flex tw-flex-col tw-justify-center">
                          <h3 className="fw-7 tw-text-2xl">
                            {t(`crossBorder.features.contents.${index}.title`)}
                          </h3>
                          {(
                            t(
                              `crossBorder.features.contents.${index}.content`,
                              { returnObjects: true },
                            ) as string[]
                          ).map((value2: any, index: number) => (
                            <>
                              <div className="d-flex ">
                                <FontAwesomeIcon
                                  icon={faCheck}
                                  color="#FFFFFF"
                                  style={iconStyle}
                                />{" "}
                                <div className="d-inline-block py-2">
                                  {value2}
                                </div>
                              </div>
                            </>
                          ))}
                        </div>
                        <div className="col-6 ps-3 tw-flex">
                          <Player
                            src={value.img}
                            loop
                            autoplay
                            style={{ width: "460px", height: "100%" }}
                          >
                            {" "}
                            <Controls />{" "}
                          </Player>
                        </div>
                      </div>
                    ) : (
                      <div className="row !tw-mb-[120px]">
                        <div className="col-6 tw-flex">
                          <Player
                            src={value.img}
                            loop
                            autoplay
                            style={{ width: "460px", height: "100%" }}
                          >
                            <Controls />{" "}
                          </Player>
                        </div>
                        <div className="col-6 pt-4 features-content-right tw-flex tw-flex-col tw-justify-center">
                          <div className="fw-7 tw-text-2xl">
                            {t(`crossBorder.features.contents.${index}.title`)}
                          </div>
                          {(
                            t(
                              `crossBorder.features.contents.${index}.content`,
                              { returnObjects: true },
                            ) as string[]
                          ).map((value2: any, index: number) => (
                            <div className="d-flex" key={value2}>
                              <FontAwesomeIcon
                                icon={faCheck}
                                color="#FFFFFF"
                                style={iconStyle}
                              />{" "}
                              <div className="d-inline-block py-2">
                                {value2}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    className="text-decoration-none "
                    id={`${removeAccent(
                      t(`crossBorder.features.contents.${index}.title`),
                    )}`}
                    style={{ color: "#333333" }}
                    key={index}
                  >
                    <div className="fw-7 tw-text-2xl">
                      {t(`crossBorder.features.contents.${index}.title`)}
                    </div>
                    <div className="row my-4">
                      <div className=" pt-4">
                        {(
                          t(`crossBorder.features.contents.${index}.content`, {
                            returnObjects: true,
                          }) as string[]
                        ).map((value2: any) => (
                          <div className="d-flex " key={value2}>
                            <FontAwesomeIcon
                              icon={faCheck}
                              color="#FFFFFF"
                              style={iconStyle}
                            />{" "}
                            <div className="d-inline-block py-2">{value2}</div>
                          </div>
                        ))}
                      </div>
                      <div className="col-xl-7 ps-3">
                        <Player
                          src={value.img}
                          loop
                          autoplay
                          style={{ width: "100%", height: "auto" }}
                        >
                          <Controls />{" "}
                        </Player>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
