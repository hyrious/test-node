const fs = require("fs");
const path = require("path");

const pkgPath = path.resolve(__filename, "../package.json");
const exists = fs.existsSync(pkgPath);
console.log({ exists, pkgPath });
