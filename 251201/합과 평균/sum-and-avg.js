const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map((num) => Number(num));
const sum = input[0] + input[1];
const avg = (sum / 2).toFixed(1);
console.log(sum, avg);
