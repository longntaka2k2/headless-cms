"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faList } from "@fortawesome/free-solid-svg-icons";

const TableOfContent = ({
  className,
  lang,
}: {
  className?: string;
  lang: any;
}) => {
  const [headings, setHeadings] = useState<any[]>([]);

  const getClassName = (level: number) => {
    switch (level) {
      case 2:
        return "head2 ml-[10px] ";
      case 3:
        return "head3 ml-[20px] ";
      case 4:
        return "head4 ml-[30px] ";
      default:
        return "";
    }
  };

  useEffect(() => {
    const queryEle = Array.from(
      document.querySelectorAll<HTMLHeadElement>("h2, h3, h4")
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
    setHeadings(elements);
  }, []);

  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={clsx(
              "p-2 border-[1px] rounded-lg bg-blue-100  text-blue-400",
              "w-full flex justify-between items-center scroll-smooth snap-mandatory"
            )}
          >
            <div>
              <FontAwesomeIcon icon={faList} />
            </div>
            <FontAwesomeIcon
              icon={faChevronRight}
              className={clsx(
                "transition duration-200 ",
                open ? "rotate-90" : ""
              )}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-700 ease-out"
            enterFrom="transform scale-95 opacity-0 h-0"
            enterTo="transform scale-100 opacity-100 h-max"
            leave="transition duration-700 ease-out"
            leaveFrom="transform scale-100 opacity-100 h-max"
            leaveTo="transform scale-95 opacity-0 h-0"
          >
            <Disclosure.Panel className="text-gray-500" static>
              <nav className={className}>
                <ul>
                  {headings.map((heading) => (
                    <li
                      key={heading.id}
                      className={clsx(
                        getClassName(heading.level),
                        "mb-3 text-blue-400"
                      )}
                    >
                      <a
                        href={`#${heading.id}`}
                        className="hover:underline"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .querySelector(`#${heading.id}`)
                            ?.scrollIntoView({
                              behavior: "smooth",
                            });
                        }}
                      >
                        {heading.text}
                      </a>
                      {heading?.children?.length > 0 && (
                        <ul>
                          {(heading.children as any[]).map((child) => (
                            <li
                              key={child.id}
                              className={clsx(
                                getClassName(child.level),
                                "mb-3 text-blue-400"
                              )}
                            >
                              <a
                                href={`#${child.id}`}
                                className="hover:underline"
                                onClick={(e) => {
                                  e.preventDefault();
                                  document
                                    .querySelector(`#${child.id}`)
                                    ?.scrollIntoView({
                                      behavior: "smooth",
                                    });
                                }}
                              >
                                {child.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default TableOfContent;
