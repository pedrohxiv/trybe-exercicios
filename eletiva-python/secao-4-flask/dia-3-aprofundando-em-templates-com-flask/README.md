# :pencil: Aprofundando em Templates com Flask



Os requisitos dos exercícios são: 

## Exercício 1

No seu time de desenvolvimento, você recebeu a missão de criar uma página onde são exibidas as informações de uma receita, utilizando o Jinja2.

Siga o esquema de diretórios e arquivos abaixo:

- receitas/
    - templates/ receita.html
    - receita.py

Utilize a receita abaixo

```
{
    'nome': 'Pudim de leite condensado',
    'ingredientes': ['leite condensado', 'creme de leite', 'ovos', 'açúcar'],
    'preparo': 'bata o leite condensado junto com o creme de leite e os ovos no liquidificador por 5 minutos, enquanto isso, coloque o açúcar na frigideira até virar caramelo, ponha o caramelo em uma forma e despeje a misturam em cima, coloque para gelar'
}
```

1. Dentro do diretório `templates`,crie um arquivo chamado `receita.html` e use-o como template, seu template deve ter as seguintes informações:

- O nome da receita;
- Os ingredientes da receita, sendo que cada ingrediente deve ser um item separado;
- Preparação da receita, um item só.

2. Dentro do diretório `receitas`,crie um arquivo chamado `receita.py` que deve ser responsável por carregar o template, criar um ambiente, criar um contexto, carregar o template renderizado com um contexto e imprimir o resultado.

3. Os ingredientes precisam estar armazenados em uma `lista`, onde cada item é um ingrediente e eles devem começar com a primeira letra maiúscula.

## Exercício 2

O seu time gostou muito do que você fez, mas uma nova ideia de implementação surgiu, o fato do modo de preparo estar sendo renderizado todo num lugar só está causando um problema de UX/UI, foi então pedido para que você separe as informações do preparo em itens únicos durante a renderização, sem mexer no dado original. Crie um filtro personalizado para dividir o modo de preparo em uma lista de frases.

1. Cada frase deve começar com uma letra maiúscula.
2. Não devem haver espaços em branco no início ou final das frases
3. Cada frase deve ser renderizada com um item único.

## Exercício 3

Foi pedido para sua equipe que fosse desenvolvido um template para fazer saudações de `Bom dia`, `Boa tarde` ou `Boa noite`, entretanto, o código o código que deveria renderizar esse template está lançando algumas exceções, faça o tratamento das exceções com o Jinja2 e corrija todos os bugs. Use o template e o código abaixo:

> _`saudacao/templates/saudacao.html`_

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Project</title>
</head>
<body>
    {% if hora < 12 %}
        <p>{{ manha }}</p>
    {% elif hora < 18 %}
        <p>{{ tarde }}</p>
    {% else %}
        <p>{{ noite }}</p>
    {% endif %}
</body>
</html>
```

> _`saudacao/saudacao.py`_

```
from jinja2 import Environment, FileSystemLoader
from datetime import datetime
saudacoes = {
    'manha': 'Bom dia',
    'tarde': 'Boa tarde',
    'noite': 'Boa noite',
    'hora': datetime.now().hour,
}

loader = FileSystemLoader('saudacao/templates')

environment = Environment(loader=loader)

template = environment.get_template('saudacao.html')

output = template.render(saudacoes)

print(output)
```
