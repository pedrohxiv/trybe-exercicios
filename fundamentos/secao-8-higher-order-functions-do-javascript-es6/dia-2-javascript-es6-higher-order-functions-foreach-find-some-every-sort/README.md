# :pencil: JavaScript ES6 - Higher Order Functions - forEach, find, some, every, sort

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre algumas HOFs que são utilizadas com arrays, facilitando muito a manipulação e criação de arrays. Para isso deveria utilizar a função `Array.forEach` para iterar sobre todos os elementos de um array, utilizar a função `Array.find` para encontrar o primeiro elemento de um array que satisfaça a uma condição, utilizar as funções `Array.some` e `Array.every` para testar se os elementos de um array satisfazem a uma condição e utilizar a função `Array.sort` para ordenar arrays de acordo com algum critério.

Os requisitos dos exercícios são:

##  Organizando uma biblioteca

Nos exercícios a seguir, você trabalhará com uma estrutura de dados representando uma lista de livros, contendo informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.

Estes exercícios praticam os conceitos de _Higher Order Functions_ associados a outros já vistos, como _arrow functions_, _template literals_, _objetos_ e temas dos fundamentos. Essa mistura de conceitos é muito importante para o seu aprendizado, então use tudo o que sabe para resolver os exercícios!

**Utilize o seguinte código como template para realizar os exercícios:**

```
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
```

- Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

> **De olho na dica 👀:** _use a função `find`_.

```
function authorBornIn1947() {
  // escreva aqui o seu código
}
```

- Retorne o nome do livro de menor nome.

> **De olho na dica 👀:** _use a função `forEach`_.

```
function smallerName() {
  let nameBook;
  // escreva aqui o seu código

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
```

- Encontre o primeiro livro cujo nome possui 26 caracteres.

```
const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
        name: 'George R. R. Martin',
    birthYear: 1948,
  },
    releaseYear: 1991,
};
function getNamedBook() {
  // escreva seu código aqui
}
```

- Ordene os livros por data de lançamento em ordem decrescente.

```
const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
}
```

- Faça uma função que retorne `true`, se todas as pessoas autoras nasceram no século XX, ou `false`, caso contrário.

```
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
}
```

- Faça uma função que retorne `true`, se algum livro foi lançado na década de 80, e `false`, caso contrário.

```
const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
}
```

- Faça uma função que retorne `true`, caso nenhum author tenha nascido no mesmo ano, e `false`, caso contrário.

```
const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
}
```
