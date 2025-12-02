const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    const m = parseInt(line);
    console.log(m >= 3000 ? "book" : m >= 1000 ? "mask" : "no");
    rl.close();
});
