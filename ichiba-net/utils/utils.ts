import { parse } from "node-html-parser";

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