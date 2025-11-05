"use client";
import { useEffect, useRef, useState } from "react";
import { QuestionList } from "@/components/commons/question-list";
import LabelTag from "@/components/commons/label-tag";
import clsx from "clsx";

const contents = [
  {
    question: "1. What SLA (Service Level Agreement) does IChiba guarantee for sellers?",
    answer: "We provide clear, trackable SLAs across production, shipping, and support so you can sell with confidence. See the details below.",
  },
  {
    question: "2. Do I need a company to register as a seller?",
    answer: "No. You can start as an individual.",
  },
  {
    question: "3. Which platforms can I sell on?",
    answer: "You can connect with platforms such as Shopify, Etsy, Amazon, WooCommerce, etc. And we have our own selling websites that have gained 75.000+ buyers from the US, you can register to sell on our website.",
  },
  {
    question: "4. How are service fees calculated?",
    answer: "Depending on the type of service (POD, Dropship, Fulfillment), you will receive a transparent quotation. Please contact us for further details and one-one consultation. ",
  },
  {
    question: "5. Do my products need to meet any standards?",
    answer: "Yes, we have a set of quality standards to ensure the best buyer experience. Our team will assist you with product review before listing",
  },
  {
    question: "6. How can I track my orders?",
    answer: "All orders come with our built-in order management platform that enables automatic tracking, from orders, fulfillment to successful delivery.",
  },
];

const FrequentlyQuestions = ({ lang }: { lang: any }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // chỉ chạy 1 lần
        }
      },
      {
        threshold: 0.2, // mượt hơn, trigger sớm hơn
        rootMargin: "0px 0px -50px 0px", // thêm khoảng để bắt đầu hiệu ứng sớm hơn
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={elementRef} className={clsx(
      "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
      isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-20",
      "text-ic-ink-6 px-4 py-10 lg:pt-[100px] lg:pb-20"
    )}>
      <div className="container flex flex-col gap-4 lg:flex-row lg:gap-[60px]">
        <div className="lg:max-w-[350px]">
          <div className="flex flex-col gap-1 lg:gap-2">
            <LabelTag value="GET ANSWERS FOR" className="mb-2" />
            <h2 className="text-2xl font-bold lg:text-4xl lg:leading-[48px]">
              Frequently asked questions
            </h2>
            <p className="text-sm text-ic-ink-5 lg:text-base">
              Explore our frequently asked questions to learn more about IChibaOne Platform and more.
            </p>
          </div>
        </div>

        <div className="lg:w-[792px]">
          <QuestionList contents={contents} />
        </div>
      </div>
    </section>
  );
};

export default FrequentlyQuestions;
