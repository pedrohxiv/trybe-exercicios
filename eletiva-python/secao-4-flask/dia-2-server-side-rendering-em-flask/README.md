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
