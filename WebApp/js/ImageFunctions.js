
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


