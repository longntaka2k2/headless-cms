import React, { useContext } from "react";
import { TabsContext } from "../context";
import classes from "./Tab.module.scss";
import clsx from "clsx";

type TabProps = {
  name: string;
  value: string | number;
} & JSX.IntrinsicElements["div"];

const Tab: React.FC<TabProps> = ({ name, value }) => {
  const { selected, onChange } = useContext(TabsContext);

  const handleClick = () => onChange?.(value);

  return (
    <button
      onClick={handleClick}
      className={clsx(classes.root, { [classes.selected]: value === selected })}
    >
      <span className={classes.text}>{name}</span>
    </button>
  );
};

export default Tab;
