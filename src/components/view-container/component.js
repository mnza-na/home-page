function ViewContainer() {
    const pc = createDiv();
    pc.className = 'content';

    const contact_card = ViewContact()
    pc.appendChild(contact_card)

    return pc;
}