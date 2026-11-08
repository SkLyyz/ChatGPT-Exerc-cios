/* 
Transforme todos os nomes em letras maiúsculas.
Entrada

["ana", "pedro", "lucas"]

Resultado esperado

["ANA", "PEDRO", "LUCAS"]
*/

const nomes = ["ana", "pedro", "lucas"]

const maiusculos = nomes.map(nome => nome.toUpperCase())

console.log(maiusculos)