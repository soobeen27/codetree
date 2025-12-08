const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
const f2 = (n) => {
    const sum = Array.from(n.toString()).map((n)=>parseInt(n)).reduce((a,b)=>a+b,0);
    return sum % 5 === 0
}
const f = (n) => {
    return n % 2 === 0 ? f2(n) ? "Yes" : "No" : "No";
}

console.log(f(n));