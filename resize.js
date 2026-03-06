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

sharp("public/missionvision/missionvision.jpg")
  .rotate()
  .resize({
    width: 1600,
    height: 1200,
    fit: "cover",
    position: "attention"
  })
  .webp({
    quality: 50,
    effort: 6
  })
  .toFile("public/missionvision/missionvision.webp")
  .then(() => console.log("✅ Done"))
  .catch(console.error);
