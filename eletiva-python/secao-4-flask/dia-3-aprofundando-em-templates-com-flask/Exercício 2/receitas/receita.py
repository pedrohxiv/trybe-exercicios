from jinja2 import Environment, FileSystemLoader
import os

from filtros.converte_para_lista import converte_para_lista

loader = FileSystemLoader(os.path.join(os.path.dirname(__file__), 'templates'))

env = Environment(loader=loader)
env.filters['converte_para_lista'] = converte_para_lista

template = env.get_template('receita.html')

print(template.render({
    'nome': 'Pudim de leite condensado',
    'ingredientes': ['leite condensado', 'creme de leite', 'ovos', 'açúcar'],
    'preparo': 'bata o leite condensado junto com o creme de leite e os ovos no liquidificador por 5 minutos, enquanto isso, coloque o açúcar na frigideira até virar caramelo, ponha o caramelo em uma forma e despeje a misturam em cima, coloque para gelar'
}))
