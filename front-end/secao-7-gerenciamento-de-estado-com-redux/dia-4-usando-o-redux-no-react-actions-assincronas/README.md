# :pencil: Usando o Redux no React - Actions Assíncronas

O objetivo dos exercícios desse dia foi colocar em prática o que aprendido sobre como utilizar a assincronicidade no Redux para que pudesse criar `actions` _assíncronas_. Para isso deveria criar `actions` assíncronas em uma aplicação com **Redux**, utilização da biblioteca `redux-thunk` e entender o que é um `middleware` no **Redux**.

Os requisitos dos exercícios são:

## Game of Thunks

Chegou a hora de consolidar todos os conhecimentos de _Redux_ aprendidos até aqui. Você irá desenvolver uma aplicação que permitirá buscar informações sobre as personagens da famosa série de televisão: _Game of Thrones_.

A aplicação deve possuir:

 - Um _input_ que deverá receber o nome de um personagem da série (Jon Snow, Ned Stark, Arya Stark…);
 - Um botão que, ao ser clicado, deverá renderizar na tela as informações do personagem (nome, títulos, apelidos e qualquer outra informação recebida pela _API_ que você desejar) cujo nome foi inserido no _input_.

As informações dos personagens devem ser obtidas por meio de uma chamada à [API of Ice And Fire](https://anapioficeandfire.com/). Você pode utilizar o seguinte _endpoint_: `https://anapioficeandfire.com/api/characters?name=${NOME DO PERSONAGEM}`.

Você **deve** utilizar o _Redux_ como gerenciador do estado global da aplicação. As informações recebidas pela _API_ **devem** ser armazenadas no estado global (utilize o `middleware Thunk` da biblioteca `redux-thunk` para criar a _action_ assíncrona).

Crie uma nova aplicação _React_ com o comando npx `create-react-app game-of-thunks` e divirta-se codando!

⚠️ O `endpoint` somente consegue fazer buscas pelo nome completo da personagem - ou seja, realizar a busca por `Tyrion` não trará nenhum retorno, mas `Tyrion Lannister` sim.
