const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (line)=>{
    const [ a, b ] = line.split(" ").map(num=> parseInt(num) );
    console.log(Number(a >= b));
    console.log(Number(a > b));
    console.log(Number(a <= b));
    console.log(Number(a < b));
    console.log(Number(a === b));
    console.log(Number(a !== b));
    rl.close();
})