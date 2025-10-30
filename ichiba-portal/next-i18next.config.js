/** @type import("next-i18next").UserConfig */
module.exports = {
  i18n: {
    locales: ["vi", "en"],
    defaultLocale: "vi",
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
  // async redirects() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       destination: "https://ichiba.net/:path*", // Chuyển hướng về ichiba.net với cùng URL path
  //       permanent: true, // Sử dụng redirect 301 (permanent redirect)
  //     },
  //     {
  //       source: "/(.*)",
  //       destination: "https://ichiba.vn/:path*", // Chuyển hướng về ichiba.vn với cùng URL path
  //       permanent: true, // Sử dụng redirect 301 (permanent redirect)
  //     },
  //   ];
  // },
};
