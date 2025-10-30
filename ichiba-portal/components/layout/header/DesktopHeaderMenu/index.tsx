import React from "react";
import DesktopHeaderMenuItem from "./DesktopHeaderMenuItem";
import CustomToggle from "../CustomToggle";

const DesktopHeaderMenu = (props: {
  items: any[];
  setIsPopUpOpen: (e: boolean) => void;
  isPopupOpen: boolean;
  onClickMenuItem: () => void;
}) => {
  return (
    <div className="header-menu ">
      {props &&
        props.items.map((item: any, idx: number) => (
          <DesktopHeaderMenuItem
            key={idx}
            item={item}
            setIsPopUpOpen={props.setIsPopUpOpen}
            customToggle={CustomToggle}
            idx={idx}
            isPopupOpen={props.isPopupOpen}
            onClickMenuItem={props.onClickMenuItem}
          />
        ))}
    </div>
  );
};

export default DesktopHeaderMenu;
