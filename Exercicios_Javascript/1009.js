var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

var name = String(lines.shift())
var salary = parseFloat(lines.shift())
var sales = parseFloat(lines.shift())

var formula = ((sales * 0.15) + salary)

console.log('TOTAL = R$ ' + formula.toFixed(2))