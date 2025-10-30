"use client";
import EzImage from "@/components/commons/EzImage";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

const ValueAdded = ({ data }: any) => {
  const [active, setActive] = useState(data.contents[0].title);
  return (
    <div className="lg:rounded-2xl bg-[#F2F4F8] container ">
      <div className="px-4 py-6 lg:px-20 lg:pt-10 lg:pb-[60px]">
        <h3 className="font-bold text-lg lg:text-2xl leading-6 lg:leading-8 mb-5 lg:mb-6">
          {data.label}
        </h3>
        <div className="flex flex-col lg:flex-row">
          <EzImage
            src={"/uploads/Rectangle_6380_1c4746f371.png"}
            alt=""
            className="flex-1 rounded-xl"
            width={581}
            height={312}
          />
          <Accordion
            preExpanded={["0"]}
            className="flex-1 flex flex-col justify-stretch"
          >
            {data.contents.map((x: any, index: number) => (
              <AccordionItem
                uuid={index.toString()}
                key={index}
                className={clsx(
                  "flex-grow",
                  !(active == x.title) && "border-b border-ic-ink-2"
                )}
              >
                <AccordionItemState>
                  {({ expanded }) => (
                    <div
                      className={clsx(
                        "px-3 py-4 lg:px-10 lg:py-6 h-full",
                        expanded ? "bg-white shadow-3" : "bg-transparent"
                      )}
                    >
                      <AccordionItemHeading>
                        <AccordionItemButton
                          onClick={() => setActive(x.title)}
                          className={clsx(
                            "flex justify-between gap-2",
                            expanded && "mb-4"
                          )}
                        >
                          <p className="font-bold lg:text-xl ">{x.title}</p>
                          <FontAwesomeIcon
                            icon={faChevronUp}
                            className={clsx(
                              "transition-all",
                              expanded && "rotate-180"
                            )}
                          />
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <Transition
                        show={expanded}
                        enter="transition linear duration-500"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition linear duration-500"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <AccordionItemPanel className="text-sm lg:text-base leading-5 lg:leading-6">
                          {x.des}
                        </AccordionItemPanel>
                      </Transition>
                    </div>
                  )}
                </AccordionItemState>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default ValueAdded;
