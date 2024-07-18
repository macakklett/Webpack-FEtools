import { renderTasks } from './scripts/renderTasks.js';
import { onAddTask } from './scripts/addTask.js';
import { getTasks } from './scripts/tasksGateway.js';
import { changeDone } from './scripts/changeDone.js';
import { deleteTask } from './scripts/deleteTask.js';

const list = document.querySelector('.list');
const createTaskBtn = document.querySelector('.create-task-btn');

getTasks().then(response => renderTasks(response));

const onListHandler = e => {
  if (e.target.classList.contains('list-item__checkbox')) {
    const task = {
      id: e.target.closest('.list-item').dataset.id,
      done: e.target.checked,
      finishDate: e.target.checked ? new Date() : null,
    };

    changeDone(task);
  }

  if (e.target.classList.contains('list-item__close')) {
    const id = e.target.closest('.list-item').dataset.id;
    deleteTask(id);
  }

  return;
};

list.addEventListener('click', onListHandler);
createTaskBtn.addEventListener('click', onAddTask);
