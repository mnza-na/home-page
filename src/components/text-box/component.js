function createTextBox(title, text){
    const box   = createDiv();
    box.className   = 'text-box-box';

    const title_ = createDiv();
    title_.className = 'text-box-title title';
    title_.innerHTML = title

    const text_  = createDiv();
    text_.className  = 'text-box-text paragraph';
    text_.innerHTML = text

    box.appendChild(title_);
    box.appendChild(text_ );

    return box
}