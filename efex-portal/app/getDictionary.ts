type Dictionaries = {
  [key: string]: () => Promise<any>;
};
const dictionaries: Dictionaries = {
  en: () => import("./dictionaries/en.json").then((r) => r.default),
  vi: () => import("./dictionaries/vi.json").then((r) => r.default),
};

export const getDictionary = (lang: string) => {
  if(lang){
    return dictionaries[lang]()
      .then((result: any) => {
        return result;
      })
      .catch((error: any) => {
        console.error(error);
      });
  }else{
    return dictionaries[0]()
      .then((result: any) => {
        return result;
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
};
