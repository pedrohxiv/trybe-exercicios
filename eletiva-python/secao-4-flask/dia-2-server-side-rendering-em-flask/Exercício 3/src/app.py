from flask import Flask, render_template, request, redirect, url_for

from models.student_model import StudentModel

app = Flask(__name__)


student_model = StudentModel()


@app.route("/")
def listar_alunos():
    alunos = student_model.read_all()

    return render_template('alunos.html', alunos=alunos)


@app.route("/adicionar_aluno", methods=['GET', 'POST'])
def adicionar_aluno():
    if request.method == 'POST':
        nome = request.form['nome']
        matricula = request.form['matricula']

        student_model.create({'nome': nome, 'matricula': matricula})

        return redirect(url_for('listar_alunos'))

    return render_template('adicionar_aluno.html')


@app.route('/editar_aluno/<string:student_id>', methods=['GET', 'POST'])
def editar_aluno(student_id):
    aluno = student_model.read_one(student_id)

    if request.method == 'POST':
        nome = request.form['nome']
        matricula = request.form['matricula']

        student_model.update(
            student_id,
            {'nome': nome, 'matricula': matricula},
        )

        return redirect(url_for('listar_alunos'))

    return render_template('editar_aluno.html', aluno=aluno)


@app.route('/excluir_aluno/<string:student_id>')
def excluir_aluno(student_id):
    student_model.delete(student_id)

    return redirect(url_for('listar_alunos'))


if __name__ == '__main__':
    app.run(debug=True)
