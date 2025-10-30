import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const ContactNow = () => {
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
    <div
      ref={elementRef}
      className="tw-pt-6 tw-pb-14 tw-px-4 lg:tw-py-16 lg:tw-px-0"
    >
      <div
        className={clsx(
          "tw-container tw-relative tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Frame_194_ba9622c49c.svg')] tw-overflow-hidden",
          "tw-bg-cover tw-bg-no-repeat tw-rounded-xl tw-p-4 tw-pb-0 lg:tw-p-0 tw-flex tw-flex-col lg:tw-flex-row tw-items-center",
        )}
      >
        <div
          className={clsx(
            "lg:tw-w-[60%] lg:tw-pl-14",
            isVisible ? "tw-animate-leftShow" : "tw-opacity-0",
          )}
        >
          <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-3 lg:tw-mb-2 tw-text-white">
            {i("contactNow.heading")}
          </h2>
          <p className="tw-text-sm lg:tw-text-base tw-mb-6 tw-text-white">
            {i("contactNow.subHeading")}
          </p>
          <Link
            href={`/contact-sales`}
            target="_blank"
            rel="canonical"
            className="tw-font-medium tw-text-sm tw-inline-block tw-rounded-lg tw-py-[14px] tw-px-8 tw-text-white tw-no-underline tw-bg-[#F57C00]"
          >
            {i("contactNow.textBtn")}
          </Link>
        </div>
        <div className="tw-w-full lg:tw-w-[40%] ">
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Group_1171275985_2_e59fcdb73b.svg"
            }
            width={589}
            height={346}
            alt="IChiba"
            className="tw-relative tw-translate-y-6 lg:tw-translate-x-6 tw-mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
export default ContactNow;
