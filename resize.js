// const sharp = require("sharp");

// sharp("public/design/Subtract.png")
//     .resize(200, 200, {
//         fit: "cover",
//         position: "center",
//     })
//     .webp({ quality: 90, effort: 6 })
//     .toFile("public/design/tooth.webp")
//     .then(() => console.log("✅ Done"))
//     .catch(console.error);


//logos

const sharp = require("sharp");

sharp("public/design/bannerteeth.png")
  .resize({
    width: 400,
    height: 400,
    fit: "cover",
    // position:"top"
  })
  .webp({
    quality: 100,
    effort: 6
  })
  .toFile("public/casestudy/bannerteeth.webp")
  .then(() => console.log("✅ Done"))
  .catch(console.error);
