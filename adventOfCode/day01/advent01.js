let fs = require('fs')
let text = fs.readFileSync('./input.txt', {encoding:'utf8', flag:'r'})


const textByLine = text.split('\n')

// console.log(textByLine)

let sum = 0
const summedArray = []

for (let i = 0; i < textByLine.length; i++) {
  if (textByLine[i] === '') {
    summedArray.push(sum)
    sum = 0
  } else {
    sum += +textByLine[i]
  }
}

const sortedArray = summedArray.sort((a, b) => a-b).reverse()

console.log(sortedArray.slice(0, 3).reduce(((acc, val) => acc + val), 0))