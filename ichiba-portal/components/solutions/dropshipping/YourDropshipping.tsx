import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const CreateAnOnline = () => {
  const b = useTranslation("dropshipping").t;
  return (
    <div className="tw-container tw-max-w-[1020] tw-mx-auto tw-py-6 lg:tw-py-10">
      <h2 className="tw-mb-4 lg:tw-mb-12 tw-text-center tw-text-2xl lg:tw-text-4xl tw-font-bold lg:tw-w-[55%] tw-mx-auto">
        {b("yourDropshipping.title")}
      </h2>
      <Moibile />
      <Desktop />
    </div>
  );
};

export const Moibile = () => {
  const b = useTranslation("dropshipping").t;
  const items = (
    b(`yourDropshipping.items`, {
      returnObjects: true,
    }) as string[]
  ).map((x: any) => ({
    step: x.step as string,
    title: x.title as string,
    img: x.img as string,
    content: x.content as string,
  }));
  return (
    <div className="lg:tw-hidden tw-grid tw-gap-0 tw-ml-5">
      {items.map((value: any, index: number) => (
        <div
          className={clsx(
            "tw-relative after:tw-absolute after:tw-w-[1px] after:tw-bg-[#AAC9EE] after:tw-h-full tw-pt-7 after:tw-top-0 after:tw-left-[-20px]",
            "before:tw-absolute before:tw-z-1 before:tw-w-3 before:tw-h-3 before:tw-rounded-full before:tw-border before:tw-border-[#AAC9EE] before:tw-bg-white before:tw-left-[-25px] before:tw-top-10",
          )}
          key={index}
        >
          <h3 className="tw-font-bold tw-text-base tw-mt-2">
            <span className="tw-text-brand-primary">{value.step}</span>
            {value.title}
          </h3>
          <div className="tw-mt-2 tw-text-sm">{value.content}</div>
          <Image
            src={value.img}
            alt={value.title}
            width={400}
            height={330}
            className="tw-max-w-[400px] tw-w-full tw-mt-4"
          />
        </div>
      ))}
    </div>
  );
};

