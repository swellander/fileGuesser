const fs = require("fs");

const filePath = "./files/file_";

function generateFiles(numOfFiles) {
  for (let i = 1; i <= numOfFiles; ++i) {
    fs.closeSync(fs.openSync(filePath + i, "w"));
  }
}

module.exports = generateFiles;
