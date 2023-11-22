# :pencil: Autorização

O objetivo dos exercícios desse dia foi aprender sobre autorização com o _Spring Security_. Uma forma simples de implementar algo muito robusto. Entendi como o _Spring Security_ nos ajuda a implementar a autorização de acesso aos **endpoints** da nossa aplicação. Para isso deveria implementar autorização de acesso aos **endpoints** da aplicação, utilizar o SpEL para definir as regras de acesso aos **endpoints** e implementar auditoria com autenticação.

Os requisitos dos exercícios são:

Após realizar as implementações realizadas durante o aprendizado do conteúdo no nosso projeto `Trybetrack`, realize agora essas alterações na nossa _API_:

## Exercício 1

Faça com que o **endpoint** `GET /buslines` seja acessível apenas por pessoas com papel _VIEWER_, _USER_ e _ADMIN_.

## Exercício 2

Faça com que a auditoria armazene o _email_ da pessoa responsável pela alteração do registro ao invés do _username_.

## Exercício 3

Implemente a auditoria na entidade `BusLine`.

## Exercício 4

Usando SpEL, faça com que armazene uma idade na entidade `Person` e que seja possível apenas pessoas com idade maior ou igual a 18 anos possam acessar o **endpoint** `POST /buslines`.
