import './styles/reset.css';
import './styles/styles.css';
import createHeader from './modules/header/header.js';
import createMain from './modules/main/main.js';
import newItem from './modules/functions/newItem.js';

function buildContent(){
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createMain());

    return content;
};








buildContent();

console.log('build success!');