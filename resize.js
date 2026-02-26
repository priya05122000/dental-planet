// const sharp = require("sharp");

// sharp("public/logo/dental_planet.png")
//     // .resize(300, 300, {
//     //     fit: "cover",
//     //     position: "top",
//     // })
//     .webp({ quality: 90, effort: 6 })
//     .toFile("public/logo/dental_planet.webp")
//     .then(() => console.log("✅ Done"))
//     .catch(console.error);


//logos

const sharp = require("sharp");

sharp("public/logo/dental_planet.png")
  .resize({
    width: 1200,
    // height: 300,
    // fit: "contain" // better for logos
  })
  .webp({
    quality: 40,
    effort: 6
  })
  .toFile("public/logo/dental_planet.webp")
  .then(() => console.log("✅ Done"))
  .catch(console.error);
