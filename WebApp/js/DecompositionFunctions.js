$(window).load(function () {
    canvas = document.getElementById("DecompCanvas");
    var Context = canvas.getContext("2d");
    Context.font = "12px Georgia";

    x_min = 0;
    x_max = 100;
    y_min = 0;
    y_max = 1.2;

    InnerPanelArea = DrawGraph(Context);

    AddModelPoints(Context, InnerPanelArea, x_min, x_max, y_min, y_max);
});

function AddModelPoints(Context, InnerPanelArea, x_min, x_max, y_min, y_max) {


    var i = 0;
    var s = 0;

    var lastcoordinate = null;
    var Coordinates = [];
    setInterval(function () {

        AddMeasurements(DecompositionMeasurements, Context, InnerPanelArea, x_min, x_max, y_min, y_max, false);
        /*
        var x = Model[i][0];
        var y = Model[i][1];

        Context.strokeStyle = "Red";
        var coordinate = GetCoordinate(InnerPanelArea, x, x_min, x_max, y, y_min, y_max);

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
        */
    }, 5);
}

function GoBayes() {
   
        canvas = document.getElementById("DecompCanvas");
        var Context = canvas.getContext("2d");
        Context.font = "12px Georgia";

        x_min = 0;
        x_max = 100;
        y_min = 0;
        y_max = 1.2;

        InnerPanelArea = DrawGraph(Context);

        
        var Model = [[0, 1], [20, 0.9], [50, 0.89]];
        AddModelPoints(Model, Context, InnerPanelArea, x_min, x_max, y_min, y_max, 1, 0.2, "Remaining Biomass");
         

        AddMeasurements(DecompositionMeasurements, Context, InnerPanelArea, x_min, x_max, y_min, y_max, false);
}

function DrawGraph(Context) {

    GraphArea = new Rectangle(0, 0, canvas.width,canvas.height);

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

