# :pencil: Formulários no React



Os requisitos dos exercícios são:

## Criando um formulário em React

Formulários estão presentes em todas as aplicações web. Se você já fez algum cadastro em algum site, você já preencheu um formulário.

Mas agora chegou a hora de você estar do outro lado! Nesse exercício, você desenvolverá seu próprio formulário, com regras de validação bem específicas para cada campo.

### 1 - Crie um `<fieldset>` para dados pessoais


<details>
  <summary>Neste fieldset a pessoa usuária deverá ser capaz de informar seus dados pessoais. Para isso crie os seguintes campos:</summary><br />


  <details>
    <summary><strong>Nome</strong></summary><br />

  - **Tipo de campo**: texto.
  - **Validação**: limite de 40 caracteres.
  - **Comportamento**: todos os caracteres devem ser transformados para `UPPER CASE` assim que forem digitados.

  </details><br />

  <details>
    <summary><strong>Email</strong></summary><br />

  - **Tipo de campo**: email.
  - **Validação**: Limite de 50 caracteres.

  </details><br />

  <details>
    <summary><strong>CPF</strong></summary><br />

  - **Tipo de campo**: texto.
  - **Validação**: limite de 11 caracteres.

  </details>

</details><br />


<details>
  <summary><strong>💡 Dica</strong></summary><br />

- Lembre-se de envolver seus campos em uma `label` com o nome do campo, pois é esse valor que o avaliador automático irá usar para encontrar o elemento.

</details><br />


<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Será verificado se exsite um campo do tipo `text` envolto por uma `label` com o texto `Nome`.
- Será verificado se o campo `Nome` tem o tamanho máximo de 40 caracteres.
- Será verificado se, ao digitar no campo `Nome` todas as letras ficam em caixa alta.

- Será verificado se existe um campo do tipo `email` envolto por uma `label` com o texto `Email`.
- Será verificado se o campo `Email` tem o tamanho máximo de 50 caracteres.
- Será verificado se, ao digitar no campo `Email`, o campo recebe o valor corretamente.

- Será verificado se existe um campo do tipo `text` envolto por uma `label` com o texto `CPF`.
- Será verificado se o campo `CPF` tem o tamanho máximo de 11 caracteres.
- Será verificado se, ao digitar no campo `CPF`, o campo recebe o valor corretamente.

</details><br />


### 2 - Crie outro `<fieldset>` para dados de endereço

