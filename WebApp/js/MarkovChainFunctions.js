

function DrawGraph(container, xmin, xmax, ymin, ymax) {

    //  width="400" height="150"
    var margin = 20;

    DrawAxis(margin, xmin, xmax, ymin, ymax);
    
}

function DrawAxis(margin, xmin, xmax, ymin, ymax) {

    DrawXaxis(margin, xmin, xmax, ymin, ymax);

    DrawYaxis(margin, xmin, xmax, ymin, ymax);
   

    



}

function DrawXaxis(margin, xmin, xmax, ymin, ymax) {
    drawLine('myCanvas', new Coordinate(margin, ymax - margin), new Coordinate(xmax - margin, ymax - margin));
}

function DrawYaxis(margin, xmin, xmax, ymin, ymax) {
    drawLine('myCanvas', new Coordinate(margin, ymax - margin), new Coordinate(margin, margin));
}