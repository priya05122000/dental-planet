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

sharp("public/testimonials/female-doctor.jpg")
  .resize({
    width: 200,
    height: 200,
    fit: "cover"
  })
  .webp({
    quality: 90,
    effort: 6
  })
  .toFile("public/testimonials/testimonials-3.webp")
  .then(() => console.log("✅ Done"))
  .catch(console.error);
