const withTM = require("next-transpile-modules")(["@stately/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
