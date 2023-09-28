# :pencil: API e Testes em Flask

O objetivo dos exercícios desse dia foi aprender os **testes no Flask**. Explorei duas bibliotecas de testes diferentes: `unittest` e `pytest`. Explorei exemplos práticos de como escrever testes no Flask usando tanto o `unittest` quanto o `pytest`. Isso me ajudou a entender as diferenças entre as duas bibliotecas e escolher a abordagem mais adequada para os meus projetos. Para isso deveria compreender o `unittest`, testar projetos Flask com `unittest`, testar projetos Flask com `Pytest` e entender a diferença entre o `Unittest` e o `Pytest`.

Os requisitos dos exercícios são:

Para os exercícios, vamos continuar com o nosso gerenciador de projetos presente no repositório [tryber/python-conteudo-flask-project-manager](https://github.com/tryber/python-conteudo-flask-project-manager).

> _**Atenção** ⚠️: Antes de começar, faça um checkout para a branch `exercicios`._

## Project Manager

Esse é um gerenciador de projects nos quais uma empresa está trabalhando.

Para executar este project, é indispensável que você tenha o Python instalado em sua máquina, além disso, é necessário ter o Docker ou o MongoDB instalados.

Após clonar o repositório e acessar o diretório do project pelo terminal, siga os seguintes passos:

### Preparando Ambiente

<details>

<summary>🐳 Subindo a aplicação com Docker</summary>

**[1]** Suba os containers
> `docker-compose up -d`

**[2]** Popule o banco
> `docker exec -it mongo_db bash`
> `cd ./seeders`
> `mongoimport --jsonArray --db db_project --collection projects --file project.json`
> `exit`

</details>

Por padrão aplicação estará rodando na porta `8000`, você pode acessá-la pelo navegador na rota <http://127.0.0.1:8000/>.

## Exercício 1

- Crie um template chamado `taskForm.html` com um formulário para a criação de uma nova tarefa para os projetos já existentes;
- Garanta que o template seja renderizado na rota `/task/<id_project>/form`;
- Teste os componentes da página de cadastro de uma nova tarefa.

> _Dica: Use o **id** do projeto para conseguir as informações referentes ao projeto onde você vai cadastrar uma nova tarefa._

## Exercício 2

Teste os componentes da tela de cadastro de um novo projeto

## Exercício 3

Teste os envios dos formulários de um novo projeto.
