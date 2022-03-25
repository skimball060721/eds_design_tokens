// const StyleDictionary = require("style-dictionary");

// const addUnitTransform = (token) => {
//   console.log(token);
//   const { value } = token;
//   let size = value + "px";

//   return size;
// };

module.exports = {
  source: [`tokens/**/*.json`],
  // transform: {
  //   addUnitTransform: {
  //     type: "value",
  //     transitive: "true",
  //     matcher: (token) => token.attributes.category === "fontSizes",
  //     transformer: addUnitTransform,
  //   },
  // },
  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "name/cti/snake",
        "time/seconds",
        "content/icon",
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
