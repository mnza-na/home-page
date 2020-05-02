const inMaintenance = {
    tittle: "Maintenance",
    id: "in-maintenance"
};
const wip = {
    tittle: "Work in progress",
    id: "work-in-progress"
};
const future = {
    tittle: "Ideas",
    id: "in-planning"
};

const cardContainer = createCardContainer(inMaintenance.tittle);
const littleCardContainer = createLittleCardContainer(wip.tittle);
const labelContainer = createLabelContainer(future.tittle);

for( project of planning){
    label = createLabel(projects[project]);
    if(label)
        labelContainer.appendChild(label);
}

for( project of workInProgress){
    littleCard = createLittleCard(projects[project]);
    if(littleCard)
        littleCardContainer.appendChild(littleCard);
}

for( project of maintenance ){
    card = createCard(projects[project]);
    if(card)
        cardContainer.appendChild(card);
}

container.appendChild(littleCardContainer);
container.appendChild(labelContainer);
container.appendChild(cardContainer);

window.onload = () => document.body = body;