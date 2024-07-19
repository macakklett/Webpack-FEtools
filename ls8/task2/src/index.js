import renderTasks from './scripts/renderTasks';
import onAddTask from './scripts/addTask';
import { getTasks } from './scripts/tasksGateway';
import changeDone from './scripts/changeDone';
import deleteTask from './scripts/deleteTask';
import './index.scss';

const list = document.querySelector('.list');
const createTaskBtn = document.querySelector('.create-task-btn');

getTasks().then((response) => renderTasks(response));

const onListHandler = (e) => {
  if (e.target.classList.contains('list-item__checkbox')) {
    const task = {
      id: e.target.closest('.list-item').dataset.id,
      done: e.target.checked,
      finishDate: e.target.checked ? new Date() : null,
    };

    changeDone(task);
  }

  if (e.target.classList.contains('list-item__close')) {
    const { id } = e.target.closest('.list-item').dataset;
    deleteTask(id);
  }
};

list.addEventListener('click', onListHandler);
createTaskBtn.addEventListener('click', onAddTask);
