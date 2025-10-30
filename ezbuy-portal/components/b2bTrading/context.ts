import { createContext } from "react";
import type enUs from "../../app/dictionaries/en.json";
import { DeepPartial } from "utility-types";

export const B2bTradingContext = createContext(
  {} as { lang: DeepPartial<typeof enUs> }
);
