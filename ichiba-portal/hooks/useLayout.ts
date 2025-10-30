// useLayout.ts
import { useState, useEffect } from "react";
import endpoints from "../const/endpoints";

export default function useLayout(locale: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint =
        locale === "vi" ? endpoints.layoutVn : endpoints.layoutEn;
      await fetch(`${endpoint}?populate=deep`)
        .then((response) => response.json())
        .then(({ data }) => setData(data?.attributes))
        .catch((error) => console.error(error));
    };
    fetchData();
  }, [locale]);

  return data;
}
