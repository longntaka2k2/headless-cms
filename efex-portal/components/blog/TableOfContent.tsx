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
import { getDictionary } from "@/app/getDictionary";
import Image from "next/image";

const TableOfContent = ({
  className,
  lang,
}: {
  className?: string;
  lang: any;
}) => {
  const [language, setLanguage] = useState([] as any);
  const [show, setShow] = useState(true);
  const [headings, setHeadings] = useState<any[]>([]);
  const [isActive, setIsActive] = useState<any[]>([]);
  const [isActiveChild, setIsActiveChild] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const getClassName = (level: number) => {
    switch (level) {
      case 2:
        return "head2 ml-[5px] ";
      case 3:
        return "head3 ml-[10px] ";
      default:
        
        return "";
    }
  };

  useEffect(() => {
    const getLang = async () => {
      setLanguage(await getDictionary(lang ? lang : "en"));
    };
    const queryEle = Array.from(
      document.querySelectorAll<HTMLHeadElement>("h2, h3")
    );
    queryEle.forEach((x, idx) =>
      x.setAttribute("id", `${x.nodeName.toLowerCase()}-${idx}`)
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
                (x) => elem.nodeName.charAt(1) == x.nodeName.charAt(1)
              ) +
              indx +
              1
          )
          .map((x, idx) => ({
            id: x.id,
            text: x.innerText,
            level: Number(x.nodeName.charAt(1)),
          })),
      }))
      .filter((x) => x.level == 2);
    getLang();
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
          "bg-[linear-gradient(90deg,_#00194F_0%,_#AF0000_100%)] p-5 text-white",
          "flex items-center justify-between hover:opacity-90 cursor-pointer",
          show ? "rounded-t-3xl" : "rounded-3xl"
        )}
      >
        <p className="text-base font-bold" onClick={handleIsOpen}>
          {language?.blogs?.inThisArticle}
        </p>
        <FontAwesomeIcon
          icon={show ? faChevronUp : faChevronDown}
          width={24}
          height={24}
          className={clsx("transition duration-200 ")}
        />
      </div>
      <div
        className={clsx(
          show ? "block" : "hidden",
          "border pl-2 rounded-b-3xl overflow-hidden"
        )}
      >
        <div
          className={clsx(
            show ? "block" : "hidden",
            "max-h-[200px] overflow-y-scroll overflow-hidden"
          )}
        >
          <Disclosure defaultOpen>
            <Transition
              enter="transition duration-700 ease-out"
              enterFrom="transform scale-95 opacity-0 h-0"
              enterTo="transform scale-100 opacity-100 h-max"
              leave="transition duration-700 ease-out"
              leaveFrom="transform scale-100 opacity-100 h-max"
              leaveTo="transform scale-95 opacity-0 h-0"
            >
              <Disclosure.Panel className="text-gray-500" static>
                <nav>
                  <ul className="list-disc">
                    {headings.map((heading, index) => (
                      <li
                        key={heading.id}
                        className={clsx(
                          getClassName(heading.level),
                          "text-[#666666] text-sm"
                        )}
                      >
                        <a
                          href={`#${heading.id}`}
                          className={clsx(
                            "flex gap-3 items-center py-2",
                            isActive === heading.text
                              ? "font-bold text-[#AF0000]"
                              : ""
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
                          <Image
                            src={
                              "https://strapi-efex.ichiba.net/uploads/Component_3_0bd6c39c12.svg"
                            }
                            width={8}
                            height={8}
                            alt="dot"
                            className=""
                          />
                          <span>{heading.text}</span>
                        </a>
                        {heading?.children?.length > 0 && (
                          <>
                            <ul>
                              {(heading.children as any[]).map((child) => (
                                <li
                                  key={child.id}
                                  className={clsx(
                                    getClassName(child.level),
                                    "flex items-center gap-3 text-[#666666] text-sm pb-2 pl-1"
                                  )}
                                >
                                  <Image
                                    src={
                                      "https://strapi-efex.ichiba.net/uploads/Component_3_0bd6c39c12.svg"
                                    }
                                    width={8}
                                    height={8}
                                    alt="dot"
                                    className=""
                                  />
                                  <a
                                    href={`#${child.id}`}
                                    className={clsx(
                                      isActiveChild === child.text
                                        ? "font-bold text-[#AF0000]"
                                        : ""
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
                            </ul>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default TableOfContent;
