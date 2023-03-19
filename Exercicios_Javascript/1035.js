var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

const VALUES = lines.shift().split(' ')

var A = parseInt(VALUES[0])
var B = parseInt(VALUES[1])
var C = parseInt(VALUES[2])
var D = parseInt(VALUES[3])

var result_C = Math.sign(C, D)
var result_D = Math.sign(D)

if (B > C && D > A && C + D > A + B && result_C === 1 && result_D === 1 && A % 2 === 0) {
  console.log('Valores aceitos')
} else {
  console.log('Valores nao aceitos')
}
