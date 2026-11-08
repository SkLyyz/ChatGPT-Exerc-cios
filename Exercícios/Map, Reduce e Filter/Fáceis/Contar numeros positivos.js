/*
Agora vamos aumentar um pouquinho a dificuldade.

Você recebeu o seguinte array:
const numeros = [-3, 5, 0, 8, -1, 12, -7]


Objetivo: usar reduce() para contar quantos números são maiores que zero.

Resultado esperado:
3


Atenção: você não deve somar os números positivos, mas contar quantos existem.
*/

const numeros = [-3, 5, 0, 8, -1, 12, -7]

const maiorQueZero = numeros.reduce((acc, num) => {
  if (num > 0) {
    return acc + 1
  }

  return acc
}, 0)

console.log(maiorQueZero)