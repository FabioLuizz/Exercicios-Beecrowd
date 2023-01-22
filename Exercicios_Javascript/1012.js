var input = require('fs').readFileSync('Exercicios_Javascript/stdin', 'utf8');
var lines = input.split('\n');

let numbers = lines.shift().split(' ');

let A = parseFloat(numbers[0])
let B = parseFloat(numbers[1])
let C = parseFloat(numbers[2])

let areaRightTriangle = ((C * A) / 2).toFixed(3)
let circleArea = (3.14159 * (C ** 2)).toFixed(3)
let trapezeArea = (((A + B) * C) / 2).toFixed(3)
let squareArea = (B ** 2).toFixed(3)
let rectangleArea = (A * B).toFixed(3)

console.log(`TRIANGULO = ${areaRightTriangle}`)
console.log(`CIRCULO = ${circleArea}`)
console.log(`TRAPEZIO = ${trapezeArea}`)
console.log(`QUADRADO = ${squareArea}`)
console.log(`RETANGULO = ${rectangleArea}`)