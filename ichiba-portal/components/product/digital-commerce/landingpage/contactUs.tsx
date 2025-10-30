import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ContactUs = () => {
    const { t } = useTranslation("digital-landingpage");
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
    return (
        <section className="container" ref={elementRef}>
            <div className={clsx(
                "tw-py-6 tw-px-4 lg:tw-py-16 tw-rounded-2xl tw-overflow-hidden tw-mb-6 lg:tw-mb-20",
                "tw-animate-showOn tw-transition-all tw-duration-300",
                isVisible
                ? "tw-scale-100 tw-opacity-100"
                : "tw-opacity-0 tw-scale-75",
            )}
                style={{
                    backgroundImage: `url(${strapiDomain}/uploads/y_X0s_O7_HJ_0ft_W_Dbx7_B_Freb29_AAI_1_38e1720fdb.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}>
                <div className="tw-text-center">
                    <p className="tw-text-2xl tw-font-bold lg:tw-text-4xl">
                        {t("contactUs.heading")}
                    </p>
                    <p className="text-sm lg:tw-text-lg tw-mt-3 lg:tw-mt-4 tw-mb-5 lg:tw-mb-8">
                        {t("contactUs.subHeading")}
                    </p>
                    <Link href={'/contact-sales'}>
                        <button
                            // onClick={handleContactSale}
                            className="tw-text-ic-white-6 tw-w-[200px] tw-py-3 tw-px-3 tw-rounded-lg tw-bg-brand-primary"
                        >
                            {t("contactUs.textButton")}
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;