import { strapiDomain } from "@/constants";
import { parse } from "node-html-parser";

export const LocalizeLink = (locale: string, path: string) =>
  path.startsWith("http://") || path.startsWith("https://")
    ? path
    : `/${locale}${path}`;

export const formatTime = (time: string) =>
  new Date(time)
    .toISOString()
    .slice(0, 10)
    .replace(/T/, " ")
    .replace(/\..+/, "");

    export const LoadImageRictext = (items: any) => {
      const { parse } = require("node-html-parser");
      // Phân tích HTML
      const root = parse(items ? (items as any) : "");
    
      // Tìm thẻ img đầu tiên
      const imgTags = root.querySelectorAll(`img`);
    
      if (imgTags.length > 0) {
        const firstImgSrc = RelativeImagePath(imgTags[0]?.getAttribute("src"));
        return firstImgSrc;
      } else {
        return RelativeImagePath("/uploads/banner_f1fad3fa7d.webp");
      }
    };
    
    export const LoadPRictext = (items: any, noOfChars: number = 200) => {
      // Phân tích HTML
      const root = parse(items ? (items as any) : "");
      // Tìm thẻ img đầu tiên
      const firstParagraph = root.textContent.slice(0, noOfChars);
      return firstParagraph;
    };
    

export function removeAccent(str: string) {
  // remove accents
  var from =
      "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",
    to =
      "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(RegExp(from[i], "gi"), to[i]);
  }

  str = str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\-]/g, "-")
    .replace(/-+/g, "-");

  return str;
}
export const RelativeImagePath = (relativePath: string) => {
  const strapiDomain = "https://strapi-ezbuy.ichiba.net";
  if (
    relativePath.startsWith("http://") ||
    relativePath.startsWith("https://")
  ) {
    return relativePath;
  }
  return `${strapiDomain}${relativePath}`;
};
export const PreprocessContent = (htmlString: string) => {
  const root = parse(
    htmlString
      .replaceAll(/(\s|,)\/uploads/g, ` ${strapiDomain}/uploads`)
      .replaceAll(/\"\/uploads/g, `"${strapiDomain}`)
  );

  root.querySelectorAll("h2, h3, h4").forEach((ele, idx) => {
    ele.setAttribute("id", `${ele.rawTagName}-${idx}`);
    ele.setAttribute("style", `scroll-margin-top: 25px;`);
  });

  return root.toString();
};

