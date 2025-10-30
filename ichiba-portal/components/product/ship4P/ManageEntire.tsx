import { useTranslation } from "next-i18next";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ManageEntire() {
  const { t: ship4p } = useTranslation("ship4p");
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
    <div
      ref={elementRef}
      className="tw-py-6 lg:tw-pt-15 lg:tw-pb-20 tw-overflow-hidden"
    >
      <div
        className={clsx(
          "tw-container",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-text-center tw-mb-4 lg:tw-mb-8">
          {ship4p("manageEntire.heading.0")}
          <span className="tw-text-brand-primary">
            {ship4p("manageEntire.heading.1")}
          </span>
        </h2>

        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Group_1171276390_4d9a5c868c.png"
          }
          width={1497}
          height={927}
          alt="#"
        />
      </div>
    </div>
  );
}
