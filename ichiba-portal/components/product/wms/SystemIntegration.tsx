import { useTranslation } from "next-i18next";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SystemIntegration = () => {
  const { t } = useTranslation("wms");
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

  const listCustomers1 = [
    { image: "/uploads/Group_3ac80c475c.svg" },
    { image: "/uploads/Logo_merchants_fe8156dc8c.svg" },
    { image: "/uploads/500px_Tik_Tok_logo_1_50db345de3.svg" },
    { image: "/uploads/Logo_merchantss_b27d19f4ee.svg" },
    { image: "/uploads/Group_3ac80c475c.svg" },
    { image: "/uploads/Logo_merchants_fe8156dc8c.svg" },
    { image: "/uploads/500px_Tik_Tok_logo_1_50db345de3.svg" },
    { image: "/uploads/Logo_merchantss_b27d19f4ee.svg" },
    { image: "/uploads/Group_3ac80c475c.svg" },
    { image: "/uploads/Logo_merchants_fe8156dc8c.svg" },
    { image: "/uploads/500px_Tik_Tok_logo_1_50db345de3.svg" },
    { image: "/uploads/Logo_merchantss_b27d19f4ee.svg" },
  ];

  const listCustomers2 = [
    { image: "/uploads/Group_9_18d1176412.svg" },
    { image: "/uploads/Vector_de62eb980b.svg" },
    { image: "/uploads/Intuit_Quick_Books_logo_1_afccb4bc98.svg" },
    { image: "/uploads/Etsy_logo_1_8b1c28b02b.svg" },
    { image: "/uploads/Group_9_18d1176412.svg" },
    { image: "/uploads/Vector_de62eb980b.svg" },
    { image: "/uploads/Intuit_Quick_Books_logo_1_afccb4bc98.svg" },
    { image: "/uploads/Etsy_logo_1_8b1c28b02b.svg" },
    { image: "/uploads/Group_9_18d1176412.svg" },
    { image: "/uploads/Vector_de62eb980b.svg" },
    { image: "/uploads/Intuit_Quick_Books_logo_1_afccb4bc98.svg" },
    { image: "/uploads/Etsy_logo_1_8b1c28b02b.svg" },
  ];

  const listCustomers3 = [
    { image: "/uploads/Vector3_4c4774e1c9.svg" },
    { image: "/uploads/Group_5_c94105dc60.svg" },
    { image: "/uploads/Vector6_796a450bd8.svg" },
    { image: "/uploads/Vecto7r_c292d6bb04.svg" },
    { image: "/uploads/Vector8_aee169f2bf.svg" },
    { image: "/uploads/Vector3_4c4774e1c9.svg" },
    { image: "/uploads/Group_5_c94105dc60.svg" },
    { image: "/uploads/Vector6_796a450bd8.svg" },
    { image: "/uploads/Vecto7r_c292d6bb04.svg" },
    { image: "/uploads/Vector8_aee169f2bf.svg" },
    { image: "/uploads/Vector3_4c4774e1c9.svg" },
    { image: "/uploads/Group_5_c94105dc60.svg" },
    { image: "/uploads/Vector6_796a450bd8.svg" },
    { image: "/uploads/Vecto7r_c292d6bb04.svg" },
    { image: "/uploads/Vector8_aee169f2bf.svg" },
  ];

  return (
    <section
      className="inf-slider lg:tw-container tw-py-6 lg:tw-py-15"
      ref={elementRef}
    >
      <h2
        className={clsx(
          "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-6 lg:tw-mb-10 tw-text-center",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        {t("system.heading")}
      </h2>
      <div
        className={clsx(
          "slider tw-ml-4",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <div className="slide-track">
          {listCustomers1.map((item: any, index: number) => (
            <>
              <div className="slide tw-mr-4">
                <div
                  className="tw-border tw-border-[#ddd] tw-rounded-2xl 
                                        tw-py-3 tw-px-3 lg:tw-py-5 lg:tw-px-6"
                >
                  <Image
                    src={`${strapiDomain}` + item.image}
                    height={100}
                    width={250}
                    alt="slide"
                  />
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="slide-track">
          {listCustomers2.map((item: any, index: number) => (
            <>
              <div className="slide tw-mr-4">
                <div
                  className="tw-border tw-border-[#ddd] tw-rounded-2xl 
                                        tw-py-3 tw-px-3 lg:tw-py-5 lg:tw-px-6"
                >
                  <Image
                    src={`${strapiDomain}` + item.image}
                    height={100}
                    width={250}
                    alt="slide"
                  />
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="slide-track">
          {listCustomers3.map((item: any, index: number) => (
            <>
              <div className="slide tw-mr-4">
                <div
                  className="tw-border tw-border-[#ddd] tw-rounded-2xl 
                                        tw-py-3 tw-px-3 lg:tw-py-5 lg:tw-px-6"
                >
                  <Image
                    src={`${strapiDomain}` + item.image}
                    height={100}
                    width={250}
                    alt="slide"
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemIntegration;
