# :pencil: 'Hello, world!' no React!



Os requisitos dos exercícios são:

## Criando uma lista de conteúdos

Nesse exercício, vamos criar uma aplicação simples, mas com muito aprendizado. Vamos dividir nossa aplicação em componentes e usá-los para renderizar uma lista com conhecimentos sobre Front-end.

### 1. Crie um arquivo chamado `Header.js` que representará o componente `Header`

- Este arquivo precisa ser criado na pasta `src`;

- Este componente deve renderizar uma tag `h1` com o texto 'Conteúdos de Frontend';

***Aviso***: Não esqueça de exportar esse componente;

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Se o componente foi criado na pasta correta e renderiza uma tag `h1`;

- Se a tag `h1` é renderizada no App com o texto 'Conteúdos de Frontend';

</details>

---

### 2. Crie um arquivo chamado `Content.js` que representará o componente `Content`

- Este arquivo precisa ser criado na pasta `src`

- Dentro do arquivo `Content.js`, crie uma classe React chamada `Content`;

- Ainda no arquivo `Content.js`, adicione o seguinte array:

  <details>
    <summary>Array com conteúdos de Frontend</summary>

    ```JS
        const conteudos = [
          {
            nome: 'JavaScript assíncrono',
            bloco: 9,
            status: 'já aprendi'
          },
          {
            nome: 'Composição de Componentes',
            bloco: 10,
            status: 'estou aprendendo',
          },
          {
            nome: 'Composição de Estados',
            bloco: 11,
            status: 'aprenderei'
          },
          {
            nome: 'Redux',
            bloco: 15,
            status: 'aprenderei'
          },
        ];
    ```
  </details>
<br />

- A classe Content deve renderizar o array de conteúdos com a utilização da função map, como visto anteriormente, com o seguinte formato:

<details>
<summary>Conteúdo a ser renderizado:</summary>


  ```JS
  Eu `Status do conteúdo` o conteúdo `Nome do conteúdo` no bloco `Bloco do conteúdo`
  ```

</details>
<br />

***Aviso***: Lembre-se de adicionar o atributo `key` a cada elemento do array a ser renderizado.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Se o componente `Content` foi criado na pasta correta e renderiza uma `ul`;

- Se o componente `Content` é renderizado no `App`, com as mensagens corretas;

</details>

---

### 3. Crie um arquivo chamado `Footer.js` que representará o componente `Footer`

- Este arquivo precisa ser criado na pasta `src`;

- Este componente deve renderizar uma tag `footer` e, dentro dela, renderizar um `h3` com o texto 'E isso é só o começo...';

- A tag footer precisa do atributo `data-testid="footer"`

***Aviso***: Não esqueça de exportar esse componente

- Renderize esse componente no App.

<details>
  <summary><strong>Adicionando o `data-testid`</strong></summary><br />
  
  Para que o avaliador consiga encontrar o elemento, é preciso que o `footer` tenha o atributo `data-testid`. Você pode adicioná-lo da seguinte forma:
  
  ```js
    <footer data-testid="footer">
      ...
    </footer>
  ```

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Se o componente `Footer` foi criado na pasta correta e renderiza uma tag `footer`;

- Se o componente `Footer` é renderizado na tela com a mensagem correta dentro de uma tag `h3`;

</details>

---

### Exercício extra

<details>
  <summary> Estilize a aplicação adicionando classes que vão aprimorar seus componentes, de modo que cada conteúdo listado seja um Card</summary><br />

- Para adicionar uma classe de estilização em um elemento HTML, utilize o atributo className:

```js
  <footer className="footer">
    ...
  </footer>
```
</details>
