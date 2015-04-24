function SetImage2(container, xmin, xmax, ymin, ymax) {

    my_image = new Image(container, xmin, xmax, ymin, ymax);

    for (var x = xmin; x < xmax; x++) {

        for (var y = ymin; y < ymax; y++) {

            setPixelColor(my_image, x, y, DarkGreen);
        }
    }
    // copy the image data back onto the canvas
    my_image.canvas.putImageData(my_image.imageData, 0, 0); // at coords 0,0
}