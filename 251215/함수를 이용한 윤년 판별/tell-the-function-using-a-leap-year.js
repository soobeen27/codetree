const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);
// Please Write your code here.
const isLeap = (y) => {
    if (y % 4 === 0) {
        if (y % 100 === 0) {
            if (y % 400 !== 0) {
                return false;
            }
        }
        return true;
    }
    return false;
}

console.log(isLeap(y));