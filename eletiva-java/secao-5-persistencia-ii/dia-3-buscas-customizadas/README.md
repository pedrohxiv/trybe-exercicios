# :pencil: Buscas customizadas

O objetivo dos exercícios desse dia foi aprender mais alguns conceitos do Spring fundamentais no desenvolvimento de uma API em Java. Para isso deveria aprender o **Eager** e **Lazy** **Loading** que são métodos que definem como e quando o Spring Data JPA carrega os relacionamentos entre as entidades. No Eager Loading, as entidades relacionadas são carregadas de uma só vez junto com a entidade original, o que é útil quando precisamos imediatamente dos dados relacionados. Por outro lado, no Lazy Loading, as entidades relacionadas só são carregadas quando são acessadas pela primeira vez, o que é útil para economizar memória e melhorar o desempenho. Aprendi o **Gerenciamento de Transações** onde, no Spring Data JPA, uma transação representa um conjunto de ações tratadas como uma única unidade de trabalho. Essas transações são essenciais para garantir a consistência dos dados, especialmente em cenários onde é crucial que várias operações sejam bem-sucedidas em sua totalidade ou falhem como um grupo, evitando assim qualquer estado inconsistente no banco de dados. E por fim aprendi a **buscas usando queries** onde o Spring Data JPA permite a criação de consultas personalizadas para buscar registros no banco de dados. Essas consultas podem ser definidas usando a linguagem de consulta do JPA (JPQL) ou a linguagem de consulta nativa do banco de dados. Além disso, o Spring Data JPA também suporta a criação de consultas derivadas a partir dos nomes dos métodos de repositório.

Os requisitos dos exercícios são:

## Refatorando nossa API Rest para Gestão de Perdas - Trybe Report

O primeiro passo para este exercício consiste em ter o repositório da nossa API [Trybe Report](https://github.com/tryber/java-trybe-report) em sua máquina. É importante mencionar que este exercício não possui avaliador automático então não é preciso criar uma nova branch e subir para o Github. Você terá três branches à sua disposição, mas deverá se preocupar com duas delas: `main`, com o código já implementado e `trybe-report-todo` que talvez você já tenha utilizado em exercício anterior! Agora iremos refatorar utilizando o nosso filtro de datas utilizando buscas customizadas!

### 1 - Implemente o método `findExpiredProducts()` na ProductService

> _Implemente em: src/main/java/com/betrybe/report/service/ProductService.java_ > _Implemente em: src/main/java/com/betrybe/report/repository/ProductRepository.java_

O método `findExpiredProducts()` deverá buscar por produtos vencidos e que poderão ser trocados ou repostos por nossos fornecedores. Lembre-se que para que um produto seja considerado vencido deve ter uma data de validade anterior ao dia de `hoje`.

### 2 - Implemente o método `findNonExpiredProducts()` na ProductService

> _Implemente em: src/main/java/com/betrybe/report/service/ProductService.java_ > _Implemente em: src/main/java/com/betrybe/report/repository/ProductRepository.java_

Agora iremos implementar a contraparte do exercício anterior: os produtos que ainda não venceram. Esses terão que ter uma data de validade superior ao dia de `hoje`.

### 3 - Implemente o método `findExpiresAtProducts()` na ProductService

> _Implemente em: src/main/java/com/betrybe/report/service/ProductService.java_ > _Implemente em: src/main/java/com/betrybe/report/repository/ProductRepository.java_

Agora você receberá um intervalo de datas e verificar os produtos que tem vencimento nesse intervalo (start e end), isso permitirá a equipe de vendas a trabalhar em promoções ou agilizar a trocar desses produtos com nossos fornecedores.

#### Vamos testar nossa API?

Está com tudo implementado? Chegou a hora de testar nossa API.

Basta executar nossa classe principal, a `TrybeReport`. Mas e o banco?

O banco para esta aplicação é o H2, um banco em memória, com suas definições especificadas no arquivo `application.properties` dentro do diretório `resources`.

O Spring automaticamente criará nossas tabelas e colocará nossa aplicação no ar através do container de aplicação Tomcat.

De posse de um cliente Rest API (Thunder client, Postman, Insomnia, entre outros) você poderá realizar requisições ao `http://localhost:8080/aqui-voce-especifica-a-rota`. Além disso, você pode ver quais as rotas disponíveis em nossa API através deste [link](http://localhost:8080/swagger-ui/index.html) - É importante que a API esteja rodando!
