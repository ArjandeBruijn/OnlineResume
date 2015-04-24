

function DrawGraph(container, xmin, xmax, ymin, ymax) {

    var TitleMargin = 30;

    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    ctx.font = "12px Georgia";

    TitleAreaY = new Rectangle(xmin, ymin, TitleMargin, ymax - TitleMargin);

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(TitleAreaY.xmin, TitleAreaY.ymin, TitleAreaY.xmax, TitleAreaY.ymax);

    TitleAreaX = new Rectangle(TitleMargin, ymax - TitleMargin, xmax, ymax);
    ctx.fillStyle = "Yellow";
    ctx.fillRect(TitleAreaX.xmin, TitleAreaX.ymin, TitleAreaX.xmax, TitleAreaX.ymax);

    PanelMargin = 20;

    ctx.fillStyle = "Purple";

    PanelArea = new Rectangle(TitleAreaY.B.x + PanelMargin, ymin + PanelMargin, TitleAreaX.B.x - 3 * PanelMargin, TitleAreaX.B.y - 2 * PanelMargin);

    ctx.fillRect(PanelArea.xmin, PanelArea.ymin, PanelArea.xmax, PanelArea.ymax);

    ctx.fillStyle = "Black";
    

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

    
    var x_cnt = x_min;

    var c = 0;
    while (x_cnt < x_max) {

        drawLine('myCanvas', new Coordinate(x_cnt, y - tick_length_px), new Coordinate(x_cnt, y + tick_length_px));

        ctx.fillText(c++, x_cnt, y + 3 * tick_length_px);

        x_cnt += pixels_between_markers;

        
    }
}

function DrawYaxis(margin, pixels_between_markers, tick_length_px, xmax, ymax) {

    var x = margin;
    var y_min = margin;
    var y_max = ymax - margin; 

    drawLine('myCanvas', new Coordinate(x, ymax - margin), new Coordinate(x, margin));

    var y_cnt = y_max;
    

    var c = 0;
    while (y_cnt > y_min) {

        drawLine('myCanvas', new Coordinate(x - tick_length_px, y_cnt), new Coordinate(x + tick_length_px, y_cnt));

        ctx.fillText(c++, x - 3 * tick_length_px, y_cnt);

        y_cnt -= pixels_between_markers;

    }
    
}