/*
const numeros = [2, 5, 8, 11, 14, 17, 20]

// Resultado esperado: 4


Objetivo: contar quantos números pares existem no array utilizando reduce().
*/

const numeros = [2, 5, 8, 11, 14, 17, 20]

const pares = numeros.reduce(
  (acc, num) => acc + (num % 2 === 0 ? 1 : 0),
  0
)

console.log(pares)

