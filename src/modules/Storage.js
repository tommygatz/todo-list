import { highlightActiveProj, renderProjectsList, renderTasksList } from "./Page";
import { tasksList } from "./Task";
import { activeProjId, projectsList, setActiveProject } from "./Project";


function updateLocalStorage() {
    localStorage.setItem('projectsList', JSON.stringify(projectsList));
    localStorage.setItem('activeProjId', activeProjId);
    localStorage.setItem('activeTasks', JSON.stringify(tasksList));
};

function loadFromLocalStorage() {
    let projects = localStorage.getItem('projectsList');
    projectsList = JSON.parse(projects);
    activeProjId = localStorage.getItem('activeProjId');

    if (projectsList == null || projectsList.length == 0){
        projectsList = [{"projectid":"default-project","projectname":"Default","tasks":[]}];
        setActiveProject("default-project");
        tasksList = [];
        updateLocalStorage();
        renderProjectsList(projectsList);
        renderTasksList(tasksList);

    } else {
        if (activeProjId == null){
            activeProjId = "default-project";
        };
        let projID = getActiveProjId();
        projectsList = JSON.parse(projects);
        renderProjectsList(projectsList);

        projectsList.forEach(function(ind) {
            if (ind.projectid == projID) {
                tasksList = ind.tasks;
                renderTasksList(tasksList);
            };
        });
    };
    highlightActiveProj(activeProjId);
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