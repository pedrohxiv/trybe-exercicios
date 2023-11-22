# :pencil: Autenticação

O objetivo dos exercícios desse dia foi dar inicio no aprendizado sobre _Spring Security_, uma poderosa e altamente personalizável estrutura de segurança para aplicações Java, onde primeiramente foquei na **autorização** baseada em **JWT** (_JSON Web Tokens_) . Para isso deveria aprender sobre a segurança de _APIs Rest_, aprender sobre autenticação e autorização e realizar a autenticação com _Spring Security_.

Os requisitos dos exercícios são:

## Adicione a camada de segurança em uma API Rest para Gerenciamento de Músicas e Playlists

O primeiro passo para este exercício consiste em clonar o repositório da nossa API de [Gerenciamento de Músicas e Playlists](https://github.com/tryber/java-playlist). É importante mencionar que este exercício não possui avaliador automático então não é preciso criar uma nova branch e subir para o Github. Nesse repositório, você terá duas branches à disposição: `main`, com o código já implementado e `trybe-playlist-todo` onde você deverá fazer sua própria implementação para que segurança na nossa API possa funcionar.

### Exercício 1 - Adicione o Spring Security ao Projeto

Antes de iniciarmos a adição da camada de segurança a nossa API é importante que você insira as dependências necessárias no nosso `pom.xml` para que tudo corra bem.

### Exercício 2 - A partir da nossa entidade Person implemente UserDetails

Implemente em: `src/main/java/com.betrybe.playlist/entity/Person.java`

Novos métodos deverão ser finalizados tão logo implementemos a interface UserDetails. É importante que você atualize cada um desses métodos para que não fiquem apenas com valores padrão em seu retorno.

> _Dica: Atente-se principalmente ao método GetAuthorities._

### Exercício 3 - A partir da nossa PersonService implemente UserDetailsService

Implemente em: `src/main/java/com.betrybe.playlist/service/PersonService.java`

O método `loadUserByUsername` que virá da interface deverá ser finalizado. Além disso, você deve adicioná-lo a `PersonRepository` para que possamos buscar uma pessoa em nossa base de dados através do seu `username`.

> _Não esqueça de modificar o método `insert` para que antes de salvarmos uma pessoa no banco criptografemos sua senha._

### Exercício 4 - Conclua a implementação da TokenService

Implemente em: `src/main/java/com.betrybe.playlist/service/TokenService.java`

Ainda nos falta os métodos de generateToken() e validateToken().

### Exercício 5 - Implemente a SecurityFilter

Implemente em: `src/main/java/com.betrybe.playlist/security/SecurityFilter.java`

A `SecurityFilter` deverá estender de `OncePerRequestFilter` para evitar um `stack overflow` em nossa aplicação. Essa extensão nos permitirá implementar o método `doFilterInternal` reponsável por repassar o nosso token e o seu respectivo usuário para o nosso mecanismo de autenticação. Além disso, é importante que você implemente o método `recoveryToken` que irá retornar uma String com o nosso token JWT.

> _É importante mencionar que a nossa TokenService já está implementada e deverá ser utilizada aqui em conjunto com a PersonService que você modificou anteriormente. PS.: Não esqueça das anotações._

### Exercício 6 - Conclua a implementação da SecurityConfiguration

Implemente em: `src/main/java/com.betrybe.playlist/security/SecurityConfiguration.java`

Já disponibilizamos a `SecurityConfiguration` parcialmente implementada, é preciso, porém, que você implemente os beans `authenticationManager` e `passwordEncoder`. Além disso, lembre-se de descomentar a linha com `.addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)`.
