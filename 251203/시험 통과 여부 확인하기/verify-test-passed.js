const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    let num = parseInt(line);
    if (num >= 80) {
        console.log("pass");
    } else {
        console.log(`${80 - num} more score`)
    }
    rl.close();
});