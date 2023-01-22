var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift())
var B = parseFloat(lines.shift())

var sum = ((A * 3.5) + (B * 7.5)) / 11

console.log('MEDIA = ' + sum.toFixed(5))