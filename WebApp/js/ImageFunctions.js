
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
function get_index(image, x, y) {

    var index = (x + y * image.imageData.width) * 4;
    return index;
}
function get_xy(index) {

    var x = index / 4;
    var y = 0;
    while (x > imageData.width) {
        x -= imageData.width;
        y++;
    }

    return [x, y];
}
function CalculateDistance(x1, y1, x2, y2) {

    var dx2 = Math.pow(Math.abs(x2 - x1), 2);
    var dy2 = Math.pow(Math.abs(y2 - y1), 2);
    return Math.sqrt(dx2 + dy2);

}
function SetImage2(container) {

    my_image = new Image(container, xmin, xmax, ymin, ymax);

}