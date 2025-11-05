"use client";
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import Link from "next/link";
import Step1 from "./assets/step-to-start/step1.gif";
import Step2 from "./assets/step-to-start/step2.gif";
import Step3 from "./assets/step-to-start/step3.gif";
import Step4 from "./assets/step-to-start/step4.gif";
import Step5 from "./assets/step-to-start/step5.gif";

interface Contents {
  title: string;
  subTitle: string[];
  btnLink?: string;
  image: StaticImageData;
}

export const contents: Contents[] = [
  {
    title: "Step 1: Sign up",
    subTitle: [
      "Create your free seller account in just 1 minute. No company registration or upfront investment required.",
    ],
    btnLink: "#",
    image: Step1,
  },
  {
    title: "Step 2: Select products",
    subTitle: [
      "Browse thousands of high-quality products from trusted Vietnamese and Japanese suppliers with IChiba’s product research tools. Pick what suits your target market.",
    ],
    image: Step2,
  },
  {
    title: "Step 3: Post products on your store",
    subTitle: [
      "List your selected products on platforms like ",
      "Shopify, Etsy, ",
      "or ",
      "WooCommerce ",
      "- manually or via automated integration.",
    ],
    image: Step3,
  },
  {
    title: "Step 4: Manage orders with IChiba software",
    subTitle: [
      "Track and manage all your orders in one place. Print shipping labels, check inventory, and stay updated in real time.",
    ],
    image: Step4,
  },
  {
    title: "Step 5: IChiba handles fulfillment",
    subTitle: [
      "We handle everything from ",
      "product inspection, professional packing, barcode labeling, ",
      "to ",
      "domestic or international shipping. ",
      "You sell – we do the rest.",
    ],
    image: Step5,
  },
];

const StepToStart = ({ lang }: any) => {
  const [isVisible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Fade-in section when visible
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Highlight step currently in viewport
  useEffect(() => {
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        });
      },
      {
        threshold: 0.5, // step phải hiển thị ~50% mới active
      }
    );

    stepRefs.current.forEach((el) => {
      if (el) stepObserver.observe(el);
    });

    return () => stepObserver.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={clsx(
        "py-6 lg:pt-10 lg:pb-20 px-4 relative transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="container relative">
        <div className="text-center mb-6 lg:mb-10">
          <h2>
            Steps to{" "}
            <span className="text-brand-primary mb-1 lg:mb-2">
              start selling
            </span>{" "}
            with IChiba
          </h2>
          <p className="lg:w-[70%] mx-auto">
            This guidance walks you through every step, ensuring you get the
            most out of the software’s powerful features for seamless inventory
            control.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:gap-10">
          {contents.map((item, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className="lg:p-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 transition-all duration-300"
            >
              <div className="relative lg:w-2/5 lg:px-6">
                <p
                  className={clsx(
                    "text-base font-bold mb-2 transition-colors",
                    index <= activeStep && "text-brand-primary"
                  )}
                >
                  {item.title}
                </p>
                <p className="mb-4 lg:mb-12">
                  {item.subTitle.map((txt, i) =>
                    i % 2 === 1 ? (
                      <span key={i} className="font-bold">
                        {txt}
                      </span>
                    ) : (
                      txt
                    )
                  )}
                </p>
                {item.btnLink && (
                  <button className="max-w-[200px] w-full rounded-lg bg-brand-primary text-white py-[10px] px-3 hover:opacity-80">
                    Log In
                  </button>
                )}

                {/* Dot indicator */}
                <div
                  className={clsx(
                    "hidden lg:block absolute top-0 -left-12 w-6 h-6 rounded-full transition-colors duration-300",
                    index <= activeStep
                      ? "bg-brand-primary"
                      : "bg-ic-ink-4"
                  )}
                ></div>
              </div>
              <div
                className={clsx(
                  "lg:w-3/5 transition-transform duration-500 bg-white",
                  index === activeStep ? "scale-105" : "scale-100"
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl mx-auto"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dòng timeline chính */}
        <div
          className={clsx(
            "hidden lg:block absolute left-0 w-[2px] h-[80%] top-1/2 -translate-y-1/2 border-l-2 border-dashed -z-1",
            "border-ic-ink-4"
          )}
        ></div>
      </div>
    </div>
  );
};

export default StepToStart;
