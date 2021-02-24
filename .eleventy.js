module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("assets/img");
  eleventyConfig.addPassthroughCopy("assets/css");
  eleventyConfig.addPassthroughCopy("assets/fonts");


  return {
    templateFormats: [
      "njk", "md", // note that .md files will also be parsed with njk processor
      "css", "js" // passthrough file copying for static assets
    ],

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: ["njk", "md"],
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,

    dir: {
      input: "./src/site",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};