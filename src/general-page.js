const body = createBody();
const pageBar = createPageBar();
const pageContainer = createPageContainer();
const container = createContainer();

const menu_btn = createMenuBtn();
const menu_list = createMenuList(menu_btn);

const projectsItemList = createList();
for(project of allProjects){
    const projectItem = createItem(projects[project], false);
    addItemInList(projectsItemList, projectItem);
}

const projectsItems = createItem({'name': 'Projects'}, projectsItemList);
const aboutItem = createItem({'name': 'About Page'});

addItemInList(menu_list, projectsItems);
addItemInList(menu_list, projectsItemList);
addItemInList(menu_list, aboutItem);

const menu = createMenu(menu_btn, menu_list);
pageBar.appendChild(menu);

pageContainer.appendChild(container);

body.appendChild(pageBar);
body.appendChild(pageContainer);