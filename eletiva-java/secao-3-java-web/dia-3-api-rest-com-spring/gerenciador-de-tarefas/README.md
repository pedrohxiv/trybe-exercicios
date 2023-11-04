# :pencil: API REST com Spring

O objetivo dos exercícios desse dia foi me aprofundar mais no framework Spring, aprendendo a construir APIs seguindo o modelo REST. Para isso deveria compreender as API RESTs em Java: JAX-RS e Spring Web, realizar o mapeamentos de rotas, dados de requisição e de resposta, entender o processo de serialização/desserialização em APIs, compreender a funcionalidade record em Java e compreender o padrão DTO (Data Transfer Object).

Os requisitos dos exercícios são:

## Gerenciador de Tarefas

### 1 - Crie o DTO (Data Transfer Objects) de resposta para tarefas

<details>
  <summary>Implemente o DTO que será usado nas respostas da sua aplicação</summary><br />

O DTO deve seguir os seguinte critérios:

- Ser nomeado `TaskDto`.
- Deve ser implementado usando `record`.
- Ser localizado no package `com.betrybe.taskmanager.dto`.
- Possuir os seguintes campos:

  - `id` do tipo `String`
  - `title` do tipo `String`
  - `description` do tipo `String`
  - `ownerName` do tipo `String`
  - `isComplete` do tipo `Boolean`

  _Dica: Utilize `record` para implementar seu DTO_

</details>

### 2 - Crie o endpoint GET /tasks para retornar todos as tarefas

<details>
  <summary>Implemente o endpoint responsável por retornar a lista de tarefas</summary><br />

O endpoint deve seguir os seguintes critérios:

- A aplicação possui a componente Spring `FakeTaskDatabase` que implementa a interface `TaskDatabaseInterface` e deve ser utilizada para a camada de acesso ao banco de dados.
- Ao receber uma requisição no endpoint `GET /tasks` deve retornar a lista de tarefas retornadas pela `FakeTaskDatabase` devidamente serializadas para o `TaskDto` criado no requisito anterior.
- Utilize a arquitetura em camadas.

</details>

### 3 - Crie o endpoint GET /tasks/{id} para retornar a tarefa com determinado id

<details>
  <summary>Implemente o endpoint responsável por retornar uma única tarefa</summary><br />

O endpoint deve seguir os seguintes critérios:

- Assim como no requisito anterior, a componente Spring `FakeTaskDatabase` deve ser utilizada.
- Ao receber uma requisição no endpoint `GET /tasks/{id}` com id existente na `FakeTaskDatabase`, deve retornar a tarefa com aquele id devidamente serializada para o `TaskDto` criado no requisito 1.
- Ao receber uma requisição para um id inexistente na `FakeTaskDatabase`, deve retornar status `404`.

</details>

### 4 - Crie o DTO (Data Transfer Objects) de requisição para tarefas

<details>
  <summary>Implemente o DTO que será usado nas requisições à sua aplicação</summary><br />

Esse DTO será utilizado por requisições do verbo `POST` para a criação de novas tarefas, ele deve seguir os seguinte critérios:

- Ser nomeado `TaskCreationDto`.
- Deve ser implementado usando `record`.
- Ser localizado no package `com.betrybe.taskmanager.dto`.
- Possuir os seguintes campos:
  - `title` do tipo `String`
  - `description` do tipo `String`
  - `ownerName` do tipo `String`

_Dica: Utilize `record` para implementar seu DTO_

</details>

### 5 - Crie o endpoint POST /tasks para criar novas tarefas

<details>
  <summary>Implemente o endpoint responsável por criar uma nova tarefa</summary><br />

O endpoint deve seguir os seguintes critérios:

- Assim como nos requisitos anteriores, a componente Spring `FakeTaskDatabase` deve ser utilizada.
- Ao receber uma requisição no endpoint `POST /tasks` com o `TaskCreationDto` do requisito anterior, deve retornar:
  - status `201`.
  - o `id` da nova tarefa como `body` da resposta.

</details>

### 6 - Crie o endpoint PUT /tasks/{id} para alterar o status da tarefa para 'Concluída'

<details>
  <summary>Implemente o endpoint responsável por alterar o estado de uma tarefa</summary><br />

O campo `isComplete` da `TaskModel` é um `Boolean` que representa se a tarefa está em 'Andamento' ou se foi 'Concluída', utilize dessa informação para completar esse requisito.

O endpoint deve seguir os seguinte critérios:

- Assim como nos requisitos anteriores, a componente Spring `FakeTaskDatabase` deve ser utilizada.
- Ao receber uma requisição no endpoint `PUT /tasks/{id}`, deve:
  - retornar status `204`.
  - Deve alterar no banco de dados o status da tarefa para 'Concluída', de modo que uma subsequente requisição `GET /tasks/{id}` retorne os dados da tarefa como concluída.

</details>

### 7 - Crie o endpoint DELETE /tasks/{id} para a remoção de tarefas

<details>
  <summary>Implemente o endpoint responsável por remover uma tarefa</summary><br />

O endpoint deve seguir os seguintes critérios:

- Assim como nos requisitos anteriores, a componente Spring `FakeTaskDatabase` deve ser utilizada.
- Ao receber uma requisição no endpoint `REMOVE /tasks/{id}` deve retornar status `204`.
- Deve remover a tarefa do banco de dados, de modo que uma subsequente requisição `GET /tasks/{id}` retorne status `404`.

</details>
