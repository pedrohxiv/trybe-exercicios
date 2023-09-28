# :pencil: Testes em React-Redux

O objetivo dos exercícios desse dia foi colocar em prática o que aprendido sobre testes assíncronos com **react-redux**. Para isso deveria testar aplicações react-redux, testar aplicações react-redux com Thunk e testar aplicações que utilizam Redux e Rotas.

Os requisitos dos exercícios são:

Esse repositório contém uma aplicação funcional, que utiliza a [Poke API](https://pokeapi.co/) e traz o nome e a imagem de cada Pokémon, de forma randômica.

Seu objetivo nesse exercício de fixação é utilizar todos os aprendizados sobre testes assíncronos para garantir que aplicações em React com Redux funcionem corretamente.

- Para implementar seus testes, edite o arquivo `./App.test.tsx`, que se encontra dentro da pasta src, na raiz do projeto. As configurações necessárias para que os testes funcionem corretamente já estão feitas:
  - O *mock* da função *fetch*, no arquivo `src/__mocks__/mockFetch.ts`.
  - O *mock* do retorno da Poke Api, no arquivo `src/__mocks__/pokemon.ts`.
  - A função `renderWithRedux`, no arquivo `src/helpers/renderWithRedux.ts`.

- Ler a aplicação, entendê-la e saber o que testar também é parte do exercício.

## Exercício 1

Neste exercício, você deverá testar se, ao renderizar a página, o botão responsável por trazer as informações do próximo Pokémon está presente na tela.

<details>
  <summary>Testes que deverão ser feitos: </summary>

1. Teste se o fetch é chamado uma vez ao carregar a página.
2. Teste se, após a primeira chamada do fetch, o botão de "Próximo Pokémon" está presente na tela.

</details>

## Exercício 2

Neste exercício, você deverá testar se a aplicação faz uma requisição para exibir o primeiro Pokémon quando a página é carregada.

<details>
  <summary>Testes que deverão ser feitos: </summary>

1. Teste se o fetch é chamado apenas uma vez ao carregar a página.
2. Teste se o fetch foi chamado utilizando o endpoint de um Pokémon.
    - Você pode utilizar o endpoint do _Froakie_ para construir esse teste: `https://pokeapi.co/api/v2/pokemon/656/`.

    > **OBS.:** A chamada do fetch depende do retorno da função `randomNumber`. Portanto, para testar se o fetch é chamado com um endpoint específico, você deve ser capaz de controlar o valor que é retornado pela `randomNumber`.

</details>

## Exercício 3

Neste exercício, você fará os testes básicos para verificar se a renderização é feita corretamente, além de testar se, toda vez que o botão da aplicação é clicado, ele faz uma requisição com dados diferentes para o endpoint.

<details>
  <summary>Testes que deverão ser feitos: </summary>

1. Teste se, após clicar no botão que traz o próximo Pokémon, o fetch foi chamado novamente, mas agora utilizando o endpoint com o número identificador de outro Pokémon.
    - Você pode utilizar o endpoint do _Drowzee_ para construir esse teste: `https://pokeapi.co/api/v2/pokemon/96/`.
    - Lembre-se de controlar o valor que é retornado pela função `randomNumber`.

</details>

## Exercício 4

Neste exercício, você deverá testar se os elementos contendo as informações do Pokémon são renderizados.

<details>
  <summary>Testes que deverão ser feitos: </summary>

A tela inicia com um Pokémon renderizado. Com base nisso:

1. Teste se o elemento que exibe o nome do Pokémon está presente na tela. Você pode verificar se o `data-testid=pokemon-name` está na tela.
2. Teste se o elemento que exibe a imagem do Pokémon está presente na tela.
    > Você pode utilizar a [documentação da React Testing Library](https://testing-library.com/docs/queries/about/) para encontrar a query mais adequada para esse caso.

</details>
