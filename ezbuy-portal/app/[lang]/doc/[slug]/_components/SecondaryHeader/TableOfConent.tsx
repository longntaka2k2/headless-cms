"use client";
import React, { Fragment, useEffect, useState } from "react";
import clsx from "clsx";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type MenuItem = {
  id: string;
  text: string;
  level: number;
  children?: MenuItem[];
};

const TableOfContent = ({ className }: { className?: string }) => {
  const [headings, setHeadings] = useState<MenuItem[]>([]);

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

    const elements: MenuItem[] = queryEle
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
  const scrollToTop = (close: () => void) => {
    window.scrollTo({ top: 0 });
    close();
  };
  return (
    <div className={clsx("", "relative inline-block text-left", className)}>
      <Menu>
        {({ open, close }) => (
          <>
            <Menu.Button
              className={clsx(
                "inline-flex justify-center items-center",
                "w-full px-4",
                "text-black/90  text-sm font-medium",
                "rounded-md hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
              )}
            >
              Mục lục
              <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className={clsx(
                  "absolute right-0",
                  "mt-2 w-56 ",
                  "origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                )}
              >
                <div className="px-1 py-1">
                  <Menu.Item>
                    <button
                      className="px-2 py-1 text-sm font-medium"
                      onClick={() => scrollToTop(close)}
                    >
                      Về đầu trang
                    </button>
                  </Menu.Item>
                </div>

                <div className="px-1 py-1">
                  {headings.map((x, idx) => (
                    <Menu.Item key={idx}>
                      {({ active }) => (
                        <button
                          className={clsx(
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900",
                            "group flex w-full items-center rounded-md px-2 py-2 text-sm"
                          )}
                          onClick={(e) => {
                            e.preventDefault();
                            document.querySelector(`#${x.id}`)?.scrollIntoView({
                              behavior: "smooth",
                            });
                          }}
                        >
                          {x.text}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default TableOfContent;
