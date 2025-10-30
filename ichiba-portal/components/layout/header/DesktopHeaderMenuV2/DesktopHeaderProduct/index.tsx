import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { ElementType } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DesktopHeaderColsRenderer from "../DesktopHeaderColsRenderer";

interface Props {
  isPopupOpen: boolean;
  setIsPopUpOpen: (val: boolean, idx: any) => void;
  idx: number;
  customToggle: ElementType;
  item: any;
  onClickMenuItem: () => void;
  idxActive: any;
}
const DesktopHeaderProduct = ({
  setIsPopUpOpen,
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
              <div className="tw-grid tw-grid-cols-3 tw-py-4 tw-px-5 tw-gap-3">
                {item?.listItems?.map((value: any, index: any) => (
                  <div className="" key={`${value.title}_${index}`}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeaderProduct;
