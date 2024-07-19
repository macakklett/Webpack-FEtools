import { deleteTaskFromBD, getTasks } from './tasksGateway';
import renderTasks from './renderTasks';

export default (id) => {
  deleteTaskFromBD(id).then(getTasks).then(renderTasks);
};
