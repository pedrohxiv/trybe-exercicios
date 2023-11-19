# :pencil: Testes com Spring Data

O objetivo dos exercícios desse dia foi aprender os testes com Spring Data. Para isso deveria aprender a como trabalhar com testes unitários envolvendo a camada de persistência, incluindo como fazer _mock_ dela, aprender a como utilizar perfis no Spring para configurar banco de dados em memória, de forma a isolar e ganhar maior controle sobre o ambiente de testes envolvendo persistência e aprender a como utilizar a biblioteca _TestContainers_ para configurar containers que possibilitam testes de integração assertivos.

Os requisitos dos exercícios são:

Para fazer os exercícios deste dia, você precisará utilizar o código do seguinte repositório: [java-podcast-manager](https://github.com/tryber/java-podcast-manager). Sua solução não será avaliada automaticamente, mas você deverá clonar o projeto para poder fazer os exercícios a partir do código base fornecido.

## Exercício 1 - Crie e configure três perfis Spring

Neste exercício, você deve criar três perfis do Spring:

1. `development`: contém configuração para acesso a um banco de dados MySQL local (você pode utilizar um instalado em seu sistema, ou utilizar um container Docker).
2. `production`: contém configuração para acesso a um banco MySQL. No entanto, altere a porta da URL para uma porta diferente da disponível no seu banco local. Assim, você saberá caso esta configuração esteja ativa, porque ocorrerá um erro de conexão. Uma alternativa é também utilizar login/senha diferentes.
3. `test`: contém configuração para usar um banco de dados em memória do tipo H2.

Além das três configurações acima, altere/crie a configuração inicial da aplicação para utilizar o perfil `development`.

Lembre-se também de adicionar as dependências necessárias para os bancos e para o Spring Data JPA.

## Exercício 2 - Crie testes unitários para a camada de serviço com mock do repositório

Neste exercício, você deve criar testes para a camada de serviço da nossa aplicação. Para isso, você deve _mockar_ a camada de persistência antes de chamar camada de serviço. Sua implementação deve testar os métodos `getPodcast` e `createPodcast` da classe `PodcastService`. Valide também o caso de erro (exceção `PodcastNotFoundException`).

Lembre-se também de ativar o perfil de teste que foi criado no exercício 1. Apesar de nosso teste ser _mockado_, a aplicação inteira iniciará devido à configuração do Spring Boot no teste.

## Exercício 3 - Crie testes unitários para a camada de serviço sem mock do repositório e usando banco em memória

Neste exercício, você deve novamente criar testes para a camada de serviço da nossa aplicação, mas desta vez sem _mockar_ o repositório. Em vez disso, você vai utilizar o perfil de testes para que a aplicação seja testada utilizando o banco de dados em memória.

Como antes, sua implementação deve testar os métodos `getPodcast` e `createPodcast` da classe `PodcastService`. Valide também o caso de erro (exceção `PodcastNotFoundException`).

## Exercício 4 - Crie testes de integração para a aplicação usando TestContainers

Agora você deve novamente criar testes de integração para a aplicação. Você deve utilizar a biblioteca TestContainers para configurar um contêiner MySQL para ser executado junto com seus testes. Você **não** deve utilizar o mesmo perfil de testes anterior (que usa o banco H2). Em vez disso, implemente a configuração dinâmica para utilizar as informações do contêiner no datasource.

Você deve implementar um teste para a rota GET `/podcasts/{id}` da aplicação. Sugerimos que você utilize o `MockMvc` nos seus testes. Você também pode utilizar as camadas de serviço e persistência na preparação dos seus testes, caso tenha necessidade. Entretanto, **não** utilize mocks.
