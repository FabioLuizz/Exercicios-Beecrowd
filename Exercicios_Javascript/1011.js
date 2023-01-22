var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

let ray = 3
let pi =  3.14159

let sum = ((4.0/3) * pi * ray ** 3).toFixed(3)

console.log(`VOLUME = ${sum}` )