'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import LottieRenderer from "@/components/commons/lottie-renderer";
import AnimationPC from "@/public/json/web-en.json";
import AnimationMB from "@/public/json/mb-en.json";

const StepByStep = ({ lang }: { lang: any }) => {
  const [isVisible, setVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className={clsx(
      "container relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] px-4 py-6 lg:pt-10 lg:pb-15",
      isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-60"
    )}>
      <h2 className="text-center mb-3 lg:mb-2">
        Dropshipping/Print-on-demand step by step with <span className="text-brand-primary">IChiba</span>
      </h2>
      <p className="lg:w-[70%] mx-auto text-center mb-6 lg:mb-10">
        See how IChiba connects you with trusted suppliers from Vietnam and Japan and takes care of fulfillment, shipping, and support, so you can focus on growing your business in the U.S. market.
      </p>
      {isVisible && (
        <>
          <div className="hidden lg:block rounded-lg bg-white shadow-3">
            <LottieRenderer path={AnimationPC} className="mx-auto" />
          </div>
          <div className="lg:hidden rounded-lg bg-white shadow-3">
            <LottieRenderer path={AnimationMB} className="mx-auto" />
          </div>
        </>
      )}
    </div>
  );
};

export default StepByStep;
