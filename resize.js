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

sharp("public/smiling-woman-dentist-chair.jpg")
  .rotate()
  // .resize({
  //   width: 1600,
  //   height: 1200,
  //   fit: "cover",
  //   position: "attention"
  // })
  .webp({
    quality: 10,
    effort: 6
  })
  .toFile("public/smiling-woman-dentist-chair.webp")
  .then(() => console.log("✅ Done"))
  .catch(console.error);
