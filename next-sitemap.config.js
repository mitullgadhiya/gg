/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://ethereum.org",
  generateRobotsTxt: true,
  transform: async (_, path) => {
    if (path.endsWith("/404")) return null;
    return {
      loc: path,
      changefreq: "weekly",
      priority: 0.7,
    };
  },
};
