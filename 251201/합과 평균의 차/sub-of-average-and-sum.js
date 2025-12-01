const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(num => parseInt(num));
const [a, b, c] = input;
const sum = a + b + c;
const avg = sum / 3
console.log(sum);
console.log(avg);
console.log(sum - avg);