import { projectsList, setActiveProject, addProjectNEW, deleteProject, activeProjId } from "./Project";
import { loadFromLocalStorage, updateLocalStorage, updateTasksList } from "./Storage";
import { addTask, deleteTask, toggle, tasksList } from "./Task";


const taskForm = document.querySelector("#new-task-form");
const formInput = document.querySelector("#new-task");
const tasks_el = document.querySelector("#tasks");

const projects_el = document.querySelector("#projects");
const projAddBtn = document.querySelector("#add-project-btn");

projAddBtn.addEventListener("click", (e) => {
    let newProjInput = prompt("Enter New Project Name");
    if (newProjInput !== null && newProjInput !== "") {
        addProjectNEW(newProjInput);
        // renderProjectsList(projectsList);
        loadFromLocalStorage();
    };
});

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = formInput.value;
    addTask(task, formInput);
    renderTasksList(tasksList);
});

function renderTasksList(tasks) {
    tasks_el.innerHTML = "";

    tasks.forEach(function(item) {
        const checked = item.completed;
        const taskText = item.name;

        const new_task = document.createElement("li");
        new_task.classList.add("task");
        new_task.setAttribute("data-key", item.id);
    
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        if (checked) {
            checkbox.setAttribute("checked", true);
            new_task.classList.add("checked");
        } else {
            checkbox.removeAttribute("checked");
            new_task.classList.remove("checked");
        };
        checkbox.addEventListener("click", (e) => {
            toggle(new_task.getAttribute('data-key'));
            updateTasksList(tasksList);
            renderTasksList(tasksList);
        })

        const customCheckbox = document.createElement("span");
        customCheckbox.classList.add("custom-checkbox");

        const task_text = document.createElement("input");
        task_text.type = "text";
        task_text.classList.add("text");
        if (checked) {
            task_text.classList.add("checked");
        } else {
            task_text.classList.remove("checked");
        }
        task_text.value = taskText;
        task_text.setAttribute("readonly", "readonly");
        task_text.addEventListener("click", (e) => {

        });
    
        const task_edit = document.createElement("div");
        task_edit.innerText = "Edit";
        task_edit.classList.add("actions");
        task_edit.addEventListener("click", (event) => {
            if (task_text.hasAttribute("readonly")) {
                task_text.removeAttribute("readonly");
                task_edit.innerText = "Save";
                task_text.focus();
            }
            else {
                task_text.setAttribute("readonly", "readonly");
                task_edit.innerText = "Edit";
                updateTasksList(new_task.getAttribute('data-key'), task_text.value);
            };
    
        });
    
        const task_delete = document.createElement("div");
        task_delete.innerText = "Delete";
        task_delete.classList.add("actions");
        task_delete.addEventListener("click", () => {
            deleteTask(new_task.getAttribute('data-key'));
            renderTasksList(tasksList);
        });

        new_task.append(checkbox);
        new_task.append(task_text);
        if (!item.completed) {
            new_task.append(task_edit);
        }
        new_task.append(task_delete);
    
        tasks_el.append(new_task);
    });
};

function renderProjectsList(projects) {
    projects_el.innerHTML = "";
    if (projects !== null) {
        projects.forEach(function(item) {
            const projName = item.projectname;
            const projId = item.projectid;
            const new_project = document.createElement("li");
            const deleteBtn = document.createElement("span");
            new_project.classList.add("project");
            new_project.setAttribute("data-key", projId);
            new_project.setAttribute("id", projId);
            new_project.innerHTML = projName;
            new_project.addEventListener("click", (e) => {
                setActiveProject(projId);
                loadFromLocalStorage();
                e.target.classList.add("selected-project");
            });
            deleteBtn.classList.add("material-symbols-outlined");
            deleteBtn.innerText = "delete";
            deleteBtn.addEventListener("click", () => {
                deleteProject(projId);
                renderProjectsList(projectsList);
                loadFromLocalStorage();
            });
            new_project.append(deleteBtn);
            projects_el.append(new_project);
        });
    };
    // highlightActiveProj(activeProjId);
};

function highlightActiveProj(id){
    console.log(id.toString());
    document.getElementById(id.toString()).classList.add("selected-project");
};


export { renderTasksList, renderProjectsList, highlightActiveProj };