const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function printStr(nol) {
    for(let i = 0; i < nol; i++){
        console.log("12345^&*()_");
    }
}

printStr(n);