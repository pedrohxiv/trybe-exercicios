# :pencil: Express com TypeScript



Os requisitos dos exercícios são:

> _🚀 Se liga nesse foguete!_
> _Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀_

Faça os exercícios utilizando o banco de dados abaixo:

```

CREATE DATABASE IF NOT EXISTS `TypeScriptExpress`;
USE `TypeScriptExpress`;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Posts`;
CREATE TABLE `Posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `author` varchar(45) NOT NULL,
  `category` varchar(45) NOT NULL,
  `publicationDate` date NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Products`;
CREATE TABLE `Products`(
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(250) NOT NULL,
  `brand` varchar(250) NOT NULL,
  `price` integer NOT NULL,
  `manufacturing_date` date NOT NULL,
  `expiration_date` date NOT NULL
);

DROP TABLE IF EXISTS `Restaurants`;
CREATE TABLE `Restaurants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `category` varchar(45) NOT NULL,
  `openingTime` time NOT NULL,
  `closingTime` time NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `Users`
VALUES
  (1, 'Geraldo', 'geraldo@email.com', '123456'),
  (2, 'Marceline', 'marceline@email.com', '123456');

INSERT INTO `Posts`
VALUES
  (1, 'Facebook vai dividir departamento de realidade aumentada e virtual', 'Renan', 'tecnologia', '2021-10-26'),
  (2, 'O que é UDP e quais as diferenças com o TCP?', 'Giulianna', 'tecnologia', '2021-10-26');

INSERT INTO `Products`
VALUES
  (1, 'macbook pro 16', 'apple', 3600, '2021-10-25', '2026-10-25'),
  (2, 'surface pro', 'microsoft', 2500, '2021-10-25', '2024-10-25'),
  (3, 'alienware', 'dell', 2000, '2021-10-25', '2022-10-25'),
  (4, 'alienware expired', 'dell', 2000, '2015-10-25', '2016-10-25');

INSERT INTO `Restaurants`
VALUES
  (1, 'Los Pollos Hermanos', 'Fast Food', '10:00:00', '23:00:00'),
  (2, 'Central Perk', 'Coffee House', '07:00:00', '13:30:00');
```

## Atividade 1 🚀

**Objetivos**:

- Criar um **CRUD** completo de pessoas usuárias de uma aplicação.
- Permitir que pessoas usuárias dessa aplicação façam login utilizando suas credenciais.
- Utilize o **jwt** para que um usuário somente possa deletar ou atualizar sua própria conta.
- _Utilize a tabela_ **Users** _para realizar a atividade_.

**Rotas**:

- Uma rota que lista todos as pessoas usuárias da aplicação;
- Uma rota que lista uma única pessoa usuária a partir de seu _id_;
- Uma rota que permite cadastrar uma nova pessoa usuária da aplicação;
- Uma rota que permite editar o registro de uma única pessoa usuária cadastrada por meio de seu _id_;
- Uma rota que permite deletar uma pessoa usuária da aplicação a partir de seu _id_.

**Regras**:

- Uma pessoa usuária da aplicação deve possuir as propriedades _id_, nome, _email_ e senha;
- Nenhuma propriedade de uma pessoa usuária da aplicação pode ser nula ou vazia;
- O _id_ deve ser gerado automaticamente;
- A senha deve possuir no mínimo 6 e no máximo 12 caracteres;
- O nome deve possuir pelo menos 3 caracteres;
- O _email_ deve possuir um formato de _email_ válido (email@email.com);
- Ao criar um novo `user`, o _email_ não pode já estar cadastrado.

Em Node.js: ORM e Autenticação - Dia 04: JWT, aprendemos a criar autenticações utilizando o JWT. Com o typescript a estrutura é muito semelhante, observe o exemplo abaixo:

```
 import jwt, { SignOptions } from 'jsonwebtoken';
 // Essa interface dependerá das informações que passamos em nosso payload.
 interface JWTPayload {
    id: number;
    name: string;
    email: string;
    password: string;
 }
 // A função create TokenJWT recebe como parâmetro o nosso payload e retorna um token ao usuário.
 export function createTokenJWT(payload: JWTPayload) {
   
   const config: SignOptions = {
     expiresIn: '3d',
     algorithm: 'HS256'
   }
   const token = jwt.sign(payload, secret, config);
   return token;
 }
```

