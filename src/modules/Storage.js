import { renderTasksList, tasksList } from "./Page"


function addToLocalStorage(tasksList) {
    localStorage.setItem('tasksList', JSON.stringify(tasksList));
};

function loadFromLocalStorage() {
    const reference = localStorage.getItem('tasksList');
    if (reference) {
        tasksList = JSON.parse(reference);
        renderTasksList(tasksList);
    }
};

function updateTasksList(id, value) {
    tasksList.forEach(function(ind) {
        if (ind.id == id) {
            ind.name = value;
            addToLocalStorage(tasksList);
        };
    });
};

export { addToLocalStorage, loadFromLocalStorage, updateTasksList };