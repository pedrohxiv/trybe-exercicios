from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


alunos = []


@app.route("/")
def listar_alunos():
    return render_template('alunos.html', alunos=alunos)


@app.route("/adicionar_aluno", methods=['GET', 'POST'])
def adicionar_aluno():
    if request.method == 'POST':
        nome = request.form['nome']
        matricula = request.form['matricula']

        alunos.append({'nome': nome, 'matricula': matricula})

        return redirect(url_for('listar_alunos'))

    return render_template('adicionar_aluno.html')


@app.route('/editar_aluno/<int:index>', methods=['GET', 'POST'])
def editar_aluno(index):
    if request.method == 'POST':
        nome = request.form['nome']
        matricula = request.form['matricula']

        alunos[index] = {'nome': nome, 'matricula': matricula}

        return redirect(url_for('listar_alunos'))

    return render_template('editar_aluno.html', aluno=alunos[index])


@app.route('/excluir_aluno/<int:index>')
def excluir_aluno(index):
    alunos.pop(index)

    return redirect(url_for('listar_alunos'))


if __name__ == '__main__':
    app.run(debug=True)
