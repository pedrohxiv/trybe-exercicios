# :pencil: Introdução a Java Web e Spring

O objetivo dos exercícios desse dia foi dar inicio ao aprendizado sobre o uso do Java para desenvolvimento de aplicações Web aprendendo o quanto ele é fundamental devido à popularidade e robustez da linguagem nesse domínio, permitindo a criação de aplicações escaláveis, seguras e eficientes. Para isso deveria aprender como Java é utilizado para desenvolvimento de aplicações Web, introduzir ao framework Spring, ver projetos do ecossistema Spring, aprender a como construir um projeto Spring do zero, aprender o empacotamento de aplicações Web, utilizar de anotações Java com o Spring, realizar o primeiro contato com Spring Web e utilizar do Hot Reload com Spring Boot Dev Tools.

Os requisitos dos exercícios são:

Como prática para o dia, vamos criar um projeto do zero até a execução (e alteração). Os passos serão similares ao que você viu no conteúdo. No entanto, sugerimos que você tente fazê-los por conta, e só olhar as instruções no conteúdo quando necessário. Isso ajudará você a solidificar o entendimento do papel de cada passo.

## Passo 1: criar um projeto novo

Crie um projeto Spring Boot com as seguintes características:

- _Nome/tema_: Java Web
- _Tipo_: Maven
- _Linguagem_: Java 17
- _Dependências_: Spring Web e Spring Dev Tools.

## Passo 2: criar uma rota (endpoint)

Crie uma classe implementando uma API Rest contendo um único endpoint, chamado `/javaweb`, que retorna a mensagem `Estou aprendendo a criar aplicações Java para a Web!`. Acesse a aplicação pelo navegador para ver a mensagem.

## Passo 3: ativar o Hot Reload e atualizar aplicação

Ative o Hot Reload do Spring Boot Dev Tools no IntelliJ. Em seguida, faça alguma alteração na mensagem da sua aplicação e verifique se a mensagem foi alterada sem a necessidade de reiniciar a aplicação.
