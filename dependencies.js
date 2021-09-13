function require(script) {
    scriptElement = document.createElement('script');
    scriptElement.type = "text/javascript";
    scriptElement.src = script;

    head = document.getElementsByTagName('head')[0];
    head.appendChild(scriptElement);
}

function createBody(){
    return document.createElement('body');
};

function createDiv(){
    return document.createElement('div');
};

function createImg(){
    return document.createElement('img');
}

function createHeader(n){
    return document.createElement(`h${n}`);
};

