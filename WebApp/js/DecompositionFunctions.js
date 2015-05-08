$(window).load(function () {
    canvas = document.getElementById("DecompCanvas");
    var Context = canvas.getContext("2d");
    Context.font = "12px Georgia";

    x_min = 0;
    x_max = 100;
    y_min = 0;
    y_max = 1.2;

   

    AddModelPoints(Context, x_min, x_max, y_min, y_max);
});
function GetModelCalculations(x_min, x_max) {

    var model = [];

    for (var x = 0; x < x_max; x++) {

        model.push([x, 1 - 0.01 * x]);
    }
    return model;
}
function AddModelPoints(Context, x_min, x_max, y_min, y_max) {


    var i = 0;
    var s = 0;

    var lastcoordinate = null;
    var Coordinates = [];
    var model = null;
    var last_coordinate =null;

    var c = 0;

    setInterval(function () {

        Context.strokeStyle = "Black";
        InnerPanelArea = DrawGraph(Context);
        AddMeasurements(DecompositionMeasurements, Context, InnerPanelArea, x_min, x_max, y_min, y_max, false);



        if (model == null || c == model.length - 1) {
            model = GetModelCalculations(x_min, x_max);
            c = 0;
        }
        else c++;

        var x = model[c][0];
        var y = model[c][1];

        Context.strokeStyle = "Red";
        var coordinate = GetCoordinate(InnerPanelArea, x, x_min, x_max, y, y_min, y_max);

        if (last_coordinate != null) {
            drawLine(Context, coordinate, last_coordinate);
        }
        last_coordinate = coordinate;




        /*
        
       
        if (lastcoordinate != null) {

        if (coordinate.x < lastcoordinate.x) {

        
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
        */
    }, 5);
}



function DrawGraph(Context) {

    GraphArea = new Rectangle(0, 0, canvas.width,canvas.height);

    Context.clearRect(0, 0, GraphArea.Width, GraphArea.Height);

    var InnerPanelArea = DivideGraphArea(Context, GraphArea, x_min, x_max, y_min, y_max);

    DrawXaxis(Context, InnerPanelArea, x_min, x_max, y_min, y_max);

    DrawYaxis(Context, InnerPanelArea, x_min, x_max, y_min, y_max, 1, 0.2, "Remaining Biomass");

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

