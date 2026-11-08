# 📚 JavaScript — Map, Filter e Reduce

Os métodos `map()`, `filter()` e `reduce()` são utilizados para trabalhar com **arrays** no JavaScript.

Eles permitem percorrer os elementos de um array e realizar operações sem precisar escrever um `for` manualmente.

Apesar de serem parecidos, cada um possui uma finalidade diferente.

---

## 1. MAP() — Transformar elementos

O método `map()` serve para **transformar os elementos de um array**.

Ele percorre cada elemento, executa uma função e cria um novo array com os resultados.

**Exemplo:**

Imagine que temos um array com alguns números e queremos multiplicar todos por 2.

```js
const numeros = [2, 4, 6, 8]

const dobrados = numeros.map(numero => numero * 2)

console.log(dobrados)
// [4, 8, 12, 16]
```

### Como funciona?

1. O `map()` percorre cada número do array.
2. O parâmetro `numero` representa o elemento atual.
3. `numero * 2` multiplica cada elemento por 2.
4. O resultado de cada operação é adicionado ao novo array.

É como dizer ao JavaScript:

> "Pegue cada número desse array, multiplique por 2 e me devolva um novo array com os resultados."

### Sintaxe

```js
array.map(elemento => transformação)
```

Também podemos escrever assim:

```js
array.map(elemento => {
  return transformação
})
```

As duas formas funcionam. A diferença é que, usando `{}`, precisamos escrever `return` para devolver o resultado.

### Outro exemplo — Trabalhando com objetos

```js
const usuarios = [
  { nome: "Ana", idade: 20 },
  { nome: "Pedro", idade: 25 },
  { nome: "Lucas", idade: 18 }
]

const nomes = usuarios.map(usuario => usuario.nome)

console.log(nomes)
// ["Ana", "Pedro", "Lucas"]
```

Aqui, usamos `map()` para criar um array contendo apenas os nomes dos usuários.

**Quando usar?**

- Multiplicar ou modificar valores.
- Transformar textos.
- Extrair propriedades de objetos.
- Criar um novo array a partir de outro.

**Importante:** o `map()` sempre retorna um novo array com a mesma quantidade de elementos do original.

---

## 2. FILTER() — Filtrar elementos

O método `filter()` serve para **selecionar apenas os elementos que atendem a uma condição**.

Diferentemente do `map()`, ele não tem como objetivo transformar os valores, mas decidir quais devem permanecer no novo array.

**Exemplo:**

Imagine que queremos encontrar apenas os números maiores que 10.

```js
const numeros = [5, 12, 8, 20, 3, 15]

const maiores = numeros.filter(numero => numero > 10)

console.log(maiores)
// [12, 20, 15]
```

### Como funciona?

1. O `filter()` percorre cada elemento.
2. Verifica se o número é maior que 10.
3. Se a condição for `true`, mantém o elemento.
4. Se for `false`, ignora aquele elemento.

É como dizer:

> "Percorra todos os números e guarde apenas aqueles que forem maiores que 10."

### Sintaxe

```js
array.filter(elemento => condição)
```

A condição precisa resultar em um valor verdadeiro ou falso.

### Outro exemplo — Filtrando usuários

```js
const usuarios = [
  { nome: "Ana", idade: 20 },
  { nome: "Pedro", idade: 15 },
  { nome: "Lucas", idade: 18 }
]

const adultos = usuarios.filter(usuario => usuario.idade >= 18)

console.log(adultos)
// [
//   { nome: "Ana", idade: 20 },
//   { nome: "Lucas", idade: 18 }
// ]
```

Nesse exemplo, apenas os usuários com 18 anos ou mais permanecem no resultado.

**Quando usar?**

- Encontrar números pares ou ímpares.
- Selecionar valores maiores ou menores que determinado número.
- Filtrar usuários por idade.
- Buscar produtos de determinada categoria.
- Remover elementos que não atendem a uma condição.

**Importante:** o `filter()` pode retornar um array menor que o original ou até mesmo vazio. Ele também pode manter todos os elementos.

---

## 3. REDUCE() — Acumular resultados

O método `reduce()` é utilizado para **combinar os elementos de um array em um resultado final**.

Esse resultado pode ser um número, uma string, um objeto ou até outro array.

Uma utilização muito comum é somar todos os números de um array.

**Exemplo:**

```js
const numeros = [10, 20, 30, 40]

const soma = numeros.reduce((acumulador, numero) => {
  return acumulador + numero
}, 0)

console.log(soma)
// 100
```

### Como funciona?

O `reduce()` utiliza dois conceitos principais:

- **Acumulador:** guarda o resultado das operações anteriores.
- **Elemento atual:** representa o número que estamos percorrendo naquele momento.

