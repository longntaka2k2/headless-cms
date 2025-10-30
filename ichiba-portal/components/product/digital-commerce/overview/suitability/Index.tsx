import { useTranslation } from "next-i18next";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ContentRenderer = ({
  contents,
}: {
  contents: { title: string; des: string }[];
}) => {
  const [active, setActive] = useState<string[]>(["0"]);
  return (
    <Accordion
      preExpanded={["0"]}
      className="tw-gap-4 tw-flex tw-flex-col "
      onChange={(x: string[]) => setActive(x)}
      allowZeroExpanded
    >
      {contents.map((x, idx) => (
        <AccordionItem
          uuid={idx.toString()}
          key={idx}
          className={clsx(
            "tw-rounded-xl",
            "tw-px-10 tw-py-6",
            active[0] == idx.toString()
              ? "tw-border-brand-primary tw-bg-orange-1 tw-border-[1.5px] "
              : "tw-bg-[rgba(255,_255,_255,_0.60)] hover:tw-bg-white",
          )}
        >
          <AccordionItemState>
            {({ expanded }) => (
              <>
                <AccordionItemHeading>
                  <AccordionItemButton
                    className={clsx(
                      "tw-flex gap-4 tw-justify-between tw-items-center tw-py-5",
                    )}
                  >
                    <div className="tw-flex tw-gap-2">
                      <p className={clsx("tw-m-0 tw-font-bold lg:text-xl")}>
                        {x.title}
                      </p>
                    </div>
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      className={clsx(
                        expanded ? "tw-rotate-180" : "",
                        "tw-transition tw-duration-300",
                      )}
                    />
                  </AccordionItemButton>
                </AccordionItemHeading>
                {/* <Transition
                show={expanded}
                enter="transition duration-[300] ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              > */}
                <AccordionItemPanel className="pl-9 pb-2 text-sm lg:text-base">
                  <p>{x.des}</p>
                </AccordionItemPanel>
                {/* </Transition> */}
              </>
            )}
          </AccordionItemState>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
const Suitability = () => {
  const { t } = useTranslation("digital");
  const [isActive, setActive] = useState<number>(0);
  const changeTab = (value: number) => {
    setActive(value);
  };
  const content: any[] = [
    {
      ...t("suitability.contents.0", { returnObjects: true }),
      mediaUrl:
        "https://cms-strapi.ichiba.net/uploads/b2b_2f558dfc73.png",
    },
    {
      ...t("suitability.contents.1", { returnObjects: true }),
      mediaUrl:
        "https://cms-strapi.ichiba.net/uploads/direct_8d5a98ab5f.png",
    },
  ];
  return (
    <section
      className={clsx(
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/BG_Platform_31150fd040.png')]",
        "md:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/bg_desktop_5f766e2b82.png')]",
        "tw-bg-center tw-bg-cover",
        "tw-px-4 tw-py-6 lg:tw-px-0 lg:tw-py-16",
      )}
    >
      <div className="tw-container">
        <div className="tw-text-center">
          <h2 className="lg:tw-text-4xl tw-text-2xl lg:tw-pb-10 tw-pb-4 tw-font-bold">
            {t("suitability.heading")}
          </h2>
        </div>
        <div className="tw-flex lg:tw-mb-20 tw-mb-6">
          {content.map((x, idx) => (
            <div
              key={idx}
              className={clsx(
                isActive === idx
                  ? "col-6 tw-text-black tw-border-b-[5px] tw-border-primary-6"
                  : "tw-text-pending-5 tw-border-b-pending-5 col-6 tw-border-b-[2px]",
                "tw-text-sm lg:tw-text-2xl tw-font-medium",
                "cursor tw-text-center tw-pb-3",
              )}
              onClick={() => changeTab(idx)}
            >
              <div className="">{x.label}</div>
            </div>
          ))}
        </div>
        {content.map((x, idx) => (
          <article
            key={idx}
            className={clsx(
              "tw-flex tw-flex-col lg:tw-flex-row tw-gap-6 lg:tw-gap-9 tw-justify-between tw-items-center",
            )}
            hidden={isActive !== idx}
          >
            <div className="tw-flex tw-flex-col tw-gap-4 tw-flex-1">
              {/* {(x.content as any[]).map((c, cidx) => (
                // <div key={cidx}>
                //   <h3 className="tw-font-bold tw-mb-2 lg:tw-mb-3 tw-text-base lg:tw-text-lg">
                //     {c.title}
                //   </h3>
                //   <p className="tw-text-sm lg:tw-text-base tw-mb-0">{c.des}</p>
                // </div>
              ))} */}
              <ContentRenderer contents={x.content} />
            </div>
            <Image
              src={x.mediaUrl}
              alt={x.label}
              width={450}
              height={400}
              className="tw-h-[400px] tw-flex-1"
              quality={100}
            />
          </article>
        ))}
      </div>
    </section>
  );
};
export default Suitability;
