var projects = [];
var tasks = [];
var currentProj = 0;

function updateLocalStorage(selection, name){
    localStorage.setItem(name, JSON.stringify(selection));
};

function loadLocalStorage(selection){
    const x = JSON.parse(localStorage.getItem(selection));
    console.log(x);

    return x;
};




export {projects, tasks, currentProj, updateLocalStorage, loadLocalStorage};