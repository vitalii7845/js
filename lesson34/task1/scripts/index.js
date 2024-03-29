import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
import { getTasksList } from './tasksGateway.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(tasksList => {
    renderTasks(tasksList);
  });
  initTodoListHandlers();
});

function onStorageChange(event) {
  if (event.key === 'tasksList') renderTasks();
}

window.addEventListener('storage', onStorageChange);

// 1. get data from server
// 2. save data to front-end storage
