const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
const f = (n) => {
    let start = 0;
    const sum =  Array.from({length : n}).map(()=>{
        start += 1;
        return start
    }).reduce((n, m)=> n+m, 0 );
    return Math.floor(sum / 10);
}
console.log(f(n));