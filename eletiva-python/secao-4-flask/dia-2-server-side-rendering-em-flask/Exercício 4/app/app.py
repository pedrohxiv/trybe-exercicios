from flask import Flask, render_template, request

from controllers.filme_controller import FilmeController

app = Flask(__name__)


@app.route('/')
def listar_filmes():
    filme_controller = FilmeController()
    filmes = filme_controller.buscar_filmes_por_titulo()
    return render_template('index.html', filmes=filmes)


@app.route('/buscar', methods=['POST'])
def buscar_filmes():
    titulo = request.form.get('titulo')
    filme_controller = FilmeController()
    filmes = filme_controller.buscar_filmes_por_titulo(titulo)
    return render_template('index.html', filmes=filmes)


@app.route('/filme/<id>')
def detalhes_filme(id):
    filme_controller = FilmeController()
    filme = filme_controller.buscar_filme_por_id(id)
    return render_template('filme.html', filme=filme)


if __name__ == '__main__':
    app.run(debug=True)
