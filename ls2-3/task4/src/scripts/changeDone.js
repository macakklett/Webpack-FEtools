import { updateTask, getTasks } from './tasksGateway.js';
import { renderTasks } from './renderTasks.js';

export const changeDone = task => {
  const { id, done, finishDate } = task;

  const newTask = {
    done,
    finishDate,
  };

  updateTask(id, newTask).then(getTasks).then(renderTasks);
};
