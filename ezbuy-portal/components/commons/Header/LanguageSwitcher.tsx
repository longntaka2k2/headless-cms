"use client";

import { faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import clsx from "clsx";
import { useParams, usePathname } from "next/navigation";
import { Fragment, useMemo } from "react";

const LanguageMenuItems = [
  {
    name: "English",
    icon: "en",
    href: "en",
  },
  {
    name: "日本",
    icon: "ja",
    href: "ja",
  },
  {
    name: "Tiếng Việt",
    icon: "vi",
    href: "vi",
  },
];
export default function LanguageSwitcher({ lang }: { lang: any }) {
  const pathName = usePathname();
  const urlParams = useParams();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  const currentLang = useMemo(
    () => LanguageMenuItems.find((x) => x.href == urlParams["lang"])?.name,
    [urlParams]
  );

  return (
    <>
      <Popover className="hidden relative sm:block">
        <Popover.Button className="flex items-center">
          <span className="mr-2">{currentLang ?? lang?.header?.language}</span>
          <FontAwesomeIcon icon={faChevronDown} height={12} width={12} />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute min-w-[120px] top-full z-10 mt-3 overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5">
            <div className="flex flex-col py-2">
              {LanguageMenuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-center hover:bg-gray-50 px-4 py-2"
                >
                  <div className="flex-auto">
                    <a href={redirectedPathName(item.href)}>
                      <div className="flex justify-between">
                        <span>{item.name}</span>
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={clsx(
                            urlParams["lang"] == item.href ? "" : "hidden"
                          )}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <Disclosure as="div" className="-mx-3 sm:hidden">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
              {currentLang ?? lang?.header?.language}
              <FontAwesomeIcon icon={faChevronDown} height={12} width={12} />
            </Disclosure.Button>
            <Disclosure.Panel className="mt-2 space-y-2">
              {[...LanguageMenuItems].map((item, index) => (
                <a
                  key={index}
                  // as="a"
                  href={redirectedPathName(item.href)}
                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  <div className="flex flex-row items-center">
                    <span>
                      {item.name}
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={clsx(
                          urlParams["lang"] == item.href ? "" : "hidden",
                          "ml-6"
                        )}
                      />
                    </span>
                  </div>
                </a>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
