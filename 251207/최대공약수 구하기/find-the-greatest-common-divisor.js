const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.
function getGCD(n, m) {
    return n % m === 0 ? m : getGCD(m, (n%m));
}
console.log(getGCD(n,m));