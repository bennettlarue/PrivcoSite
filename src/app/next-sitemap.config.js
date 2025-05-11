// next-sitemap.config.js
module.exports = {
  siteUrl: "https://privco.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin", "/private"] },
    ],
    additionalSitemaps: [],
  },
  exclude: ["/admin/*", "/private/*"],
};
