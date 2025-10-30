import Collapse from "@/components/core/collapse";
import React, { useState } from "react";
import Image from "next/image";
import classes from "./FAQs.module.scss";
import { data } from "./dataset";
import { useTranslation } from "next-i18next";
import { Language } from "@/const/language";

const FAQs = () => {
  const [expandIndex, setExpandIndex] = useState(0);
  const { t, i18n } = useTranslation("pim");

  const lang = i18n.language as Language;

  const handleToggle = (index: number) => {
    setExpandIndex(index === expandIndex ? -1 : index);
  };

  return (
    <div className="container tw-mt-6 lg:tw-mt-9 tw-pb-6 lg:tw-pb-10 tw-text-sm lg:tw-text-base">
      <div className="tw-flex tw-flex-col">
        <h2 className="tw-mb-0 tw-text-2xl lg:tw-text-4xl tw-text-center tw-font-bold">
          {t("faqsTitle")}
        </h2>
        <div className={classes.list}>
          {data[lang].map((item, index) => {
            const expanded = expandIndex === index;
            return (
              <div className={classes.item} key={index}>
                <div className={classes.question}>
                  <span className="tw-font-bold tw-text-base tw-flex-1">
                    {item.question}
                  </span>
                  <button onClick={() => handleToggle(index)}>
                    <Image
                      width={24}
                      height={24}
                      alt="expanded"
                      src={expanded ? "/svgs/minus.svg" : "/svgs/plus.svg"}
                    />
                  </button>
                </div>
                <Collapse orientation="vertical" in={expanded}>
                  <div className="tw-pb-4 lg:tw-pb-6">{item.answer}</div>
                </Collapse>
              </div>
            );
          })}
        </div>
        <div>
          <a
            href="https://support.ichiba.net"
            target="_blank"
            rel="noreferrer nofollow"
            className="tw-text-blue-6 tw-flex tw-items-center tw-gap-1 tw-relative tw-no-underline"
          >
            {t("viewMore")}
            <Image
              width={24}
              height={24}
              alt="support.ichiba.net"
              src="/svgs/arrow-2.svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
