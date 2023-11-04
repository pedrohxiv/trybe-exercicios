# :pencil: API REST com Spring

O objetivo dos exercícios desse dia foi me aprofundar mais no framework Spring, aprendendo a construir APIs seguindo o modelo REST. Para isso deveria compreender as API RESTs em Java: JAX-RS e Spring Web, realizar o mapeamentos de rotas, dados de requisição e de resposta, entender o processo de serialização/desserialização em APIs, compreender a funcionalidade record em Java e compreender o padrão DTO (Data Transfer Object).

Os requisitos dos exercícios são:

## Fitness API

### 1 - Implemente os DTOs

<details>
  <summary>Neste requisito você deve implementar os DTOs `WorkoutDto` e `WorkoutCreationDto`</summary><br />

Os atributos dos DTOs deverão seguir a mesma nomenclatura e tipos de atributos já definidos no modelo `Workout`, classe já disponibilizada com o projeto.

Os DTOs devem seguir os seguintes critérios:

- Devem ser implementados no pacote `com.betrybe.fitness.dto`;
- Devem ser implementados utilizando a funcionalidade `record` do Java;
- Devem ser diferenciados do modelo original da seguinte maneira:
  - `WorkoutDto` não deve ter o atributo `secretTechnique`;
  - `WorkoutCreationDto` não deve ter o atributo `id`.

</details>

### 2 - Crie uma classe para a camada de serviço

<details>
  <summary>Neste requisito você deve criar uma classe para representar a camada de serviço.</summary><br />

A classe da camada de serviço:

- Deve implementar a interface `com.betrybe.fitness.service.FitnessServiceInterface`;
  - Aqui basta a criação dos métodos, a implementação deles será feita em outros requisitos;
- Pode ter qualquer nome, mas sugerimos `FitnessService`;
- Deve ser marcada como um componente Spring, especificamente com a anotação para camada de serviço;
  - Isso quer dizer que a classe deverá funcionar como um bean, para ser injetado automaticamente pelo Spring onde for necessário;
- Deve receber, **por injeção de dependência** do Spring, um bean do tipo `FakeFitnessDatabase` (veja abaixo).

O projeto já disponibiliza um componente chamado `com.betrybe.fitness.database.FakeFitnessDatabase`, que representa um banco de dados falso (ele carrega dados de um arquivo). Neste requisito, você apenas precisa receber esse componente por injeção de dependência, ainda não há necessidade de utilizá-lo. Ele será usado em outros requisitos, durante a implementação dos métodos da classe criada aqui.

</details>

### 3 - Crie uma classe de controle REST

<details>
  <summary>Criar uma classe para representar a camada de controle e que seja um componente do Spring.</summary><br />

A classe da camada de controle:

- Deve implementar a interface `com.betrybe.fitness.controller.FitnessControllerInterface`;
- Pode ter qualquer nome, mas sugerimos `FitnessController`;
- Deve ser marcada como um componente Spring, especificamente com a anotação de controle REST;
  - Isso quer dizer que a classe deverá funcionar como um bean, para ser injetado automaticamente pelo Spring onde for necessário;
- Deve ter como mapeamento principal a rota `/fitness`;
  - Cuidado para não incluir uma barra final indevida nos seus mapeamentos;
- Deve receber, **por injeção de dependência** do Spring, o bean definido no requisito anterior, que implementa `FitnessServiceInterface`.

</details>

### 4 - Crie a rota GET /fitness

<details>
  <summary>Crie a rota GET /fitness da API, que retornará uma mensagem.</summary><br />

A rota GET `/fitness` da sua aplicação deve retornar apenas a seguinte mensagem: `Boas vindas à API de Fitness!`.

</details>

### 5 - Implemente o método getWorkout da camada de serviço

<details>
  <summary>Na classe de serviço, implemente o método `getWorkout`, que receberá um ID e retornará o objeto correspondente</summary><br />

Para implementar este requisito, você deverá utilizar o bean do tipo `FakeFitnessDatabase`, que está recebendo na classe.

O método `getWorkout` a ser implementado aqui deve:

- Receber um ID
- Fazer a busca pelo objeto do tipo `Workout` no banco de dados falso (`FakeFitnessDatabase`)
- Criar um objeto do tipo `WorkoutDto` correspondente ao resultado encontrado;
  - Você pode fazer a conversão entre o modelo e o DTO manualmente, ou então implementar um método para isso.

