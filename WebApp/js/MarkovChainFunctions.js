$(window).load(function () {
    canvas = document.getElementById("myCanvas");
    var Context = canvas.getContext("2d");
    Context.font = "12px Georgia";

    InnerPanelArea = DrawGraph(Context, 1930, 2015, 0, 16000);
    AddModelPoints(Model, Context, InnerPanelArea, 1930, 2015, 0, 16000, 0.001, 2000, "Area defoliated (1000km)");

});

function DrawGraph(Context,  x_min, x_max, y_min, y_max) {

    GraphArea = new Rectangle(0, 0, canvas.width, canvas.height);

    var InnerPanelArea = DivideGraphArea(Context, GraphArea, x_min, x_max, y_min, y_max);

    return InnerPanelArea;
}
function AddModelPoints(Model, Context, InnerPanelArea, x_min, x_max, y_min, y_max, y_frac, y_diff, y_label) {


    var i = 0;
    var s = 0;

    var lastcoordinate = null;
    var Coordinates = [];
    setInterval(function () {
        var x = Model[i][0];
        var y = Model[i][1];

        Context.strokeStyle = "Red";
        var coordinate = GetPoint(InnerPanelArea, x, x_min, x_max, y, y_min, y_max);

        Coordinates.push(coordinate);
        //DrawCircle(Context, coordinate.x, coordinate.y);

        if (lastcoordinate != null) {

            if (coordinate.x < lastcoordinate.x) {

                Context.clearRect(0, 0, GraphArea.Width, GraphArea.Height);
                Context.strokeStyle = "Black";

                DrawXaxis(Context, InnerPanelArea, x_min, x_max, y_min, y_max);

                DrawYaxis(Context, InnerPanelArea, x_min, x_max, y_min, y_max, y_frac, y_diff, y_label);

                AddMeasurements(Measurements, Context, InnerPanelArea, x_min, x_max, y_min, y_max, true);
                AddLegend(Context, InnerPanelArea);
                Context.strokeStyle = "Red";
            }
            else drawLine(Context, coordinate, lastcoordinate);
        }
        lastcoordinate = coordinate;


        i++;
        if (i == Model.length - 1) i = 0;
    }, 5);
}
function AddLegend(Context, InnerPanelArea) {

    var legendrect = new Rectangle(InnerPanelArea.B.x - 125, InnerPanelArea.B.y, 125, 60);
    Context.rect(legendrect.A.x, legendrect.A.y, legendrect.Width, legendrect.Height);
    Context.stroke();

    Context.strokeStyle = "Black";
    var y_ms = legendrect.A.y + 1 / 3 * legendrect.Height;
    drawLine(Context, new Coordinate(legendrect.A.x + 10, y_ms), new Coordinate(legendrect.A.x + 40, y_ms));
    DrawCircle(Context, legendrect.A.x + 25, legendrect.A.y + 1 / 3 * legendrect.Height);
    Context.fillText("Measured", legendrect.A.x + 50, y_ms + 5);

    Context.strokeStyle = "Red";
    var y_md = legendrect.A.y + 2 / 3 * legendrect.Height;
    drawLine(Context, new Coordinate(legendrect.A.x + 10, y_md), new Coordinate(legendrect.A.x + 40, y_md));
    Context.fillText("Modeled", legendrect.A.x + 50, y_md + 5);

    Context.strokeStyle = "Black";

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


