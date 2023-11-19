# :pencil: Data e Hora

O objetivo dos exercícios desse dia foi aprender sobre datas e horas em Java. Para isso deveria aprender o uso de datas e horas em Java, realizar a manipulação de datas e horas em Java, trabalhar com fuso horários, realizar a formatação de datas e horas e realizar a persistência de datas e horas em bancos de dados;

Os requisitos dos exercícios são:

## API Rest para Gestão de Perdas - Trybe Report

O primeiro passo para este exercício consiste em clonar o repositório da nossa API [Trybe Report](https://github.com/tryber/java-trybe-report). É importante mencionar que este exercício não possui avaliador automático então não é preciso criar uma nova branch e subir para o Github. Você terá três branches à sua disposição, mas deverá se preocupar com duas delas: `trybe-report-streams`, com o código já implementado e `trybe-report-todo` onde você deverá fazer sua própria implementação para que nossa API possa funcionar.

### 1 - Implemente o método `findExpiredProducts()` na ProductService

> _Implemente em: src/main/java/com/betrybe/report/service/ProductService.java_

O método `findExpiredProducts()` deverá buscar por produtos vencidos e que poderão ser trocados ou repostos por nossos fornecedores. Lembre-se que para que um produto seja considerado vencido deve ter uma data de validade anterior ao dia de `hoje`.

### 2 - Implemente o método `findNonExpiredProducts()` na ProductService

> _Implemente em: src/main/java/com/betrybe/report/service/ProductService.java_

Agora iremos implementar a contraparte do exercício anterior: os produtos que ainda não venceram. Esses terão que ter uma data de validade superior ao dia de `hoje`.

### 3 - Implemente o método `findExpiresAtProducts()` na ProductService

> _Implemente em: src/main/java/com/betrybe/report/service/ProductService.java_

Agora você receberá um intervalo de datas e verificar os produtos que tem vencimento nesse intervalo (start e end), isso permitirá a equipe de vendas a trabalhar em promoções ou agilizar a trocar desses produtos com nossos fornecedores.

#### Vamos testar nossa API?

Está com tudo implementado? Chegou a hora de testar nossa API.

Basta executar nossa classe principal, a `TrybeReport`. Mas e o banco?

O banco para esta aplicação é o H2, um banco em memória, com suas definições especificadas no arquivo `application.properties` dentro do diretório `resources`.

O Spring automaticamente criará nossas tabelas e colocará nossa aplicação no ar através do container de aplicação Tomcat.

De posse de um cliente Rest API (Thunder client, Postman, Insomnia, entre outros) você poderá realizar requisições ao `http://localhost:8080/aqui-voce-especifica-a-rota`. Além disso, você pode ver quais as rotas disponíveis em nossa API através deste [link](http://localhost:8080/swagger-ui/index.html) - É importante que a API esteja rodando!
