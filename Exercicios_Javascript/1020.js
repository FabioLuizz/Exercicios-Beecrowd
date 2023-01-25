var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

let days = parseInt(lines)

let year = parseInt(days / 365)
days = days % 365

let month = parseInt(days / 30)
days = days % 30

let result = `${year} ano(s) 
${month} mes(es) 
${days} dia(s)`

console.log(result)