
function setPixel(imageData, x, y, r, g, b, a) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
}

function SetPixels(nrows, ncols) 
{
    for (x = 0; x < nrows ; x++) {
        for (y = 0; y < ncols; y++) {
            r = Math.random() * 256 | 0;
            g = Math.random() * 256 | 0;
            b = Math.random() * 256 | 0;
            setPixel(imageData, x, y, r, g, b, 255); // 255 opaque
        }
    }

    // copy the image data back onto the canvas
    c.putImageData(imageData, 0, 0); // at coords 0,0
}