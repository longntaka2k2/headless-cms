import clsx from "clsx";
import Image from "next/image";
const Core = ({ lang }: { lang: any }) => {
  return (
    <div className="relative py-6 lg:pt-20 lg:pb-[250px] overflow-hidden">
      <div className="container px-4">
        <h2 className="text-2xl lg:text-4xl font-bold lg:leading-[48px] text-center mb-4 lg:mb-15">
          <span className="text-brand-primary">{lang.heading[0]}</span>
          {lang.heading[1]}
          <span className="text-brand-primary">{lang.heading[2]}</span>
          {lang.heading[3]}
          <span className="text-brand-primary">{lang.heading[4]}</span>
          {lang.heading[5]}
        </h2>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-7 h-auto">
          <div className="flex-1 grid gap-4 lg:gap-6">
            <div>
              <div className="grid gap-4">
                {lang.visionMission.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="p-4 lg:p-7 rounded-lg lg:rounded-2xl bg-[linear-gradient(270deg,_#EEEFFC_26.38%,_rgba(223,_231,_246,_0.41)54.93%,_rgba(249,_250,_251,_0.00)97.01%)]"
                  >
                    <div className="flex gap-2 items-center">
                      <p className="text-base lg:text-2xl font-bold">
                        {item.label}
                      </p>
                      <Image
                        src={item.icon}
                        width={96}
                        height={24}
                        alt="EFEX"
                        className="w-[62px] h-4 lg:w-24 lg:h-6"
                      />
                    </div>
                    <p className="text-sm lg:text-base mt-2">{item.subLabel}</p>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="https://strapi-efex.ichiba.net/uploads/image_599_ee3f703276.svg"
              width={739}
              height={493}
              alt="EFEX"
              className="lg:absolute bottom-10 lg:min-w-[739px] lg:min-h-[493px] -z-1"
            />
          </div>
          <div className="flex-1 ">
            <div className="p-4 lg:p-7 rounded-lg lg:rounded-2xl bg-[#00194F] shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)]">
              <div
                className={clsx(
                  "py-2 px-8 lg:py-4 lg:px-[58px] rounded-lg lg:rounded-2xl",
                  "bg-[linear-gradient(270deg,_#EEEFFC_26.38%,_rgba(223,_231,_246,_0.41)54.93%,_rgba(249,_250,_251,_0.00)97.01%)]",
                  "flex gap-2 items-center mb-4 lg:mb-10"
                )}
              >
                <p className="text-base lg:text-2xl font-bold text-white">
                  {lang.coreValues.label}
                </p>
                <Image
                  src={lang.coreValues.icon}
                  width={96}
                  height={24}
                  alt="EFEX"
                  className="w-[62px] h-4 lg:w-24 lg:h-6"
                />
              </div>

              <div className="grid gap-5 lg:gap-6">
                {lang.coreValues.items.map((item: any, index: number) => (
                  <div key={index} className="flex gap-2 lg:gap-4">
                    <Image
                      src={item.icon}
                      width={40}
                      height={40}
                      alt="EFEX"
                      className="w-6 h-6 lg:w-10 lg:h-10"
                    />
                    <div>
                      <p className="text-sm lg:text-lg font-bold mb-2 text-brand-primary">
                        {item.title}
                      </p>
                      <p className="text-sm lg:text-base text-white">
                        {item.subTitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="https://strapi-efex.ichiba.net/uploads/Ellipse_518_ffc5fddacc.svg"
        width={1920}
        height={682}
        alt="EFEX"
        className="absolute bottom-0 left-0 -z-10"
      />
    </div>
  );
};

export default Core;
