const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
const isPrime = (n) => {
    let flag = true;
    for (i = 2; i < n; i++) {
        if (n % i === 0) flag = false;
    }
    return flag;
}

const sumOfPrimes = (a, b) => {
    return Array.from({length: b - a + 1}, (_, i) => a + i).filter((n)=> { if(isPrime(n)) return n }).reduce((a,b) => a + b , 0)
}

console.log(sumOfPrimes(parseInt(A), parseInt(B)));