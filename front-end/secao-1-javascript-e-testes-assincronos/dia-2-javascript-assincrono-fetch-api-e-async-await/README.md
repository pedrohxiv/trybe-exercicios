# :pencil: JavaScript Assíncrono - Fetch API e async/await

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido a como colher dados de um serviço de terceiro utilizando a API dele através do _JavaScript assíncrono_. Para isso deveria utilizar _then()_ e _catch()_, utilizar _async/await_ em conjunto com o _try/catch_ e fazer integrações com _APIs_ de terceiros.

Os requisitos dos exercícios são:

## Crypto API

Que tal usar o conhecimento adquirido na prática? Vamos consultar uma API que fornece os valores de crypto moedas e depois mostrar apenas as 10 primeiras.

**⚠️ Atenção**: A documentação para a `API` que vamos utilizar esta disponível nesse [link](https://docs.coincap.io/).

- Seu objetivo é tentar descobrir qual url vamos utilizar para buscar as informações das quais precisamos, neste caso um `array` que tenha uma listagem das crypto moedas.

Aviso: Caso tenha ficado alguma dúvida, veja a dica a seguir <strong>(spoiler alert!)</strong>
> **Dica**: Por se tratar de uma API pública, a quantidade de requisições a ela é limitada. Com isso, caso se depare com o seguinte erro: `FetchError: invalid json response body at (url da API) reason: Unexpected token T in JSON at position 0`, significa que você foi bloqueado temporariamente. Para resolver isso, basta esperar 1 ou 2 minutos que poderá voltar a usá-la normalmente.

> **Dica 2**: Sempre que for lidar com requisições, lembre-se de tratar as possíveis falhas utilizando um bloco `try... catch` ou um `.catch()`. Afinal, se falhar sua requisição, como saberemos o que aconteceu? :point_left:

#### 1 . Vamos consultar uma `API` que fornece os valores de crypto moedas

<details>
  <summary>Dentro da função <code> fetchCoins</code>, implemente uma requisição que vai consumir a <code>API</code> crypto moedas</summary><br />

Tente identificar qual é o end point que você deverá usar, para isso leia a [documentação](https://docs.coincap.io/)
  
<details>
<summary><strong> De olho na dica 👀 </strong></summary><br />

```
url: `https://api.coincap.io/v2/assets`
```
</details>


  - Dentro do arquivo `apiCoins.js`, faça uma requisição para consumir a `API` dentro da função `fetchCoins`. 
  > Dica: Utilize o `console.log` para verificar se a requisição deu certo.
  

<details>
    <summary><strong> Exemplo de como deve ficar na tela: </strong></summary><br />
  
```javascript
[
   {
    id:"bitcoin",
    rank:"1",
    symbol: "BTC",
    name: "Bitcoin",
    outros...,
    priceUsd: "21913.4381395693292358",
  },
  {
    id:"ethereum",
    rank:"2",
    symbol: "USDT",
    name: "Tether",
    outros...,
    priceUsd: "1.0001155957689619",
  },
   etc...
 ]
```
</details> 


  - Pronto! Agora temos um `array` com os dados das moedas e um esqueleto do HTML.
  
</details>

  
 #### 2. Agora, vamos fazer com que as moedas apareçam na tela. 
 
 <details>
  <summary> Dentro da <code> ul</code> com id <code>coins-list</code>, crie uma <code>li</code> para cada moeda da requisição com base nas orientações a seguir: </summary>
  
  - Todas as <code>li</code> devem estar dentro do <code>ul</code> com id <code>coins-list</code>;

  - Utilize o seguinte formato: `Nome da moeda (símbolo da moeda): valor em dólares`; 
  > Exemplo: `Bitcoin (BTC): 46785.06`.

  ***Dica***: O template ***strings*** mostra na tela `name`, `symbol` e `priceUsd`;

  ***Dica***: O [`toFixed`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) deixa o `priceUsd` com duas casas decimais
</details>  
  
  #### 3. Mostrando somente as 10 primeiras moedas da requisição
  
 <details>
  <summary> Você conseguiu mostrar as moedas na tela? Agora, que tal filtrar o array das moedas para mostrar apenas as 10 primeiras? </summary><br />

   <details>
    <summary><strong> De olho na dica 👀 </strong></summary><br />

     Pesquise no google: "exibir os primeiros elementos de um array javascript".
   </details> 
 </details> 

## Exercício bônus

Vamos usar a função `fetch` para criar um site simples com um _gerador de piadas ruins!_. Como? Vamos praticar!

- Antes de tudo, veja o [manual da API do site icanhazdadjoke.com](https://icanhazdadjoke.com/api), ele esclarece como fazer as requisições ao serviço de piadas. Por enquanto, é necessário somente que você faça uma leitura breve.

Agora, vamos entender como funciona essa _API_:

- Para começar, vamos fazer uma requisição via browser. Visite o site [icanhazdadjoke.com](https://icanhazdadjoke.com/api) e perceba que ele devolve uma página _HTML_ com uma piada aleatória.
- Em seguida, no terminal, vamos fazer a requisição: `curl -H "Accept: text/html" "https://icanhazdadjoke.com/"`. Perceba que o retorno é um _HTML_ idêntico ao de uma requisição via browser com uma piada aleatória.
- Para a próxima requisição, vamos usar o comando: `curl -H "Accept: text/plain" "https://icanhazdadjoke.com/"`. Veja que agora recebemos apenas a piada aleatória em formato texto.
- Por fim, faça a requisição: `curl -H "Accept: application/json" "https://icanhazdadjoke.com/"`. Agora a _API_ retorna um objeto no formato JSON. Perceba que, dependendo do que passamos na chave `Accept:` no header, definido por `-H` no comando, o serviço nos retorna uma resposta diferente.
- Utilize o _HTML_ e o `js` a seguir como base:

```
<!-- jokes.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Best jokes ever</title>
  <script src="apiScript.js" ></script>
  </head>
  <body>
    <h1>Get ready for a great joke!</h1>
    <h2 id="jokeContainer"></h2>
  </body>
</html>
```

```
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
};

window.onload = () => fetchJoke();
```

- Agora, vamos tentar fazer as requisições a _API_ usando `fetch`. Essa função recebe dois parâmetros:
  1. O endereço para o qual a requisição será feita, ou seja, a url do serviço.
  2. Um objeto contendo as especificações da requisição. Para essa _API_, atribuiremos a esse objeto as chaves `method` e `headers`

```
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

  fetch(API_URL, myObject);
};

