import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Helps = ({ data }: any) => {
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
          className="tw-pt-6 tw-pb-14 tw-px-4 lg:tw-py-16 lg:tw-px-0 tw-bg-slate-50"
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

            <div className="tw-grid tw-gap-6">
              {data.items.map((item: any, index: number) => (
                <div
                  key={item.id}
                  className={clsx(
                    "tw-flex tw-flex-col  tw-gap-4 lg:tw-gap-10 tw-items-center",
                    index % 2 !== 0
                      ? "lg:tw-flex-row-reverse"
                      : "lg:tw-flex-row",
                  )}
                >
                  <div
                    className={clsx(
                      "lg:tw-w-[50%] tw-grid tw-gap-2 lg:tw-mb-4",
                      isVisible
                        ? "tw-animate-showOn lg:tw-animate-leftShow"
                        : "tw-opacity-0",
                    )}
                  >
                    {item?.media?.data?.attributes?.url && (
                      <Image
                        src={
                          item?.icon?.data?.attributes?.url
                            ? `https://cms-strapi.ichiba.net${item?.icon?.data?.attributes?.url}`
                            : ""
                        }
                        width={48}
                        height={48}
                        alt="icon"
                        className="tw-mx-auto"
                      />
                    )}
                    <h3 className=" tw-font-bold tw-text-center tw-text-base">{item.title}</h3>
                    <div
                      className="tw-text-base lg:tw-px-20"
                      dangerouslySetInnerHTML={{ __html: item.subTitle }}
                    />
                  </div>
                  <div
                    className={clsx(
                      "lg:tw-w-[50%]",
                      isVisible
                        ? "tw-animate-showOn lg:tw-animate-rightShow"
                        : "tw-opacity-0",
                    )}
                  >
                    {item?.media?.data?.attributes?.url && (
                      <Image
                        src={
                          item?.media?.data?.attributes?.url
                            ? `https://cms-strapi.ichiba.net${item?.media?.data?.attributes?.url}`
                            : ""
                        }
                        width={935}
                        height={700}
                        alt="image"
                        className="tw-mx-auto"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Helps;
