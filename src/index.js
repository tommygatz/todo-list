import "./styles/reset.css"
import "./styles/styles.css";


const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task");
const tasks_el = document.querySelector("#tasks");

let tasksList = [];

window.addEventListener('DOMContentLoaded', loadFromLocalStorage());

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;
    addTask(task);
    renderTasksList(tasksList);
});

function addTask(item) {
    if (item !== '') {
        const task = {
            id: Date.now(),
            name: item,
            completed: false
        };
        tasksList.push(task);
        addToLocalStorage(tasksList);
        input.value = "";
    };
};

function renderTasksList(tasksList) {
    tasks_el.innerHTML = '';

    tasksList.forEach(function(item) {
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
        // new_task.append(customCheckbox);
        new_task.append(task_text);
        if (!item.completed) {
            new_task.append(task_edit);
        }
        new_task.append(task_delete);
    
        tasks_el.append(new_task);
    });
};

function deleteTask(id) {
    tasksList.forEach(function(ind) {
        if (ind.id == id) {
            tasksList.splice(tasksList.indexOf(ind), 1);
            addToLocalStorage(tasksList);
        };
    });
};

function toggle(id) {
    tasksList.forEach(function(ind) {
        if (ind.id == id) {
            ind.completed = !ind.completed;
            addToLocalStorage(tasksList);
        };
    });
};

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