const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

// Please Write your code here.
function draw1Square(n, m) {
    let star = ""
    for(let i = 0; i < m; i++) {
        star += "1";
    }
    for (let i = 0; i < n; i++) {
        console.log(star);
    }
}

draw1Square(n, m);