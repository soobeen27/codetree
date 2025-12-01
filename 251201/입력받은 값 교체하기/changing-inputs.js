const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const a = input.split(" ");
console.log(a[1], a[0])