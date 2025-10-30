"use client";
import BGEfex from "./BgEfex";
import WeAre from "./WeAre";
import { useEffect, useRef, useState } from "react";

const WeAreCPN = ({ lang }: { lang: any }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps

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
      { threshold: 1 / 5 }
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
      className="bg-[linear-gradient(0deg,_rgba(213,_219,_235,_0.00)_2.61%,_#F2F3F7_99.7%);] py-6 what-we-do relative lg:py-[60px]"
      ref={elementRef}
    >
      <BGEfex />
      <WeAre lang={lang} />
    </div>
  );
};
export default WeAreCPN;
