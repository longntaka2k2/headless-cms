import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { ElementType } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DesktopHeaderColsRenderer from "../DesktopHeaderColsRenderer";
import Image from "next/image";
import Link from "next/link";
interface Props {
  isPopupOpen: boolean;
  setIsPopUpOpen: (val: boolean, idx: any) => void;
  idx: number;
  customToggle: ElementType;
  item: any;
  onClickMenuItem: () => void;
  idxActive: any;
}
const DesktopHeaderResource = ({
  isPopupOpen,
  setIsPopUpOpen,
  idx,
  customToggle,
  item,
  onClickMenuItem,
  idxActive,
}: Props) => {
  return (
    <div
      className={clsx(" pe-3 cursor tw-relative ")}
      key={`nav_${item?.title}`}
    >
      <div
        className="tw-h-10 tw-flex tw-items-center before:tw-pb-15 before:tw-absolute before:tw-content-[''] before:tw-w-[80%]"
        onMouseEnter={() => setIsPopUpOpen(true, item?.title)}
        onMouseLeave={() => setIsPopUpOpen(true, "")}
      >
        <span className="">{item?.title} &nbsp;</span>
        <FontAwesomeIcon icon={faChevronDown} height={4} width={8} />
        <div
          className={clsx(
            "tw-left-0 tw-right-0  !tw-z-[153] !tw-fixed tw-top-[57px]",
            idxActive === item?.title ? "" : "invisible",
          )}
        >
          <div
            onMouseEnter={() => setIsPopUpOpen(true, item?.title)}
            onMouseLeave={() => setIsPopUpOpen(true, "")}
            className={clsx(
              " mt-1 header-items-solution bg-white tw-container  tw-transition-all  ",
              idxActive === item?.title
                ? " tw-scale-100 tw-opacity-100 tw-duration-300"
                : "  tw-scale-95 tw-opacity-50",
              " tw-border-none tw-shadow-[0_2px_10px_rgba(0,0,0,.25)] tw-rounded-2xl",
            )}
          >
            <div className={clsx("")}>
              <div className="tw-grid tw-grid-cols-3 tw-py-4 tw-px-5 tw-gap-5">
                <div className="tw-col-span-2 tw-grid tw-grid-cols-2 tw-gap-3">
                  {item?.listItems?.map((value: any, index: any) => (
                    <div className="" key={`${value.title}_${idx}_${index}`}>
                      {value.title && (
                        <div className="fw-5  tw-text-[#666] tw-border-[#ddd] tw-border-b tw-w-[90%] tw-pb-1 tw-mb-2">
                          {value.title}
                        </div>
                      )}
                      <div className="tw-grid tw-gap-2">
                        {value?.items?.map((x: any, idx: number) => (
                          <DesktopHeaderColsRenderer
                            key={idx}
                            item={x}
                            onClickMenu={onClickMenuItem}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {item?.image?.image?.data && <div className="tw-py-4 tw-px-5 tw-rounded-2xl tw-shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] tw-text-center">
                    <Image src={`https://cms-strapi.ichiba.net${item?.image?.image?.data?.attributes?.url}`} alt={item?.image?.title} width={320} height={113} className="tw-rounded-2xl tw-max-w-[320px] tw-h-[113px] tw-object-cover" />
                    <div className="tw-mt-[10px] tw-font-medium tw-text-[#333]">{item?.image?.title}</div>
                    <div className="tw-text-[#666] tw-text-xs tw-mt-1">{item?.image?.content}</div>
                    <Link href={item?.image?.linkRead} className="tw-block tw-mt-2 tw-text-sm tw-font-medium tw-no-underline tw-text-[#F57C00]">{item?.image?.read}</Link>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeaderResource;
