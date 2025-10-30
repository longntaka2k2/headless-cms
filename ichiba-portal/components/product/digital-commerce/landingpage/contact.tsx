import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
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
        <section className={clsx(
            "container tw-translate-y-[-40%] lg:tw-translate-y-[-30%] tw-animate-showOn tw-transition-all tw-duration-300",
            isVisible
            ? "tw-scale-100 tw-opacity-100"
            : "tw-opacity-0 tw-scale-75",
        )} ref={elementRef}>
            <div className="tw-p-5 lg:tw-py-10 lg:tw-px-20 tw-rounded-2xl tw-overflow-hidden"
                style={{
                    backgroundImage: `url(${strapiDomain}/uploads/Frame_1171275830_50172cb4c9.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
                <p className="tw-text-sm lg:text-lg mb-2 tw-text-[#666]">
                    {t("contact.title")}
                </p>
                <p className="tw-text-xl lg:text-3xl tw-mb-5 lg:tw-mb-7 tw-font-bold">
                    {t("contact.subTitle")}
                </p>
                <Link href={'/contact-sales'}>
                    <button
                        className="tw-text-ic-white-6 tw-py-2 tw-h-10 tw-px-3 tw-rounded-lg tw-bg-brand-primary"
                    >
                        {t("contact.buttonText")}
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default Contact;