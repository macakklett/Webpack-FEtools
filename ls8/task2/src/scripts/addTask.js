import { addTaskToBD, getTasks } from './tasksGateway';
import renderTasks from './renderTasks';

const input = document.querySelector('.task-input');

const addTask = (text) => {
  const newTask = {
    text,
    done: false,
  };

  addTaskToBD(newTask).then(getTasks).then(renderTasks);
};

export default () => {
  const newTaskText = input.value.trim();
  if (!newTaskText) return;

  addTask(newTaskText);
  input.value = '';
};
