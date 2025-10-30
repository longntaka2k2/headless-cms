"use client";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import ListStories from "./ListStories";

const GlobalSuccessfully = ({
  lang,
  locale,
}: {
  lang: any;
  locale: string;
}) => {
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
      { threshold: 1 / 3 }
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
      className="py-6 lg:py-15 bg-primary-1 overflow-hidden"
      ref={elementRef}
    >
      <div className="container px-4">
        <div
          className={clsx(
            "text-center",
            isVisible ? "animate-showOn" : "opacity-0"
          )}
        >
          <p className="text-base lg:text-2xl font-medium mb-1 lg:mb-4">
            {lang.label}
          </p>
          <h3 className="font-bold text-2xl lg:text-4xl lg:leading-[48px] text-brand-primary mb-6 lg:mb-8">
            {lang.heading}
          </h3>
        </div>

        <ListStories lang={lang} locale={locale} />
      </div>
    </div>
  );
};
export default GlobalSuccessfully;
