export function getContentfulImageUrl(url?: string) {
    if (!url) return "";
    if (url.startsWith("//")) return `https:${url}`;
    return url;
}
