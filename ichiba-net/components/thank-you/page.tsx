"use client";
import Link from "next/link";
import clsx from "clsx";
import BackgroundMB from "./assets/background-mb.svg";
import BackgroundPC from "./assets/background-pc.svg";

export default function ThankYouComponent({ lang, locale }: { lang: any; locale: string }) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${BackgroundMB.src})`,
        }}
        className={clsx(
          "bg-no-repeat bg-cover",
          "w-full h-screen flex items-center text-center lg:hidden",
        )}
      >
        <div className="container px-10">
          <h2 className="text-2xl lg:text-5xl lg:leading-[58px] font-bold text-brand-primary">
            Thank you for requesting a quotation from IChiba!
          </h2>
          <p className="mb-6">
            Our experts have received your request for a quotation and will be in touch shortly.
          </p>

          <div className="flex justify-center text-sm font-medium">
            <Link
              className={clsx(
                "bg-brand-primary px-4 py-2 text-white text-sm lg:text-base",
                "font-medium lg:py-[14px] lg:px-8 rounded-lg no-underline",
              )}
              href={`/${locale}`}
            >
              Go to homepage
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${BackgroundPC.src})`,
        }}
        className={clsx(
          "bg-no-repeat bg-cover",
          "w-full h-screen hidden lg:flex items-center text-center",
        )}
      >
        <div className="container px-10">
          <h2 className="text-2xl lg:text-5xl lg:leading-[58px] font-bold text-brand-primary">
            Thank you for requesting a quotation from IChiba!
          </h2>
          <p className="mb-6">
            Our experts have received your request for a quotation and will be in touch shortly.
          </p>

          <div className="flex justify-center text-sm font-medium">
            <Link
              className={clsx(
                "bg-brand-primary px-4 py-2 text-white text-sm lg:text-base",
                "font-medium lg:py-[14px] lg:px-8 rounded-lg no-underline",
              )}
              href={`/${locale}`}
            >
              Go to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
