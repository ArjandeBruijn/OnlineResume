
function CurveList(line_color, marker) {

    // points[0] = x-value
    // points[1] = y-value;
    this.Points = [];

    this.LineColor = line_color;
    this.Marker = marker;

    this.Length = function () {
        return this.Points.length;
    }

    this.GetPoint = function (i) {
        return this.Points[i];
    };
    this.AddPoint = function (x, y, sd) {
        this.Points.push([x,y,sd]);
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

    this.AddCurveList = function (line_color, marker_color) {
        if (this.Curves == null) this.Curves = [];
        this.Curves.push(new CurveList(line_color, marker_color));
    }
    this.drawLine = function (from, to) {
        
        //from, to in row/column coordinates
        this.MyContext.beginPath();
        this.MyContext.moveTo(from.x, from.y);
        this.MyContext.lineTo(to.x, to.y);
        this.MyContext.stroke();

    }
    this.DrawCircle = function (Context, x, y) {
        Context.beginPath();
        Context.arc(x, y, 2, 0, 2 * Math.PI);
        Context.stroke();

    }
    function GetRowColumn(InnerPanelArea, x_value, x_min, x_max, y_value, y_min, y_max) {

        return [InnerPanelArea.D.x + ((x_value - x_min) / (x_max - x_min)) * InnerPanelArea.Width, InnerPanelArea.C.y - ((y_value - y_min) / (y_max - y_min)) * InnerPanelArea.Height];
    }
    this.AddPoint = function (curve_number, x, y, sd) {
        var curve = this.Curves[curve_number];
        curve.AddPoint(x, y, sd);

        this.DrawCurve(curve_number);


    }
    
    this.GetCoordinate = function (x_value, y_value) {

        var coordinate = new Coordinate(this.InnerPanelArea.D.x + ((x_value - this.x_min) / (this.x_max - this.x_min)) * this.InnerPanelArea.Width, this.InnerPanelArea.C.y - ((y_value - this.y_min) / (this.y_max - this.y_min)) * this.InnerPanelArea.Height);

        return coordinate;
    }
    this.DrawCurve = function (curve_nr) {

        var curve = this.Curves[curve_nr];
        this.MyContext.strokeStyle = curve.LineColor;

        for (var p = 0; p < curve.Length(); p++) {
            var point = curve.GetPoint(p);
            var coordinate = this.GetCoordinate( point[0], point[1]);
            if (curve.Marker == "C" || curve.Marker == "Circle") {
                this.DrawCircle(this.MyContext, coordinate.x, coordinate.y);

                if (point[2] != null) {
                    var sd = point[2];

                    var from = this.GetCoordinate(point[0], point[1] + sd);
                    var to = this.GetCoordinate(point[0], point[1] - sd);
                    this.drawLine(from, to);
                    this.drawLine(new Coordinate(from.x - 3, from.y), new Coordinate(from.x + 3, from.y));
                    this.drawLine(new Coordinate(to.x - 3, to.y), new Coordinate(to.x + 3, to.y));

                    
                }

            }
        }

        for (var p = 1; p < curve.Length(); p++) {
            var from = curve.GetPoint(p - 1);
            var coordinate_from = this.GetCoordinate(from[0], from[1]);
            
            var to = curve.GetPoint(p);
            var coordinate_to = this.GetCoordinate(to[0], to[1]);

            if (curve.LineColor != null) {
                this.drawLine(coordinate_from, coordinate_to);
            }

            
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


//----------------------------------------------------------------------------------------------------------------------
$(window).load(function () {

    RemainingBiomassGraph = new Graph(document.getElementById("DecompCanvas"), 0, 100, 0, 1.2, "Remaining Biomass");

    B_route_graph = new Graph(document.getElementById("B_ROUTE_canvas"), 0, 20, 0, 1.2, "B");
    B_route_graph.AddCurveList("Red", null);

    AddModelPoints(RemainingBiomassGraph);
});
function GetModelCalculations(x_min, x_max) {

    var model = [];

    if (this.iter == null) this.iter = 0;

    var B = Math.random();

    if (this.iter >= B_route_graph.x_max) {
        B_route_graph.Reschale(0,  B_route_graph.x_max + 10 ,0, B_route_graph.y_max);
    }

     
    B_route_graph.AddPoint(0, this.iter++, B, null);

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
            RemainingBiomassGraph.AddCurveList("Red", null);

            RemainingBiomassGraph.AddCurveList(null, "C");


            for (var p = 0; p < DecompositionMeasurements.length; p++) {
                RemainingBiomassGraph.AddPoint(1, DecompositionMeasurements[p][0], DecompositionMeasurements[p][1], DecompositionMeasurements[p][2]);
            }

            //AddMeasurements2(DecompositionMeasurements, RemainingBiomassGraph.MyContext, RemainingBiomassGraph.InnerPanelArea, RemainingBiomassGraph.x_min, RemainingBiomassGraph.x_max, RemainingBiomassGraph.y_min, RemainingBiomassGraph.y_max, false);
            model = GetModelCalculations(RemainingBiomassGraph.x_min, RemainingBiomassGraph.x_max);
            c = 0;
        }
        else c++;

        var x = model[c][0];
        var y = model[c][1];
         
        RemainingBiomassGraph.AddPoint(0,x , y, null);




    }, 5);
}

function AddMeasurements2(TimeSeries, Context, InnerPanelArea, x_min, x_max, y_min, y_max, HasLine) {

    var lastcoordinate = null;
    var coordinate = null;
    for (var i = 0; i < TimeSeries.length; i++) {

        var x_value = TimeSeries[i][0];
        var y_value = TimeSeries[i][1];

        var coordinate = GetPoint(InnerPanelArea, x_value, x_min, x_max, y_value, y_min, y_max);

        DrawCircle(Context, coordinate.x, coordinate.y);

        if (HasLine) {
            if (lastcoordinate != null && lastcoordinate.x < coordinate.x) {
                drawLine(Context, coordinate, lastcoordinate);
            }
        }


        if (TimeSeries[i][2] != null) {
            var sd = TimeSeries[i][2];

            var from = GetPoint(InnerPanelArea, x_value, x_min, x_max, y_value + sd, y_min, y_max);
            var to = GetPoint(InnerPanelArea, x_value, x_min, x_max, y_value - sd, y_min, y_max);
            drawLine(Context, from, to);
            drawLine(Context, new Coordinate(from.x - 3, from.y), new Coordinate(from.x + 3, from.y));
            drawLine(Context, new Coordinate(to.x - 3, to.y), new Coordinate(to.x + 3, to.y));

            var from2 = GetPoint(InnerPanelArea, x_value, x_min, x_max, y_value + sd, y_min, y_max);
        }

        lastcoordinate = coordinate;
    }

}





