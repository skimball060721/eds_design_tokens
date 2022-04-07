const StyleDictionaryPackage = require("style-dictionary");

StyleDictionaryPackage.registerTransform({
  name: "typography/shorthand",
  type: "value",
  transitive: true,
  matcher: (token) => token.type === "typography",
  transformer: (token) => {
    const { value } = token;
    return `${value.fontWeight} ${value.fontSize}/${value.lineHeight} ${value.fontFamily}`;
  },
});

StyleDictionaryPackage.registerTransformGroup({
  name: "CSS",
  transforms: [
    "attribute/cti",
    "name/cti/snake",
    "size/px",
    "color/css",
    // "typography/shorthand",
  ],
});

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

function getStyleDictionaryConfig(brand) {
  return {
    source: [`tokens/brands/${brand}.json`, "tokens/globals/**/*.json"],
    platforms: {
      web: {
        transformGroup: "CSS",
        buildPath: `build/web/${brand}/`,
        files: [
          {
            destination: "tokens.css",
            format: "css/variables",
            options: {
              outputReferences: true,
            },
          },
        ],
      },
    },
  };
}

console.log("Build started…");

// PROCESS THE DESIGN TOKENS FOR THE DIFFERENT BRANDS AND PLATFORMS

["darwin"].map(function (brand) {
  ["web"].map(function (platform) {
    console.log("\n===============================");
    console.log(`\nProcessing: [${brand}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(
      getStyleDictionaryConfig(brand, platform)
    );

    StyleDictionary.buildPlatform(platform);

    console.log("\nEnd processing");
  });
});

console.log("\n===============================");
console.log("\nBuild completed!");
