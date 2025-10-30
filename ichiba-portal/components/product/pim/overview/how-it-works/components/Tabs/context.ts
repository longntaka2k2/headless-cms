import { createContext } from "react";

interface TabsContextProps {
  selected?: string | number;
  onChange?: (val: string | number) => void;
}

export const TabsContext = createContext({} as TabsContextProps);
