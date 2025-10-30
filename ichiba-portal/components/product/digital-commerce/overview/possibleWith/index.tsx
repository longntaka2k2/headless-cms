import { useTranslation } from "next-i18next";
import { useState } from "react";
import dynamic from "next/dynamic";
import clsx from "clsx";

const LottieRenderer = dynamic(
  () => import("@/components/common/lottieRenderer"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);
const TableContent = ({
  isActive,
  mediaUrl,
}: {
  isActive: string;
  mediaUrl: string;
}) => {
  return (
    <div className={isActive === "1" ? "" : "d-none"}>
      <div className="row" style={{ borderBottom: "1px solid #DDDDDD" }}>
        <div className="">
          <LottieRenderer path={mediaUrl} className="tw-h-[700px]" />
        </div>
      </div>
    </div>
  );
};
// https://res.cloudinary.com/dz2y1uia5/raw/upload/v1696238917/A_55efda0924.jsonhttps://res.cloudinary.com/dz2y1uia5/raw/upload/v1696238917/A_55efda0924.json

const PossibleWith = () => {
  const { t } = useTranslation("digital");
  const [isActive, setActive] = useState<number>(0);
  const changeTab = (value: number) => {
    setActive(value);
  };
  const content = [
    {
      title: t("possibleWith.headless"),
      mediaUrl:
        "https://cms-strapi.ichiba.net/uploads/A_55efda0924_d522a876c3.json",
    },
    {
      title: t("possibleWith.composable"),
      mediaUrl:
        "https://cms-strapi.ichiba.net/uploads/B_2fe139ab2e_8eb646973e.json",
    },
  ];
  return (
    <section
      className={clsx(
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/BG_Platform_1_4321454c0c.png')]",
        "md:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/BG_desktop_ef0b383ef7.png')]",
        "tw-bg-center tw-bg-cover",
        "tw-px-4 tw-py-6 lg:tw-px-0 lg:tw-py-16",
      )}
    >
      <div className="tw-container">
        <div className="title tw-text-center">
          <h2 className="lg:tw-text-4xl tw-text-2xl lg:tw-pb-10 tw-pb-4 tw-font-bold">
            {t("possibleWith.heading")}
          </h2>
        </div>
        <div className="row ">
          {content.map((x, idx) => (
            <div
              key={idx}
              className={clsx(
                isActive === idx
                  ? "col-6 tw-text-black tw-border-b-[5px] tw-border-primary-6"
                  : "tw-text-pending-5 tw-border-b-pending-5 col-6 tw-border-b-[2px]",
                "tw-text-sm lg:tw-text-[30px] tw-font-medium",
                "cursor tw-text-center tw-pb-3 tw-mb-20",
              )}
              onClick={() => changeTab(idx)}
            >
              <div className="">{x.title}</div>
            </div>
          ))}
        </div>
        {content.map((x, idx) => (
          <div key={idx} className={isActive === idx ? "" : "d-none"}>
            <div className="row">
              <LottieRenderer path={x.mediaUrl} className="lg:tw-h-[700px]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default PossibleWith;
