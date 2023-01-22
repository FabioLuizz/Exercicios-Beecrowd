var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

var entry = parseFloat(lines.shift());

var number = 3.14159;

var formula = Math.pow(entry, 2)

console.log('A=' + ((number * formula).toFixed(4)))
