# :pencil: Node.js: API REST com Express

O objetivo dos exercícios desse dia foi aprender a conectar o Front-end com o Back-end. Para isso aprendi a fazer requisições e a conectar um banco de dados para guardar e obter dados. Aplicações que fazem isso na programação, tem um nome **APIs web**. Para isso deveria definir um Servidor, utilizar o _Node.js_ com o _framework Express_ para criar uma rota de um endpoint de API, acessível pelo navegador, utilizar o _Nodemon_ para auxiliar no desenvolvimento de APIs Node.js com o framework Express, utilizar o Node.js com o framework Express para receber e tratar requisições com parâmetros de rota, ou router params e consulta, ou query params, utilizar o Node.js com o framework Express para receber e tratar requisições com parâmetros em seu corpo, ou _body_, utilizar o Node.js com o framework Express para criar uma aplicação _C.R.U.D._ - de _criação_, _leitura_, _atualização_ e _remoção_ de dados, utilizar o _Thunder Client_ para fazer requisições a partir do VS Code e descrever uma _API REST_.

Os requisitos dos exercícios são:

## 🚀 Exercício 1

Qual é a função do código de status `400` e `422`?

## 🚀 Exercício 2

Qual é a função do código de status `401`?

Crie o diretório `src` e dentro dele um arquivo `movies.json` com o os filmes da nossa locadora:

```
[
  {
    "id": 1,
    "movie": "Avatar",
    "price": 5
  },
   {
    "id": 2,
    "movie": "Gente Grande",
    "price": 2
  },
  {
    "id": 3,
    "movie": "O Jogo",
    "price": 3
  },
  {
    "id": 4,
    "movie": "Quebrando a Banca",
    "price": 5
  },
  {
    "id": 5,
    "movie": "Lilo & Stitch",
    "price": 2
  },
  {
    "id": 6,
    "movie": "Os Fantasmas se Divertem",
    "price": 2
  },
  {
    "id": 7,
    "movie": "Meninas Malvadas",
    "price": 3
  }
]
```

Agora, faça os exercícios a seguir:

## 🚀 Exercício 3

Crie um servidor Node.js utilizando o framework Express.

## 🚀 Exercício 4

Crie uma função de leitura do JSON com o modulo _fs_.

## 🚀 Exercício 5

Crie um endpoint do tipo `GET` com a rota `/movies/:id`, que possa listar um filme do JSON por `id`.

## 🚀 Exercício 6

Crie um endpoint do tipo `GET` com a rota `/movies`, que possa listar todos os filmes do JSON.

## 🚀 Exercício 7

Crie um endpoint do tipo `POST` com a rota `/movies`, para cadastrar um novo filme no JSON.

O corpo da requisição deve receber o seguinte formato:

```
{
  "movie": "Vingadores",
  "price": 5
}
```

## 🚀 Exercício 8

Crie um endpoint do tipo `PUT` com a rota `/movies/:id`, que possa editar informações de um filme do JSON.

O corpo da requisição deve receber o seguinte formato:

```
{
  "movie": "Vingadores: Ultimato",
  "price": 5
}
```

## 🚀 Exercício 9

Crie um endpoint do tipo `DELETE` com a rota `/movies/:id` que possa deletar um filme do JSON.


## Exercícios - bônus

## 🚀 Exercício 10

Crie um endpoint do tipo `GET` com a rota `/movies/search`, que possa listar todos os filmes do JSON.

- A rota deve receber a informação por `query` e a chave deve-se chamar `q`. A chave vai trazer consigo valor de ‘gente’ por exemplo, e o filtro deve trazer apenas os filmes com esse termo, se não encontrar, traga um _array_ vazio.
