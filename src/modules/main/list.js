import newItem from "../functions/newItem";

function createList(){
    const list = document.createElement('div');
    list.setAttribute('id', 'list')
    list.classList.add('flex-container');
    
    const newItemBtn = document.createElement('button');
    newItemBtn.classList.add('button');
    newItemBtn.setAttribute('id', 'new-item-button');
    newItemBtn.addEventListener('click', newItem);
    list.appendChild(newItemBtn);
    
    return list;
};

export default createList;