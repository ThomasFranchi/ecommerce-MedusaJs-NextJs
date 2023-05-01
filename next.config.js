const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")
const nextTranslate = require("next-translate-plugin");

const existingConfig = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: ["medusa-public-images.s3.eu-west-1.amazonaws.com", "localhost"],
  },
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
})

module.exports = nextTranslate(existingConfig);

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
