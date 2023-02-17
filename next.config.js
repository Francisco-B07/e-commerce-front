const withSvgr = require("next-svgr");

/** @type {import('next').NextConfig} */
const nextConfig = withSvgr({
  reactStrictMode: true,
  compailer: {
    styledComponents: true,
  },
});

module.exports = nextConfig;
