const jimp = require("jimp");

async function changeImgSize(filePath) {
  jimp
    .read(filePath)
    .then((file) => {
      return file.resize(250, 250).write(filePath);
    })
    .catch((error) => {
      throw error;
    });
}

module.exports = changeImgSize;
