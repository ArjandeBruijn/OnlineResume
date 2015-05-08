
function Graph(X_min, X_max, Y_min, Y_max) {
    this.x_min = X_min;
    this.x_max = X_max;
    this.y_min = Y_min;
    this.y_max = Y_max;

}



$(window).load(function () {

    RemainingBiomassGraph = new Graph(0, 100, 0, 1.2);

    canvas = document.getElementById("DecompCanvas");
    var Context = canvas.getContext("2d");
    Context.font = "12px Georgia";

    

    canvas_B_route = document.getElementById("B_ROUTE_canvas");
    var Context_B_route = canvas_B_route.getContext("2d");
    Context_B_route.font = "12px Georgia";

    DrawGraph(Context_B_route, RemainingBiomassGraph);

    AddModelPoints(Context, RemainingBiomassGraph);
});
function GetModelCalculations(x_min, x_max) {

    var model = [];

    var B = Math.random();

    var y = 1;
    for (var x = 0; x < x_max; x++) {

        model.push([x, y]);
        y *= B;
    }
    return model;
}
function AddModelPoints(Context, RemainingBiomassGraph) {


    var i = 0;
    var s = 0;

    var lastcoordinate = null;
    var Coordinates = [];
    var model = null;
    var last_coordinate =null;

    var c = 0;

    setInterval(function () {

        if (model == null || c == model.length - 1) {
            last_coordinate = null;
            Context.strokeStyle = "Black";
            InnerPanelArea = DrawGraph(Context, RemainingBiomassGraph);
            AddMeasurements(DecompositionMeasurements, Context, InnerPanelArea, RemainingBiomassGraph.x_min, RemainingBiomassGraph.x_max, RemainingBiomassGraph.y_min, RemainingBiomassGraph.y_max, false);
            model = GetModelCalculations(RemainingBiomassGraph.x_min, RemainingBiomassGraph.x_max);
            c = 0;
        }
        else c++;

        var x = model[c][0];
        var y = model[c][1];

        Context.strokeStyle = "Red";
        var coordinate = GetCoordinate(InnerPanelArea, x, RemainingBiomassGraph.x_min, RemainingBiomassGraph.x_max, y, RemainingBiomassGraph.y_min, RemainingBiomassGraph.y_max);

        if (last_coordinate != null) {
            drawLine(Context, coordinate, last_coordinate);
        }
        last_coordinate = coordinate;

         
    }, 5);
}



function DrawGraph(MyContext, Graph) {

    GraphArea = new Rectangle(0, 0, canvas.width,canvas.height);

    MyContext.clearRect(0, 0, GraphArea.Width, GraphArea.Height);

    var InnerPanelArea = DivideGraphArea(MyContext, GraphArea, Graph.x_min, Graph.x_max, Graph.y_min, Graph.y_max);

    DrawXaxis(MyContext, InnerPanelArea, Graph.x_min, Graph.x_max, Graph.y_min, RemainingBiomassGraph.y_max);

    DrawYaxis(MyContext, InnerPanelArea, Graph.x_min, Graph.x_max, Graph.y_min, Graph.y_max, 1, 0.2, "Remaining Biomass");

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

