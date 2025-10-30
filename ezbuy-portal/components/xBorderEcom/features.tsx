"use client";
import clsx from "clsx";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import customerSupportIcon from "@/public/images/icons/services/xBorderEcom/CustomerSupport.svg";
import DutiesAndTaxes from "@/public/images/icons/services/xBorderEcom/DutiesAndTaxes.svg";
import onlineBiddingIcon from "@/public/images/icons/services/xBorderEcom/OnlineBidding.svg";
import PaymentMethodsIcon from "@/public/images/icons/services/xBorderEcom/PaymentMethods.svg";
import QuickOrderIcon from "@/public/images/icons/services/xBorderEcom/QuickOrder.svg";
import ReturnAndRefundIcon from "@/public/images/icons/services/xBorderEcom/ReturnAndRefund.svg";
import SniperBidIcon from "@/public/images/icons/services/xBorderEcom/SniperBid.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import EzImage from "../commons/EzImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Transition } from "@headlessui/react";

const ContentRenderer = (
  contents: { title: string; items: string[]; icon: StaticImport }[]
) => (
  <Accordion preExpanded={[contents[0].title]} allowZeroExpanded>
    {contents.map((x, idx) => (
      <AccordionItem
        key={idx}
        className={clsx(
          "[&:not(:last-child)]:border-b",
          "hover:scale-[1.025] transition-all"
        )}
      >
        <AccordionItemState>
          {({ expanded }) => (
            <>
              <AccordionItemHeading>
                <AccordionItemButton
                  className={clsx(
                    "flex gap-4 justify-between items-center py-5"
                  )}
                >
                  <div className="flex gap-2">
                    <EzImage src={x.icon} alt={x.title} />
                    <p
                      className={clsx(expanded ? "font-bold" : " font-medium")}
                    >
                      {x.title}
                    </p>
                  </div>
                  <FontAwesomeIcon icon={faArrowRight} color="#00194F" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <Transition
                show={expanded}
                enter="transition duration-[300] ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <AccordionItemPanel className="pl-9 pb-2 text-sm lg:text-base">
                  <>
                    {x.items.map((item, iidx) => (
                      <p key={iidx}>{item}</p>
                    ))}
                  </>
                </AccordionItemPanel>
              </Transition>
            </>
          )}
        </AccordionItemState>
      </AccordionItem>
    ))}
  </Accordion>
);

function Features({ lang }: any) {
  const { features } = lang.services.xBorderEcom;
  const contents = [
    {
      ...lang.services.xBorderEcom.features.contents[0],
      icon: onlineBiddingIcon,
    },
    {
      ...lang.services.xBorderEcom.features.contents[1],
      icon: SniperBidIcon,
    },
    {
      ...lang.services.xBorderEcom.features.contents[2],
      icon: QuickOrderIcon,
    },
    {
      ...lang.services.xBorderEcom.features.contents[3],
      icon: PaymentMethodsIcon,
    },
    {
      ...lang.services.xBorderEcom.features.contents[4],
      icon: ReturnAndRefundIcon,
    },
    {
      ...lang.services.xBorderEcom.features.contents[5],
      icon: customerSupportIcon,
    },
    {
      ...lang.services.xBorderEcom.features.contents[6],
      icon: DutiesAndTaxes,
    },
  ];
  return (
    <section className="relative pt-14 overflow-hidden ">
      <div className="mb-6 lg:mb-20 px-4">
        <h2 className="uppercase font-black text-2xl lg:text-4xl text-brand-primary text-center mb-2 lg:mb-4">
          <span className="block">{features?.heading}</span>
        </h2>
        <div
          className={clsx("transition-all duration-200", "flex justify-center")}
        >
          <div className="text-sm lg:text-base lg:w-[50%] text-center leading-21 lg:leading-27">
            <p>{features?.subHeading}</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="lg:absolute-center -z-10 w-full lg:h-[480px]">
          <div className="flex justify-between w-full">
            <EzImage
              src={"/uploads/bg_Feature_Of_Service_b347b2737f.png"}
              alt="Ezbuy"
              width={1304}
              height={480}
              className="hidden lg:block lg:relative w-[372px] object-cover object-left"
            />
            <EzImage
              src={"/uploads/bg_Feature_Of_Service_b347b2737f.png"}
              alt="Ezbuy"
              width={1304}
              height={480}
              quality={100}
              className="h-[50vw] lg:h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="container lg:h-[690px]">
          <div className="px-4 py-8 lg:p-8 lg:w-[576px] shadow-6 bg-white">
            {ContentRenderer(contents)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
