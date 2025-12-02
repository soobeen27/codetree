const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    const [a, b] = line.split(" ").map(n=> parseInt(n));
    let bBigger = a < b;
    let equal = a === b;
    console.log(Number(bBigger), Number(equal));
    rl.close();
});
