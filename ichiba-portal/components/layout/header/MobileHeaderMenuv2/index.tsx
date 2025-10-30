import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import MobileHeaderTabv2 from "./MobileHeaderTabv2";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import clsx from "clsx";

const MobileHeaderMenuV2 = (props: {
  items: any;
  isOpenModal: boolean;
  onClickMenu: () => void;
}) => {
  const [item, setItem] = useState({} as any);
  const [isOpen, setOpen] = useState(false);
  const openTab = (item: any) => {
    setOpen(true);
    setItem(item);
  };
  const closeTab = () => {
    setOpen(false);
    props.onClickMenu();
  };
  return (
    <div>
      <div className="tw-grid">
        <div
          className="tw-flex tw-justify-between tw-items-center tw-text-sm py-3 tw-border-b tw-border-[#F2F2F2]"
          onClick={() => openTab(props?.items?.products)}
        >
          <div>{props?.items?.products?.title}</div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div
          className="tw-flex tw-justify-between tw-items-center tw-text-sm py-3 tw-border-b tw-border-[#F2F2F2]"
          onClick={() => openTab(props?.items?.solutions)}
        >
          <div>{props?.items?.solutions?.title}</div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <Link
          href={"/pricing"}
          className={clsx(
            "cursor tw-no-underline tw-text-ic-ink-6 tw-w-full tw-group",
            "tw-flex tw-justify-between tw-items-center tw-text-sm py-3 tw-border-b tw-border-[#F2F2F2]",
          )}
        >
          <span className="group-hover:tw-text-brand-primary">Pricing</span>
          <FontAwesomeIcon icon={faAngleRight} />
        </Link>
        <div
          className="tw-flex tw-justify-between tw-items-center tw-text-sm py-3 tw-border-b tw-border-[#F2F2F2]"
          onClick={() => openTab(props?.items?.resourceCenter)}
        >
          <div>{props?.items?.resourceCenter?.title}</div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div
          className="tw-flex tw-justify-between tw-items-center tw-text-sm py-3"
          onClick={() => openTab(props?.items?.support)}
        >
          <div>{props?.items?.support?.title}</div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>

      <MobileHeaderTabv2
        item={item}
        setOpen={(e: boolean) => setOpen(e)}
        isOpenTab={isOpen}
        onClickMenu={closeTab}
      />
    </div>
  );
};
export default MobileHeaderMenuV2;
