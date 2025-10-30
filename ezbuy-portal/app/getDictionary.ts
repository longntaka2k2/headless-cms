type Dictionaries = {
  [key: string]: () => Promise<any>;
};
const dictionaries: Dictionaries = {
  ja: () => import("./dictionaries/ja.json").then((r) => r.default),
  en: () => import("./dictionaries/en.json").then((r) => r.default),
  vi: () => import("./dictionaries/vi.json").then((r) => r.default),
};

export const getDictionary = (lang: string) => {
  return dictionaries[lang]()
    .then((result: any) => {
      return result;
    })
    .catch((error: any) => {
      console.error(error);
    });
};
