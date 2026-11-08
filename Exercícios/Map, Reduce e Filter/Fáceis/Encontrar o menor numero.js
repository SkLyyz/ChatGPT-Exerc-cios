/*
const numeros = [18, 5, 32, 2, 14, 9]

// Resultado esperado: 2
*/

const numeros = [18, 5, 32, 2, 14, 9]

const menor = numeros.reduce((acc, num) => {
    if (num < acc){
        return num
    }

    return acc
})

console.log(menor)