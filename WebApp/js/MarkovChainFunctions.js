

function DrawGraph(container, xmin, xmax, ymin, ymax) {

    c = document.getElementById(container );
    var Context = c.getContext("2d");
    Context.font = "12px Georgia";

    GraphArea = new Rectangle(xmin, ymin, xmax - xmin, ymax - ymin);

    DrawRectangle(GraphArea, Context, "#FF0000");

    DivideGraphArea(Context, GraphArea);
    
}
function DivideGraphArea(Context, GraphArea) {

    var TitleMargin = 30;
    var PanelMargin = 20;

    TitleAreaY = new Rectangle(GraphArea.A.x, GraphArea.A.y, TitleMargin, GraphArea.Height - TitleMargin);

    DrawRectangle(TitleAreaY, Context, "Blue");

    TitleAreaX = new Rectangle(TitleAreaY.C.x, TitleAreaY.C.y, GraphArea.Width - TitleMargin, TitleMargin);

    DrawRectangle(TitleAreaX, Context, "Yellow");

    PanelArea = new Rectangle(TitleAreaY.B.x, TitleAreaY.B.y, TitleAreaX.Width, TitleAreaY.Height);
    DrawRectangle(PanelArea, Context, "Purple");

    InnerPanelArea = new Rectangle(PanelArea.A.x + PanelMargin, PanelArea.A.y + PanelMargin, PanelArea.Width - 2 * PanelMargin, PanelArea.Height - 2 * PanelMargin);
    DrawRectangle(InnerPanelArea, Context, "Grey");

    DrawAxis(Context, InnerPanelArea);
}

function DrawAxis(Context, InnerPanelArea) {

    // x-axis
    drawLine(Context, new Coordinate(InnerPanelArea.D.x, InnerPanelArea.D.y), new Coordinate(InnerPanelArea.C.x, InnerPanelArea.C.y));

    drawLine(Context, new Coordinate(InnerPanelArea.A.x, InnerPanelArea.A.y), new Coordinate(InnerPanelArea.D.x, InnerPanelArea.D.y));
}

function DrawYaxis(InnerPanelArea) {

    drawLine('myCanvas', InnerPanelArea.A, InnerPanelArea.D);

    /*
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
    */
}