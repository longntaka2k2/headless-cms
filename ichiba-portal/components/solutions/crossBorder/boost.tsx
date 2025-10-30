import CountUp from "react-countup";
import { useTranslation } from "next-i18next";

const Boost = () => {
  const { t } = useTranslation("common");
  return (
    <section
      className="boost 
    tw-bg-[url('https://cms-strapi.ichiba.net/uploads/boost_background_2d3e3ddf76.webp')] 
    tw-bg-cover tw-bg-no-repeat"
    >
      <div className="container">
        <div className="d-flex flex-column color-white text-center">
          <p className=" tw-font-bold tw-text-h tw-text-2xl md:tw-text-4xl align-self-center md:tw-max-w-6xl">
            {t("solutions.cbe.boost.heading")}
          </p>
          <div className="counters d-flex justify-content-evenly text-center">
            <div className="counter md:tw-min-w-[262px]">
              <CountUp
                className="number"
                duration={10}
                start={0}
                end={50}
                suffix="+"
              />
              <div className="fw-6 tw-h-6 md:tw-min-w-[262px]">
                {t("solutions.cbe.boost.label1")}
              </div>
            </div>
            <div className="counter">
              <CountUp
                className="number"
                duration={10}
                start={0}
                end={220}
                suffix="+"
              />
              <div className="fw-6 tw-h-6 md:tw-min-w-[262px]">
                {t("solutions.cbe.boost.label2")}
              </div>
            </div>
            <div className="counter md:tw-min-w-[262px]">
              <CountUp
                className="number"
                duration={10}
                start={0}
                end={100}
                suffix="+"
              />
              <div className="fw-6 tw-h-6">
                {t("solutions.cbe.boost.label3")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boost;
