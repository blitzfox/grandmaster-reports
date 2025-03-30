module.exports = function(eleventyConfig) {
  // Pass through files
  eleventyConfig.addPassthroughCopy("reports/css");
  eleventyConfig.addPassthroughCopy("reports/images");
  eleventyConfig.addPassthroughCopy("reports/audio");
  
  // Ensure user-specific directories are passed through
  eleventyConfig.addPassthroughCopy("reports/images/chessvideworld");
  eleventyConfig.addPassthroughCopy("reports/audio/chessvideworld");
  eleventyConfig.addPassthroughCopy("reports/images/alientcp");
  eleventyConfig.addPassthroughCopy("reports/audio/alientcp");
  
  return {
    dir: {
      input: "reports",
      includes: "../_includes",
      output: "_site"
    }
  };
};