# :pencil: 



Os requisitos dos exercícios são: 

## Exercício 1

Você foi contratado para desenvolver um aplicativo _web_ de gerenciamento de tarefas usando Flask e _templates_ do Jinja2. O aplicativo deve permitir aos usuários adicionar, visualizar e marcar tarefas como concluídas.

_Model_:

1 - Crie uma classe chamada ``Task`` que representa uma tarefa, com os atributos `id`, `title` e `completed`. 2 - Crie uma lista de tarefas no arquivo do aplicativo e inicialize-a com algumas tarefas de exemplo.

_View_:

3 - Crie um _template_ chamado `tasks.html` que exiba a lista de tarefas e forneça um formulário para adicionar novas tarefas. 4 - Use uma estrutura de repetição do Jinja2 para iterar sobre a lista de tarefas e exibi-las na página. 5 - Adicione um botão de marcação de conclusão para cada tarefa exibida, permitindo que os usuários marquem uma tarefa como concluída. 6 - Estilize a página usando CSS para torná-la atraente visualmente.

_Controller_:

7 - Crie uma rota _‘/‘_ que renderize o _template_ `tasks.html`. 8 - No _template_, adicione um formulário para adicionar novas tarefas. 9 - Quando o usuário enviar uma nova tarefa, a rota deve adicionar a tarefa à lista de tarefas. 10 - Adicione uma rota adicional `'/complete/int:task_id'` que seja acionada quando um usuário marcar uma tarefa como concluída. Essa rota deve atualizar o estado da tarefa correspondente na lista de tarefas.

Dicas:

- Crie um arquivo separado para a classe `Task` e importe-o no arquivo do aplicativo Flask.
- Use a função `render_template` do Flask para renderizar o template `tasks.html`.
- Passe a lista de tarefas para o _template_ como um argumento na função `render_template`.
- No _template_, use a sintaxe do Jinja2 para iterar sobre a lista de tarefas e exibi-las.
- Use arquivos CSS separados para estilizar a página, se desejar.
- Utilize o método `POST` para enviar o formulário de adição de tarefas, e utilize o método `GET` para marcar tarefas como concluídas na rota `'/complete/int:task_id'`.
- Na rota `'/complete/int:task_id'`, atualize o estado da tarefa correspondente na lista de tarefas com base no parâmetro `task_id` recebido.

## Exercício 2

No seu time de desenvolvimento, você recebeu a missão de criar um sistema de registro de alunos utilizando Flask, Jinja2 e a arquitetura MVC (Model-View-Controller). O sistema permitirá adicionar, exibir, editar e excluir informações dos alunos.

Requisitos:

1 - Criar uma rota para exibir a lista de alunos cadastrados. A lista deve conter o nome e o número de matrícula de cada aluno. Utilize um arquivo HTML chamado `alunos.html` para exibir a lista de alunos.

2 - Criar uma rota para adicionar um novo aluno ao sistema. Utilize um arquivo HTML chamado `adicionar_aluno.html` com um formulário que solicite o nome e o número de matrícula do aluno. Ao submeter o formulário, o aluno deve ser adicionado à lista de alunos e redirecionado para a página de lista de alunos.

3 - Criar uma rota para editar as informações de um aluno existente. Utilize um arquivo HTML chamado `editar_aluno.html` com um formulário preenchido com as informações atuais do aluno. Ao submeter o formulário, as informações do aluno devem ser atualizadas e o usuário redirecionado para a página de lista de alunos.

4 - Criar uma rota para excluir um aluno do sistema. Ao excluir um aluno, ele deve ser removido da lista de alunos e o usuário redirecionado para a página de lista de alunos.

5 - Estilizar as páginas HTML utilizando CSS. Crie um arquivo CSS chamado `style.css` e utilize-o para aplicar estilos aos elementos das páginas HTML.

## Exercício 3

Dando sequência ao Exercício 01, refatore o código para utilizar o MongDB ao invés de um array.

Requisitos:

1 - Crie um diretório chamado `models` e um arquivo de conexão com o banco chamado `db.py`

2 - Crie um arquivo chamado `student_model.py`, crie uma classe `StudentModel` e implemente dentro dela a lógica do CRUD de um aluno

3 - Faça as alterações que forem necessárias no arquivo `app.py` e/ou templates

## Exercício 4