**_Importante_**: note que o retorno do método `getWorkout` da classe `FakeFitnessDatabase` não é `Workout`, mas sim `Optional<Workout>`. Caso não exista um objeto com o ID passado, o método irá retornar um objeto `Optional` indicando que ele está vazio. Você deve fazer o mesmo no método da sua camada de serviço.

Não se preocupe se você ainda não conhece o `Optional`, veremos mais sobre ele depois. Por enquanto, basta saber que ele representa uma resposta que pode ou não existir.

Para verificar se o objeto retornado está vazio, você pode utilizar o método `isEmpty()`, respectivamente. Caso esteja presente, você pode recuperar o objeto `Workout` utilizando o método `get()`. Da mesma forma, você pode criar um objeto `Optional` utilizando os métodos `of()` (contendo algo) e `empty()`.

Veja um exemplo de uso:

```java
Optional<String> myOptional;

// Cria um Optional a partir de uma string
myOptional = Optional.of("Uma string");

myOptional.isEmpty()  // Retorna false
myOptional.get()  // Retorna o objeto original (neste caso, a string)

// Agora substitui por um Optional vazio
myOptional = Optional.empty();

myOptional.isEmpty()  // Retorna true
```

Utilize esses métodos para tratar a resposta que irá receber do "banco de dados" e para gerar o retorno correto da sua implementação.

</details>

### 6 - Crie a rota GET /fitness/workouts/{id}

<details>
  <summary>Crie a rota GET /fitness/workouts/{id} da API, que retornará os dados correspondentes ao ID passado.</summary><br />

A rota GET `/fitness/workouts/{id}` da sua aplicação deve:

- Receber um ID através de uma variável de caminho `id`
- Fazer uma busca pelo treino (workout) correspondente ao ID, utilizando o bean de serviço
- Caso não exista um treino com o ID indicado, a rota deve retornar o status code `404` ("not found").
- Caso o treino exista, ele deve ser retornado juntamente com o status code `200` ("ok")

Dicas:

- Utilize a classe `ResponseEntity` para controlar o retorno da rota;
- Utilize o que aprendeu sobre `Optional` no requisito anterior para fazer a verificação.

</details>

### 7 - Implemente o método saveWorkout da camada de serviço

<details>
  <summary>Na classe de serviço, implemente o método `saveWorkout`, que receberá um novo treino e deverá salvá-lo.</summary><br />

Para implementar este requisito, você deverá utilizar o bean do tipo `FakeFitnessDatabase`, que está recebendo na classe.

O método `saveWorkout` a ser implementado aqui deve:

- Receber um objeto do tipo `WorkoutCreationDto`
- Salvar o objeto no banco de dados falso;
  - Note que o método `saveWorkout` do `FakeFitnessDatabase` retorna um novo objeto;
- Retornar um objeto do tipo `WorkoutDto` correspondente ao que o banco de dados retornou.

</details>

### 8 - Crie a rota POST /fitness/workouts

<details>
  <summary>Crie a rota POST /fitness/workouts da API, que vai receber dados de um novo treino, salvar os dados, e retornar o que foi salvo.</summary><br />

A rota POST `/fitness/workouts` da sua aplicação deve:

- Receber dados pelo corpo da requisição, correspondente ao tipo `WorkoutCreationDto`
- Salvar o novo treino utilizando o bean de serviço;
- Retornar o novo objeto que foi salvo, utilizando o status code `201` ("created").

</details>

### 9 - (`Bônus`) Implemente o método getAllWorkouts da camada de serviço

<details>
  <summary>Na classe de serviço, implemente o método `getAllWorkouts`, que retornará todos os treinos disponíveis.</summary><br />

O método `getAllWorkouts` a ser implementado aqui deve:

- Utilizar o banco de dados falso para pegar uma lista com todos os treinos disponíveis;
- Gerar uma lista nova contendo objetos do tipo `WorkoutDto` correspondentes aos objetos do tipo `Workout` retornados pelo banco.

Você pode fazer a conversão da forma que preferir, por exemplo utilizando um `for`. Mas se quiser, também há formas de programação funcional que podem ser utilizadas, inclusive dos chamados `streams` do Java (aprenderemos mais sobre eles depois).

</details>

### 10 - (`Bônus`) Crie a rota GET /fitness/workouts

<details>
  <summary>Crie a rota GET /fitness/workouts da API, que vai retornar uma lista de todos os treinos disponíveis.</summary><br />

A rota GET `/fitness/workouts` da sua aplicação deve:

- Retornar todos os treinos disponíveis, utilizando o bean de serviço

</details>
