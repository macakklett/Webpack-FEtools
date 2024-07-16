import { addTaskToBD, getTasks } from './tasksGateway.js';
import { renderTasks } from './renderTasks.js';

const input = document.querySelector('.task-input');

const addTask = text => {
  const newTask = {
    text,
    done: false,
  };

  addTaskToBD(newTask).then(getTasks).then(renderTasks);
};

export const onAddTask = () => {
  const newTaskText = input.value.trim();
  if (!newTaskText) return;

  addTask(newTaskText);
  input.value = '';
};
