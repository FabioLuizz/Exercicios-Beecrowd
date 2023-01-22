var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

var codigoPrimeiraPeca = lines.shift().split(' ');
var codigoSegundaPeca = lines.shift().split(' ');

var codigo1 = parseInt(codigoPrimeiraPeca[0]) 
var quantidade1 = parseInt(codigoPrimeiraPeca[1])
var valorUnitario1 = parseFloat(codigoPrimeiraPeca[2])

var codigo2 = parseInt(codigoSegundaPeca[0]) 
var quantidade2 = parseInt(codigoSegundaPeca[1])
var valorUnitario2 = parseFloat(codigoSegundaPeca[2])

var soma = ((quantidade1 * valorUnitario1) + (quantidade2 * valorUnitario2)).toFixed(2)

console.log(`VALOR A PAGAR: R$ ${soma}`)