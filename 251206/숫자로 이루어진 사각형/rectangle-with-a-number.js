const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please write your code here.
function drawSquare(n) {
    let num = 1;
    for (let i = 0; i < n; i++) {
        for (let a = 0; a < n; a++) {
            process.stdout.write(`${num} `);
            num === 9 ? num = 1 : num++;
        }
        process.stdout.write("\n");
    }
}

drawSquare(N);