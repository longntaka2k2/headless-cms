import { LocaleNamespace } from "@/const/locale";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { kebabCase, groupBy, sortBy } from "lodash";
import Button from "@/components/core/button";

interface DesktopTabsProps {
  activeIndex: number;
  onClickTab: (index: number) => void;
}
const MobileTabs = ({ activeIndex, onClickTab }: DesktopTabsProps) => {
  const { t } = useTranslation(LocaleNamespace.EcommerceFulfillment);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const activeItemRef = useRef<HTMLButtonElement | null>(null);

  const [items, setItems] = useState(
    (
      t(`fulfillmentProcess.items`, {
        returnObjects: true,
      }) as string[]
    ).map((item: any, index: number) => ({
      ...item,
      key: kebabCase(item.title),
      index,
    })),
  );

  useEffect(() => {
    setItems((prevState) => {
      const group = groupBy(prevState, (item) => item.index < activeIndex);

      return [
        ...sortBy(group.false || [], (item) => item.index),
        ...sortBy(group.true || [], (item) => item.index),
      ];
    });
  }, [activeIndex]);

  return (
    <div
      className="tw-block xl:tw-hidden tw-mt-6 tw-overflow-x-scroll"
      ref={menuRef}
    >
      <div className="tw-w-max tw-gap-3 tw-flex">
        {items.map((item, index) => (
          <Button
            ref={(ref) => {
              if (item.index === activeIndex) {
                activeItemRef.current = ref;
              }
            }}
            size="medium"
            className={clsx("tw-whitespace-nowrap !tw-rounded-[30px]", {
              "tw-bg-ic-ink-2": activeIndex !== item.index,
            })}
            key={item.key}
            onClick={() => onClickTab(item?.index)}
          >
            {item.index + 1}. {item.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MobileTabs;
