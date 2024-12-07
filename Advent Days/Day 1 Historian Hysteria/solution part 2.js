const fs = require("fs");

function getInput() {
    const data = fs.readFileSync("input.txt", "utf8");
    return data.split('\r\n')
}

function getColumns() {
    let columnA = []
    let columnB = []

    for (let item of getInput()) {
        let row = (item.split('   '))
        columnA.push(parseInt(row[0]))
        columnB.push(parseInt(row[1]))
    }

    columnA.sort()
    columnB.sort()
    return { columnA, columnB }
}

function getOccurrences(n, arr) {
    return arr.filter(v => v === n).length
}

function getSimilarityScore(columnA, columnB) {
    if (columnA.length === 0 ) {
        return 0
    }
    return columnA[0] * getOccurrences(columnA[0], columnB) + getSimilarityScore(columnA.slice(1), columnB)
}

const {columnA, columnB} = getColumns();

console.log(getSimilarityScore(columnA, columnB))

