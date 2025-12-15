const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
const f = (a, b) => {
    return Array.from({length: b - a + 1}, (_, i)=> a + i).filter((n)=>{
        if (n % 3 === 0) return n
        return Array.from(n.toString()).filter((char)=> char === "3" || char === "6" || char === "9").length > 0
    }).length
}



console.log(f(A,B))