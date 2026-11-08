/*
Receba um array e devolva outro com seus elementos repetidos duas vezes.

Entrada: [1, 2, 3]

Saída: [1, 2, 3, 1, 2, 3]

Treina: arrays, loops e push()
*/ 

const array = [1, 2, 3]

const newArray = []

for (let i = 0; i < array.length; i++){
    newArray.push(array[i])
}

console.log(newArray)