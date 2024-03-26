import { renderProjectsList } from "./Page";
import { updateLocalStorage } from "./Storage";
import { tasksList } from "./Task";

let projectsList = [];
let activeProjId = "";

function addProject(item, formInput) {


    const proj = {
        projectid: Date.now(),
        projectname: item,
        tasks: []
    };
    projectsList.push(proj);
    updateLocalStorage();
    renderProjectsList(projectsList);
    formInput.value = "";
};

function addProjectNEW(name) {
    const proj = {
        projectid: Date.now(),
        projectname: name,
        tasks: []
    };
    projectsList.push(proj);
    updateLocalStorage();
    renderProjectsList(projectsList);
};

function setActiveProject(id) {
    activeProjId = id;
    projectsList.forEach(function(ind){
        if (ind.projectid == activeProjId) {
            tasksList = ind.tasks;
            updateLocalStorage();
        };
    });
}

export {projectsList, activeProjId, addProject, setActiveProject, addProjectNEW};