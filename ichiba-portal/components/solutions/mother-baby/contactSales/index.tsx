import bgContactSales from "@/public/images/mother-baby/bgContactSales.svg";
import topRight from "@/public/images/mother-baby/contactSale/topRight.svg";
import bottomRight from "@/public/images/mother-baby/contactSale/bottomRight.svg";
import topLeft from "@/public/images/mother-baby/contactSale/topLeft.svg";
import bottomLeft from "@/public/images/mother-baby/contactSale/bottomLeft.svg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function ContactSales() {
  const { t } = useTranslation("mother-baby");

  return (
    <div className="tw-container">
      <div
        style={{
          backgroundImage: `url(${bgContactSales.src})`,
        }}
        className={clsx(
          "tw-relative tw-my-6 lg:tw-my-15 tw-py-[76px] lg:tw-py-[42px]",
          "tw-rounded-xl lg:tw-rounded-3xl tw-bg-cover",
        )}
      >
        <h2
          className={clsx(
            "tw-text-xl tw-leading-7 lg:tw-text-4xl lg:tw-leading-[48px] tw-font-bold",
            "tw-mb-6 tw-w-[75%] lg:tw-w-[40%] tw-mx-auto tw-text-center",
          )}
        >
          {t("contactSales.heading")}
        </h2>

        <Link href={"/contact-sales"} target="_blank" className="tw-no-underline">
          <div
            className={clsx(
              "tw-font-medium tw-text-sm tw-text-center tw-text-white",
              "tw-rounded-lg tw-py-2 lg:tw-py-[14px] tw-w-[160px] lg:tw-w-[200px] tw-mx-auto tw-no-underline tw-bg-[#F57C00]",
            )}
          >
            {t("contactSales.textBtn")}
            <FontAwesomeIcon
              icon={faArrowRight}
              size="sm"
              className="tw-ml-3"
            />
          </div>
        </Link>

        <div className={clsx(
            "tw-absolute tw-top-[-10%] tw-right-[15%]",
            "tw-w-[73px] tw-h-[73px] md:tw-w-[96px] md:tw-h-[96px] tw-rounded-full tw-overflow-hidden"
        )}>
          <Image
            src={topRight}
            alt={topRight}
            className="tw-h-full tw-w-full tw-object-center"
          />
        </div>

        <div className={clsx(
            "tw-absolute tw-bottom-[10%] tw-right-[20%]",
            "tw-w-[41px] tw-h-[41px] md:tw-w-[64px] md:tw-h-[64px] tw-rounded-full tw-overflow-hidden"
        )}>
          <Image
            src={bottomRight}
            alt={bottomRight}
            className="tw-h-full tw-w-full tw-object-cover"
          />
        </div>
        <div className={clsx(
            "tw-absolute tw-top-[10%] tw-left-[15%]",
            "tw-w-[40px] tw-h-[40px] md:tw-w-[55px] md:tw-h-[55px] tw-rounded-full tw-overflow-hidden"
        )}>
          <Image
            src={topLeft} 
            alt={topLeft}
            className="tw-h-full tw-w-full tw-object-cover"
          />
        </div>
        <div className={clsx(
            "tw-absolute tw-bottom-[-5%] tw-left-[20%]",
            "tw-w-[62px] tw-h-[62px] md:tw-w-[71px] md:tw-h-[71px] tw-rounded-full tw-overflow-hidden"
        )}>
          <Image
            src={bottomLeft}
            alt={bottomLeft}
            className="tw-h-full tw-w-full tw-object-cover"
          />
        </div>
      </div>
    </div>
  );
}
