# :pencil: HTML & CSS - Forms

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre formulários em _HTML_, que são uma forma de enviar informações para outra página do seu site ou para um servidor, utilizando das tags `input`, `button`, `textarea`, `select` e `form` para a criação dos formulários.

Os requisitos dos exercícios são:

Imagine que você está surfando na internet. Você agora é uma pessoa desenvolvedora, cansada após finalmente terminar seus estudos e pensando nas suas maravilhosas e merecidas férias.

Então você se depara com um anúncio do concurso TrybeTrip, que premia com uma viagem totalmente paga e com várias opções de destino. Como você imagina que seria a página para concorrer a essa viagem?

Concorda que seria uma espécie de formulário?

O exercício hoje será desenvolver uma página web com o formulário da TrybeTrip. Desenvolva-o em um arquivo chamado `form.html`. A estruturação de sua página deverá ficar semelhante à imagem abaixo.

<img src='https://content-assets.betrybe.com/prod/Formato%20do%20Formul%C3%A1rio%20TrybeTrip.png' alt='Formato do Formulário TrybeTrip'>

A imagem acima foi criada no [Excalidraw](https://excalidraw.com/). Vale a pena dar uma olhada.

**Dicas:**

- Crie o costume de adicionar IDs a elementos únicos e classes a elementos com comportamentos similares, pois isso facilitará muito sua vida como pessoa desenvolvedora;
- Procure saber mais sobre as Tags `<label>` e `<fieldset>` clicando nas documentações a seguir:
  - [Label](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/label);
  - [Fieldset](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/fieldset).
- O formulário deverá permitir que a pessoa usuária insira os seguintes campos:
  - Nome Completo:
    - Limitado entre 10 e 40 caracteres.
  - E-mail:
    - Limitado entre 10 e 50 caracteres.
  - Destino Preferido:
    - 4 opções: Cidade, Campo, Praia, Montanhas.
  - Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip?
    - Limite de 500 caracteres.
  - Qual a melhor data para realizar sua viagem?
  - Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?
  - Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.

Esses serão os principais campos utilizados nos próximos exercícios.

- Crie um botão para enviar as informações preenchidas.

Agora vamos utilizar um pouco de javascript. Para isso, crie o arquivo `script.js` e o referencie no HTML.

- Dica: Coloque a tag `<script>` no final do seu body.
- Interrompa o comportamento padrão do botão submit utilizando o método `preventDefault()`.
- Crie um botão que limpe as informações contidas nos campos.
