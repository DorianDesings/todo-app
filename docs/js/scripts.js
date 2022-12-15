const formElement = document.getElementById('form');
const todoListElement = document.getElementById('todo-list');

const generateTimeStamp = () => Date.now();

const addTask = task => {
  const timeStamp = generateTimeStamp();

  const newTaskContainer = document.createElement('div');
  newTaskContainer.classList.add('task-container');

  const newTask = document.createElement('div');
  newTask.classList.add('task');
  newTaskContainer.append(newTask);

  const newInput = document.createElement('input');
  newInput.type = 'checkbox';
  newInput.id = timeStamp;
  newInput.classList.add('task__input');

  const newLabel = document.createElement('label');
  newLabel.textContent = task;
  newLabel.classList.add('task__label');
  newLabel.htmlFor = timeStamp;

  const newImageDelete = document.createElement('img');
  newImageDelete.classList.add('task__delete');
  newImageDelete.src = 'assets/images/icon-cross.svg';
  newTaskContainer.append(newImageDelete);

  newTask.append(newInput);
  newTask.append(newLabel);

  return newTaskContainer;
};

const deleteTask = id => {
  const element = document.getElementById(id).parentElement.parentElement;
  element.remove();
};

todoListElement.addEventListener('click', ev => {
  if (!ev.target.classList.contains('task__delete')) return;

  const idTask = ev.target.previousElementSibling.children[0].id;
  deleteTask(idTask);
});

formElement.addEventListener('submit', e => {
  e.preventDefault();
  todoListElement.append(addTask(e.target.todo.value));
  e.target.reset();
});
