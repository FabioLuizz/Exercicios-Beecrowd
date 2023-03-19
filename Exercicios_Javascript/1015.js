var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

const p1 = lines.shift().split('')
const p2 = lines.shift().split(' ')

const x1 = (p1[0])
const y1 = (p1[1])
const x2 = (p2[0])
const y2 = (p2[1])

const sum = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2)).toFixed(4)

console.log(sum)