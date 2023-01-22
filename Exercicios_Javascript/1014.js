var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

let distance = parseInt(lines.shift())
let fuel = parseFloat(lines.shift())

let result = distance / fuel

console.log(result + ' km/l')