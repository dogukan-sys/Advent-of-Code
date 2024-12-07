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

function getDistance(columnA, columnB) {
    if (columnA.length === 0) {
        return 0
    }
    return Math.abs(columnB[0] - columnA[0]) + getDistance(columnA.slice(1), columnB.slice(1))
}

const {columnA, columnB} = getColumns();
console.log(getDistance(columnA, columnB))