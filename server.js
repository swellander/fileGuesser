const app = require("express")();
const fs = require("fs");
const path = require("path");
const generateFiles = require("./generateFiles");

//refresh file directory
fs.readdir(path.join(__dirname, "files"), (err, files) => {
  if (err) throw err;
  for (const file of files) {
    fs.unlink(path.join("files", file), err => {
      if (err) throw err;
    });
  }
  generateFiles(Math.round(Math.random() * 50));
});

app.get("/files/:guess", (req, res, next) => {
  fs.readdir(path.join(__dirname, "files"), (err, data) => {
    const { guess } = req.params;
    if (Number(guess) > Number(data.length)) res.send("lower");
    else if (Number(guess) < Number(data.length)) res.send("higher");
    else res.send("CORRECT");
  });
});

app.listen(3000);
