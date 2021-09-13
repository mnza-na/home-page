async function Toolbar() {
    const div_0 = createDiv();
    div_0.className = 'head bar';

    const image = ImageContainerCircle('./assets/images/logo-2.svg', '90', '90', undefined, 'margin: 5px 50px;');

    const home_button = Button('Home', '50px', '100px', 'margin: 20px 0px;');
    const blog_button = Button('Blog', '50px', '100px', 'margin: 20px 0px;');
    const projects_button = Button('Projects', '50px', '100px', 'margin: 20px 0px;');
    const contacto_button = Button('Contacto', '50px', '100px', 'margin: 20px 0px;');

    div_0.appendChild(image);
    div_0.appendChild(home_button);
    div_0.appendChild(blog_button);
    div_0.appendChild(projects_button);
    div_0.appendChild(contacto_button);

    return div_0;
}