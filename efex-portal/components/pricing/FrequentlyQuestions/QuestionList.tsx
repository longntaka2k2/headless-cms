"use client";

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure, Transition } from "@headlessui/react";

export const QuestionList = ({
  contents,
}: {
  contents: { question: string; answer: React.ReactNode }[];
}) => {
  return (
    <ul className="flex flex-col gap-5 lg:max-w-[792px] w-full">
      {contents.map((item, index) => (
        <li key={index} className="pb-5 border-b border-b-ic-ink-2 last:border-b-[0px]">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center w-full">
                  <p className="font-bold text-left">{`${index + 1}. ${
                    item.question
                  }`}</p>
                  <FontAwesomeIcon icon={open ? faMinus : faPlus} size="1x" />
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
                  <Disclosure.Panel className="mt-3 text-sm lg:text-base">
                    {item.answer}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </li>
      ))}
    </ul>
  );
};
