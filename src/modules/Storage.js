import { renderProjectsList, renderTasksList } from "./Page";
import { tasksList } from "./Task";
import { activeProjId, projectsList } from "./Project";

// function updateLocalStorage(tasksList) {
//     localStorage.setItem('tasksList', JSON.stringify(tasksList));
// };

function updateLocalStorage() {
    localStorage.setItem('projectsList', JSON.stringify(projectsList));
    localStorage.setItem('activeProjId', activeProjId);
    localStorage.setItem('activeTasks', tasksList);
};

function loadFromLocalStorage() {
    const data = localStorage.getItem('projectsList');
    if (data !== null){
        if (activeProjId == null){
            activeProjId = "default-project";
        }
        const projID = getActiveProjId();
        projectsList = JSON.parse(data);
        renderProjectsList(projectsList);
        projectsList.forEach(function(ind) {
            if (ind.projectid == projID) {
                tasksList = ind.tasks;
                renderTasksList(tasksList);

                // try {
                //     renderTasksList(tasksList);
                // } catch(err) {
                //     console.error(err);
                // };
            };
        });
    } else {
        projectsList = [{"projectid":"default-project","projectname":"Default","tasks":[]}];
        activeProjId = "default-project";
        updateLocalStorage();
        renderProjectsList(projectsList);
    };
};

function getActiveProjId() {
    const data = localStorage.getItem('activeProjId');
    return data;
};

function updateTasksList(id, value) {
    tasksList.forEach(function(ind) {
        if (ind.id == id) {
            ind.name = value;
            updateLocalStorage(tasksList);
        };
    });
};

export { updateLocalStorage, loadFromLocalStorage, getActiveProjId, updateTasksList };