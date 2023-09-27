# :pencil: Arquitetura de Software: Camada Model

O objetivo dos exercícios desse dia foi aprender a como organizar o código aplicando o conceito de **arquitetura de software**. Apliquei ao código uma **arquitetura baseada em camadas** onde trabalharemos com três camadas: a camada `Model`; a camada `Service`; a camada `Controller`, onde cada uma das camadas possui uma responsabilidade única e bem definida a qual acomodará o código relacionado a esta responsabilidade, dando um foco na camada `Model` neste dia. Para isso deveria definir o conceito de Arquitetura de Software, utilizar a arquitetura baseada em camadas em uma aplicação criada do zero e identificar os componentes de software pertencentes a camada `Model`.

Os requisitos dos exercícios são:

⚠️ **Atenção**: A resolução dos exercícios deste dia (5.1), será utilizada como base nos exercícios dos dias 5.2 e 5.3, portanto, lembre-se de realizá-los. 😉

Você mandou bem na refatoração! 🎉

Agora, a empresa `Trybecar` confiou em você para criar alguns componentes e testes somente para a camada de `Model`.

Eles precisam que você forneça as seguintes funcionalidades que realizam acesso com o banco de dados:

🎯 Listar todas as pessoas motoristas que estão cadastradas;

🎯 Cadastrar um novo carro;

🎯 Cadastrar uma pessoa motorista;

🎯 Encontrar um carro por meio do id;

🎯 Encontrar uma pessoa motorista por meio do id;

🎯 Criar o relacionamento N:N entre as pessoas motoristas e os carros.

## 🚀 Exercício 1

1. Crie testes unitários da camada de model responsável por listar todas as pessoas motoristas cadastradas no banco de dados.

**Você deve verificar que**:

- A função retorna uma estrutura de array;
- Retorna a lista de pessoas motoristas com o seguinte formato:

```
 const expected = [
   {
     id: 1,
     name: 'Liana Cisneiros',
   }, 
   {
     id: 2,
     name: 'Fábio Frazão',
   },
 ];
```

De olho na dica 👀: Crie o stub da conexão com o banco de dados.

Crie a camada de model responsável por listar todas as pessoas motoristas.

## 🚀 Exercício 2

Crie testes unitários da camada de model responsável por cadastrar um carro no banco de dados.

**Você deve verificar que**:

- Retorna o id do carro cadastrado com o seguinte formato:

```
 const expected = 1;
```

Crie a camada de model responsável por cadastrar um carro.

## 🚀 Exercício 3

Crie testes unitários da camada de model responsável por encontrar um carro por meio do id.

**Você deve verificar que**:

- Retorna o carro solicitado pelo `id` com o seguinte formato:

```
 const expected = {
   id: 2,
   model: 'Volkswagen Gol',
   color: 'Vermelho',
   licensePlate: 'DZG-4376',
 };
```

Crie a camada de model responsável por encontrar um carro por meio do id.

## 🚀 Exercício 4

Crie testes unitários da camada de model responsável por encontrar uma pessoa motorista por meio do id.

**Você deve verificar que**:

- Retorna a pessoa motorista solicitado pelo `id` com o seguinte formato:

```
 const expected = {
   id: 1,
   name: 'Liana Cisneiros',
 };
```

Crie a camada de model responsável por encontrar uma pessoas motorista por meio do id.

## 🚀 Exercício 5

Crie testes unitários da camada de model responsável por cadastrar uma pessoa motorista.

**Você deve verificar que**:

- Retorna a pessoa motorista cadastrada com o seguinte formato:

```
 const expected = 1;
```

Crie a camada de model responsável por cadastrar uma pessoa motorista.

## 🚀 Exercício 6

Crie testes unitários da camada de model responsável por criar o relacionamento N:N entre as pessoas motoristas e os carros.

**Você deve verificar que**:

- Retorna o relacionamento entre motorista e carro cadastrado com o seguinte formato:

```
 const expected = 1;
```

Crie a camada de model responsável por cadastrar as pessoas motoristas com o relacionamento N:N com os carros cadastrados.
