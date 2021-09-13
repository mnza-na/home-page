async function ViewContainer() {
    const pc = createDiv();
    pc.className = 'content';

    const contact_card = await CardPresentation()
    pc.appendChild(contact_card)

    return pc;
}