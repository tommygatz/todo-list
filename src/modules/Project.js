import { renderProjectsList, highlightActiveProj  } from "./Page";
import { loadFromLocalStorage, updateLocalStorage } from "./Storage";
import { tasksList } from "./Task";

var projectsList = [];
var activeProjId = "";

function addProjectNEW(name) {
    let proj = {
        projectid: Date.now(),
        projectname: name,
        tasks: []
    };
    projectsList.push(proj);
    updateLocalStorage();
    setActiveProject(proj.projectid);
};

function setActiveProject(id) {
    let element = document.getElementById(id);
    activeProjId = id;
    projectsList.forEach(function(ind){
        if (ind.projectid == activeProjId) {
            tasksList = ind.tasks;
            updateLocalStorage();        
        };
    });
    renderProjectsList(projectsList);
};

function deleteProject(id) {    
    projectsList.forEach(function(ind) {
        if (ind.projectid == id) {
            projectsList.splice(projectsList.indexOf(ind), 1);
            updateLocalStorage();
            if (id == activeProjId && projectsList.length > 0) {
                setActiveProject(projectsList[0].projectid);
            };
        };
    });
};

export {projectsList, activeProjId, setActiveProject, addProjectNEW, deleteProject};