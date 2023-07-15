function setActive(event){
    const active = document.querySelectorAll('.active');
    active.forEach((item) => {
        item.classList.remove('active');
    });

    const element = event.target.parentNode;
    if (!element.classList.contains('active')){
        element.classList.add('active');
    };

    return;
}


function newItem(event){

    const textarea = document.createElement('input');
    textarea.type = 'text';
    textarea.placeholder = 'Enter task...'
    // textarea.setAttribute('required','');

    // const datetext = document.createElement('p');
    // datetext.classList.add('date-text');
    // datetext.textContent = 'No due date';

    const datearea = document.createElement('input');
    datearea.type = 'date';
    datearea.classList.add('due-date');

    const newItem = document.createElement('div');
    newItem.classList.add('list-entry');
    newItem.appendChild(textarea);
    // newItem.appendChild(datetext);
    newItem.appendChild(datearea);
    // newItem.addEventListener('click', setActive);

    
    const list = event.target.parentNode;
    const button = event.target;

    list.insertBefore(newItem, button.nextSibling);
    
    return list;    
};

export default newItem;
