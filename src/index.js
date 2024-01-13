const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task");
const tasks_el = document.querySelector("#tasks");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;

    const new_task = document.createElement("div");
    new_task.classList.add("task");

    const task_text = document.createElement("input");
    task_text.type = "text";
    task_text.classList.add("text");
    task_text.value = task;
    task_text.setAttribute("readonly", "readonly");

    const task_edit = document.createElement("div");
    task_edit.innerText = "Edit";
    task_edit.classList.add("actions");
    task_edit.addEventListener("click", () => {
        if (task_text.hasAttribute("readonly")) {
            task_text.removeAttribute("readonly");
            task_edit.innerText = "Save";
            task_text.focus();
        }
        else {
            task_text.setAttribute("readonly", "readonly");
            task_edit.innerText = "Edit";
        };

    });

    const task_delete = document.createElement("div");
    task_delete.innerText = "Delete";
    task_delete.classList.add("actions");
    task_delete.addEventListener("click", () => {
        tasks_el.removeChild(new_task);
    });

    new_task.appendChild(task_text);
    new_task.appendChild(task_edit);
    new_task.appendChild(task_delete);






    tasks_el.appendChild(new_task);
});