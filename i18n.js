module.exports = {
    locales: ["en", "fr"], // Array with the languages that you want to use
    defaultLocale: "fr", // Default language of your website
    pages: {
      "*": ["common", "account"], // Namespaces that you want to import per page (we stick to one namespace for all the application in this tutorial)
    },
    // loadLocaleFrom: (locale, namespace) =>
    // import(`./locales/${locale}/${namespace}`).then((m) => m.default),
};
  
