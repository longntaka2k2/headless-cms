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
          <Link
            href={
              params.lang === "vi"
                ? "https://efex.vn/vi/pricing/"
                : "https://efex.vn/en/pricing"
            }
            target="_blank"
            className="inline font-medium text-brand-primary underline cursor-pointer underline-offset-2"
          >
            {lang.content[3].description.second}
          </Link>{" "}
          {lang.content[3].description.third}
        </>
      ),
    },
  ];

  return (
    <section className="bg-background-light text-ic-ink-6 px-4 pb-6 pt-[11px] lg:pt-[60px] lg:px-0">
      <div className="container flex flex-col gap-4 lg:flex-row lg:gap-[60px]">
        <div className="lg:max-w-[350px]">
          <div className="flex flex-col gap-1 lg:gap-2">
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
            <p className="text-sm text-ic-ink-5 lg:text-base">
              {lang.subTitle}
            </p>
          </div>
        </div>

        <div className="lg:w-[792px]">
          <QuestionList contents={contents} />
          <div className="mt-5 lg:mt-6 flex items-center text-brand-primary">
            <Link
              href={learnMoreHref}
              target="_blank"
              className="text-sm font-medium lg:text-base lg:font-medium underline-offset-2"
            >
              {lang.learnMore.first}{" "}
              <span className="underline">{lang.learnMore.second}</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                width={24}
                height={24}
                className="ml-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyQuestions;
