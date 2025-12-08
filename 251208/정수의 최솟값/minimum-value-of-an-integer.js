const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.
const f = (a, b, c) => {
    return a > b ? b > c ? c : b : a > c ? c : a;
}

console.log(f(a,b,c));