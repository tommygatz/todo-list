function loadPage(){
    const page = document.getElementById("page");
    page.innerHTML =`
    <div id="header"></div>
    <div id="main"></div>`;

    document.getElementById('header').innerText = 'To-Do List';

    const main = document.getElementById("main");
    const sidebar = loadSidebar();
    const list = loadList();
    main.appendChild(sidebar);
    main.appendChild(list);

}

function loadSidebar(){
    const sidebarNode = document.createElement("div");
    sidebarNode.setAttribute("id", "sidebar");
    sidebarNode.innerHTML = `
    <div id="sidebar-title">Projects</div>
    <div id="project-list">
        <div class="project">Project 1</div>
    </div>`;
    return sidebarNode;
}

function loadList(){
    const listNode = document.createElement("div");
    listNode.setAttribute("id", "list");
    listNode.innerHTML = `
    <div id="list-title">Tasks</div>
    <div id="task-list">
        <div class="task">Task 1</div>
    </div>`;
    return listNode;

}

export { loadPage };