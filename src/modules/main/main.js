import createSidebar from './sidebar.js';
import createList from './list.js';


function createMain(){
    const main = document.createElement('div');
    main.setAttribute('id', 'main')
    main.classList.add('flex-container');
    main.appendChild(createSidebar());
    main.appendChild(createList());
    return main;
};

export default createMain;