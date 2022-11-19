# :pencil:  RTL - Primeiros passos

O objetivo dos exercícios desse dia foi dar os primeiros passos no `react-testing-library` colocando em prática o que havia aprendido sobre a como **escrever testes automatizados em React**. Para isso deveria utilizar os seletores (queries) da React-Testing-Library em testes automatizados e simular eventos com a React-Testing-Library em testes automatizados.

Os requisitos dos exercícios são:

## Todo List

Para esse exercício testaremos uma aplicação mais simples, uma lista de tarefas, como a que já fez num projeto do curso!

### Exercício 1

>  Utilize o arquivo `src/test/exercise-one.test.js` para adicionar os testes pedidos no exercício.


Implemente os testes para verificar os seguintes comportamentos da aplicação:

<details>
  <summary>A. Verifique que um botão com o texto "Adicionar" está sendo renderizado</summary><br />

- Verifique que existe um elemento com o texto "Adicionar".
- Verifique que o elemento é do tipo `button`.

</details>

<details>
  <summary>B. Verifique o comportamento de adicionar uma tarefa</summary><br />
  
- Verifique que existe um `input` com a `label` "Tarefa:".
- Verifique que existe um botão com o texto "Adicionar".
- Verifique que é possível digitar no `input`.
- Verifique que o texto digitado só é adicionado à lista de tarefas **após** clicar no botão.
- Verifique que, ao clicar no botão "Adicionar", o texto que está digitado no input é adicionado à lista de tarefas renderizada e que o valor do input é limpo.

</details>

<br />

### Exercício 2

>  Utilize o arquivo `src/test/exercise-two.test.js` para adicionar os testes pedidos no exercício.


<details>
  <summary>A. Verifique o comportamento de adicionar várias tarefas</summary><br />

- Dentro do arquivo `src/test/exercise-two.test.js` já existe um _array_ com diversos itens. Faça com que cada elemento desse _array_ seja um item da lista de tarefas.
- Após adicionar todos os itens, verifique que todos eles estão sendo renderizados na tela.

</details>

<details>
  <summary>B. Teste apenas o componente <code>Item</code></summary><br />

- Renderize apenas o componente `<Item />` no teste.
- Passe uma _string_ como _prop_ para o componente `<Item />` e verifique que esse texto está sendo renderizado na tela.

</details>

<br />

### Exercício 3

> Diferente dos exercícios anteriores, os testes para esse exercício já estão criados no arquivo `src/test/exercise-three.test.js`. Note que alguns testes não estão passando - você deverá criar a funcionalidade para que os testes passem.

💡 A proposta desse exercício é que você leia os testes e entenda o que precisa ser desenvolvido, por isso, aqui no README você encontrará apenas uma descrição simples de cada funcionalidade.  

<details>
  <summary>A. Adicione as seguintes funcionalidades</summary><br />

- O botão "Adicionar" deve estar habilitado apenas quando há algum texto digitado no input.
- Cada item da lista deve ter um botão com o texto "Remover" ao seu lado. Ao clicar nesse botão, a respectiva tarefa deve ser apagada da lista.

</details>
