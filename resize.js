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

sharp("public/doctors/doctor4.jpg")
  .resize({
    width: 900,
    height: 1200,
    fit: "cover",
    position:"top"
  })
  .webp({
    quality: 80,
    effort: 6
  })
  .toFile("public/doctors/doctor4.webp")
  .then(() => console.log("✅ Done"))
  .catch(console.error);
