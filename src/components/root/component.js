async function root(){
    const body = createBody();

    const viewContainer = await ViewContainer();
    const sidenave = await Toolbar();

    body.appendChild(sidenave);
    body.appendChild(viewContainer);

    return body
}