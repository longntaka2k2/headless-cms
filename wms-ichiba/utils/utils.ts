import { parse } from "node-html-parser";
export const trim = (content: string, char: string): string => {
  var start = 0,
    end = content.length;

  while (start < end && content[start] === char) ++start;

  while (end > start && content[end - 1] === char) --end;

  return start > 0 || end < content.length
    ? content.substring(start, end)
    : content;
};

export const stripHtmlTags = (content: string) => {
  if (!content) {
    return content;
  }
  return content.replaceAll(/<[^>]+>/g, "");
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
export const LoadPRictext = (items: any) => {
  // Phân tích HTML
  const root = parse(items ? (items as any) : "");
  // Tìm thẻ img đầu tiên
  const firstParagraph = root.textContent.slice(0, 200);
  return firstParagraph;
};

export const formatTime = (time: string) =>
  new Date(time)
    .toISOString()
    .slice(0, 10)
    .replace(/T/, " ")
    .replace(/\..+/, "");

export const GetStrapiRelation = ({ data }: any): string =>
  data?.attributes?.url;

export const RelativeImagePath = (relativePath: string) => {
  const strapiDomain = "https://cms-strapi.ichiba.net";
  if (
    relativePath?.startsWith("/uploads")
  ) {
    return `${strapiDomain}${relativePath}`;
  }else{
    return relativePath;
  }
};

export const capitalize = (string: string, keyword: string) => {
  return string
    .toLowerCase()
    .split(keyword || "")
    .map((val, index) => {
      if (index > 0) return val.charAt(0).toUpperCase() + val.slice(1);
      return val;
    })
    .join("");
};

export const convertMessageCodeToCamelCase = (data: {
  [x: string]: string[];
}) => {
  return Object.keys(data).reduce((obj, val) => {
    obj[val] = capitalize((data[val] as string[])[0] as string, "_");
    return obj;
  }, {} as { [x: string]: string });
};

export const getShortUserName = (name: string) => {
  if (!name) {
    return name;
  }
  const fullName = name.split(" ");
  if (fullName.length === 1) {
    return fullName[0][0].toUpperCase();
  }
  const firstName = fullName[fullName.length - 1];
  const lastName = fullName[0];
  return lastName[0].toUpperCase() + firstName[0].toUpperCase();
};

export const linkFAQ = (lang: string) => {
  let link = "";
  switch (lang) {
    case "vi":
      link =
        "/support-portalvi/collections/4071502-cau-h%E1%BB%8Fi-th%C6%B0%E1%BB%9Dng-g%E1%BA%B7p";
      break;
    default:
      link = "/support-portalen/collections/4071502-faq";
      break;
  }
  return link;
};

export const isEng = () => {
  let host = typeof window !== "undefined" ? window.location.origin : "";
  return host === "https://ichiba.net";
};

export const getRegisterLink = () =>
  isEng()
    ? "https://id.ichiba.net/Account/Register?redirectUrl=https%3A%2F%2Forg.ichiba.net"
    : "https://id.ichiba.net/Account/Register?redirectUrl=https%3A%2F%2Forg.ichiba.net";
