var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8')
var lines = input.split('\n')

let cedulas = [ 100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
let valor = parseFloat(lines)

console.log('NOTAS:')

for( let i = 0; i < 6; i++ ){

  let soma = parseInt( valor / cedulas[i] )
  valor = valor % cedulas[i]

  console.log(`${soma} nota(s) de R$ ${cedulas[i].toFixed(2)}`)
}

console.log('MOEDAS:')

for( let a = 6; a < cedulas.length; a++ ) {
  
  let soma = parseInt( valor / cedulas[a])
  valor = valor % cedulas[a] + 0.00001

  console.log(`${soma} moeda(s) de R$ ${cedulas[a].toFixed(2)}`)

}
