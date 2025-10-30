import { useTranslation } from "next-i18next";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import CreatePersonalized from "./CreatePersonalized";
import MyCarrier from "./MyCarrier";
import AutoBuyLabel from "./AutoBuyLabel";
import ManageMultiple from "./ManageMultiple";
import TrackAndTrace from "./TrackAndTrace";
import Flexible from "./Flexible";
import RealTime from "./RealTime";

export default function MultiCarrier() {
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
      className={clsx(
        "tw-py-8 lg:tw-py-15 tw-overflow-hidden",
        "tw-bg-[linear-gradient(105deg,_rgba(177,_209,_246,_0.30)_3.61%,_rgba(197,_200,_253,_0.05)_64.21%)]",
      )}
    >
      <div
        className={clsx(
          "tw-container tw-flex tw-flex-col tw-gap-8 lg:tw-gap-20 tw-px-4",
        )}
      >
        <h2
          className={clsx(
            "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-text-center",
          )}
        >
          {ship4p("multiCarrier.heading.0")} <br />
          {ship4p("multiCarrier.heading.1")}
          <span className="tw-text-brand-primary">
            {ship4p("multiCarrier.heading.2")}
          </span>
        </h2>

        <CreatePersonalized />
        <MyCarrier />
        <AutoBuyLabel />
        <ManageMultiple />
        <TrackAndTrace />
        <div className="tw-grid lg:tw-grid-cols-2 tw-gap-8 lg:tw-gap-15">
          <Flexible />
          <RealTime />
        </div>
      </div>
    </div>
  );
}
