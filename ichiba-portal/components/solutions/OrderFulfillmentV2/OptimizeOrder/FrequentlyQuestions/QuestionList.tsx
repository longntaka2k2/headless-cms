import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure, Transition } from "@headlessui/react";

export const QuestionList = ({
  contents,
}: {
  contents: { question: string; answer: React.ReactNode }[];
}) => {
  return (
    <ul className="tw-flex tw-flex-col tw-gap-5 lg:tw-w-full">
      {contents.map((item, index) => (
        <li key={index} className="tw-pb-5 tw-border-b tw-border-b-ic-ink-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="tw-flex tw-justify-between tw-items-center tw-w-full">
                  <p className="tw-font-bold tw-text-left">{`${index + 1}. ${
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
                  <Disclosure.Panel className="tw-mt-3 tw-text-sm lg:tw-text-base">
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
