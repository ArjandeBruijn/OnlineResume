$(window).load(function () {
    c = document.getElementById("DecompCanvas");
    var Context = c.getContext("2d");
    Context.font = "12px Georgia";

    InnerPanelArea = DrawGraph(Context, 525, 450, 1930, 2015, 0, 16000);


});


function DrawGraph(Context, Width, Height, x_min, x_max, y_min, y_max) {

    GraphArea = new Rectangle(0, 0, Width, Height);

    var InnerPanelArea = DivideGraphArea(Context, GraphArea, x_min, x_max, y_min, y_max);

    DrawAxis(Context, InnerPanelArea, 0, x_max, 0, y_max);
    

    return InnerPanelArea;
}

function DivideGraphArea(Context, GraphArea, x_min, x_max, y_min, Y_max) {

    var TitleMargin = 30;
    var PanelMargin = 25;

    TitleAreaY = new Rectangle(GraphArea.A.x, GraphArea.A.y, TitleMargin, GraphArea.Height - TitleMargin);

    //DrawRectangle(TitleAreaY, Context, "Blue");

    TitleAreaX = new Rectangle(TitleAreaY.C.x, TitleAreaY.C.y, GraphArea.Width - TitleMargin, TitleMargin);



    //DrawRectangle(TitleAreaX, Context, "Yellow");

    PanelArea = new Rectangle(TitleAreaY.B.x, TitleAreaY.B.y, TitleAreaX.Width, TitleAreaY.Height);
    //DrawRectangle(PanelArea, Context, "Purple");

    var InnerPanelArea = new Rectangle(PanelArea.A.x + PanelMargin, PanelArea.A.y + PanelMargin, PanelArea.Width - 2 * PanelMargin, PanelArea.Height - 2 * PanelMargin);
    //DrawRectangle(InnerPanelArea, Context, "Grey");

    return InnerPanelArea;

}

function DrawAxis(Context, InnerPanelArea, x_min, x_max, y_min, y_max) {

    // x-axis
    DrawXaxis(Context, InnerPanelArea, x_min, x_max, y_min, y_max);

    DrawYaxis(Context, InnerPanelArea, x_min, x_max, y_min, y_max);
}
function DrawXaxis(Context, InnerPanelArea, x_min, x_max, y_min, y_max) {

    drawLine(Context, new Coordinate(InnerPanelArea.D.x, InnerPanelArea.D.y), new Coordinate(InnerPanelArea.C.x, InnerPanelArea.C.y));

    Context.fillText("Time", InnerPanelArea.D.x + 0.5 * InnerPanelArea.Width, InnerPanelArea.D.y + 40);

    var x_value = x_min;
    var y_value = y_min;
    while (x_value < x_max) {
        var coordinate = GetCoordinate(InnerPanelArea, x_value, x_min, x_max, y_value, y_min, y_max);

        drawLine(Context, new Coordinate(coordinate.x, coordinate.y - 5), new Coordinate(coordinate.x, coordinate.y + 5));

        Context.fillText(x_value, coordinate.x - 15, coordinate.y + 15);

        x_value += 10;
    }


}
function DrawYaxis(Context, InnerPanelArea, x_min, x_max, y_min, y_max) {

    drawLine(Context, new Coordinate(InnerPanelArea.A.x, InnerPanelArea.A.y), new Coordinate(InnerPanelArea.D.x, InnerPanelArea.D.y));

    Context.fillText("Area defoliated (1000km)", InnerPanelArea.A.x - 30, 12);


    var y_value = y_min;

    var x_value = x_min;

    while (y_value <= y_max) {
        var coordinate = GetCoordinate(InnerPanelArea, x_value, x_min, x_max, y_value, y_min, y_max);

        drawLine(Context, new Coordinate(coordinate.x - 5, coordinate.y), new Coordinate(coordinate.x + 5, coordinate.y));

        Context.fillText(Math.round(0.001 * y_value, 1), coordinate.x - 20, coordinate.y);

        y_value += 2000;
    }



}
