import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { QuestionList } from "./Question";
const FAQs = ({ data }: any) => {
  const i = useTranslation("integration").t;
  const router = useRouter();
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
      { threshold: 1 / 3 },
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
    <>
      {data && (
        <div
          ref={elementRef}
          className={clsx(
            "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/BG_Platform_9b37b83cf1.svg')] tw-bg-cover tw-bg-no-repeat",
            "tw-pt-6 tw-pb-14 tw-px-4 lg:tw-py-16 lg:tw-px-0",
          )}
        >
          <div className="tw-container">
            <h2
              className={clsx(
                "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-6 lg:tw-mb-10 lg:tw-w-[70%] tw-mx-auto lg:tw-text-center",
                isVisible ? "tw-animate-showOn" : "tw-opacity-0",
              )}
            >
              {data.heading}
            </h2>
            <QuestionList
              contents={data.items.map((x: any) => ({
                question: x.title,
                answer: x.content,
              }))}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default FAQs;
