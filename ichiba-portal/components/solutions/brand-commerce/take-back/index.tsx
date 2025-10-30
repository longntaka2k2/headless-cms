import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import takeMobile from "@/public/icons/brand-commerce/takeMobile.png";
import takePc from "@/public/icons/brand-commerce/takePc.png";
import bgTakePc from "@/public/icons/brand-commerce/bgTakePc.png";
import bgTakemobile from "@/public/icons/brand-commerce/bgTakePc.png";

import Image from "next/image";

const TakeBack = () => {
  const router = useRouter();
  const { t } = useTranslation("brand-commerce");
  const key =
    "https://cms-strapi.ichiba.net/uploads/infographic_sgy122.webm";
  return (
    <div className="tw-px-4 tw-py-10 lg:tw-px-0 tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Section_0cb5c3a7ed.png)] lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/bg_Take_Pc_3cb18359e4.png)]">
      <div className="lg:tw-container">
        <div className="tw-text-center tw-text-white tw-mb-6 lg:tw-max-w-[792px] tw-mx-auto">
          <div className="tw-text-xl lg:tw-text-4xl tw-font-bold ">
            {t("take.title")}
          </div>
          <div className="tw-text-sm lg:tw-text-base tw-mt-2">
            {t("take.subtitle")}
          </div>
        </div>
        <div className="tw-w-full tw-overflow-hidden tw-rounded-xl">
          <div key={key}>
            <video
              poster="https://cms-strapi.ichiba.net/uploads/infographic_sgy122.webm"
              playsInline
              autoPlay
              muted
              loop
              preload="auto"
            >
              <source src={key} type="video/webm; codecs=vp9" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeBack;
