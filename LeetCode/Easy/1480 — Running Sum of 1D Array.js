/*
Entrada: [1, 2, 3, 4]
Saída: [1, 3, 6, 10]
*/

const nums = [1,2,3,4]
const resultado = []
let soma = 0

for (const num of nums){
    soma += num
    resultado.push(soma)
}

console.log(resultado)