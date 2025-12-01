const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const a = input.split(" ").map((num) => parseInt(num));
console.log(`${a[0]} ${a[1]} ${a[0] + a[1]}`);