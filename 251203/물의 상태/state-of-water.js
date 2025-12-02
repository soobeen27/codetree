const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    let c = parseInt(line);
    c < 0 ? console.log("ice") : c >= 100 ? console.log("vapor") :  console.log("water");
    rl.close();
});
