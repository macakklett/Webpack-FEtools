import { updateTask, getTasks } from './tasksGateway';
import renderTasks from './renderTasks';

export default (task) => {
  const { id, done, finishDate } = task;

  const newTask = {
    done,
    finishDate,
  };

  updateTask(id, newTask).then(getTasks).then(renderTasks);
};
