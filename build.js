const StyleDictionaryPackage = require("style-dictionary");

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

function getStyleDictionaryConfig(brand) {
  return {
    source: [`tokens/brands/${brand}.json`, "tokens/globals/**/*.json"],
    platforms: {
      web: {
        transformGroup: "web",
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
