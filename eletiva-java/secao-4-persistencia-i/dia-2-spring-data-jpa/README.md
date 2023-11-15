# :pencil: Spring Data JPA

O objetivo dos exercícios desse dia foi avançar mais um passo no _Spring_. Aprendi sobre como persistir dados em banco de dados relacionais, e.g. _MySQL_, utilizando o framework _Spring Data JPA_. Para isso deveria configurar o _Spring Data JPA_ em um projeto _Java_ com _Spring_, mapear as entidades do banco de dados utilizando anotações _Spring Data JPA_, definir repositórios de dados com _Spring Data JPA_ e aplicar a camada de persistência em uma aplicação _Java_ com _Spring_.

Os requisitos dos exercícios são:

## API Rest de Gerenciamento de Produtos

Toda distribuidora de produtos trabalha com produtos de diversas marcas e categorias e necessita possuir um sistema de gestão de produtos para organizar seu estoque.

O objetivo deste exercício é criar uma _API Rest_ de gestão de produtos e utilizar o _Spring Data JPA_ para persistir dados em um banco de dados _MySQL_.

Ao final é esperado que você:

- Organize a aplicação em uma arquitetura em camadas com as camadas `Model`, `Service` e `Controller`;
- Configure uma aplicação _Java_ e _Spring_ com as bibliotecas vistas até aqui;
- Crie as entidades solicitadas no exercício;
- Realize os mapeamentos das entidades, ou seja, que anote as classes com as anotações apropriadas;
- Crie um repositório para cada entidade, estendendo a interface `JpaRepository` do _Spring Data JPA_;
- Crie os _endpoints_ necessários em cada uma das entidades para realizar operações _CRUD_.

A _API Rest_ deve trabalhar com as seguintes entidades:

- `Product`: Representa um produto na _API Rest_. A classe que representa essa entidade deve conter os seguintes atributos:
  - `id`: Chave primária auto incrementada do produto. Este atributo deve ser do tipo _Long_;
  - `name`: O nome do produto. Este atributo deve ser do tipo _String_;
  - `price`: O preço do produto. Este atributo deve ser do tipo _Double_;
- `Category`: Representa a categoria de um produto na _API Rest_. A classe que representa essa entidade deve conter os seguintes atributos:
  - `id`: Chave primária auto incrementada da categoria. Este atributo deve ser do tipo _Long_;
  - `name`: O nome da categoria. Este atributo deve ser do tipo _String_;
- `Brand`:Representa a marca de um produto na _API Rest_. A classe que representa essa entidade deve conter os seguintes atributos:
  - `id`: Chave primária auto incrementada da marca. Este atributo deve ser do tipo _Long_;
  - `name`: O nome da marca. Este atributo deve ser do tipo _String_;

### Observações

- Não é necessário implementar nenhum tipo de relacionamento entre as entidades nesse exercício;
- Utilize o banco de dados _MySQL_ através de um _container_;
- Certifique-se de adicionar as dependências necessárias no momento da criação do projeto com _Spring Initializr_;
- Realize requisições com algum cliente Rest (Insomnia, Postman, etc) regularmente para verificar se as entidades estão sendo mapeadas corretamente.
