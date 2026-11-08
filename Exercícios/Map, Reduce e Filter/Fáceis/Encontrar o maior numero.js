/*
Encontre o maior número do array usando reduce().
Entrada

[5, 12, 3, 28, 9]

Resultado esperado

28
*/

const numeros = [5, 12, 3, 28, 9]

const maiorNumero = numeros.reduce((acc, num) => {
    if (num > acc){
        return num
    }
    return acc
} ,0)

console.log(maiorNumero)

// ou

/*
const numeros = [5, 12, 3, 28, 9]

const maior = numeros.reduce((acc, numero) => Math.max(acc, numero))

console.log(maior)
*/