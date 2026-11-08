/*
Selecione apenas os produtos que custam menos de R$ 150.
Entrada

[{nome: 'Mouse', preco: 80}, {nome: 'Teclado', preco: 250}, {nome: 'Headset', preco: 120}]

Resultado esperado

[{nome: 'Mouse', preco: 80}, {nome: 'Headset', preco: 120}]
*/

const produtos = [
    {nome: 'Mouse', preco: 80}, 
    {nome: 'Teclado', preco: 250}, 
    {nome: 'Headset', preco: 120}]

const baratos = produtos.filter(produto => produto.preco < 150)

console.log(baratos)
