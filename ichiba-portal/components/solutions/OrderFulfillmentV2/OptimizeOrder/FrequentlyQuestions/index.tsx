import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { QuestionList } from "./QuestionList";
import { useTranslation } from "next-i18next";

const FrequentlyQuestions = () => {
  const { t } = useTranslation("order-fulfillment-by-efex");

  const contents = [
    {
      question: t("frequentlyQues.content.0.title"),
      answer: t("frequentlyQues.content.0.description"),
    },
    {
      question: t("frequentlyQues.content.1.title"),
      answer: t("frequentlyQues.content.0.description"),
    },
    {
      question: t("frequentlyQues.content.2.title"),
      answer: t("frequentlyQues.content.0.description"),
    },
    {
      question: t("frequentlyQues.content.3.title"),
      answer: t("frequentlyQues.content.3.description"),
    },
  ];

  return (
    <section className="tw-bg-background-light tw-text-ic-ink-6 tw-px-4 tw-pb-6 tw-pt-[11px] lg:tw-pt-[60px] lg:tw-px-0">
      <div className="tw-container tw-flex tw-flex-col tw-gap-4 lg:tw-flex-row lg:tw-gap-[60px]">
        <div className="lg:tw-max-w-[350px]">
          <div className="tw-flex tw-flex-col tw-gap-1 lg:tw-gap-2">
            <span
              className={clsx(
                "tw-w-fit tw-rounded-[20px] tw-border tw-border-brand-secondary tw-text-brand-secondary tw-text-[10px] tw-leading-[14px] tw-px-3 tw-py-1",
                "lg:tw-text-sm",
              )}
            >
              {t("frequentlyQues.getAnswers")}
            </span>
            <h2 className="tw-text-2xl tw-font-bold lg:tw-text-4xl lg:tw-leading-[48px]">
              {t("frequentlyQues.title")}
            </h2>
            <p className="tw-text-sm tw-text-ic-ink-5 lg:tw-text-base">
              {t("frequentlyQues.subTitle")}
            </p>
          </div>
        </div>

        <div className="lg:tw-w-[792px]">
          <QuestionList contents={contents} />
          <div className="tw-mt-5 lg:tw-mt-6 tw-flex tw-items-center tw-text-[#AF0000]">
            <p className="tw-text-sm tw-font-medium lg:tw-text-base lg:tw-font-medium tw-underline-offset-2">
              {t("frequentlyQues.learnMore.first")}
              <Link
                target="_blank"
                href={t("frequentlyQues.learnMore.link") as string}
                className="tw-text-[#AF0000]"
              >
                <span className="tw-underline tw-ml-1">
                  {t("frequentlyQues.learnMore.second")}
                </span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  width={24}
                  height={24}
                  className="tw-ml-1"
                />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyQuestions;
