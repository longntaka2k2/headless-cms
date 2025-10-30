"use client";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { IconProps } from ".";

export interface StrategyType {
  title: string;
  icon: (props: IconProps) => React.ReactNode;
  list: string[];
}

export const DesktopPackingList = ({
  strategies,
  className,
}: {
  strategies: StrategyType[];
  className?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSetActiveIndex = (idx: number) => {
    let newActiveIndex = idx;
    if (idx > strategies.length - 1) {
      newActiveIndex = 0;
    }
    setActiveIndex(newActiveIndex);
  };

  return (
    <Accordion preExpanded={[strategies[0].title]} className={className}>
      {strategies.map((strategy, index) => (
        <React.Fragment key={index}>
          <StrategyItem
            strategy={strategy}
            index={index}
            activeIndex={activeIndex}
            onSetActiveIndex={handleSetActiveIndex}
          />
        </React.Fragment>
      ))}
    </Accordion>
  );
};

export const StrategyItem = ({
  strategy,
  index,
  activeIndex,
  onSetActiveIndex,
}: {
  strategy: StrategyType;
  index: number;
  activeIndex: number;
  onSetActiveIndex: (inx: number) => void;
}) => {
  const handleClick = () => {
    onSetActiveIndex(index);
  };

  const handleAnimationEnd = () => {
    onSetActiveIndex(index + 1);
  };

  const isShowBorderTop = index === 0 || index - 1 !== activeIndex;

  return (
    <AccordionItem dangerouslySetExpanded={index === activeIndex}>
      <AccordionItemState>
        {({ expanded }) => (
          <div
            className={clsx(
              "relative overflow-hidden group/item",
              expanded
                ? "rounded-xl bg-white shadow-[0px_17px_30px_0px_rgba(0,0,0,0.07)]"
                : isShowBorderTop && "border-t border-t-ic-ink-2"
            )}
          >
            {expanded && (
              <div className={clsx("absolute h-1 top-0 w-full bg-ic-ink-1")}>
                <div
                  className={clsx(
                    "absolute w-full h-full top-0 group-hover/item:pause duration-500",
                    "bg-gradient-to-r from-brand-secondary from-0% to-brand-primary to-[84.37%]",
                    "animate-[left-to-right_5s_linear]"
                  )}
                  onAnimationEnd={handleAnimationEnd}
                />
              </div>
            )}
            <AccordionItemHeading onClick={handleClick}>
              <AccordionItemButton className="px-7 pb-7 pt-6 w-full flex items-center gap-4 focus:outline-none">
                {strategy.icon({
                  className: expanded ? "text-brand-primary" : "text-ic-ink-6",
                })}
                <h3
                  className={clsx(
                    "flex-1 text-left text-xl font-bold",
                    expanded && "text-brand-primary "
                  )}
                >
                  {strategy.title}
                </h3>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  width={32}
                  height={32}
                  className={clsx(
                    "transition duration-500",
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
              <AccordionItemPanel className="px-3 pb-4">
                <ul className="flex flex-col gap-6 ml-4">
                  {strategy.list.map((text, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div>
                        <div className="rounded-full bg-brand-branda w-4 h-4" />
                      </div>
                      <p>{text}</p>
                    </li>
                  ))}
                </ul>
              </AccordionItemPanel>
            </Transition>
          </div>
        )}
      </AccordionItemState>
    </AccordionItem>
  );
};
