const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    const [a, b] = line.split(" ").map((num)=> parseInt(num));
    if (a > b) console.log(a * b);
    else console.log(Math.floor(b/a));
    rl.close();
});
