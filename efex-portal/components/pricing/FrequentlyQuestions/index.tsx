'use client'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { QuestionList } from "./QuestionList";

const FrequentlyQuestions = ({ lang, params }: { lang: any; params: any }) => {
  const learnMoreHref =
    params.lang === "vi"
      ? "https://efex.vn/vi/blog/dich-vu-order-fulfillment"
      : "https://efex.vn/en/blog/ecommerce-order-fulfillment-guide";

  const contents = [
    {
      question: lang.content[0].title,
      answer: lang.content[0].description,
    },
    {
      question: lang.content[1].title,
      answer: lang.content[1].description,
    },
    
    {
      question: lang.content[2].title,
      answer: lang.content[2].description,
    },
    {
      question: lang.content[3].title,
      answer: (
        <>
          {lang.content[3].description.first}{" "}
          <div
           
            onClick={() => {
              document
                .getElementById(params.lang === 'en' ? 'cost-of-order-fulfillment' : 'phi-hoan-tat-don-hang')
                ?.scrollIntoView({
                  behavior: "smooth",
                  inline: "start",
                });
            }}
            className="inline font-medium text-brand-primary underline cursor-pointer underline-offset-2"
          >
            {lang.content[3].description.second}
          </div>{" "}
          {lang.content[3].description.third}
        </>
      ),
    },
  ];

  return (
    <section className="bg-background-light text-ic-ink-6 px-4 py-6  lg:pt-[60px] lg:px-0">
      <div className="container lg:flex  justify-between lg:gap-[60px]">
        <div className="flex flex-col gap-1 lg:gap-2 lg:max-w-[348px] mb-4 lg:mb-0">
          <span
            className={clsx(
              "w-fit rounded-[20px] border border-brand-secondary text-brand-secondary text-[10px] leading-[14px] px-3 py-1",
              "lg:text-sm"
            )}
          >
            {lang.FAQs}
          </span>
          <h2 className="text-2xl font-bold lg:text-4xl lg:leading-[48px]">
            {lang.title}
          </h2>
          <p className="text-sm text-ic-ink-5 lg:text-base">{lang.subTitle}</p>
        </div>

        <div className="w-full lg:max-w-[792px]">
          <QuestionList contents={contents} />
        
        </div>
      </div>
    </section>
  );
};

export default FrequentlyQuestions;
