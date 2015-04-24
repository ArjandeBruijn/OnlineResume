
function Image(container, xmin, xmax, ymin, ymax) {

    this.pixels = declare_pixels(xmax - xmin, ymax - ymin);

    element = document.getElementById(container);
    this.canvas = element.getContext("2d");

    // read the width and height of the canvas
    ncols = (ymax - ymin);
    nrows = (xmax - xmin);

    // create a new pixel array
    this.imageData = element.getContext("2d").createImageData(nrows, ncols);
}


function SetImage2(container) {

    my_image = new Image(container, xmin, xmax, ymin, ymax);

}