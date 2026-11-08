/*
Calcule a soma de todos os números.
Entrada

[10, 20, 30, 40]

Resultado esperado

100
*/

const numeros = [10, 20, 30, 40]

const soma = numeros.reduce((acumulador, numero) => acumulador += numero)

console.log(soma)