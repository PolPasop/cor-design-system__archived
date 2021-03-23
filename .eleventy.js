const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("css");

  return {
    templateFormats: [
      "njk",
      "md", // note that .md files will also be parsed with njk processor
      "css",
      "js", // passthrough file copying for static assets
    ],

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: ["njk", "md"],
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,

    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist",
    },
  };
};
