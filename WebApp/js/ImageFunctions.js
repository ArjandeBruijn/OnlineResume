
var White = [255, 255, 255];
var DarkGreen = [0, 100, 0];   // PF
var LightGreen = [0, 255, 0]; // SF
var Color3 = [0, 255, 0];   // Crop??
var Red = [255, 0, 0];
var Yellow = [255, 255, 0];  // position 2
var Cyan = [0, 255, 255];
var Color7 = [0, 128, 128];   // Crop??
var Blue = [0, 0, 128];   //Water Body
var Color9 = [128, 0, 0];
var Color10 = [0, 0, 255];
var Color11 = [128, 0, 128];
var Color12 = [128, 128, 0];
var Color13 = [0, 0, 0]; //black    

function setPixelColor(image, x, y, Color) {

    index = get_index(image, x, y);

    image.imageData.data[index + 0] = Color[0];
    image.imageData.data[index + 1] = Color[1];
    image.imageData.data[index + 2] = Color[2];
    image.imageData.data[index + 3] = 255;
}

function Image(container, xmin, xmax, ymin, ymax) {

    

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
