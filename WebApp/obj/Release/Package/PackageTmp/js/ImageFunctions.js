
  
function Rectangle(xmin, ymin, Width, Height) {
    this.xmin = xmin;
    this.ymin = ymin;

    this.Width = Width;
    this.Height = Height;

    this.A = [xmin, ymin];
    this.B = [xmin + Width, ymin];
    this.C = [xmin + Width, ymin + Height];
    this.D = [xmin, ymin + Height];
}


