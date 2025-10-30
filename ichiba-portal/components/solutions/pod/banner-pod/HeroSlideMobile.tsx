import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const HeroSlidePODMobile = () => {
  const strapiDomain = "https://cms-strapi.ichiba.net";
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 / 3 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const list = [
    { image: "/uploads/Rectangle_52729_5b093ff5f6.svg" },
    { image: "/uploads/Rectangle_52730_4e2cd6e352.svg" },
    { image: "/uploads/Rectangle_52731_1aa9153ba5.svg" },
    { image: "/uploads/Rectangle_52732_bdcffeefd7.svg" },
    { image: "/uploads/Rectangle_52733_ffcc88180a.svg" },
    { image: "/uploads/Rectangle_52734_81f755c76f.svg" },
    { image: "/uploads/Rectangle_52729_5b093ff5f6.svg" },
    { image: "/uploads/Rectangle_52730_4e2cd6e352.svg" },
    { image: "/uploads/Rectangle_52731_1aa9153ba5.svg" },
    { image: "/uploads/Rectangle_52732_bdcffeefd7.svg" },
    { image: "/uploads/Rectangle_52733_ffcc88180a.svg" },
    { image: "/uploads/Rectangle_52734_81f755c76f.svg" },
  ];

  return (
    <section
      className="tw-relative tw-pb-20 lg:tw-pb-[250px] scroll-smooth tw-overflow-hidden"
      ref={elementRef}
    >
      <div
        className={clsx(
          "tw-overflow-x-hidden tw-animate-showOn tw-transition-all tw-duration-300",
          isVisible
            ? "tw-scale-100 tw-opacity-100"
            : "tw-opacity-0 tw-scale-75",
        )}
      >
        <div className="tw-flex tw-gap-4 tw-justify-center list-template-right">
          {list.map((item: any, index: number) => {
            return (
              <>
                <div
                  key={index}
                  className="tw-min-w-[134px] tw-min-h-[188px] lg:tw-min-w-[305px] lg:tw-min-h-[426px] tw-rounded-[4px] lg:tw-rounded-lg"
                  style={{
                    backgroundImage: `url(${strapiDomain}${item.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </>
            );
          })}
        </div>
      </div>
      <Image
        src={"https://cms-strapi.ichiba.net/uploads/Mk_1d55b40171.svg"}
        width={1059}
        height={603}
        className={clsx(
          "tw-absolute tw-left-[50%] tw-translate-x-[-50%] -tw-bottom-10",
          "tw-w-full tw-h-full tw-max-w-[995px] tw-max-h-[550px]",
        )}
        alt="#"
      />
    </section>
  );
};

export default HeroSlidePODMobile;
