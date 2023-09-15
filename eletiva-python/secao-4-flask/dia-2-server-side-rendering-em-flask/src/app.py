from flask import Flask, render_template, request

from models.task import Task

app = Flask(__name__)


tasks = [
    Task(1, 'Comprar leite'),
    Task(2, 'Estudar Flask'),
    Task(3, 'Fazer exercícios'),
]


@app.route('/', methods=['GET', 'POST'])
def tasks_view():
    if request.method == 'POST':
        title = request.form['title']
        new_task = Task(len(tasks) + 1, title)
        tasks.append(new_task)

    return render_template('tasks.html', tasks=tasks)


@app.route('/complete/<int:task_id>')
def complete_task(task_id):
    for task in tasks:
        if task.id == task_id:
            task.completed = True

    return render_template('tasks.html', tasks=tasks)


if __name__ == '__main__':
    app.run()
