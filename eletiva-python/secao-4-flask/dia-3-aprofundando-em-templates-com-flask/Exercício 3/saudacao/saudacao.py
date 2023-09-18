from jinja2 import Environment, FileSystemLoader, TemplateNotFound
from datetime import datetime
import os

try:
    saudacoes = {
        'manha': 'Bom dia',
        'tarde': 'Boa tarde',
        'noite': 'Boa noite',
        'hora': datetime.now().hour,
    }

    loader = FileSystemLoader(os.path.join(os.path.dirname(__file__), 'templates'))

    environment = Environment(loader=loader)

    template = environment.get_template('saudacao.html')

    output = template.render(saudacoes)
except NameError as e:
    print(f'NameError: {str(e)}')
except TemplateNotFound as e:
    print(f'TemplateNotFound: {str(e)}')
except Exception as e:
    print(f'Exception: {str(e)}')
else:
    print(output)
