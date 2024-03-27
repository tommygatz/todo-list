import { renderProjectsList, renderTasksList } from "./Page";
import { tasksList } from "./Task";
import { activeProjId, projectsList, setActiveProject } from "./Project";

// function updateLocalStorage(tasksList) {
//     localStorage.setItem('tasksList', JSON.stringify(tasksList));
// };

function updateLocalStorage() {
    localStorage.setItem('projectsList', JSON.stringify(projectsList));
    localStorage.setItem('activeProjId', activeProjId);
    localStorage.setItem('activeTasks', JSON.stringify(tasksList));
};

function loadFromLocalStorage() {
    const data = localStorage.getItem('projectsList');
    if (projectsList.length > 0){
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
            };
        });
    } else {
        projectsList = [{"projectid":"default-project","projectname":"Default","tasks":[]}];
        setActiveProject("default-project");
        tasksList = [];
        updateLocalStorage();
        renderProjectsList(projectsList);
        renderTasksList(tasksList);
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