var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8')
var lines = input.split('\n')

const values = lines.shift().split(' ')

const A = parseFloat(values[0])
const B = parseFloat(values[1])
const C = parseFloat(values[2])

const result = B * B - 4 * A * C

const SecondResult = ((-B - Math.sqrt(result)) / (2 * A)).toFixed(5)
const FirstResult = ((-B + Math.sqrt(result)) / (2 * A)).toFixed(5)

if (A !== 0 && result > -1) {
  console.log(`R1 = ${FirstResult}`)
  console.log(`R2 = ${SecondResult}`)
} else {
  console.log('Impossivel calcular')
}
