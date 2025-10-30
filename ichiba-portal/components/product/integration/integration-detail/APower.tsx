import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const APower = () => {
  const i = useTranslation("integration").t;
  const router = useRouter();
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
      id="ichiba-power"
      style={{
        backgroundImage: `url('https://cms-strapi.ichiba.net/uploads/Rectangle_6650_9404c4ee8e.svg')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={clsx(isVisible ? "tw-animate-showOn" : "tw-opacity-0")}
    >
      <div className="container text-center tw-py-12">
        <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold">
          {i("iChiba.0")} <br />
          {i("iChiba.1")}
        </h2>
      </div>
    </div>
  );
};
export default APower;
