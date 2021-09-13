function ImageContainerCircle(src, height, width, margin) {

    const image = createImg();
    image.src = src;
    image.className = 'img-square';
    image.style = `width:${width}; height:${height}; margin: ${margin};`;

    return image;
}