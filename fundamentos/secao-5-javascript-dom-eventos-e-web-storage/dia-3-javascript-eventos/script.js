function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDays() {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let dayLi = document.createElement('li');
    dayLi.innerHTML = decemberDaysList[index];

    if (decemberDaysList[index] === 24 || decemberDaysList[index] === 31) {
      dayLi.className = 'day holiday';
      getDaysList.appendChild(dayLi);
    } else if (
      decemberDaysList[index] === 4 ||
      decemberDaysList[index] === 11 ||
      decemberDaysList[index] === 18
    ) {
      dayLi.className = 'day friday';
      getDaysList.appendChild(dayLi);
    } else if (decemberDaysList[index] === 25) {
      dayLi.className = 'day holiday friday';
      getDaysList.appendChild(dayLi);
    } else {
      dayLi.className = 'day';
      getDaysList.appendChild(dayLi);
    }
  }
}

createDays();

function createBtnHoliday(name) {
  let button = document.createElement('button');

  button.innerHTML = name;
  button.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(button);
}

createBtnHoliday('Feriados');

function changeColorHoliday() {
  let holiday = document.querySelectorAll('.holiday');

  for (let index = 0; index < holiday.length; index += 1) {
    if (holiday[index].style.backgroundColor === 'white') {
      holiday[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holiday[index].style.backgroundColor = 'white';
    }
  }
}

document
  .querySelector('#btn-holiday')
  .addEventListener('click', changeColorHoliday);

function createBtnFriday(name) {
  let button = document.createElement('button');

  button.innerHTML = name;
  button.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(button);
}

createBtnFriday('Sexta-feira');

function changeTextFriday() {
  let fridayDays = [4, 11, 18, 25];
  let friday = document.querySelectorAll('.friday');

  for (let index = 0; index < friday.length; index += 1) {
    if (friday[index].innerHTML !== 'SEXTTTOOOUUU') {
      friday[index].innerHTML = 'SEXTTTOOOUUU';
    } else {
      friday[index].innerHTML = fridayDays[index];
    }
  }
}

document
  .querySelector('#btn-friday')
  .addEventListener('click', changeTextFriday);

function zoomDayOver() {
  event.target.style.fontSize = '40px';
  event.target.style.fontWeight = '600';
  event.target.style.color = 'green';
}

function zoomDayOut() {
  event.target.style.fontSize = '20px';
  event.target.style.fontWeight = '200';
  event.target.style.color = '#666';
}

document.querySelector('#days').addEventListener('mouseover', zoomDayOver);
document.querySelector('#days').addEventListener('mouseout', zoomDayOut);

function newTask(task) {
  let tasksName = document.createElement('span');

  tasksName.innerHTML = task;
  document.querySelector('.my-tasks').appendChild(tasksName);
}

newTask('Projeto');

function newTaskColor(color) {
  let tasksDiv = document.createElement('div');

  tasksDiv.className = 'task';
  tasksDiv.style.backgroundColor = color;
  document.querySelector('.my-tasks').appendChild(tasksDiv);
}

newTaskColor('green');

function setClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  if (selectedTask.length === 0) {
    event.target.className = 'task selected';
  } else {
    event.target.className = 'task';
  }
}

document.querySelector('.task').addEventListener('click', setClass);

function dayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  let eventTargetColor = event.target.style.color;

  if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
    event.target.style.color = selectedTask[0].style.backgroundColor;
  } else if (eventTargetColor === taskColor) {
    event.target.style.color = 'rgb(119,119,119)';
  }
}

document.querySelector('#days').addEventListener('click', dayColor);

document.querySelector('#btn-add').addEventListener('click', () => {
  let getInputVallue = document.querySelector('#task-input');
  if (getInputVallue.value.length > 0) {
    let newLi = document.createElement('li');
    newLi.innerText = getInputVallue.value;
    document.querySelector('.task-list').appendChild(newLi);
    getInputVallue.value = '';
  } else {
    alert('Insira algum caracter');
  }
});

document.querySelector('#task-input').addEventListener('keyup', (event) => {
  let getInputVallue = document.querySelector('#task-input');
  if (event.key === 'Enter' && getInputVallue.value.length > 0) {
    let newLi = document.createElement('li');
    newLi.innerText = getInputVallue.value;
    document.querySelector('.task-list').appendChild(newLi);
    getInputVallue.value = '';
  }
});
