import Image from "next/image";
import imgTransformDES from "@/public/images/mother-baby/imgTransformDES.svg";
import imgTransformMB from "@/public/images/mother-baby/imgTransformMB.png";
import Link from "next/link";
import clsx from "clsx";
import { useTranslation } from "next-i18next";

export default function Transform() {
  const { t } = useTranslation("mother-baby");

  return (
    <div className="tw-relative">
      <div className="tw-container tw-flex tw-items-center lg:tw-gap-[50px]">
        <div className="lg:tw-w-[45%] tw-py-4 lg:tw-py-0">
          <h1 className="tw-mb-4 lg:tw-mb-6 tw-text-2xl tw-leading-8 lg:tw-text-5xl lg:tw-leading-[56px] tw-font-bold">
            {t("transform.heading")}
          </h1>
          <p className="tw-mb-4 lg:tw-mb-10 tw-text-sm lg:tw-text-base">
          {t("transform.subHeading")}
          </p>
          <div className="tw-flex tw-gap-4 lg:tw-gap-6">
            <Link href={"https://org.ichiba.net"}>
              <button
                className={clsx(
                  "tw-w-[171px] tw-h-[48px] tw-text-sm tw-font-medium tw-rounded-lg",
                  "lg:tw-w-[200px] lg:tw-h-[52px] lg:tw-text-base tw-bg-[#F57C00] tw-text-white",
                )}
              >
                {t("transform.textBtn.0")}
              </button>
            </Link>

            <Link href={"/contact-sales"} target="_blannk">
              <button
                className={clsx(
                  "tw-border tw-border-[#F57C00] tw-rounded-lg",
                  "tw-w-[171px] tw-h-[48px] tw-text-sm tw-font-medium",
                  "lg:tw-w-[200px] lg:tw-h-[52px] lg:tw-text-base tw-text-[#F57C00]",
                )}
              >
                {t("transform.textBtn.1")}
              </button>
            </Link>
          </div>
        </div>

        <div className="tw-relative lg:tw-w-[55%] lg:tw-h-[589px] tw-hidden lg:tw-block">
          <Image
            src={imgTransformDES}
            alt="imgTransformDES"
            className="tw-w-full tw-h-full"
          />

          <div
            style={{
              background:
                "radial-gradient(92.96% 61.61% at 50% 50%, #FEEDDC 42.5%, #FFF 100%)",
            }}
            className="tw-absolute tw-top-0 tw-left-[5px] tw-w-[1018px] tw-h-[601px] -tw-z-1"
          ></div>
        </div>
      </div>

      <div className="tw-w-[390px] tw-h-[280px] tw-mx-auto lg:tw-hidden">
        <Image
          src={imgTransformMB}
          alt="imgTransformMB"
          className="tw-w-full tw-h-full"
        />
      </div>
    </div>
  );
}
