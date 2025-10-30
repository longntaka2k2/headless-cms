import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import useWidth from "@/hooks/useWidth";
import AnchorLinks from "../anchor-links/index";
import { removeAccent } from "@/utils/utils";
import LottieRenderer from "@/components/common/lottieRenderer";
import clsx from "clsx";
import { Element } from "react-scroll";

const featuresObject = [
  {
    img: "https://cms-strapi.ichiba.net/uploads/fearture_1_1bad42d4a8_01b41c08d5.json",
  },
  {
    img: "https://cms-strapi.ichiba.net/uploads/fearture_2_5693d96f73_45d476b00c.json",
    bg: "https://cms-strapi.ichiba.net/uploads/BG_Platform_d7702244d7.png",
  },
  {
    img: "https://cms-strapi.ichiba.net/uploads/fearture_3_rework_5a6ee8d5de_faf7e7b9b5.json",
  },
  {
    img: "https://cms-strapi.ichiba.net/uploads/fearture_4_9f2d16b27e_1caf252acd.json",
    bg: "https://cms-strapi.ichiba.net/uploads/BG_Platform_1_73c8568c33.png",
  },
  {
    img: "https://cms-strapi.ichiba.net/uploads/feartures_5_5e6c16f16a_c8d43ef131.json",
  },
  {
    img: "https://cms-strapi.ichiba.net/uploads/fearture_6_8cef9a7489_a6d6035aea.json",
    bg: "https://cms-strapi.ichiba.net/uploads/BG_Platform_2_1e6dd37501.png",
  },
  {
    img: "https://cms-strapi.ichiba.net/uploads/fearture_7_cd6b34a62e_686aaeae61.json",
  },
  {
    img: "https://cms-strapi.ichiba.net/uploads/fearture_8_0e294e0e0d_dad32c44ab.json",
    bg: "https://cms-strapi.ichiba.net/uploads/BG_Platform_3_aaa312106e.png",
  },
];
export default function FeaturesComponent() {
  const d = useTranslation("digital-features").t;

  // function scrollToTop(value : number) {
  //   if (typeof window !== 'undefined') {
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   }
  //   setOpenNavItem(value)
  // }
  const widthCount = useWidth();

  const anchorItems = (
    d(`powerful.items`, {
      returnObjects: true,
    }) as string[]
  ).map((x: any) => ({
    label: x.label as string,
    href: "#" + removeAccent(x.label),
  }));

  const DesktopContentRenderer = ({
    index,
    img,
    isEven,
    bg,
  }: {
    index: number;
    img: any;
    isEven?: boolean;
    bg?: string;
  }) => (
    <Element
      name={`${removeAccent(d(`powerful.items.${index}.label`))}`}
      key={index}
      className="text-decoration-none tw-py-4 lg:tw-scroll-m-14 "
      id={`${removeAccent(d(`powerful.items.${index}.label`))}`}
      style={{
        color: "#333333",
        background: widthCount > 1200 ? "" : `url('${bg}') no-repeat center`,
        backgroundSize: "cover",
      }}
    >
      <div
        className={clsx(
          "tw-flex !tw-mb-[120px] tw-flex-col-reverse lg:tw-flex-row  tw-gap-6",
          !isEven && " lg:tw-flex-row-reverse",
        )}
      >
        <div className={clsx("tw-flex tw-flex-1", !isEven && "tw-justify-end")}>
          <LottieRenderer path={img} className="lg:tw-w-[460px] lg:tw-h-full" />
        </div>

        <div className="lg:tw-pt-6 tw-flex tw-flex-col tw-justify-center tw-gap-6 tw-flex-1">
          <div className="tw-font-bold tw-text-lg lg:tw-text-2xl">
            {d(`powerful.items.${index}.label`)}
          </div>
          {(
            d(`powerful.items.${index}.contents`, {
              returnObjects: true,
            }) as string[]
          ).map((value2: any, index: number) => (
            <div className="tw-flex tw-gap-4" key={index}>
              <FontAwesomeIcon
                icon={faCheck}
                className="tw-rounded-full tw-text-white tw-py-[3px] tw-px-1 tw-bg-primary-6 tw-mt-1"
              />{" "}
              <div className="d-inline-block">
                <div className="tw-text-base lg:tw-text-xl tw-font-medium">
                  {value2.title}
                </div>
                <div className="tw-text-sm lg:tw-text-base"> {value2.des}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );

  return (
    <>
      <div className="features">
        <div className="container">
          <AnchorLinks items={anchorItems} forceUpdate />
          <div className="row">
            {featuresObject.map((value: any, index: number) => (
              <DesktopContentRenderer
                key={index}
                index={index}
                img={value.img}
                isEven={index % 2 !== 0}
                bg={value.bg}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
