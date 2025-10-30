import React from "react";
import classes from "./Statistical.module.scss";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import CountUp from "react-countup";
import { data } from "./dataset";
import { Language } from "@/const/language";

const Statistical = () => {
  const { t, i18n } = useTranslation("pim");
  const lang = i18n.language as Language;

  return (
    <div className={classes.root}>
      {data[lang].map((item, idx) => (
        <div className={classes.item} key={idx}>
          <div className={clsx(classes.line)} />
          <div className="tw-flex tw-flex-col">
            <p className="tw-mb-0 tw-text-xs md:tw-text-sm">{item.sub}</p>
            <p className="tw-mb-0 tw-text-lg tw-leading-6 md:tw-text-3xl tw-font-bold">
              <CountUp end={item.value} />
              {item.unit}
            </p>
            <p className="tw-mb-0 tw-text-xs md:tw-text-sm tw-font-medium tw-mt-1">
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistical;
