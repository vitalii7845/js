import { renderTasks } from './renderTasks.js';
import { getItem, setItem } from './storage.js';

export const onToggleTask = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }
  const tasksList = getItem('tasksList');
  const newTasksLi = tasksList.map((task) => {
    if (task.id === event.target.dataset.id) {
      const done = event.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    return task;
  });
  setItem('tasksList', newTasksLi);
  renderTasks();
};
