async function CardPresentation() {
    const base = createDiv();
    base.className = 'contact-card';
    
    const data = service_MyPresentation()
    
    const image = ImageContainerCircle('./assets/images/logo-1.svg', undefined, undefined, undefined, 'margin: 0px; aspect-ratio: 9/9;');
    const presentation = createTextBox(data.title, data.paragraph);
    const divisor = createDivisorVertical(image, presentation, '30%', '70%', 'display: flex; align-items: center;');

    base.appendChild(divisor)
    return base;
}