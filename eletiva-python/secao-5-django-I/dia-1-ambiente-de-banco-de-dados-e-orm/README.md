# :pencil: Ambiente de banco de dados e ORM

O objetivo dos exercícios desse dia foi dar inicio ao aprendizado sobre **Django**, um framework de desenvolvimento web de alto nível, conhecido por sua eficiência, robustez e escalabilidade. Para isso deveria descrever Django como um _framework_ Python de desenvolvimento web de alto nível, eficiente, robusto e escalável, reconhecer situações em que seja mais vantajoso utilizar Django ou Flask, descrever os passos necessários para instalar o Django e criar um projeto, configurar corretamente o banco de dados MySQL com Docker, utilizando o Django, desenvolver um modelo básico com Django, utilizar alguns recursos integrados do Django para diminuir a quantidade de código necessária durante o desenvolvimento de uma aplicação e utilizar o Django Admin para criar um superusuário e gerenciar dados com o painel de administração. 

Os requisitos dos exercícios são:

## Exercício 1 - Crie e execute um novo projeto Django

Crie e execute um novo projeto Django chamado `Schedule`.

## Exercício 2 - Altere o banco de dados para MySQL

Atente-se aos seguintes pontos:

- O banco de dados padrão do projeto deve ser alterado para utilizar MySQL via Docker.
    - o user definido nas configurações deve ser o `root`, a senha deve ser `password` e database deve ser `schedule_database`.
- Faça o _build_ do container Docker com o MySQL, definindo a tag **schedule-db** para ele.
- Crie um script SQL para criar o banco de dados `schedule_database`.
- Execute o container, mapeando a porta 3306 do host para a porta 3306 do container.
- Crie e execute as migrations.

## Exercício 3 - Crie uma nova aplicação

Crie uma nova aplicação chamada `tasks` dentro do projeto **Schedule**.

## Exercício 4 - Crie uma nova tabela no banco de dados

A tabela deve se chamar `Task` e seus campos devem ser:

- `title`: com o máximo de 200 caracteres.
- `description`: sem limite de caracteres.
- `due_date`: data de vencimento.
- `completed`: booleano que indica se a tarefa foi concluída ou não.
- `priority`: inteiro que indica a prioridade da tarefa, com as opções: **Baixa**, **Média** e **Alta**.
- `created_at`: data de criação da tarefa, preenchida automaticamente.

> _**De olho na dica** 👀: Procure saber mais sobre a option [choices](https://docs.djangoproject.com/en/3.2/ref/models/fields/#choices), ela pode ser útil para definir o tipo do campo `priority`. 😉_

## Exercício 5 - Crie um novo superusuário e faça login no Django Admin

Crie um novo superusuário para o projeto e, com os dados de superuser, faça login no Django Admin.

> _**De olho na dica** 👀: Não esqueça de registrar seu modelo `Task` no arquivo `admin.py` da aplicação `tasks` para que você possa vê-lo e gerenciar suas informações por lá. 😉_
