import React from "react";
import CustomToggle from "../CustomToggle";
import DesktopHeaderProduct from "./DesktopHeaderProduct";
import DesktopHeaderSolution from "./DesktopHeaderSolution";
import DesktopHeaderResource from "./DesktopHeaderResource";
import DesktopHeaderSupport from "./DesktopHeaderSupport";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const DesktopHeaderMenuV2 = (props: {
  items: any;
  setIsPopUpOpen: (e: boolean, idx: any) => void;
  isPopupOpen: boolean;
  onClickMenuItem: () => void;
  idxActive: any;
}) => {
  return (
    <div className="header-menu">
      {props?.items?.products && (
        <DesktopHeaderProduct
          key={props?.items?.products?.title}
          item={props?.items?.products}
          setIsPopUpOpen={props.setIsPopUpOpen}
          customToggle={CustomToggle}
          isPopupOpen={props.isPopupOpen}
          onClickMenuItem={props.onClickMenuItem}
          idxActive={props.idxActive}
          idx={0}
        />
      )}
      {props?.items?.solutions && (
        <DesktopHeaderSolution
          key={props?.items?.solutions?.title}
          item={props?.items?.solutions}
          setIsPopUpOpen={props.setIsPopUpOpen}
          customToggle={CustomToggle}
          isPopupOpen={props.isPopupOpen}
          onClickMenuItem={props.onClickMenuItem}
          idxActive={props.idxActive}
          idx={0}
        />
      )}
      <Link
        href={"/pricing"}
        className="pe-3 cursor tw-no-underline tw-text-ic-ink-6"
      >
        <span className="hover:tw-text-brand-primary">Pricing &nbsp;</span>
        <FontAwesomeIcon icon={faChevronDown} height={4} width={8} />
      </Link>
      {props?.items?.resourceCenter && (
        <DesktopHeaderResource
          key={props?.items?.resourceCenter?.title}
          item={props?.items?.resourceCenter}
          setIsPopUpOpen={props.setIsPopUpOpen}
          customToggle={CustomToggle}
          isPopupOpen={props.isPopupOpen}
          onClickMenuItem={props.onClickMenuItem}
          idxActive={props.idxActive}
          idx={0}
        />
      )}
      {props?.items?.support && (
        <DesktopHeaderSupport
          key={props?.items?.support?.title}
          item={props?.items?.support}
          setIsPopUpOpen={props.setIsPopUpOpen}
          customToggle={CustomToggle}
          isPopupOpen={props.isPopupOpen}
          onClickMenuItem={props.onClickMenuItem}
          idxActive={props.idxActive}
          idx={0}
        />
      )}
    </div>
  );
};

export default DesktopHeaderMenuV2;