Você foi contratado para a construção de um catálogo de filmes utilizando Flask, Jinja2 e MongoDB.

Neste exercício, vamos construir uma página de catálogo de filmes utilizando Flask como framework web, Jinja2 como mecanismo de templates e o MongoDB para armazenar informações dos filmes. A página exibirá uma lista de filmes e permitirá que o usuário pesquise por filmes específicos.

Requisitos:

1 - Crie uma estrutura de diretórios para o projeto com os seguintes arquivos:

```
- app/
  - controllers/
    - filme_controller.py
  - models/
    - db.py
    - filme.py
  - static/
    - filme.css
    - style.css
  - templates/
    - filme.html
    - index.html
  - app.py
```

`app.py`: arquivo principal do projeto que conterá as rotas da aplicação.

`models/filme.py`: arquivo que conterá a definição da classe “Filme” para representar um filme.

`controllers/filme_controller.py`: arquivo que conterá a lógica de negócio da aplicação (controller).

`templates/`: pasta que conterá os templates HTML.

`static/`: Arquivos com alguma estilização CSS que preferir.

2 - No arquivo `models/filme.py`, defina a classe Filme com os seguintes atributos e métodos:

- Atributos
    - `_collection`: coleção do MongoDB a ser usada
- Métodos
    - `__init__`: inicializa o atributo data
    - `buscar_filmes_por_titulo`: busca filmes pelo título no DB, caso não receba um título, deve retornar todos os filmes registrados no banco.
    - `buscar_filmes_por_id`: busca um filme específico
    - `to_dict`: converte um filme para um dicionário com as seguintes propriedades:
        - `titulo`: string (título do filme).
        - `ano`: string (ano de lançamento do filme).
        - `diretor`: string (diretor do filme).
        - `genero`: string (gênero do filme).
        - `poster`: string (URL do poster do filme).
        - `_id`: string (_id do filme)

3 - Crie o arquivo `models/db.py`, este arquivo será responsável por fazer a conexão com o MongoDB

4 - No arquivo `controllers/filme_controller.py`, crie a classe `FilmeController` com os seguintes métodos:

- `buscar_filmes_por_titulo(titulo)`: busca por filmes no banco de dados com base no título fornecido.
- `buscar_filme_por_id(id)`: busca por um filme no banco de dados com base no ID fornecido.

5 - No arquivo `app.py`, importe os módulos necessários do Flask, models e controllers. Defina as seguintes rotas:

- Rota principal para exibir a página inicial com a lista de filmes (método GET).
- Rota para realizar a busca por filmes (método POST).
- Rota para exibir os detalhes de um filme específico (método GET).

6 - Crie os templates HTML na pasta templates/ para a página inicial e os detalhes do filme.

Dica: crie um arquivo `.mongodb`, cole o código abaixo dentro dele e execute-o:

```
use('db_filmes')
db.filmes.insertMany([
    {
        'titulo': 'Interestelar',
        'ano': 2014,
        'diretor': 'Christopher Nolan',
        'genero': 'Ficção científica',
        'poster': 'https://play-lh.googleusercontent.com/em2griqrHoxmxEss_WM5Fi2iqSEKrEfLNAltjX54lREOR0nz0du__KuSi2bA_YNjS4w'
    },
    {
        'titulo': 'Carta Selvagem',
        'ano': '2015',
        'diretor': 'Simon West',
        'genero': 'Ação',
        'poster': 'https://leiturafilmica.com.br/wp-content/uploads/2023/05/carta-selvagem-poster.jpg'
    },
    {
        'titulo': 'Orgulho e Preconceito',
        'ano': '2005',
        'diretor': 'Joe Wright',
        'genero': 'Drama',
        'poster': 'https://br.web.img3.acsta.net/medias/nmedia/18/87/84/14/20028635.jpg'
    },
    {
        'titulo': 'A Bruxa',
        'ano': '2015',
        'diretor': 'Robert Eggers',
        'genero': 'Terror',
        'poster': 'https://br.web.img2.acsta.net/c_310_420/pictures/16/02/02/11/51/346769.jpg'
    },
    {
        'titulo': 'Projeto X',
        'ano': '2012',
        'diretor': 'Nima Nourizadeh',
        'genero': 'Comédia',
        'poster': 'https://delfos.net.br/wp-content/uploads/2017/05/975700-02-05-17-12.jpg'
    },
])
```
