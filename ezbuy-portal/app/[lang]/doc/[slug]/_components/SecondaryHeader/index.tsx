"use client";
import clsx from "clsx";
import TableOfContent from "./TableOfConent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ReactNode, useState } from "react";
import Drawer from "./Drawer";

export interface Props {
  className?: string;
  children: ReactNode;
}
const SecondaryHeader = ({ children, className }: Props) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isTocOpen, setTocOpen] = useState(false);
  return (
    <div
      className={clsx(
        "sticky z-50 top-20 ",
        "lg:hidden flex justify-between items-center",
        "bg-white w-full py-2 border-b",
        className
      )}
    >
      <button
        className="text-sm text-black/80"
        onClick={() => setDrawerOpen(true)}
      >
        <FontAwesomeIcon icon={faBarsStaggered} className="mr-1" />
        Menu
      </button>
      <Drawer
        isOpen={isDrawerOpen}
        setIsOpen={setTocOpen}
        header={
          <div className="flex justify-between items-center">
            <p className="font-bold">Menu</p>{" "}
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setDrawerOpen(false)}
            />
          </div>
        }
      >
        {children}
      </Drawer>
      {/* table of content */}
      <TableOfContent />
    </div>
  );
};

export default SecondaryHeader;
