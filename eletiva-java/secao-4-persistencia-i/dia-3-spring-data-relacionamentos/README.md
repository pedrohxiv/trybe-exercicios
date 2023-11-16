# :pencil: Spring Data Relacionamentos

O objetivo dos exercícios desse dia foi dar continuidade ao framework _Spring Data JPA_ aprendendo a trabalhar com relacionamentos entre entidades. Entendi como criar relacionamentos de um para um, um para muitos e muitos para muitos no _Spring_. Além disso aprendi sobre paginação, migrations e seeders. Para isso deveria compreender relacionamentos entre entidades, sendo elas, um para um, um para muitos e muitos para muitos, compreender a paginação, compreendendo a função da interface `Pageable` e classe `Page` e compreender as migrations e seeders.

Os requisitos dos exercícios são:

Em lição anterior você criou uma API para gerenciamento de produtos, resolvemos refatorar esta aplicação e disponibilizá-la para que você possa fazer as respectivas anotações com o Spring Data JPA. Além disso, você deverá realizar o relacionamento entre as tabelas e aplicando os conceitos seeds apresentados no conteúdo que estudou hoje. Bora colocar o que estudamos em prática?!

## API Rest de Gerenciamento de Produtos - V2

O primeiro passo para este exercício consiste em clonar o repositório da nossa API de Gerenciamento de Produtos que passou a se chamar [Trybe Shopping](https://github.com/tryber/java-trybe-shopping/tree/trybe-shopping). É importante mencionar que este exercício não possui avaliador automático então não é preciso criar uma nova branch e subir para o Github. Você terá duas branches à disposição: `main`, com o código já implementado e `trybe-shopping` onde você deverá fazer sua própria implementação para que nossa API possa funcionar. Além disso, você não precisará alterar nada com relação a entidade `Purchase`, seja seu `controller`, `repository` ou sua `service`.

### 1 - Adicione a anotação `@Entity` nas entidades do sistema

Certifique-se, também, de informar qual campo representa o ID e qual a estratégia para geração de valores para esses campos.

### 2 - Faça a extensão das interfaces que representam os nossos repositórios

> _Dica: Devemos estender a JpaRepository e especificar tanto o campo que representa a entidade quanto o tipo do atributo que representa seu identificador único (ID)_

### 3 - Estabeleça o relacionamento `1:1` entre as entidades `Product` e `ProductDetail`

Um produto está relacionado a um detalhe de produto. Não esqueça de que além de estabelecer a relação através da anotação é preciso especificar a coluna que será responsável pelo `join` em uma das entidades e que na outra entidade é preciso dizer como se dará o mapeamento (`mappedBy`).

### 4 - Estabeleça o relacionamento `1:N` entre as entidades `Product` e `Brand`

Cada produto em nosso sistema está associado a uma marca e uma mesma marca pode ser a dona de n-produtos. Lembre-se de que duas anotações complementares precisarão ser utilizadas (@ManyToOne e @OneToMany) e que um dos lados do relacionamento deverá especificar a coluna de junção (@JoinColumn).

### 5 - Estabeleça o relacionamento `N:M` entre as entidades `Product` e `Category`

Um mesmo produto pode ter n-categorias e uma mesma categoria estar diretamente relacionada a n-produtos. Realize o relacionamento muitos-para-muitos entre ambas as entidades. Para este exercício em específico será necessária a criação de uma tabela extra.

> _Dica: Reveja nosso conteúdo, sobretudo em relação à anotação `@JoinTable`._

### 6 - Use as seeds para popular nosso banco

Há um arquivo `import.sql` no diretório `resources`, esse arquivo será utilizado pelo `application.properties` para popular nosso banco.

> _Dica: você deve criar a propriedade `spring.jpa.hibernate.ddl-auto` e atribuir o valor que melhor condiz com o uso de seeds._

### Vamos testar nossa API?

Está com tudo implementado? Chegou a hora de testar nossa API.

Basta executar nossa classe principal, a `TrybeShopping`. Mas e o banco?

O banco para esta aplicação é o H2, um banco em memória, com suas definições especificadas no arquivo `application.properties` dentro do diretório `resources`.

O Spring automaticamente criará nossas tabelas e colocará nossa aplicação no ar através do container de aplicação Tomcat.

De posse de um cliente Rest API (Thunder client, Postman, Insomnia, entre outros) você poderá realizar requisições ao `http://localhost:8080/aqui-voce-especifica-a-rota`. Além disso, você pode ver quais as rotas disponíveis em nossa API através deste [link](http://localhost:8080/swagger-ui/index.html) - É importante que a API esteja rodando!
