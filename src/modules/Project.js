import { srenderProjectsList } from "./Page";
import { loadFromLocalStorage, updateLocalStorage } from "./Storage";
import { tasksList } from "./Task";

let projectsList = [];
let activeProjId = "";

function addProjectNEW(name) {
    const proj = {
        projectid: Date.now(),
        projectname: name,
        tasks: []
    };
    projectsList.push(proj);
    updateLocalStorage();
    setActiveProject(proj.projectid)
};

function setActiveProject(id) {
    activeProjId = id;
    projectsList.forEach(function(ind){
        if (ind.projectid == activeProjId) {
            tasksList = ind.tasks;
            updateLocalStorage();
            // highlightActiveProj();
        };
    });
};

function deleteProject(id) {    
    projectsList.forEach(function(ind) {
        if (ind.projectid == id) {
            projectsList.splice(projectsList.indexOf(ind), 1);
            if (id == activeProjId && projectsList.length !== 0) {
                setActiveProject(projectsList[0].projectid);
            };
            updateLocalStorage();
            loadFromLocalStorage();
        };
    });
};

export {projectsList, activeProjId, setActiveProject, addProjectNEW, deleteProject};