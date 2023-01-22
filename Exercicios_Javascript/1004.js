var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

var valueOne = parseInt(lines.shift())
var valueTwo = parseInt(lines.shift())

var PROD = 'PROD = ' + (valueOne * valueTwo)

console.log(PROD)