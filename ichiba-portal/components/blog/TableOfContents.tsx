"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Disclosure, Transition } from "@headlessui/react";
import {
  faChevronDown,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const TableOfContent = ({
  className,
  lang,
}: {
  className?: string;
  lang: any;
}) => {
  const { t } = useTranslation("common");
  const [show, setShow] = useState(true);
  const [headings, setHeadings] = useState<any[]>([]);
  const [isActive, setIsActive] = useState<any[]>([]);
  const [isActiveChild, setIsActiveChild] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const getClassName = (level: number) => {
    switch (level) {
      case 2:
        return "head2 tw-ml-[5px]";
      case 3:
        return "head3 tw-ml-[10px]";
      default:
        return "";
    }
  };

  useEffect(() => {
    const queryEle = Array.from(
      document.querySelectorAll<HTMLHeadElement>("h2, h3"),
    );
    queryEle.forEach((x, idx) =>
      x.setAttribute("id", `${x.nodeName.toLowerCase()}-${idx}`),
    );

    const elements = queryEle
      .map((elem, indx, arr) => ({
        id: elem.id,
        text: elem.innerText,
        level: Number(elem.nodeName.charAt(1)),
        children: arr
          .slice(
            indx + 1,
            arr
              .slice(indx + 1)
              .findIndex(
                (x) => elem.nodeName.charAt(1) == x.nodeName.charAt(1),
              ) +
              indx +
              1,
          )
          .map((x, idx) => ({
            id: x.id,
            text: x.innerText,
            level: Number(x.nodeName.charAt(1)),
          })),
      }))
      .filter((x) => x.level == 2);
    setHeadings(elements);
  }, []);

  const handleIsOpen = () => {
    if (isActive === headings) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={className}>
      <div
        onClick={() => setShow(!show)}
        className={clsx(
          "tw-bg-[linear-gradient(90deg,_#f57c00,_#ececec_180%)] tw-p-5 tw-text-white",
          "tw-flex tw-items-center tw-justify-between hover:tw-opacity-90 tw-cursor-pointer",
          show ? "tw-rounded-t-3xl" : "tw-rounded-3xl",
        )}
      >
        <p
          className="tw-text-base tw-font-bold !tw-mb-0"
          onClick={handleIsOpen}
        >
          {t("blog.detail.article")}
        </p>
        <FontAwesomeIcon
          icon={show ? faChevronUp : faChevronDown}
          width={24}
          height={24}
          className={clsx("tw-transition tw-duration-200 ")}
        />
      </div>
      <div
        className={clsx(
          show ? "tw-block" : "tw-hidden",
          "tw-border tw-pl-2 tw-rounded-b-3xl tw-overflow-hidden",
        )}
      >
        <div
          className={clsx(
            show ? "tw-block" : "tw-hidden",
            "tw-max-h-[250px] tw-overflow-y-scroll tw-overflow-hidden",
          )}
        >
          <Disclosure defaultOpen>
            <Transition
              enter="tw-transition tw-duration-700 tw-ease-out"
              enterFrom="tw-transform tw-scale-95 tw-opacity-0 tw-h-0"
              enterTo="tw-transform tw-scale-100 tw-opacity-100 tw-h-max"
              leave="tw-transition tw-duration-700 tw-ease-out"
              leaveFrom="tw-transform tw-scale-100 tw-opacity-100 tw-h-max"
              leaveTo="tw-transform tw-scale-95 tw-opacity-0 tw-h-0"
            >
              <Disclosure.Panel className="tw-text-gray-500" static>
                <div className="tw-list-none">
                  {headings.map((heading, index) => (
                    <li
                      key={heading.id}
                      className={clsx(
                        getClassName(heading.level),
                        "tw-text-sm tw-pt-2",
                      )}
                    >
                      <a
                        href={`#${heading.id}`}
                        className={clsx(
                          "tw-font-bold tw-no-underline hover:tw-underline tw-pb-2",
                          isActive === heading.text
                            ? "tw-text-brand-primary"
                            : "tw-text-[#666666]",
                        )}
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .querySelector(`#${heading.id}`)
                            ?.scrollIntoView({
                              behavior: "smooth",
                            });
                          setIsActive(heading.text);
                          setIsActiveChild("");
                          handleIsOpen();
                        }}
                      >
                        <span>{heading.text}</span>
                      </a>
                      {heading?.children?.length > 0 && (
                        <div>
                          {(heading.children as any[]).map((child) => (
                            <li
                              key={child.id}
                              className={clsx(
                                getClassName(child.level),
                                "tw-text-sm tw-py-1 tw-pl-1",
                              )}
                            >
                              <a
                                href={`#${child.id}`}
                                className={clsx(
                                  "tw-no-underline hover:tw-underline",
                                  isActiveChild === child.text
                                    ? "tw-font-bold tw-text-brand-primary"
                                    : "tw-text-[#666666]",
                                )}
                                onClick={(e) => {
                                  e.preventDefault();
                                  document
                                    .querySelector(`#${child.id}`)
                                    ?.scrollIntoView({
                                      behavior: "smooth",
                                    });
                                  setIsActiveChild(child.text);
                                  setIsActive(heading.text);
                                }}
                              >
                                {child.text}
                              </a>
                            </li>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default TableOfContent;
