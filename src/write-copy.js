const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      // if there's an error, reject the Promise and send the error to the Promise's .catch()
      if (err) {
        reject(err);
        // return out of the function to make sure it doesn't resolve()
        return;
      }

      // if everything goes well, resolve
      resolve({
        ok: true,
        message: "File created successfully!",
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "Style sheet copied successfully!",
      });
    });
  });
};

module.exports = { writeFile, copyFile };
