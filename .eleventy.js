const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");

// Eleventy image plugin
async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [600, 950],
    outputDir: "./_site/img/",
    formats: ["avif", "jpeg"]
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async"
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  eleventyConfig.addPassthroughCopy("dist");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/components");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/site/admin");
  // eleventyConfig.addPassthroughCopy("assets/videos");

  eleventyConfig.addFilter("debugger", (...args) => {
    console.log(...args);
    debugger;
  });


  eleventyConfig.addShortcode("navbar", function (data, direction) {
    return `
    <nav class="cor-nav ${direction ? `cor-nav--${direction} ` : ``}">
      {% for navitem in nav %}
      <a href="#">{{ navitem }}</a>
      {% endfor %}
    </nav>
    `;
  });


  /*
  const navbarTemplate = require("./src/components/navbar/template.js");
  eleventyConfig.addShortcode("navbar", function (direction) {
    console.log(navbarTemplate);
    return navbarTemplate(direction);
  });
  */

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
      input: "./src/site",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
