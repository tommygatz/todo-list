import { projects, tasks, currentProj, updateLocalStorage, loadLocalStorage } from "./Storage";

projects = [    
    {project: 'default project',
        tasks: [
            {task: 'plan honeymoon'}, {task: 'get groceries'}, {task: 'pick a new book'}, {task: 'do some coding'}
        ]},
    {project: 'second project',
        tasks: [
            {task: 'go on honeymoon'}, {task: 'pack bags'}, {task: 'have fun!'}
        ]}
    ];

updateLocalStorage(projects, 'projects');
// currentProj = 1;
updateLocalStorage(currentProj, 'currentProj');

currentProj = loadLocalStorage('currentProj');
tasks = projects[currentProj].tasks;


function loadPage(){
    const page = document.getElementById("page");
    page.innerHTML =`
    <div id="header"></div>
    <div id="main">
        <div id="sidebar">
            <div id="sidebar-title">Projects</div>
            <ul id="project-list">
            </ul>
        </div>
        <div id="list">
            <div id="list-title">Tasks</div>
            <ul id="tasks-list">
            </ul>
        </div>
    </div>`;

    document.getElementById('header').innerText = 'To-Do List';

    loadProjects(projects);
    loadTasks(tasks);


};

function loadProjects(projects){
    const projectsNode = document.getElementById("project-list");
    projects.forEach(element => {
        let item = document.createElement("li");
        item.setAttribute("class", "project");
        let text = `${element.project}`;
        item.innerText = text;
        projectsNode.appendChild(item);
    });


    return projectsNode;
};

function loadTasks(tasks){
    const tasksNode = document.getElementById("tasks-list");
    tasks.forEach(element => {
        let item = document.createElement("li");
        item.setAttribute("class", "task");
        let text = `${element.task}`;
        item.innerText = text;
        tasksNode.appendChild(item);
    });


    return tasksNode;
};

export { loadPage };