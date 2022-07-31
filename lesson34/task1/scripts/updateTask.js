import { renderTasks } from './renderer.js';
import { updateTask, getTasksList, getTaskById } from './tasksGateway.js';
// import { getItem, setItem } from './storage.js'

export function onToggleTask(event) {
  const isCheckbox = event.target.classList.contains('list-item__checkbox');

  if (!isCheckbox) return;

  const taskId = event.target.dataset.id;

  getTaskById(taskId).then(task => {
    console.log(task);
    const { id, finishDate, done } = task;
    task.done = event.target.checked;
    task[finishDate] = done ? new Date().toISOString() : null;
    updateTask(id, task).then(() => {
      renderTasks();
    });
  });
}

// v.lesson
// export function onToggleTask(e) {
//   const isCheckbox = e.target.classList.contains('list-item__checkbox');

//   if (!isCheckbox) {
//     return;
//   }

//   const taskId = e.target.dataset.id;
//   const tasksList = getItem('tasksList');
//   const { text, createDate } = tasksList.find(task => task.id === taskId);
//   const done = e.target.checked;

//   const updateTask = {
//     text,
//     createDate,
//     done,
//     finishDate: done ? new Date().toISOString() : null,
//   };

//   updateTask(taskId, updateTask)
//     .then(() => getTasksList())
//     .then(newTasksList => {
//       setItem('tasksList', newTasksList);
//       renderTasks();
//     });
// }

// 1. prepare Data
// 2. update data in db
// 3. read new data from server
// 4. save new data to front-end storage
// 5. update UI based on new data
