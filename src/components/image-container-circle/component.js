function ImageContainerCircle(src, width='100%', height, aspect_ratio='1/1', style) {

    const image = createImg();
    image.src = src;
    image.className = 'img-circle';

    style += `width:${width};`

    if(!height& aspect_ratio) style += `aspect_ratio:${aspect_ratio};`
    if( height&!aspect_ratio) style += `height:${height};`

    image.style = style;

    return image;
}