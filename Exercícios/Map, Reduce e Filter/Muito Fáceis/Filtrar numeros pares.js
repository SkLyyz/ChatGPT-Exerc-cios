/*
Crie um array contendo apenas os números pares.
Entrada

[3, 8, 12, 15, 21, 26]

Resultado esperado

[8, 12, 26] 
*/

const numeros = [3, 8, 12, 15, 21, 26]

const pares = numeros.filter(numero => numero % 2 === 0)

console.log(pares)