import { useTranslation } from "next-i18next";
import Slider from "react-slick";
import Image from "next/image";
const PreDesign = () => {
  const b = useTranslation("build-store-front").t;
  return (
    <div className="lg:tw-mt-[78px] tw-mt-6">
    <div className="inf-slider lg:!tw-py-15 !tw-py-8 tw-bg-[url(https://cms-strapi.ichiba.net/uploads/thumbnail_641dbd42118dea1144e78b7c_bg_jpg_1_5c44113f01.png)] tw-bg-cover">
      <div className="slider">
        <div className="slide-track tw-gap-5 tw-items-center !tw-mt-0">
          <div className="tw-bg-[url(https://cms-strapi.ichiba.net/uploads/thumbnail_BG_660a55e943.png)] tw-rounded-xl  tw-px-9 tw-py-11 tw-text-center lg:tw-px-[56px] lg:tw-py-[88px] tw-bg-cover tw-bg-no-repeat tw-h-max">
            <div className="lg:tw-text-5xl tw-font-bold tw-text-4xl">400+</div>
            <div className="lg:tw-text-2xl tw-text-lh tw-font-medium tw-line-clamp-1 tw-whitespace-nowrap">
              {b("preDesign")}
            </div>
          </div>
          <Image
            src="https://cms-strapi.ichiba.net/uploads/64ec7dbf93f0219d6e23e5e8_Template_05_1_22c74c8dca.png"
            alt="preDesign"
            width={598}
            height={414}
            className="lg:tw-max-h-[414px] tw-max-h-[158px] tw-w-auto"
          />
          <Image
            src="https://cms-strapi.ichiba.net/uploads/64ec7dbf12bf5ac6413cb35a_Template_03_1_65dcfb4569.png"
            alt="preDesign"
            width={598}
            height={414}
            className="lg:tw-max-h-[414px] tw-max-h-[158px] tw-w-auto"
          />
          <Image
            src="https://cms-strapi.ichiba.net/uploads/6461f6f57655625aea25d565_Webfront_11_1_b7871c7bf2.png"
            alt="preDesign"
            width={598}
            height={414}
            className="lg:tw-max-h-[414px] tw-max-h-[158px] tw-w-auto"
          />
          <div className="tw-bg-[url(https://cms-strapi.ichiba.net/uploads/thumbnail_BG_660a55e943.png)] tw-rounded-xl tw-px-9 tw-py-11 tw-text-center lg:tw-px-[56px] lg:tw-py-[88px] tw-bg-cover tw-bg-no-repeat tw-h-max">
            <div className="lg:tw-text-5xl tw-font-bold tw-text-4xl">100%</div>
            <div className="lg:tw-text-2xl tw-text-lg tw-font-medium tw-line-clamp-1 tw-whitespace-nowrap">
              {b("flexibly")}
            </div>
          </div>
          <Image
            src="https://cms-strapi.ichiba.net/uploads/64ec7dbf93f0219d6e23e5e8_Template_05_1_22c74c8dca.png"
            alt="preDesign"
            width={598}
            height={414}
            className="lg:tw-max-h-[414px] tw-max-h-[158px] tw-w-auto"
          />
          <Image
            src="https://cms-strapi.ichiba.net/uploads/64ec7dbf12bf5ac6413cb35a_Template_03_1_65dcfb4569.png"
            alt="preDesign"
            width={598}
            height={414}
            className="lg:tw-max-h-[414px] tw-max-h-[158px] tw-w-auto"
          />
          <Image
            src="https://cms-strapi.ichiba.net/uploads/6461f6f57655625aea25d565_Webfront_11_1_b7871c7bf2.png"
            alt="preDesign"
            width={598}
            height={414}
            className="lg:tw-max-h-[414px] tw-max-h-[158px] tw-w-auto"
          />
        </div>
      </div>
    </div>
    </div>
  );
};
export default PreDesign;
