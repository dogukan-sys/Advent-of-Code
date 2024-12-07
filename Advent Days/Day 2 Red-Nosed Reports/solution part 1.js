const fs = require("fs");

function getInput() {
    const data = fs.readFileSync("input.txt", "utf8");
    return data.split('\r\n')
}

function isSafe(arr) {
    let isIncreasing = arr[1] > arr[0]
    let isValid = true
    for (let i = 0; i < arr.length - 1; i++) {
        const diff = Math.abs(arr[i] - arr[i + 1])
        if (isIncreasing) {
            if (diff < 1 || diff > 3 || arr[i+1] < arr[i]) {
                isValid = false
                break
            }
        } else {
            if (diff < 1 || diff > 3 || arr[i+1] > arr[i]) {
                isValid = false
                break
            }
        }
    }
    return isValid
 }


function analyzeData(arr) {
    let safeCounter = 0;
    arr.forEach(curr => {
        const splitCur = curr.split(' ')
        const numberRow = splitCur.map(str => parseInt(str)) // fuck this bs
        if (isSafe(numberRow)) {
            safeCounter++
        }
    });
    return safeCounter;
}

console.log(analyzeData(getInput()));