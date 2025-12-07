const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.
function lcm(n, m) {
    const gcd = (n, m) => { return n % m === 0 ? m : gcd(m, n%m)};
    return (n * m) /gcd(n, m);
}

console.log(lcm(n,m));

