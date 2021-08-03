function Button(text, height, width, style) {
    const div_0 = createDiv();
    const font_size = '20px'
    div_0.className = 'button'
    div_0.textContent = text
    div_0.style = `height: ${height}; width: ${width}; font-size: ${font_size}; ${style}`;

    return div_0
}