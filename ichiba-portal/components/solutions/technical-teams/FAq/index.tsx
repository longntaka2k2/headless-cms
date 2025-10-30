import { useTranslation } from "next-i18next";
import clsx from "clsx";
import { QuestionList } from "./Questions";

const FrequentlyAskedQuestions = () => {
  const g = useTranslation("technical-teams").t;
  return (
    <div className="tw-bg-background-light tw-text-ic-ink-6 tw-px-4 tw-pb-6 tw-pt-[11px] lg:tw-py-[60px] lg:tw-px-0">
      <div className="tw-container tw-flex tw-flex-col tw-gap-4 lg:tw-flex-row lg:tw-gap-[60px]">
        <div className="lg:tw-max-w-[350px]">
          <div className="tw-flex tw-flex-col tw-gap-1 lg:tw-gap-2">
            <span
              className={clsx(
                "tw-w-fit tw-rounded-[20px] tw-border tw-border-brand-secondary tw-text-brand-secondary tw-text-[10px] tw-leading-[14px] tw-px-3 tw-py-1",
                "lg:tw-text-sm",
              )}
            >
              {g("faqs.label")}
            </span>
            <h2 className="tw-mb-4 tw-text-2xl tw-font-bold lg:tw-text-4xl lg:tw-leading-[48px]">
              {g("faqs.title")}
            </h2>
          </div>
        </div>

        <div className="lg:tw-w-[792px]">
          <QuestionList
            contents={(
              g(`faqs.contents`, {
                returnObjects: true,
              }) as { question: string; answer: string[] }[]
            ).map((x: any) => ({
              question: x.question,
              answer: x.answer,
            }))}
          />
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
