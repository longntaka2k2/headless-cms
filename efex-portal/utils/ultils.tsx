import { strapiDomain } from "@/constants";
import hcm from "@/public/images/home/whatWeDo/hcm.webp";

export function removeAccent(str: string) {
  // remove accents
  var from =
      "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",
    to =
      "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str?.replace(RegExp(from[i], "gi"), to[i]);
  }

  str = str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\-]/g, "-")
    .replace(/-+/g, "-");

  return str;
}

export const LocalizeLink = (locale: string, path: string) =>
  path.startsWith("http://") || path.startsWith("https://")
    ? path
    : `/${locale}${path}`;

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
    return hcm;
  }
};

export const LoadPRictext = (items: any) => {
  const { parse } = require("node-html-parser");
  // Phân tích HTML
  const root = parse(items ? (items as any) : "");
  // Tìm thẻ img đầu tiên
  const firstParagraph = root.textContent.slice(0, 250);
  return firstParagraph;
};

export const RelativeImagePath = (relativePath: string) => {
  if (
    relativePath.startsWith("http://") ||
    relativePath.startsWith("https://")
  ) {
    return relativePath;
  }
  return `${strapiDomain}${relativePath}`;
};

export const RelativeImagePathStrapi = (relativePath: string) => {
  const strapiDomain = "https://strapi-efex.ichiba.net";
  if (
    relativePath?.startsWith("/uploads")
  ) {
    return `${strapiDomain}${relativePath}`;
  }else{
    return relativePath;
  }
};