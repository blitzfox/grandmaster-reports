module.exports = function(eleventyConfig) {
  // Pass through files
  eleventyConfig.addPassthroughCopy("reports/css");
  eleventyConfig.addPassthroughCopy("reports/images");
  eleventyConfig.addPassthroughCopy("reports/audio");
  
  return {
    dir: {
      input: "reports",
      includes: "../_includes",
      output: "_site"
    }
  };
};