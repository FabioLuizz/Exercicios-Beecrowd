var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

var employeeNumber = parseInt(lines.shift())
var workedHours = parseInt(lines.shift())
var hourlyWage = parseFloat(lines.shift())

var sum = (workedHours * hourlyWage)

console.log('NUMBER = ' + employeeNumber)
console.log('SALARY = U$ ' + sum.toFixed(2))