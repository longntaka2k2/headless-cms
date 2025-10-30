module.exports = {
    i18n: {
        locales: [ 'vi','en'],
        defaultLocale: 'vi',
        localeDetection: false,
        // domains: [
        //     {
        //         domain: 'ichiba.net',
        //         defaultLocale: 'en',
        //     },
        //     {
        //         domain: 'ichiba.vn',
        //         defaultLocale: 'vi',
        //     },
        // ],
    },
    // async redirects() {
    //   return [
    //     {
    //       source: '/:locale(vi|en)/:path*',
    //       has: [
    //         { type: 'domain', value: 'ichiba.net' },
    //         { type: 'domain', value: 'ichiba.vn' },
    //       ],
    //       permanent: true,
    //       destination: '/:path*',
    //     },
    //     {
    //       source: '/:path*',
    //       has: [
    //         { type: 'domain', value: 'ichiba.net' },
    //         { type: 'domain', value: 'ichiba.vn' },
    //       ],
    //       destination: `/:locale(vi|en)/:path*`,
    //       permanent: false,
    //     },
    //   ];
    // },
};
