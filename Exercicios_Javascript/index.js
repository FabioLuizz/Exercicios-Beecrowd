var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

let tempo = parseInt(lines.shift(' '))

let sum = tempo // 60

console.log(sum / 60 )
