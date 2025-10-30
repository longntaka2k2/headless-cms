import clsx from "clsx";
import BestEnd from "./BestEndToEnd";
import { FulfillNetwork } from "./FulfillNetwork";
import FulfillmentDifference from "./FulfillmentDifferrence";
import { Multichannel } from "./Multichannel";
import { OptimizeOrder } from "./OptimizeOrder";
import FrequentlyQuestions from "./OptimizeOrder/FrequentlyQuestions";
import { OurPartners } from "./OurPartner";
import Process from "./Process";
import { Unlocking } from "./Unlocking";
import bgContactSales from "@/public/solutions/bg-contactsale.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CustomerSuccess from "./CustomerSuccess";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const OrderFulfillmentViewV2 = () => {
  const { t } = useTranslation("order-fulfillment-by-efex");

  return (
    <>
      <BestEnd />
      <Process />
      <FulfillmentDifference />
      <OptimizeOrder />
      <Unlocking />
      <FulfillNetwork />
      <OurPartners />
      <CustomerSuccess />
      <Multichannel />
      <div className="tw-container">
        <div
          className={clsx(
            " tw-px-4 tw-py-6 lg:tw-py-16 tw-text-center tw-text-white tw-rounded-xl",
            "tw-bg-cover tw-bg-center tw-bg-no-repeat",
          )}
          style={{ backgroundImage: `url(${bgContactSales.src})` }}
        >
          <p className=" lg:tw-text-[30px] tw-text-center tw-text-lg tw-font-bold tw-mx-auto tw-mb-5 lg:tw-mb-6">
            {t("contact.title")}
          </p>
          <Link
            target="_blank"
            href={`/contact-sales`}
            className={clsx(
              "tw-inline-block tw-text-white tw-text-center tw-font-medium tw-text-sm tw-lg:text-base tw-no-underline",
              "tw-mx-auto tw-w-fit lg:tw-py-[14px] tw-rounded-lg tw-bg-[#AF0000] tw-px-5 tw-py-2 hover:tw-bg-[#A30505]",
            )}
          >
            {t("contactSale")}
            <FontAwesomeIcon icon={faArrowRight} className="tw-pl-1" />
          </Link>
        </div>
      </div>
      <FrequentlyQuestions />
    </>
  );
};

export default OrderFulfillmentViewV2;
