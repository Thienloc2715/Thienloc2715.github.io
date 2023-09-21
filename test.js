const imageNames = ["image1.png", "image2.png", "image3.png"];
const randomImageName = imageNames[Math.floor(Math.random() * imageNames.length)];
const srcPath = "src/";
const imagePath = srcPath + randomImageName;
document.getElementById("random-image").src = imagePath;