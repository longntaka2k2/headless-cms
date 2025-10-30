"use client";
import TableDesktop from "./TableDesktop";
import TableMobile from "./TableMobile";
import clsx from "clsx";

const PriceTableShip4P = () => {
  return (
    <div>
      <div className={clsx("tw-hidden lg:tw-block")}>
        <TableDesktop />
      </div>
      <div className={clsx("lg:tw-hidden")}>
        <TableMobile />
      </div>
    </div>
  );
};
export default PriceTableShip4P;