export const Desktop = () => {
  const { t } = useTranslation("dropshipping");
  const [isVisible, setVisible] = useState(false);
  const elementRef = useRef(null);
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
    <div className="tw-hidden lg:tw-grid tw-gap-0 tw-ml-5" ref={elementRef}>
      <div
        className={clsx(
          "tw-flex tw-justify-between tw-items-center",
          "tw-relative after:tw-absolute after:tw-w-[1px] after:tw-bg-[#AAC9EE] after:tw-h-full tw-pt-7 after:tw-top-0 after:tw-left-[50%] ",
          "before:tw-absolute before:tw-z-1 before:tw-w-3 before:tw-h-3 before:tw-rounded-full before:tw-border before:tw-border-[#AAC9EE] ",
          "before:tw-bg-white before:tw-translate-x-[-5px] before:tw-left-[50%] before:tw-top-[50%]",
          "tw-transition-all tw-duration-500",
          isVisible
            ? "tw-translate-y-0 tw-opacity-100"
            : "tw-translate-y-10 tw-opacity-0",
        )}
        style={{
          transitionDelay: `${1 * 250}ms`,
        }}
      >
        <Image
          src={t("yourDropshipping.items.0.img") as string}
          alt={t("yourDropshipping.items.0.title")}
          width={400}
          height={330}
          className="tw-max-w-[460px] tw-w-full tw-mt-4"
        />
        <div className="tw-w-[440px]">
          <h3 className="tw-font-bold tw-mt-2 tw-text-xl">
            <span className="tw-text-brand-primary">
              {t("yourDropshipping.items.0.step")}
            </span>
            {t("yourDropshipping.items.0.title")}
          </h3>
          <div className="tw-mt-2 tw-text-sm">
            {t("yourDropshipping.items.0.content")}
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "tw-flex tw-justify-between tw-items-center",
          "tw-relative after:tw-absolute after:tw-w-[1px] after:tw-bg-[#AAC9EE] after:tw-h-full tw-pt-7 after:tw-top-0 after:tw-left-[50%] ",
          "before:tw-absolute before:tw-z-1 before:tw-w-3 before:tw-h-3 before:tw-rounded-full before:tw-border before:tw-border-[#AAC9EE] ",
          "before:tw-bg-white before:tw-translate-x-[-5px] before:tw-left-[50%] before:tw-top-[50%]",
          "tw-transition-all tw-duration-500",
          isVisible
            ? "tw-translate-y-0 tw-opacity-100"
            : "tw-translate-y-10 tw-opacity-0",
        )}
        style={{
          transitionDelay: `${2 * 250}ms`,
        }}
      >
        <div className="tw-w-[440px]">
          <h3 className="tw-font-bold tw-mt-2 tw-text-xl">
            <span className="tw-text-brand-primary">
              {t("yourDropshipping.items.1.step")}
            </span>
            {t("yourDropshipping.items.1.title")}
          </h3>
          <div className="tw-mt-2 tw-text-sm">
            {t("yourDropshipping.items.1.content")}
          </div>
        </div>

        <Image
          src={t("yourDropshipping.items.1.img") as string}
          alt={t("yourDropshipping.items.1.title")}
          width={400}
          height={330}
          className="tw-max-w-[460px] tw-w-full tw-mt-4"
        />
      </div>

      <div
        className={clsx(
          "tw-flex tw-justify-between tw-items-center",
          "tw-relative after:tw-absolute after:tw-w-[1px] after:tw-bg-[#AAC9EE] after:tw-h-full tw-pt-7 after:tw-top-0 after:tw-left-[50%] ",
          "before:tw-absolute before:tw-z-1 before:tw-w-3 before:tw-h-3 before:tw-rounded-full before:tw-border before:tw-border-[#AAC9EE] ",
          "before:tw-bg-white before:tw-translate-x-[-5px] before:tw-left-[50%] before:tw-top-[50%]",
          "tw-transition-all tw-duration-500",
          isVisible
            ? "tw-translate-y-0 tw-opacity-100"
            : "tw-translate-y-10 tw-opacity-0",
        )}
        style={{
          transitionDelay: `${3 * 250}ms`,
        }}
      >
        <Image
          src={t("yourDropshipping.items.2.img") as string}
          alt={t("yourDropshipping.items.2.title")}
          width={400}
          height={330}
          className="tw-max-w-[460px] tw-w-full tw-mt-4"
        />
        <div className="tw-w-[440px]">
          <h3 className="tw-font-bold tw-mt-2 tw-text-xl">
            <span className="tw-text-brand-primary">
              {t("yourDropshipping.items.2.step")}
            </span>
            {t("yourDropshipping.items.2.title")}
          </h3>
          <div className="tw-mt-2 tw-text-sm">
            {t("yourDropshipping.items.2.content")}
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "tw-flex tw-justify-between tw-items-center",
          "tw-relative after:tw-absolute after:tw-w-[1px] after:tw-bg-[#AAC9EE] after:tw-h-full tw-pt-7 after:tw-top-0 after:tw-left-[50%] ",
          "before:tw-absolute before:tw-z-1 before:tw-w-3 before:tw-h-3 before:tw-rounded-full before:tw-border before:tw-border-[#AAC9EE] ",
          "before:tw-bg-white before:tw-translate-x-[-5px] before:tw-left-[50%] before:tw-top-[50%]",
          "tw-transition-all tw-duration-500",
          isVisible
            ? "tw-translate-y-0 tw-opacity-100"
            : "tw-translate-y-10 tw-opacity-0",
        )}
        style={{
          transitionDelay: `${4 * 250}ms`,
        }}
      >
        <div className="tw-w-[440px]">
          <h3 className="tw-font-bold tw-mt-2 tw-text-xl">
            <span className="tw-text-brand-primary">
              {t("yourDropshipping.items.3.step")}
            </span>
            {t("yourDropshipping.items.3.title")}
          </h3>
          <div className="tw-mt-2 tw-text-sm">
            {t("yourDropshipping.items.3.content")}
          </div>
        </div>
        <Image
          src={t("yourDropshipping.items.3.img") as string}
          alt={t("yourDropshipping.items.3.title")}
          width={400}
          height={330}
          className="tw-max-w-[460px] tw-w-full tw-mt-4"
        />
      </div>
    </div>
  );
};
export default CreateAnOnline;
