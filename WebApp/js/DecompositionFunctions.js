
function CurveList() {

    // points[0] = x-value
    // points[1] = y-value;
    this.Points = [];

    this.Length = function () {
        return this.Points.length;
    }

    this.GetPoint = function (i) {
        return this.Points[i];
    };
    this.AddPoint = function (coordinate) {
        this.Points.push(coordinate);
    };
}

function Graph(mycanvas, X_min, X_max, Y_min, Y_max, Y_Label) {
    this.x_min = X_min;
    this.x_max = X_max;
    this.y_min = Y_min;
    this.y_max = Y_max;
    this.MyCanvas = mycanvas;
    this.MyContext = mycanvas.getContext("2d");
    this.MyContext.font = "12px Georgia";
    this.y_label = Y_Label;

    this.MyContext.strokeStyle = "Black";

    this.GraphArea = new Rectangle(0, 0, this.MyCanvas.width, this.MyCanvas.height);

    this.MyContext.clearRect(0, 0, this.GraphArea.Width, this.GraphArea.Height);

    this.InnerPanelArea = DivideGraphArea(this.MyContext, this.GraphArea);

    DrawXaxis(this.MyContext, this.InnerPanelArea, this.x_min, this.x_max, this.y_min, this.y_max);

    DrawYaxis(this.MyContext, this.InnerPanelArea, this.x_min, this.x_max, this.y_min, this.y_max, 1, 0.2, this.y_label  );

    this.AddCurveList = function () {
        if (this.Curves == null) this.Curves = [];
        this.Curves.push(new CurveList());
    }
    this.drawLine = function (Context, from, to) {
        
        //from, to in row/column coordinates
        Context.beginPath();
        Context.moveTo(from[0], from[1]);
        Context.lineTo(to[0], to[1]);
        Context.stroke();

    }
    function GetRowColumn(InnerPanelArea, x_value, x_min, x_max, y_value, y_min, y_max) {

        return [InnerPanelArea.D.x + ((x_value - x_min) / (x_max - x_min)) * InnerPanelArea.Width, InnerPanelArea.C.y - ((y_value - y_min) / (y_max - y_min)) * InnerPanelArea.Height];
    }
    this.AddPoint = function (curve_number, point) {
        var curve = this.Curves[curve_number];
        curve.AddPoint(point);

        this.DrawCurve(curve_number);

         
    }
    this.DrawCurve = function(curve_nr) {

        var curve = this.Curves[curve_nr];

        for (var p = 1; p < curve.Length(); p++) {
            var from = curve.GetPoint(p - 1);
            var coordinate_from = GetPoint(this.InnerPanelArea, from[0], this.x_min, this.x_max, from[1], this.y_min, this.y_max);

            var to = curve.GetPoint(p);
            var coordinate_to = GetPoint(this.InnerPanelArea, to[0], this.x_min, this.x_max, to[1], this.y_min, this.y_max);

            drawLine(this.MyContext, coordinate_from, coordinate_to);
        }
    }

    this.Reschale = function (X_min, X_max, Y_min, Y_max) {

        this.MyContext.clearRect(0, 0, this.GraphArea.Width, this.GraphArea.Height);

        this.x_min = X_min;
        this.x_max = X_max;
        this.y_min = Y_min;
        this.y_max = Y_max;

        this.MyContext.strokeStyle = "Black";

        DrawXaxis(this.MyContext, this.InnerPanelArea, this.x_min, this.x_max, this.y_min, this.y_max);

        DrawYaxis(this.MyContext, this.InnerPanelArea, this.x_min, this.x_max, this.y_min, this.y_max, 1, 0.2, this.y_label);

        for (var c = 0; c < this.Curves.length; c++) {
            this.DrawCurve(c);
        }

    };
    function DivideGraphArea(Context, GraphArea) {

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
}

$(window).load(function () {

    RemainingBiomassGraph = new Graph(document.getElementById("DecompCanvas"), 0, 100, 0, 1.2, "Remaining Biomass");

    B_route_graph = new Graph(document.getElementById("B_ROUTE_canvas"), 0, 20, 0, 1.2, "B");
    B_route_graph.AddCurveList();

    AddModelPoints(RemainingBiomassGraph);
});
function GetModelCalculations(x_min, x_max) {

    var model = [];

    if (this.iter == null) this.iter = 0;

    var B = Math.random();

    if (this.iter > B_route_graph.x_max - 10) {
        B_route_graph.Reschale(0,  B_route_graph.x_max + 10 ,0, B_route_graph.y_max);
    }

     
    B_route_graph.AddPoint(0, [this.iter++, B]);

    var y = 1;
    for (var x = 0; x < x_max; x++) {

        model.push([x, y]);
        y *= B;
    }

    
    return model;
}
function AddModelPoints(RemainingBiomassGraph) {


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

            RemainingBiomassGraph = new Graph(document.getElementById("DecompCanvas"), 0, 100, 0, 1.2, "Remaining Biomass");
            RemainingBiomassGraph.AddCurveList();

            AddMeasurements(DecompositionMeasurements, RemainingBiomassGraph.MyContext, RemainingBiomassGraph.InnerPanelArea, RemainingBiomassGraph.x_min, RemainingBiomassGraph.x_max, RemainingBiomassGraph.y_min, RemainingBiomassGraph.y_max, false);
            model = GetModelCalculations(RemainingBiomassGraph.x_min, RemainingBiomassGraph.x_max);
            c = 0;
        }
        else c++;

        var x = model[c][0];
        var y = model[c][1];

        RemainingBiomassGraph.MyContext.strokeStyle = "Red";
         
        RemainingBiomassGraph.AddPoint(0, [x, y]);

         

         
    }, 5);
}