window.onload = () => fetchJoke();

```

O segundo parâmetro `myObject` define o tipo de request `method: 'GET'` e o formato da resposta `headers: { 'Accept': 'application/json' }`, como visto nas requisições via `curl`.

- A função `fetch` **é uma** _Promise_ e, como tal, dependendo de seus desdobramentos, podemos encadear procedimentos a serem feitos, utilizando as cláusulas `.then`(em caso de sucesso) e `.catch`(em caso de falha).
- A requisição `fetch` retorna um objeto _Response_.

Utilizando `.then`, verifique a estrutura da resposta usando um `console.log` na response retornada pelo `fetch`.

```
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => console.log(response));
};

window.onload = () => fetchJoke();

```

- Viu a response? Até recebemos uma resposta do serviço, mas como retirar o texto da piada daí 🤔?

Para isso, usamos o método `.json()` na resposta da _API_. Esse método converte o conteúdo do `body` da _Response_ e retorna uma outra _Promise_, que, quando bem-sucedida, retorna um _JSON_ contendo as informações da piada.

A partir do `fetch`, troque o `console.log()` anterior pelo método `.json()` e imprima os dados da requisição.

```
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

window.onload = () => fetchJoke();

```

- Recebemos um objeto, certo? Agora, faça a piada aparecer no _DOM_ da sua página!
