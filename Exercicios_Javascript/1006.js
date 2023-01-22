var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift())
var B = parseFloat(lines.shift())
var C = parseFloat(lines.shift())

var sum = ((A * 2) + (B * 3) + (C * 5)) / 10

console.log('MEDIA = ' + sum.toFixed(1))