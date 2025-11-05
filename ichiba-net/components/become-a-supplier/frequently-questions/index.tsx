"use client";
import { useEffect, useRef, useState } from "react";
import { QuestionList } from "../../commons/question-list";
import LabelTag from "@/components/commons/label-tag";
import clsx from "clsx";

const contents = [
    {
      question: "1. Do I need a company to register as a supplier?",
      answer: "No. Individuals and registered businesses are welcome (ID/Tax info required).",
    },
    {
      question: "2. Which channels can my products reach?",
      answer: "IChiba sellers across Amazon, TikTok Shop, Etsy, eBay, Shopify (availability depends on category & compliance).",
    },
    {
      question: "3. How are service fees calculated?",
      answer: "Transparent platform + transaction fees (if applicable) and optional logistics/WMS. You see the total before publishing.",
    },
    {
      question: "4. What standards do my products need to meet?",
      answer: "Legal compliance, clear specs, quality proof; US-ready items may require barcode/labeling and safety docs.",
    },
    {
      question: "5. How are orders and payouts handled?",
      answer: "You fulfill or use IChiba WMS; tracking required. Payout on T+N after delivery/fulfillment, with fast-payout for eligible suppliers.",
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
            <LabelTag value="GET ANSWERS FOR" borderGradient className="mb-2" background="bg-primary-2" />
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
