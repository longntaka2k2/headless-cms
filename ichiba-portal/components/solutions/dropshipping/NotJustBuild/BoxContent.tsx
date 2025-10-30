import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function BoxContent() {
  const [active, setActive] = useState(0);
  const { t } = useTranslation("dropshipping");
  const items = (
    t(`notJustBuild.items`, {
      returnObjects: true,
    }) as string[]
  ).map((x: any) => ({
    label: x.label as string,
    title: x.title as string,
    content: x.content as string,
    img: x.img as string,
  }));
  const [isVisible, setVisible] = useState(false);
  const [showOn, setShowOn] = useState("");

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
  useEffect(() => {
    setShowOn("tw-opacity-0");
    const timeout = setTimeout(() => {
      setShowOn("tw-animate-showOn");
    }, 50);

    return () => clearTimeout(timeout); // Clear timeout nếu active thay đổi trước khi timeout được kích hoạt
  }, [active]);
  const renderContent = () => {
    return (
      <div
        className={clsx(
          "tw-bg-white tw-rounded-xl tw-mt-6 tw-p-6 lg:tw-px-10",
          "tw-flex tw-flex-col lg:tw-flex-row tw-gap-6 lg:tw-gap-[46px] tw-items-center",
          showOn,
        )}
      >
        <div className="tw-mb-4">
          <h3 className="tw-mb-4 tw-text-2xl tw-font-bold">
            {items[active].title}
          </h3>
          <p className="tw-mb-0 tw-text-base">{items[active].content}</p>
        </div>
        <div className="tw-w-[310px] tw-h-[212px] lg:tw-min-w-[586px] lg:tw-h-[400px] tw-overflow-hidden">
          <Image
            src={items[active].img}
            alt={items[active].title}
            width={612}
            height={428}
            className="tw-w-full tw-h-full"
          />
        </div>
      </div>
    );
  };
  useEffect(() => {
    renderContent();
  }, [active]);
  return (
    <div ref={elementRef}>
      <div
        className={clsx(
          "tw-flex tw-gap-2 lg:tw-gap-6 lg:tw-rounded-[50px]",
          "md:tw-w-max tw-overflow-x-scroll xl:tw-overflow-visible tw-mx-auto tw-pb-3",
        )}
      >
        {items.map((value: any, index: number) => (
          <div
            className={clsx(
              active === index
                ? "tw-bg-gradient-to-b tw-from-[#FAC286] tw-to-[#F57C00] tw-text-white tw-font-bold"
                : "",
                "tw-w-[234px] tw-flex tw-items-center tw-justify-center",
              "tw-rounded-[50px] lg:tw-rounded-lg tw-py-[10px] lg:tw-py-3 lg:tw-px-6 tw-px-4 tw-cursor-pointer tw-transition-colors tw-duration-500 tw-ease",
              "tw-border tw-border-primary-2 tw-text-sm lg:tw-text-base tw-text-ic-black-5",
              isVisible ? "tw-animate-showOn" : "tw-opacity-0 ",
            )}
            key={index}
            onClick={() => setActive(index)}
          >
            <h3
              className={clsx(
                "tw-mb-0 tw-text-sm tw-leading-5 lg:tw-text-lg lg:tw-leading-6 tw-w-max",
              )}
            >
              {value.label}
            </h3>
          </div>
        ))}
      </div>
      {isVisible && renderContent()}
    </div>
  );
}
