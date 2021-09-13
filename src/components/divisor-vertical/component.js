function createDivisorVertical(left, right, left_width, right_width, left_style, right_style){
    const background = createDiv();
    background.className = 'background'

    const left_ = createDiv();
    left_.style = `width:${left_width}; height:100%; ${left_style}`;
    left_.appendChild(left);

    const right_ = createDiv();
    right_.style = `width:${right_width}; height:100%; ${right_style}`;
    right_.appendChild(right);

    background.appendChild(left_)
    background.appendChild(right_)

    return background
}