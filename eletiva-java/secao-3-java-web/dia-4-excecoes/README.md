# :pencil: Exceções

O objetivo dos exercícios desse dia foi entender algo inevitável: a existência de erros na nossa aplicação e, mais importante, como lidar com eles. Para isso deveria entender erros e exceções no Java, aplicar instruções try/catch e finally, criar exceções customizadas e entender erros e exceções no Spring.

Os requisitos dos exercícios são:

# Calculadora de Idade

### 1 - Crie o endpoint GET /calculateAge

<details>
  <summary>Implemente o cálculo da idade para uma data válida</summary><br />

Ao receber uma data válida como _query parameter_ `date` deve retornar _status code_ `200` e um corpo no formato _JSON_ com a idade calculada.

Exemplo: Suponha que hoje seja dia 29 de Março de 2023 e que a requisição para o endpoint foi `/calculateAge?date=2000-03-20`,
então o retorno esperado possui _status code_ `200` e corpo:

```javascript
{
	"age": 23
}
```

Nesse requisito será necessário:

    - Criar a _controller_ `AgeCalcutorController`que implementa a interface `AgeCalculatorControllerInterface`.
    - Implementar a lógica para calcular a idade no método `calculateAge` da classe `AgeCalculatorService`.

> Dica: Você pode utilizar o package java.time.Period para calcular o intervalo entre dois objetos LocalDate, e utilizar o package java.time.LocalDate para te auxiliar a fazer o parse da String que você recebe da requisição para um objeto da classe LocalDate.

</details>

### 2 - Crie um fluxo de exceção para datas futuras

<details>
  <summary>Implemente o fluxo para requisições contendo datas futuras</summary><br />

Ao receber uma data futura como _query parameter_ `date` deve retornar _status code_ `422` e um corpo no formato _JSON_ com a mensagem "This is a future date.".

Exemplo: Suponha que hoje seja dia 29 de Março de 2023 e que a requisição para o endpoint foi `/calculateAge?date=2040-03-20`,
então o retorno esperado possui _status code_ `422` e corpo:

```javascript
{
	"error": "This is a future date."
}
```

Para implementar o fluxo completo você vai precisar:

    - Criar uma classe `FutureDateException` no _package_ `exception`.
    - Adicionar no método `calculateAge` da classe `AgeCalculatorService` a validação para a data e disparar um erro `FutureDateException` para valores de data futura.
    - Adicionar o tratamento para exceções da classe `FutureDateException` na camada _Controller_.

</details>

### 3 - Crie um fluxo de exceção para datas com formato inválido

<details>
  <summary>Implemente o fluxo para requisições contendo datas com formato inválido</summary><br />

Ao receber uma data que não esteja no formato dd-mm-aa como _query parameter_ `date` deve retornar _status code_ `400` e um corpo no formato _JSON_ com a mensagem "Invalid date format. Expected dd-mm-aa.".

Exemplo: Suponha que hoje seja dia 29 de Março de 2023 e que a requisição para o endpoint foi `/calculateAge?date=03-20`,
então o retorno esperado possui _status code_ `400` e corpo:

```javascript
{
	"error": "Invalid date format. Expected aa-mm-dd."
}
```

Para implementar o fluxo completo você vai precisar:

    - Criar uma classe `InvalidSyntaxDateException` no _package_ `exception`.
    - Adicionar no método `calculateAge` da classe `AgeCalculatorService` a validação para o formato da data e disparar um erro `InvalidSyntaxDateException` para valores inválidos.
    - Adicionar o tratamento para exceções da classe `InvalidSyntaxDateException` na camada _Controller_.

</details>

### 4 - Crie um fluxo de exceção para datas não numéricas

<details>
  <summary>Implemente o fluxo para requisições contendo datas não numéricas</summary><br />

Ao receber uma data que contenha letras como _query parameter_ `date` deve retornar _status code_ `400` e um corpo no formato _JSON_ com a mensagem "Date should be in numeric format.".

Exemplo: Suponha que hoje seja dia 29 de Março de 2023 e que a requisição para o endpoint foi `/calculateAge?date=2000-mar-20`,
então o retorno esperado possui _status code_ `400` e corpo:

```javascript
{
	"error": "Date should be in numeric format."
}
```

Para implementar o fluxo completo você vai precisar:

    - Criar uma classe `NonNumericDateException` no _package_ `exception`.
    - Adicionar no método `calculateAge` da classe `AgeCalculatorService` a validação para o formato da data e disparar um erro `NonNumericDateException` para valores inválidos.
    - Adicionar o tratamento para exceções da classe `NonNumericDateException` na camada _Controller_.

</details>

### 5 - Implemente o retorno de um valor padrão para a idade com o query parameter orDefaultAge

<details>
  <summary>Implemente o retorno do valor do parâmetro orDefaultAge</summary><br />

Ao receber o parâmetro `orDefaultAge` e uma data que não esteja no formato correto, ou seja em um formato que dispare qualquer uma das exceções criadas nos requisitos anteriores, ao invés de retornar uma mensagem de erro, retorne o valor padrão passado pelo parâmetro `orDefaultAge`.

Exemplo: Suponha que hoje seja dia 29 de Março de 2023 e que a requisição para o endpoint foi `/calculateAge?date=03-20&orDefaultAge=0`,
então o retorno esperado possui _status code_ `200` e corpo:

```javascript
{
	"age": 0
}
```

Para implementar o fluxo completo você vai precisar:

    - Implementar na _controller_ `AgeCalcutorController` a chamada do método `calculateAgeWithDefault` quando apropriado.
    - Implementar a lógica no método `calculateAgeWithDefault` da classe `AgeCalculatorService`.

</details>
