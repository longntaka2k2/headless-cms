"use client";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";

export interface Props {
  title: string;
  items: {
    label: string;
    link?: string;
    target?: string | "_blank";
  }[];
  defaultOpen?: boolean;
  className?: string;
  disabled?: boolean;
}
const CustomDisclosure = ({
  items,
  title,
  defaultOpen,
  className,
  disabled,
}: Props) => {
  return (
    <Disclosure as="div" defaultOpen={defaultOpen} className={className}>
      {({ open }) => (
        <>
          <Disclosure.Button
            as={"div"}
            disabled={disabled}
            className="flex justify-between font-semibold mb-2"
          >
            <span className="capitalize">{title} </span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="inline lg:hidden"
            />
          </Disclosure.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel as="ul" static>
              {items.map((item, idx) => (
                <li
                  key={idx + item.label}
                  className="text-sm font-medium mb-2 cursor-pointer hover:underline"
                >
                  <Link href={item.link ?? "#"} target={item.target}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default CustomDisclosure;
