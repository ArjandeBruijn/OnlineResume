function SetImage2(container, xmin, xmax, ymin, ymax) {

    //  width="400" height="150"
    var margin = 20;


    drawLine('myCanvas', new Coordinate(margin, ymax - margin), new Coordinate(xmax-margin, ymax - margin));

    drawLine('myCanvas', new Coordinate(margin, ymax - margin), new Coordinate(margin, margin));
}