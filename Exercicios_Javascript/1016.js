var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

let minutes = parseInt(lines.shift(''))

let sum = (minutes * 2)

console.log(sum + ' minutos')