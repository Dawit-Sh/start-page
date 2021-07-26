// Snowpack Configuration File
// See all supported options: https://snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    "public": "/",
    "src": "/script",
  },
  plugins: [
    "snowpack-plugin-sass"
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
