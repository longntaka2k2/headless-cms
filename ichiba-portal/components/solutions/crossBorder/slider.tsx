import Image from "next/image";
import { useTranslation } from "next-i18next";
import Slider from "react-slick";

const SliderC = () => {
  const { t } = useTranslation("common");
  const imgs = [
    "https://cms-strapi.ichiba.net/uploads/amazon_911a07ec6e.png",
    "https://cms-strapi.ichiba.net/uploads/SAGA_92012abd62.png",
    "https://cms-strapi.ichiba.net/uploads/heaven_15f0113827.png",
    "https://cms-strapi.ichiba.net/uploads/FADO_4a51752161.png",
    "https://cms-strapi.ichiba.net/uploads/janbox_7513142af1.png",
    "https://cms-strapi.ichiba.net/uploads/Hooga_66ea743d8a.png",
    "https://cms-strapi.ichiba.net/uploads/Ckcyi_N_65ba999bd6.png",
    "https://cms-strapi.ichiba.net/uploads/A_muse_5f1e76ccd6.png",
    "https://cms-strapi.ichiba.net/uploads/Kiwi_Co_8b2c2d6274.png",
    "https://cms-strapi.ichiba.net/uploads/Shopbop_1f160886d4.png",
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    adaptiveHeight: true,
    variableWidth: true,
  };

  return (
    <section
      className="slider_c tw-relative
      tw-bg-[url('/icons/solutions/crossBorderEcommerce/bg-slider.webp')] tw-bg-cover
      md:before:tw-bg-smoothBlue before:tw-content-empty  before:tw-absolute before:tw-inset-0
      before:tw-bg-smoothBlueToBot
      tw-h-[296px] tw-max-w-[100vw]
      before:tw-z-10
    "
    >
      <div
        className="
        tw-text-white tw-align-start
        md:tw-align-middle md:tw-relative tw-container 
        tw-px-[16px] tw-py-[24px] tw-static
        tw-flex md:tw-items-center
        tw-h-full tw-z-[12]
        "
      >
        <p className="tw-font-bold tw-text-2xl md:tw-text-3xl md:tw-max-w-[45%] tw-text-center md:tw-text-start tw-z-10">
          {t("solutions.cbe.slider")}
        </p>
      </div>
      <div
        className="
          tw-absolute 
          md:tw-max-w-[55vw]  tw-max-w-[99.7vw]
          tw-top-0 tw-text-white  
          tw-z-[11] md:tw-z-[9] tw-flex tw-flex-col md:tw-left-[44.55%]
          "
      >
        <Slider {...settings} className="tw-overflow-hidden">
          {imgs.map((x, idx) => (
            <Image
              key={x + idx}
              src={x}
              alt="solutions"
              className="tw-rounded-lg tw-w-full tw-h-full tw-max-h-[120px] tw-max-w-[120px]"
              width={120}
              height={120}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default SliderC;
