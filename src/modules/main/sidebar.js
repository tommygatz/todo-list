function createSidebar(){
    const sidebar = document.createElement('div');
    sidebar.setAttribute('id', 'sidebar')
    sidebar.classList.add('flex-container');
    // sidebar.textContent = 'SIDEBAR';
    return sidebar;
};

export default createSidebar;