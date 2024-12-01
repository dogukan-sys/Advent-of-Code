const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8");

result = data.split('\r\n')

console.log(result)

let columnA = []
let columnB = []

for (let item of result) {
    let row = (item.split('   '))
    columnA.push(row[0])
    columnB.push(row[1])
}

columnA.sort()
columnB.sort()

let distance = 0

for (let i = 0; i < 1000; i++) {
    let distanceBetweenList = columnB[i] - columnA[i]
    if (distanceBetweenList < 0) {
        distanceBetweenList = distanceBetweenList * -1
    }
    distance += distanceBetweenList
}