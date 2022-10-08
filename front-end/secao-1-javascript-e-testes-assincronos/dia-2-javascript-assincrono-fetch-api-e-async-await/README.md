# :pencil: JavaScript Assíncrono - Fetch API e async/await



Os requisitos dos exercícios são:

## Crypto API

Que tal usar o conhecimento adquirido na prática? Vamos consultar uma API que fornece os valores de crypto moedas e depois mostrar apenas as 10 primeiras.

O link para os requisitos do exercício está contido [aqui](https://github.com/tryber/sd-026-b-exercise-javascript-async/blob/main/README.md) e a resolução do exercicio está contido na pasta [sd-026-b-exercise-javascript-async](https://github.com/pedrohxiv/trybe-exercicios/tree/main/front-end/secao-1-javascript-e-testes-assincronos/dia-2-javascript-assincrono-fetch-api-e-async-await/sd-026-b-exercise-javascript-async) deste mesmo dia, confere lá!

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
