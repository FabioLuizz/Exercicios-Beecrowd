var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

let notas = parseInt(lines.shift(' '))
let atual = notas

let notasDe100 = parseInt(atual / 100)
atual -= notasDe100 * 100

let notasDe50 = parseInt(atual / 50)
atual -= notasDe50 * 50

let notasDe20 = parseInt(atual / 20)
atual -= notasDe20 * 20

let notasDe10 = parseInt(atual / 10)
atual -= notasDe10 * 10

let notasDe5 = parseInt(atual / 5)
atual -= notasDe5 * 5

let notasDe2 = parseInt(atual / 2)
atual -= notasDe2 * 2

let notasDe1 = parseInt(atual / 1)
atual -= notasDe1 * 1


console.log(notas)
console.log(notasDe100 + ' nota(s) de R$ 100,00')
console.log(notasDe50 + ' nota(s) de R$ 50,00')
console.log(notasDe20 + ' nota(s) de R$ 20,00')
console.log(notasDe10 + ' nota(s) de R$ 10,00')
console.log(notasDe5 + ' nota(s) de R$ 5,00')
console.log(notasDe2 + ' nota(s) de R$ 2,00')
console.log(notasDe1 + ' nota(s) de R$ 1,00')