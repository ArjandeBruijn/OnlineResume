

function DrawGraph(container, xmin, xmax, ymin, ymax) {

    //  width="400" height="150"
    var margin = 20;

    DrawAxis(margin, xmax, ymax);
    
}

function DrawAxis(margin, xmax, ymax) {

    DrawXaxis(margin, xmax, ymax);

    DrawYaxis(margin, xmax, ymax);
    
}

function DrawXaxis(margin, xmax, ymax) {

    var y = ymax - margin;
    var x_min = margin;
    var x_max = xmax - margin;
    drawLine('myCanvas', new Coordinate(x_min, y), new Coordinate(x_max, y));

    var pixels_between_markers = 20;
    var x_cnt = x_min + pixels_between_markers;
    var tick_length_px = 5;
    while (x_cnt < x_max) {

        drawLine('myCanvas', new Coordinate(x_cnt, y - tick_length_px), new Coordinate(x_cnt, y + tick_length_px));

        x_cnt += pixels_between_markers;

        
    }
}

function DrawYaxis(margin, xmax, ymax) {
    drawLine('myCanvas', new Coordinate(margin, ymax - margin), new Coordinate(margin, margin));
}