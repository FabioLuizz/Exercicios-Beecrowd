var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

let hours = parseInt(lines.shift(' '))
let speed = parseInt(lines.shift(' '))

let sum = ((hours * speed) / 12).toFixed(3)

console.log(sum)

