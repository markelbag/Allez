const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/mnt/c/Projects/Development/AllezProject/gatsby-starter-tailwind/server/.cache/dev-404-page.js")))
}

