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

sharp("public/casestudy/Untitled.jpeg")
  // .resize({
  //   width: 800,
  //   height: 600,
  //   fit: "cover"
  // })
  .webp({
    quality: 90,
    effort: 6
  })
  .toFile("public/casestudy/10.webp")
  .then(() => console.log("✅ Done"))
  .catch(console.error);