<details>
  <summary>Neste fieldset a pessoa usuária deverá ser capaz de informar seus dados de endereço. Para isso crie os seguintes campos:</summary><br />

  <details>
    <summary><strong>Endereço</strong></summary><br />

  - **Tipo de campo**: texto.
  - **Validação**: limite de 200 caracteres.
  - **Comportamento**: remover qualquer caracter especial que seja digitado (exemplo: $%^'@+=).

  </details><br />

  <details>
    <summary><strong>Cidade</strong></summary><br />

  - **Tipo de campo**: texto.
  - **Validação**: limite de 28 caracteres.
  - **Comportamento**: ao remover o foco desse campo (evento onBlur), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.

  </details><br />

  <details>
    <summary><strong>Estado</strong></summary><br />

  - **Tipo de campo**: comboBox.
  - **Opções**: todos os estados do Brasil.
  - **Observação**: use o arquivo `src/countryStates.js` para preencher as opções deste campo.

  </details><br />

  <details>
    <summary><strong>Tipo</strong></summary><br />

  - **Tipo de campo**: Radio Button.
  - **Opções**: "Casa" e "Apartamento".

  </details>

</details><br />


<details>
  <summary><strong>💡 Dica</strong></summary><br />

- Lembre-se de envolver seus campos em uma `label` com o nome do campo, pois é esse valor que o avaliador automático irá usar para encontrar o elemento.

</details><br />


<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Será verificado se existe um campo do tipo `text` envolto por uma `label` com o texto `Endereço`.
- Será verificado se o campo `Endereço` tem o tamanho máximo de 200 caracteres.
- Será verificado se, ao digitar no campo `Endereço` os caracteres especiais (exemplo: $%^'@+=) são ignorados.

- Será verificado se existe um campo do tipo `text` envolto por uma `label` com o texto `Cidade`.
- Será verificado se o campo `Cidade` tem o tamanho máximo de 28 caracteres.
- Será verificado que, ao digitar no campo `Cidade`, se nome da cidade começar por número, o campo é limpo após perder o foco.

- Será verificado se existe um campo do tipo `select` envolto por uma `label` com o texto `Estado`.
- Será verificado se o estado inicial do campo `Estado` é o primeiro estado da lista de estados.
- Será verificado que, ao clicar no campo `Estado`, é possivel selecionar um estado.

- Será verificado se existe dois campos do tipo `Radio Button`. O primeiro deve estar envolto por uma `label` com o texto `Casa` e o segundo por uma label com o texto `Apartamento`.
- Será verificado se, ao carregar a página, o campo `Casa` está checado e o campo `Apartamento` não está checado.
- Será verificado se, ao clicar no campo `Apartamento`, este fica checado e o campo `Casa` não fica mais checado e vice-versa.

</details><br />


### 3 - Crie um terceiro `<fieldset>` para dados do último emprego

<details>
  <summary>Neste fieldset a pessoa usuária deverá ser capaz de informar seus dados profissionais. Para isso crie os seguintes campos:</summary><br />

  <details>
    <summary><strong>Resumo do currículo</strong></summary><br />

  - **Tipo de campo**: TextArea.
  - **Validação**: limite de 1000 caracteres.

  </details><br />

  <details>
    <summary><strong>Cargo</strong></summary><br />

  - **Tipo de campo**: Texto.
  - **Validação**: limite de 40 caracteres.
  - **Comportamento**: quando o mouse passar por cima deste campo (evento `onMouseEnter`), exibir um alerta dizendo "Preencha com cuidado esta informação.". Exiba essa mensagem apenas uma vez.

  </details><br />

  <details>
    <summary><strong>Descrição do cargo</strong></summary><br />

  - **Tipo de campo**: TextArea.
  - **Validação**: limite de 500 caracteres .

  </details>
</details><br />

<details>
  <summary><strong>💡 Dica</strong></summary><br />

- Lembre-se de envolver seus campos em uma `label` com o nome do campo, pois é esse valor que o avaliador automático irá usar para encontrar o elemento.

</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Será verificado se existe uma caixa de texto envolta por uma `label` com o texto `Resumo do currículo`.
- Será verificado se o campo `Resumo do currículo` tem o tamanho máximo de 1000 caracteres.
- Será verificado se, ao digitar no campo `Resumo do currículo`, o campo recebe o valor corretamente.

- Será verificado se existe um campo do tipo `text` envolto por uma `label` com o texto `Cargo`.
- Será verificado se o campo `Cargo` tem o tamanho máximo de 40 caracteres.
- Será verificado que, na primeira vez (e apenas na primeira vez) em que o mouse é passado por cima desse campo, um `alert` com a mensagem "Preencha com cuidado esta informação." é exibido.


- Será verificado se existe uma caixa de texto envolta por uma `label` com o texto `Descrição do cargo`.
- Será verificado se o campo `Descrição do cargo` tem o tamanho máximo de 500 caracteres.
- Será verificado se, ao digitar no campo `Descrição do cargo`, o campo recebe o valor corretamente.

</details><br />

### 4 - Crie um botão que, ao ser clicado, monta uma `<div>` com o consolidado dos dados que foram inseridos no formulário.

<details>
  <summary>A pessoa usuária deverá ser capaz de ver seus dados pessoais e profissionais consolidados após preencher todo o formulario e enviá-lo. Para isso crie os seguintes elementos:</summary><br />

- Um botão com o texto `Enviar` que, ao ser clicado, exibe os dados consolidados.

- Um elemento de texto que tem como conteúdo o nome informado no formulário.

- Um elemento de texto que tem como conteúdo o email informado no formulário.
 
- Um elemento de texto que tem como conteúdo o cpf informado no formulário.

- Um elemento de texto que tem como conteúdo o endereço informado no formulário.

- Um elemento de texto que tem como conteúdo a cidade informada no formulário.

- Um elemento de texto que tem como conteúdo o estado informado no formulário.

- Um elemento de texto que tem como conteúdo o tipo de endereço informado no formulário.

- Um elemento de texto que tem como conteúdo o resumo do currículo informado no formulário.

- Um elemento de texto que tem como conteúdo o cargo informado no formulário.

- Um elemento de texto que tem como conteúdo a descrição do cargo informada no formulário.

</details><br />



<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Será verificado se existe um botão com o texto `Enviar`.
- Será verificado se os dados consolidados não aparecem na tela antes de o formulário ser enviado
- Será verificado que, ao clicar no botão `Enviar`, os dados consolidados aparecem na tela.

</details>

### 5 - Crie um botão `Limpar` que limpa todos os campos do formulário e a `<div>` com seu currículo também.

<details>
  <summary>A pessoa usuária deverá ser capaz de limpar todos os campos do formulário e, consequentemente, consolidado as informações de seu currículo após preencher todo o formulario e enviá-lo. Para isso crie:</summary><br />

- Um botão com o  texto "Limpar" que, ao ser clicado, faz com que os dados dos formulário e os dados consolidados deixem de ser exibidos

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Será verificado se existe um botão com o texto `Limpar`.
- Será verificado que, após clicar no botão "Limpar",  os dados do formulário e os dados consolidados não aparecem na tela.

</details><br />

### Exercícios extras

#### Utilize regex para validar o campo email.

<details>
  <summary>Utilize uma Expressão Ragular para validar o campo de email</summary><br />

- A validação deve acontecer no evento `onChange` do input.
- O formato esperado é `trybe@gmail.com`.
- Você pode validar a sua regex nesse [link do regextester.com](https://www.regextester.com/100026).
- Caso o campo esteja inválido, exiba uma mensagem `email is inválid`
- 💡 Dica: Para estudar como o regex funciona, utilize [esse conteúdo do site regexone.com](https://regexone.com/)

</details>
