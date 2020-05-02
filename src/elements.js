/*
    This file contain all funtion that create a html elements.
    It contain:
    - Simple body
    - Simple div
    - Simple h4
    - Page bar
    - Content
    - Container
    - Menu
    - Item
    - Card container
    - Little card container
    - Label container
    - Card
    - Little card
    - Label
*/

function createBody(){
    return document.createElement('body');
};

function createDiv(){
    return document.createElement('div');
};

function createH4(){
    return document.createElement('h4');
};

function createPageBar(){
    const pb = createDiv();
    pb.className = 'head bar';
    return pb;
};

function createPageContainer(){
    const pc = createDiv();
    pc.className = 'content';
    return pc;
};

/**
 * This function add a event to open a list when press a item.
 * @param {String} btnId Item's id that open a expand list. 
 * @param {String} listId List's id that will be open when press the btn with id 'btnId'.
 */
function addItemListEvent(btn, list){
    btn.addEventListener(
        "click",
        () => list.hidden = !list.hidden
    );
};

function createMenuBtn(){
    const menu_btn = createDiv();

    menu_btn.className = 'menu no-select';
    menu_btn.id = 'menu-btn';

    return menu_btn;
};

function createMenuList(menu_btn){
    const menu_list = createDiv();

    menu_list.className = 'menu-list list';
    menu_list.id = 'menu-list';
    menu_list.hidden = true;

    addItemListEvent(menu_btn, menu_list);

    return menu_list;
};

function createMenu(menu_btn, menu_list){
    const menu = createDiv();
    
    if(menu_btn){

        menu.appendChild(menu_btn);
        menu.appendChild(menu_list);

    }

    return menu;
};

function createList(){
    list = createDiv();
    list.className = 'list';
    list.hidden = true;

    return list;
};

/**
 * This function create a item to append in menu or list.
 * @param {Object} menuItem Info about item it need contain name and optionaly an url.
 * @param {Boolean} withList True specify if it have a list, then it will contain items.
 */
function createItem(item, list){
    const _item = createDiv();
    _item.className = 'item no-select';

    if(item.url)
        _item.onclick = () => location.href = item.url;
    
    _item.innerHTML = item.name;

    if(list){
        list.id = `${item.name}_item_list`;

        addItemListEvent(_item, list);
    }

    return _item;
};

function addItemInList(list, item){
    list.appendChild(item);
};

function createContainer(){
    const container = createDiv();
    container.className = 'container';
    return container;
};

function createLittleCardContainer(tittle){
    const container = createDiv();
    const _tittle = createH4();
    const content = createDiv();

    _tittle.innerHTML = tittle;

    container.className = 'sunken width-half heigth-min-content';
    container.appendChild(_tittle);
    container.appendChild(content);

    return container;
};

function createLabelContainer(tittle){
    const container = createDiv();
    const _tittle = createH4();
    const content = createDiv();

    _tittle.innerHTML = tittle;

    content.style.paddingTop = '5px';
    content.style.paddingBottom = '5px';

    container.className = 'protruding width-half heigth-min-content';
    container.appendChild(_tittle);
    container.appendChild(content);

    return container;
};

function createCardContainer(tittle){
    const container = createDiv();
    const _tittle = createH4();
    const content = createDiv();

    _tittle.innerHTML = tittle;

    container.className = 'sunken wight-max heigth-min-content card-container';
    container.appendChild(_tittle);
    container.appendChild(content);

    return container;
};

function createCard(project){
    if(project.name && project.img && project.url && project.description)
        return undefined;

    card = document.createElement("div");
    card.className = "card";

    tittle = document.createElement("div");
    tittle.className = "card-header";
    tittle.innerHTML = project.name;
    imgContent = document.createElement("div");
    imgContent.className = "card-image";
    img = document.createElement("img");
    img.src = project["img-src"];
    imgContent.appendChild(img);
    description = document.createElement("div");
    description.className = "card-description";
    description.innerHTML = `<p>${project.description}</p>`;
    card.appendChild(tittle);
    card.appendChild(imgContent);
    card.appendChild(description);
    card.onclick = () => location.href = project.url;
    return card;
};

function createLittleCard(project){
    if(project.name){
        littleCard = document.createElement("div");
        littleCard.className = "little-card";
        littleCard.innerHTML = project.name;
        tittle = document.createElement("div");
        tittle.className = "little-card-tittle";
        littleCard.appendChild(tittle);
        if(project.description){
            description = document.createElement("div");
            description.className = "little-card-description";
            description.innerHTML = project.description;
            littleCard.appendChild(description);
        }
        return littleCard;
    }
};

function createLabel(project){
    if(project.name){
        label = document.createElement("div");
        label.className = "label";
        label.innerHTML = project.name;
        tittle = document.createElement("div");
        tittle.className = "label-tittle";
        label.appendChild(tittle);
        if(project.description){
            description = document.createElement("div");
            description.className = "label-description";
            description.innerHTML = project.description;
            label.appendChild(description);
        }
        return label;
    }
};