"use client";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = ({ lang, locale }: { lang: any; locale: string }) => {
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
      { threshold: 1 / 3 }
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
    <div ref={elementRef} className="pb-6 lg:pt-5 lg:pb-20 px-4">
      <div
        className={clsx(
          "container bg-[url('https://strapi-efex.ichiba.net/uploads/Frame_2608925_fcf07bee46.svg')]",
          "px-4 py-6 lg:p-12 rounded-xl bg-cover bg-no-repeat",
          "grid lg:grid-cols-2 gap-4 lg:gap-10 items-center",
          isVisible ? "opacity-100 " : "opacity-0 "
        )}
      >
        <div>
          <h2 className="text-xl font-bold lg:mb-6 text-center lg:text-left text-white">
            {lang?.heading}
          </h2>
          <Link
            href={`/${locale}/contact-sales`}
            target="_blank"
            className="hidden lg:block border-[#AF0000] bg-[#AF0000] text-[#fff] max-w-[200px] text-center rounded-lg px-6 py-4 hover:bg-[#A30505]"
          >
            {lang?.textBtn}
          </Link>
        </div>
        <div className="bg-[rgba(28,_51,_100,_0.70)] p-3 lg:p-6 rounded-xl grid lg:grid-cols-3 gap-4 text-white">
          {lang.items.map((item: any, index: number) => (
            <div key={index} className="flex lg:flex-col gap-3">
              <Image
                src={item.icon as string}
                alt={item.title}
                width={24}
                height={24}
              />
              <span className="text-base">{item.title}</span>
            </div>
          ))}
        </div>
        <Link
          href={`/${locale}/contact-sales`}
          target="_blank"
          className="lg:hidden border-[#AF0000] bg-[#AF0000] text-[#fff] mx-auto max-w-[200px] text-center rounded-lg px-6 py-4 hover:bg-[#A30505]"
        >
          {lang?.textBtn}
        </Link>
      </div>
    </div>
  );
};

export default Contact;
