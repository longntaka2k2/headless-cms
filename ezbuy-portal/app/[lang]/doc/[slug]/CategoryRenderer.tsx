"use client";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { ICategory } from "./_interfaces";

export interface Props {
  currentCategoryName?: string;
  docSlug: string;
  categories: ICategory[];
  defaultOpen?: boolean;
}
export const CategoryRenderer = ({
  categories,
  currentCategoryName,
  docSlug,
  defaultOpen,
}: Props) => {
  return (
    <div>
      {categories?.map((c, idxc) => (
        <Disclosure key={idxc} defaultOpen={defaultOpen}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={clsx(
                  "flex justify-between items-center mt-1 text-base",
                  " w-full hover:font-bold hover:border-black px-1 py-1",
                  "text-left font-medium",
                  open ? "border-t-2 rounded-t-md" : "border-b"
                )}
              >
                <p>{c.name}</p>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={clsx(
                    "transition duration-300",
                    open && "rotate-90"
                  )}
                />
              </Disclosure.Button>
              <Disclosure.Panel as="ul">
                {c.docs?.map((d, didx) => (
                  <li
                    key={didx}
                    className={clsx(
                      "ml-3 pl-1 truncate mt-2 pb-1  hover:border-black",
                      docSlug == d.slug
                        ? "border-l-2 border-black font-semibold"
                        : "border-l"
                    )}
                  >
                    <Link href={`/doc/${d.slug}`}>{d.title}</Link>
                  </li>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};
