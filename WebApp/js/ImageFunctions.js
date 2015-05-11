



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


