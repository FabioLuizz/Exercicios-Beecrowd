var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

let values = lines.shift().split(' ')

let A = parseInt(values[0])
let B = parseInt(values[1])
let C = parseInt(values[2])

let result = (A+B+Math.abs(A-B))/2

let larger = (result + C + Math.abs(result - C)) / 2

console.log(larger + ' eh o maior')