function ImageContainerCircle(src, height, width) {

    const image = createImg();
    image.src = src;
    image.className = 'img-square';
    image.height = height;
    image.width = width;

    return image;
}