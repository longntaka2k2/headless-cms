import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { ElementType } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DesktopHeaderColsRenderer from "../DesktopHeaderColsRenderer";

interface Props {
  isPopupOpen: boolean;
  setIsPopUpOpen: (val: boolean) => void;
  idx: number;
  customToggle: ElementType;
  item: any;
  onClickMenuItem: () => void;
}
const DesktopHeaderMenuItem = ({
  isPopupOpen,
  setIsPopUpOpen,
  idx,
  customToggle,
  item,
  onClickMenuItem,
}: Props) => (
  <div
    className={clsx(
      "d-inline-block pe-3 cursor tw-relative",
      isPopupOpen ? " !tw-z-[153]" : " !tw-z-[149]",
    )}
    key={`nav_${item.Title}_${idx}`}
  >
    <Dropdown
      onToggle={(e) => setIsPopUpOpen(e)}
      className="d-inline mx-2 cursor"
      id={`dropdown-${idx}`}
    >
      <Dropdown.Toggle as={customToggle} id={`dropdown-autoclose-true-${idx}`}>
        <span>{item.Title} &nbsp;</span>
        <FontAwesomeIcon icon={faChevronDown} height={4} width={8} />
      </Dropdown.Toggle>
      <Dropdown.Menu
        renderOnMount={true}
        className={clsx(
          "!tw-fixed mt-1 header-items-solution",
          isPopupOpen ? " !tw-z-[153]" : " !tw-z-[149]",
          "tw-top-[57px] tw-border-none tw-shadow-[0_2px_10px_rgba(0,0,0,.25)]",
        )}
        id={`dropmenu-${idx}`}
      >
        <div className="row">
          <DesktopHeaderColsRenderer
            items={item.Items}
            idx={idx}
            onClickMenu={onClickMenuItem}
          />
        </div>
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

export default DesktopHeaderMenuItem;
