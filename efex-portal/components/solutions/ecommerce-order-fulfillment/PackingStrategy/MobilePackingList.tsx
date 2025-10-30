"use client";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { StrategyType } from "./DesktopPackingList";
import { useState } from "react";

export const MobilePackingList = ({
  strategies,
  className,
}: {
  strategies: StrategyType[];
  className?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Accordion preExpanded={[strategies[0].title]} className={className}>
      {strategies.map((strategy, index) => (
        <AccordionItem key={index}>
          <AccordionItemState>
            {({ expanded }) => {
              const isShowBorderTop = index === 0 || index - 1 !== activeIndex;
              return (
                <div
                  className={clsx(
                    "relative overflow-hidden group/item",
                    expanded
                      ? "rounded-xl bg-white shadow-[0px_17px_30px_0px_rgba(0,0,0,0.07)]"
                      : isShowBorderTop && "border-t border-t-ic-ink-2"
                  )}
                >
                  <div
                    className={clsx(
                      "absolute h-1 top-0 w-full bg-ic-ink-1",
                      expanded ? "visible" : "invisible"
                    )}
                  />
                  <AccordionItemHeading onClick={() => handleClick(index)}>
                    <AccordionItemButton className="px-3 pt-4 pb-3 w-full flex items-center gap-3 focus:outline-none">
                      {strategy.icon({
                        className: expanded
                          ? "text-brand-primary"
                          : "text-ic-ink-6",
                      })}
                      <h3
                        className={clsx(
                          "flex-1 text-left font-bold",
                          expanded && "text-brand-primary "
                        )}
                      >
                        {strategy.title}
                      </h3>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        width={16}
                        height={16}
                        className={clsx(
                          "transition duration-500",
                          expanded && "rotate-180"
                        )}
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-3 pb-4 ">
                    <ul className="flex flex-col gap-3 ml-2">
                      {strategy.list.map((text, index) => (
                        <li key={index} className="flex items-center gap-4">
                          <div className="">
                            <div className="rounded-full bg-brand-branda w-3 h-3" />
                          </div>
                          <p className="text-sm">{text}</p>
                        </li>
                      ))}
                    </ul>
                  </AccordionItemPanel>
                </div>
              );
            }}
          </AccordionItemState>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
