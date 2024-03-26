import { renderTasksList } from "./Page";
import { activeProjId, projectsList } from "./Project";
import { updateLocalStorage, loadFromLocalStorage } from "./Storage";

let tasksList = [];

function addTask(item, formInput) {
    projectsList.forEach(function(ind){
        if (ind.projectid == activeProjId) {
            if (item !== '') {
                const task = {
                    id: Date.now(),
                    name: item,
                    completed: false
                };
                ind.tasks.push(task);
                tasksList = ind.tasks;
                updateLocalStorage();
                loadFromLocalStorage();
                formInput.value = "";
            };
        };
    });
};

function deleteTask(id) {
    
    tasksList.forEach(function(ind) {
        if (ind.id == id) {
            tasksList.splice(tasksList.indexOf(ind), 1);
            renderTasksList(tasksList);
            updateLocalStorage();

        };
    });
    // projectsList.forEach(function(ind){
    //     if (ind.projectid == activeProjID) {
    //         console.log(projectsList[ind]);
    //         // projectsList[ind].tasks = tasksList;
    //         addToLocalStorage();
    //     };
    // });
};

function toggle(id) {
    tasksList.forEach(function(ind) {
        if (ind.id == id) {
            ind.completed = !ind.completed;
            updateLocalStorage(tasksList);
        };
    });
};

export { addTask, deleteTask, toggle, tasksList };