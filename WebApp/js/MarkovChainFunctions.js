

function DrawGraph(container, xmin, xmax, ymin, ymax) {

    //  width="400" height="150"
    var margin = 20;

    DrawAxis(margin, xmax, ymax);
    
}

function DrawAxis(margin, xmax, ymax) {


    var pixels_between_markers = 20;
    var tick_length_px = 5;

    DrawXaxis(margin,pixels_between_markers,tick_length_px,  xmax, ymax);

    DrawYaxis(margin,pixels_between_markers,tick_length_px,  xmax, ymax);
    
}

function DrawXaxis(margin,pixels_between_markers,tick_length_px,   xmax, ymax) {

    var y = ymax - margin;
    var x_min = margin;
    var x_max = xmax - margin;
    drawLine('myCanvas', new Coordinate(x_min, y), new Coordinate(x_max, y));

    
    var x_cnt = x_min + pixels_between_markers;
    
    while (x_cnt < x_max) {

        drawLine('myCanvas', new Coordinate(x_cnt, y - tick_length_px), new Coordinate(x_cnt, y + tick_length_px));

        x_cnt += pixels_between_markers;

        
    }
}

function DrawYaxis(margin, pixels_between_markers, tick_length_px, xmax, ymax) {

    var x = margin;
    var y_min = margin;
    var y_max = ymax - margin; 

    drawLine('myCanvas', new Coordinate(x, ymax - margin), new Coordinate(x, margin));

    var y_cnt = y_min + pixels_between_markers;
    while (y_cnt < y_max) {

        drawLine('myCanvas', new Coordinate(x - tick_length_px, y_cnt), new Coordinate(x + tick_length_px, y_cnt));

        y_cnt += pixels_between_markers;


    }
    
}