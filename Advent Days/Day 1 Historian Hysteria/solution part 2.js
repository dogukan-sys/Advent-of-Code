const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8");

result = data.split('\r\n')


let columnA = []
let columnB = []

for (let item of result) {
    let row = (item.split('   '))
    columnA.push(row[0])
    columnB.push(row[1])
}

function getOccurrences(n) {
    return columnB.filter(v => v === n).length
}

let similarityScore = 0

columnA.forEach(v => {
    similarityScore += v * getOccurrences(v)
})

console.log(similarityScore)