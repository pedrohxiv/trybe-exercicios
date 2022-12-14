# :pencil: JavaScript - DOM e seletores

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre o famoso _DOM_, a estrutura que faz a ponte entre o _HTML_ e o _JavaScript_ e que permite interação entre os dois. Para isso deveria acessar dados do _HTML_ com o _JavaScript_ através dos seletores do DOM.

Os requisitos dos exercícios são:

É hora de aplicar seus conhecimentos em manipular os elementos do `HTML`!

- A seguir, você verá um trecho de código `HTML e CSS`.
- Crie um arquivo `HTML` dentro do diretório `exercises/javascript-dom-eventos-e-web-storage` e copie o código a seguir.
- Leia as instruções que estão dentro de um comentário na tag `<script>`.
- Não se esqueça de fazer um `commit` a cada exercício!

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício</title>
    
    <style>
      main, section {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin: 0 auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }
    </style>
  </head>
  <body>
    <header> 
      <h1 class="title">Exercício - JavaEscripito </h1>
    </header>    
    <main class="main-content">
      <section class="center-content">
        <p>Texto padrão do nosso site</p>
        <p>-----</p>
        <p>Trybe</p>
      </section>
    </main>
    <script>
        /*
      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()
      1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
      2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
      3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
      4. Crie e execute uma função que corrija o texto da tag <h1>.
      5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
      6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
      */
    </script>
  </body>
</html>
```
