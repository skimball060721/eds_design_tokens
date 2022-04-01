module.exports = {
  source: [`tokens/**/*.json`],
  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "name/cti/snake",
        "font/flutter/literal",
        "size/px",
        "color/css",
      ],
      buildPath: "build/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
  },
};
