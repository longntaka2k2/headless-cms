import React from "react";
import { TabsContext } from "./context";
import classes from "./Tabs.module.scss";

type TabsProps = {
  value?: string | number;
  onChange?: (val: string | number) => void;
} & Omit<JSX.IntrinsicElements["div"], "onChange">;

const Tabs: React.FC<TabsProps> = ({ value, onChange, children }) => {
  return (
    <TabsContext.Provider value={{ selected: value, onChange }}>
      <div className={classes.root}>{children}</div>
    </TabsContext.Provider>
  );
};

export default Tabs;
