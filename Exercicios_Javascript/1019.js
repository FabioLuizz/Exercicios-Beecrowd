var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

let time = parseInt(lines.shift(' '))

let hours = parseInt(time / 3600)
time = time % 3600

let minutes = parseInt(time / 60)
time = time % 60

let seconds = parseInt(time % 60)

console.log(`${hours}:${minutes}:${seconds}`)