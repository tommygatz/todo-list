import { tasksList } from "./Page";
import { addToLocalStorage } from "./Storage";

function addTask(item, formInput) {
    if (item !== '') {
        const task = {
            id: Date.now(),
            name: item,
            completed: false
        };
        tasksList.push(task);
        addToLocalStorage(tasksList);
        formInput.value = "";
    };
};

function deleteTask(id) {
    tasksList.forEach(function(ind) {
        if (ind.id == id) {
            tasksList.splice(tasksList.indexOf(ind), 1);
            addToLocalStorage(tasksList);
        };
    });
};

function toggle(id) {
    tasksList.forEach(function(ind) {
        if (ind.id == id) {
            ind.completed = !ind.completed;
            addToLocalStorage(tasksList);
        };
    });
};

export { addTask, deleteTask, toggle };