> _Dica: Não há apenas uma maneira correta de criar uma autenticação com jwt, dessa forma, sempre leia a [documentação](https://auth0.github.io/node-oauth2-jwt-bearer/index.html), pois ela te ajudará a entender melhor o funcionamento da ferramenta._

## Atividade 2 🚀

**Objetivos**:

- Criar um **Dockerfile** para sua aplicação da atividade anterior.

Camadas:

- Usar uma imagem node versão 16 como base;
- Definir uma pasta de trabalho;
- Copiar para a imagem os arquivos necessários para instalar as dependências do projeto;
- Executar o comando para instalar as dependências do projeto;
- Expor uma porta para que sua aplicação possa receber conexões;
- Copiar para a imagem os arquivos da sua aplicação;
- Definir o comando padrão que deve ser executado ao iniciar o container;

> Dica: Se estiver com dúvida em qual imagem usar, visite o [Docker hub](https://hub.docker.com/search?q=node) para ver as imagens disponíveis.

## Atividade 3 🚀

**Objetivos**:

- Orquestrar containers com um arquivo docker-compose.

**Regras**:

- A versão do arquivo deve ser 3.9;
- Existe um serviço para o banco de dados que:
  - Utiliza a imagem mysql versão 8.0.21;
  - Possui as variáveis de ambientes necessárias para o seu correto funcionamento;
  - Possui uma política de reinicialização que, sempre que o serviço parar, ele deverá ser reiniciado;
- Existe um serviço para um servidor que:
  - Utiliza o Dockerfile criado na atividade anterior;
  - Possui as variáveis de ambientes necessárias para o seu correto funcionamento;
  - Mapeia a porta exposta do container para uma porta diferente do host;
  - Possui uma política de reinicialização que sempre que o serviço parar ele deverá ser reiniciado;
  - Possui uma relação de dependência com o serviço para o banco de dados;
- Possui uma rede chamada “users-network” para a comunicação entre os serviços;

## Bônus - Atividade 4

**Objetivos**:

- Criar um **CRUD** completo de _Blog Posts_.
- Listar _posts_ por autor, categoria ou data de criação.
- _Utilize a tabela_ **Posts** _para realizar a atividade_.

**Rotas**:

- Uma rota que lista todos os posts;
- Uma rota que lista um único post por meio de seu _id_;
- Uma rota que permite cadastrar um novo post;
- Uma rota que permite editar o registro de um post cadastrado a partir de seu _id_;
- Uma rota que permite deletar um post a partir de seu _id_.
- Uma rota que recebe via `query params` o **autor, a categoria ou a data de criação** e lista todos os posts que se encaixem no filtro;

**Regras**:

- Um post deve possuir as propriedades _id_, título, nome do autor, nome da categoria e data de criação;
- **Nenhuma** propriedade de um post pode ser nula ou vazia;
- O nome do autor deve possuir pelo menos 3 caracteres;
- O nome da categoria deve possuir pelo menos 3 caracteres;
- A `query param` de data de criação deve ser no formato: aaaa-mm-dd;

## Bônus - Atividade 5

**Objetivos**:

- Criar um **CRUD** completo de produtos.
- Listar os produtos por faixa de preço.
- Listar os produtos que ainda não estão vencidos.
- _Utilize a tabela_ **Products** _para realizar a atividade_.

**Rotas**:

- Uma rota que lista todos os produtos;
- Uma rota que lista um único produto por meio de seu _id_;
- Uma rota que permite cadastrar um novo produto;
- Uma rota que permite editar o registro de um produto cadastrado;
- Uma rota que permite deletar um produto a partir de seu _id_.
- Uma rota que recebe via _query params_ um preço inicial e final e listar todos produtos que se encaixem no filtro;
- Uma rota que lista somente os produtos que ainda não estão vencidos;

**Regras**:

- Um produto deve possuir as propriedades _id_, nome, nome da marca, preço, data de fabricação e data de validade;
- **Nenhuma** propriedade de um produto pode ser nula ou vazia;
- O nome da marca deve possuir pelo menos 3 caracteres;
- O preço não pode receber um valor negativo;
- A data de fabricação não pode ser igual a data de validade;
- As _query params_ de valor de preço inicial e final não podem receber valores negativos;

## Bônus - Atividade 6

**Objetivos**:

- Criar um **CRUD** completo de restaurantes.
- Listar restaurantes que estão abertos.
- _Utilize a tabela_ **Restaurants** _para realizar a atividade_.

**Rotas**:

- Uma rota que lista todos os restaurantes;
- Uma rota que lista um único restaurante por meio de seu _id_;
- Uma rota que permite cadastrar um novo restaurante;
- Uma rota que permite editar o registro de um restaurante cadastrado;
- Uma rota que permite deletar um restaurante a partir de seu _id_.
- Uma rota que lista somente os restaurantes que estão abertos no momento da chamada;

**Regras**:

- Um restaurante deve possuir as propriedades _id_, nome, tipo de comida que serve, horário da abertura e horário do fechamento;
- **Nenhuma** propriedade de um restaurante pode ser nula ou vazia;
- O nome deve possuir pelo menos 3 caracteres;
- O tipo de comida deve possuir no mínimo 3 caracteres;
