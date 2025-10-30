import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Benefits = ({ data }: any) => {
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
            "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Frame_21412_21c0a31ccf.svg')] tw-bg-cover tw-bg-no-repeat",
            "tw-pt-6 tw-pb-14 tw-px-4 lg:tw-py-16 lg:tw-px-0",
          )}
        >
          <div className="tw-container">
            <h2
              className={clsx(
                "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-6 lg:tw-mb-10 lg:tw-w-[50%] tw-mx-auto lg:tw-text-center",
                isVisible ? "tw-animate-showOn" : "tw-opacity-0",
              )}
            >
              {data.heading}
            </h2>
            <div
              className={clsx(
                "tw-grid lg:tw-grid-cols-3 tw-gap-4 lg:tw-gap-6",
                isVisible ? "tw-animate-showOn" : "tw-opacity-0",
              )}
            >
              {data.items.map((item: any) => (
                <div
                  key={item.id}
                  className="tw-bg-white tw-rounded-xl tw-p-6 tw-text-center tw-grid tw-gap-2 tw-shadow-10"
                >
                  <Image
                    src={
                      item?.icon?.data?.attributes?.url
                        ? `https://cms-strapi.ichiba.net${item?.icon?.data?.attributes?.url}`
                        : ""
                    }
                    width={48}
                    height={48}
                    className="tw-mx-auto"
                    alt="icon"
                  />
                  <h3 className="tw-text-base tw-font-bold tw-mb-0">
                    {item.title}
                  </h3>
                  <p className="tw-text-xs lg:tw-text-base tw-mb-0">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Benefits;
