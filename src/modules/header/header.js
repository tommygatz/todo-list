function createHeader(){
    const header = document.createElement('div');
    header.setAttribute('id', 'header')
    header.classList.add('flex-container');
    // header.textContent = 'HEADER';
    return header;
};

export default createHeader;