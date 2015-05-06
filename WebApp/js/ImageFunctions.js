
var White = [255, 255, 255];
var DarkGreen = [0, 100, 0];   // PF
var LightGreen = [0, 255, 0]; // SF
var GolfGreen = [0, 175, 0]; // SF
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
function DrawCircle(Context, x, y) {
    Context.beginPath();
    Context.arc(x, y, 2, 0, 2 * Math.PI);
    Context.stroke();

}
function GetCoordinate(InnerPanelArea, x_value, x_min, x_max, y_value, y_min, y_max) {

    // var coordinate = new Coordinate(InnerPanelArea.D.x, InnerPanelArea.C.y - y_value * InnerPanelArea.Height / (y_max - y_min));
    var coordinate = new Coordinate(InnerPanelArea.D.x + ((x_value - x_min) / (x_max - x_min)) * InnerPanelArea.Width, InnerPanelArea.C.y - ((y_value - y_min) / (y_max - y_min)) * InnerPanelArea.Height);

    return coordinate;
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function DrawRectangle(Rectangle, Context, Color) {

    Context.fillStyle = Color;
    Context.fillRect(Rectangle.xmin, Rectangle.ymin, Rectangle.Width, Rectangle.Height);
}

function Coordinate(x, y) {
    this.x = x;
    this.y = y;
}
function Rectangle(xmin, ymin, Width, Height) {
    this.xmin = xmin;
    this.ymin = ymin;

    this.Width = Width;
    this.Height = Height;

    this.A = new Coordinate(xmin, ymin);
    this.B = new Coordinate(xmin + Width, ymin);
    this.C = new Coordinate(xmin + Width, ymin + Height);
    this.D = new Coordinate(xmin, ymin + Height);
}
function setPixelColor(imageData, x, y, Color) {

    index = get_index(imageData, x, y);

    imageData.data[index + 0] = Color[0];
    imageData.data[index + 1] = Color[1];
    imageData.data[index + 2] = Color[2];
    imageData.data[index + 3] = 255;
}
function getPixelColor(imageData, x, y) {

    index = get_index(imageData, x, y);

    Color =[];

    Color[0] = imageData.data[index + 0];
    Color[1] = imageData.data[index + 1];
    Color[2] = imageData.data[index + 2];
    Color[3] = 255;

    return Color;
}
function drawLine(Context, from, to) {

    Context.beginPath();
    Context.moveTo(from.x, from.y);
    Context.lineTo(to.x, to.y);
    Context.stroke();

}

function get_index(imageData, x, y) {

    var index = (x + y * imageData.width) * 4;
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
