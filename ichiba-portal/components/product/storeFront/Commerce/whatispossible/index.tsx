import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LottieRenderer from "@/components/common/lottieRenderer";
const WhatIsPossible = () => {
  const b = useTranslation("build-store-front").t;
  const [active, setActive] = useState(0);
  const [showOn, setShowOn] = useState("");
  useEffect(() => {
    setShowOn("tw-opacity-0");
    const timeout = setTimeout(() => {
      setShowOn("tw-animate-showOn");
    }, 50);

    return () => clearTimeout(timeout); // Clear timeout nếu active thay đổi trước khi timeout được kích hoạt
  }, [active]);
  return (
    <div
      className={clsx(
        "tw-pt-6 tw-pb-9 lg:tw-pt-15 lg:tw-pb-[80px] lg:tw-px-0 tw-px-4 tw-bg-[url(https://cms-strapi.ichiba.net/uploads/thumbnail_Light_Background_2_1_52bfd08774.png)] tw-bg-cover",
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/thumbnail_Light_Background_2_1_e08d22d2a7.png)] "
      )}
    >
      <div className="tw-container">
        <div className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-text-[#333] tw-text-center">
          {b("commerceSite.whatispossible.title")}
        </div>
        <div className="tw-overflow-x-scroll tw-no-scrollbar tw-py-5 lg:tw-py-10">
        <div className=" tw-bg-white tw-p-1 lg:tw-p-2 tw-rounded-full tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] tw-flex tw-w-max tw-mx-auto tw-relative tw-z-1" >
          <div
            className={clsx(
              "tw-py-[10px] tw-px-2 tw-text-sm lg:tw-text-lg tw-font-bold tw-rounded-full tw-cursor-pointer",
              active === 0
                ? "tw-text-white tw-bg-[linear-gradient(0deg,#F57C00_-0.66%,#FAC286_99.49%)]"
                : "",
            )}
            onClick={() => setActive(0)}
          >
            {b("commerceSite.whatispossible.composable")}
          </div>
          <div
            className={clsx(
              "tw-py-[10px] tw-px-2 tw-text-sm lg:tw-text-lg tw-font-bold tw-rounded-full tw-cursor-pointer",
              active === 1
                ? "tw-text-white tw-bg-[linear-gradient(0deg,#F57C00_-0.66%,#FAC286_99.49%)]"
                : "",
            )}
            onClick={() => setActive(1)}
          >
            {b("commerceSite.whatispossible.headless")}
          </div>
        </div>
        </div>
        <div className="">
        <LottieRenderer
            path={'https://cms-strapi.ichiba.net/uploads/A_d567807352.json'}
            className={clsx(active === 0 ? showOn : "tw-hidden" ,"tw-max-w-[768px] tw-w-full tw-mx-auto")}
          />
        <LottieRenderer
            path={'https://cms-strapi.ichiba.net/uploads/B_71e036470a.json'}
            className={clsx(active === 1 ? showOn : "tw-hidden" ,"tw-max-w-[768px] tw-w-full tw-mx-auto")}
          />
        </div>
      </div>
    </div>
  );
};
export default WhatIsPossible;
