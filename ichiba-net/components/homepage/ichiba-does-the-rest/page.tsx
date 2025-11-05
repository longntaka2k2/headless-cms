'use client';
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import DropshippingSolution from "./dropshipping-solution";
import PrintOnDemand from "./print-on-demand";
import Fulfillment from "./fulfillment";

const IChibaDoesTheRest = ({ lang, locale }: { lang: any; locale: string }) => {
  const [isVisible, setVisible] = useState(false);
  const elementRef = useRef(null);

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
    <div ref={elementRef} className="pt-6 lg:pt-15">
      <div className="container">
        <h2 className={clsx(
          "relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] text-center",
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        )}>{lang.heading[0]} <br />
          <span className="text-brand-primary">{lang.heading[1]}</span> {lang.heading[2]} <span className="text-brand-primary">{lang.heading[3]}</span>
        </h2>
      </div>
      <DropshippingSolution lang={lang.dropshippingSolution} />
      <PrintOnDemand lang={lang.printOnDemandSolution} />
      <Fulfillment lang={lang.fulfillment} />
    </div>
  );
};

export default IChibaDoesTheRest;
