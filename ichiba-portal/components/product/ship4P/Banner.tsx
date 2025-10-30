import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function BannerOverview() {
  const { t: ship4p } = useTranslation("ship4p");
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
    <div
      ref={elementRef}
      className="tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Block_1_a2488d8f2e.svg')] tw-pt-6 lg:tw-pt-[70px] tw-overflow-hidden"
    >
      <div
        className={clsx(
          "tw-relative tw-container lg:tw-pb-[342px]",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <div className="tw-relative tw-z-10">
          <h1 className="tw-mb-2 lg:tw-mb-4 tw-text-2xl lg:tw-text-5xl tw-font-bold">
            <span className="tw-text-brand-primary">
              {ship4p("banner.heading.0")}
            </span>
            <br />
            {ship4p("banner.heading.1")}
          </h1>

          <p className="tw-text-base lg:tw-text-lg tw-mb-2 lg:tw-mb-4 lg:tw-w-[50%]">
            {ship4p("banner.subHeading")}
          </p>

          <div
            className={clsx(
              "tw-bg-[rgba(255,_255,_255,_0.20)] tw-border tw-border-[rgba(255,_255,_255,_0.60)]",
              "tw-p-3 tw-rounded-xl lg:tw-rounded-lg sm:tw-w-max tw-mb-4 lg:tw-mb-6 tw-grid tw-gap-2",
            )}
          >
            {(
              ship4p(`banner.listContents`, {
                returnObjects: true,
              }) as string[]
            ).map((item, idx) => (
              <div key={idx} className="tw-flex tw-gap-1">
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/ph_map_pin_fill_ad00214c2f.svg"
                  }
                  width={24}
                  height={26}
                  alt="Icon"
                />
                <p className="tw-text-sm lg:tw-text-base tw-font-medium tw-mb-0">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div className="tw-flex">
            <Link
              href={"/contact-sales"}
              target="_blank"
              className="text-decoration-none tw-text-white tw-text-sm lg:tw-text-base tw-bg-brand-primary tw-p-3 tw-rounded-lg"
              rel="nofollow"
            >
              {ship4p("banner.textBtn")}
            </Link>
          </div>
        </div>
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Group_1171276389_68f70cd057.svg"
          }
          width={1333}
          height={626}
          alt="IChiba"
          className={clsx(
            "lg:tw-absolute tw-bottom-[0] lg:tw-left-[50%] lg:tw-translate-x-[-50%]",
            "tw-w-full tw-h-full lg:tw-max-w-[1333px] lg:tw-max-h-[626px] tw-z-0",
          )}
        />
      </div>
    </div>
  );
}