O `0` depois da função é o **valor inicial do acumulador**.

Veja o que acontece em cada repetição:

| Repetição | Acumulador | Número | Resultado |
|---|---|---|---|
| 1 | 0 | 10 | 10 |
| 2 | 10 | 20 | 30 |
| 3 | 30 | 30 | 60 |
| 4 | 60 | 40 | 100 |

Ao final, o `reduce()` devolve o valor `100`.

É como dizer:

> "Comece com zero, percorra os números e vá somando cada um ao resultado anterior."

### Sintaxe

```js
array.reduce((acumulador, elemento) => {
  return novoValorDoAcumulador
}, valorInicial)
```

Também podemos simplificar:

```js
const soma = numeros.reduce((acc, num) => acc + num, 0)
```

`acc` é apenas uma abreviação de acumulador. Você pode utilizar qualquer nome para os parâmetros.

### Outro exemplo — Somando preços

```js
const produtos = [
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 700 }
]

const total = produtos.reduce((acumulador, produto) => {
  return acumulador + produto.preco
}, 0)

console.log(total)
// 930
```

O acumulador começa em zero e recebe o preço de cada produto, até formar o valor total da compra.

### Por que colocar o valor inicial?

Utilizar um valor inicial torna o funcionamento mais previsível.

Por exemplo, ao somar números, geralmente começamos em `0`.

```js
numeros.reduce((acc, num) => acc + num, 0)
```

Se quisermos multiplicar todos os números, podemos começar em `1`.

```js
numeros.reduce((acc, num) => acc * num, 1)
```

Sem um valor inicial, o JavaScript utiliza o primeiro elemento do array como acumulador, mas isso provoca um erro se o array estiver vazio.

**Quando usar?**

- Somar valores.
- Calcular totais de compras.
- Multiplicar números.
- Contar ocorrências.
- Agrupar informações.
- Construir objetos a partir de arrays.

---

## 4. Qual é a diferença entre eles?

| Método | Finalidade | Retorno |
|---|---|---|
| `map()` | Transformar elementos | Novo array com o mesmo tamanho |
| `filter()` | Selecionar elementos | Novo array com os elementos selecionados |
| `reduce()` | Acumular informações | Um resultado final de qualquer tipo |

### Exemplo com o mesmo array

```js
const numeros = [1, 2, 3, 4, 5]
```

**MAP — Multiplicar todos por 2**

```js
const resultado = numeros.map(num => num * 2)

// [2, 4, 6, 8, 10]
```

**FILTER — Selecionar apenas os pares**

```js
const resultado = numeros.filter(num => num % 2 === 0)

// [2, 4]
```

**REDUCE — Somar todos os elementos**

```js
const resultado = numeros.reduce((acc, num) => acc + num, 0)

// 15
```

Observe que utilizamos o mesmo array, mas obtivemos resultados diferentes.

---

## 5. Podemos combinar esses métodos?

Sim! Uma das vantagens desses métodos é que podemos encadeá-los para realizar várias operações.

Por exemplo, imagine que queremos selecionar apenas os números pares, multiplicá-los por 2 e somar os resultados.

```js
const numeros = [1, 2, 3, 4, 5, 6]

const resultado = numeros
  .filter(num => num % 2 === 0)
  .map(num => num * 2)
  .reduce((acc, num) => acc + num, 0)

console.log(resultado)
// 24
```

O que aconteceu?

1. `filter()` selecionou `[2, 4, 6]`.
2. `map()` transformou o resultado em `[4, 8, 12]`.
3. `reduce()` somou `4 + 8 + 12`, resultando em `24`.

Esse estilo de programação é muito utilizado no JavaScript moderno.

Entretanto, **nem sempre encadear métodos é a melhor solução**. Em arrays muito grandes, várias operações podem criar arrays intermediários desnecessários. Dependendo do problema, um único `for` pode ser mais eficiente e igualmente legível.

---

## 6. Dicas para lembrar

**MAP → Transformar**

Quando você precisar modificar cada elemento e devolver um array com os resultados, pense em `map()`.

**FILTER → Selecionar**

Quando precisar escolher apenas os elementos que atendem a uma condição, pense em `filter()`.

**REDUCE → Acumular**

Quando precisar combinar vários elementos para produzir um resultado, pense em `reduce()`.

### Uma última observação

`map()` e `filter()` criam novos arrays, sem alterar diretamente o array original. O `reduce()` também não modifica automaticamente o array original.

Isso não significa que seja impossível alterar objetos dentro desses métodos. Evite modificar os elementos originais sem necessidade, pois isso pode tornar o código mais difícil de entender.

**O mais importante não é decorar os métodos, mas compreender o problema e escolher aquele que melhor representa a operação desejada.**
