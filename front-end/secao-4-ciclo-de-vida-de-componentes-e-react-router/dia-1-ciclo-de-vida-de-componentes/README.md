# :pencil: Ciclo de vida de componentes



Os requisitos dos exercícios são:

## Dogs API

Neste exercício você vai desenvolver uma página que consome a API [dog.ceo](https://dog.ceo/dog-api/) de fotos aleatórias de cachorros!

### 1. Crie uma aplicação que consuma a API de fotos aleatórias de cachorros

Nesse exercício você deve desenvolver uma aplicação React que fará requisições para uma API externa, a `dog.ceo` no endpoint https://dog.ceo/api/breeds/image/random para recuperar imagens de doguinhos. Todo seu código deverá ser implementado no `App.js`. 

Ao utilizar essa aplicação uma pessoa usuária deverá ser capaz de:

- Fazer uma requisição para a API (endpoint: https://dog.ceo/api/breeds/image/random), para recuperar imagens de doguinhos aleatórios.
  - > 👀 **De olho na dica:** utilize o método `componentDidMount`. Uma dica para seu estado inicial é usar as chaves `imageUrl` e `isLoading`.

- Visualizar uma foto aleatória de um doguinho assim que a página for montada.

- Na primeira vez em que a página carrega, o texto "Loading..." deve ser a única coisa presente na tela.

- Ao receber o retorno da requisição, uma imagem deve ser renderizada com a URL recebida da API. Essa imagem deve ter o atributo `alt` com o valor "Doguinho aleatório".

- Deve existir um botão que dispare uma nova requisição para API quando for clicado. Esse botão deve ter o texto "Novo doguinho!". 
  - > 👀 **De olho na dica:** Atenção, nesta nova requisição, não é necessário mostrar novamente o `Loading...`

<details>
  <summary><strong>O que será verificado</strong></summary><br />


- Será verificado se existe um texto `Loading...` presente na tela enquanto a requisição é feita.

- Será verificado se existe uma imagem com o atributo `alt` com valor `Doguinho aleatório`.

- Será verificado se a imagem renderizada possui o atributo `src` com o valor da URL recebida da API.

- Será verificado se existe um botão com o texto `Novo doguinho!`.

</details>

---

### 2. Adicione algumas ações após receber o retorno da requisição para API

- A cada tentativa de atualização do componente, verifique se a URL da imagem possui a palavra `terrier`. Caso tenha, **não** atualize o componente. 

> 👀 **De olho na dica:** pesquise pelo método `includes` e utilize o método `shouldComponentUpdate`. 

- Guarde a URL da última imagem gerada no `localStorage` após cada atualização, utilizando o método `componentDidUpdate`.

- Após a atualização do componente, exiba um `alert` com a raça do doguinho.

> 👀 **De olho na dica:** utilize o método `split` para pegar a raça a partir da URL da imagem e utilize o método `componentDidUpdate`.


<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Será verificado se, quando a URL da imagem possuir a palavra `terrier`, o componente **não** é atualizado.

- Será verificado se a imagem gerada é salva no `localStorage`.

- Será verificado se um `alert` é exibido informando a raça do doguinho.

</details>

