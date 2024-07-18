import { deleteTaskFromBD, getTasks } from './tasksGateway.js';
import { renderTasks } from './renderTasks.js';

export const deleteTask = id => {
  deleteTaskFromBD(id).then(getTasks).then(renderTasks);
};
