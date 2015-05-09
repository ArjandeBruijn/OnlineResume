 
function CurveList(line_color, marker_color) {

    // points[0] = x-value
    // points[1] = y-value;
    this.Points = [];

    this.LineColor = line_color;
    this.MarkerColor = marker_color;

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
function Axis(Min, Max, Label) {
    this.min = Min;
    this.max = Max;
    this.label = Label;
}
function Graph(mycanvas, X_axis, Y_axis) {
    this.x_min = X_axis.min;
    this.x_max = X_axis.max;
    this.x_label = X_axis.label;;
    this.y_min = Y_axis.min;
    this.y_max = Y_axis.max;
    this.y_label = Y_axis.label;;

    this.MyCanvas = mycanvas;
    this.MyContext = mycanvas.getContext("2d");
    this.MyContext.font = "12px Georgia";
    
    this.LegendText = null;

    this.WriteLegend = function () {

        if (this.LegendText != null) {

            var y = 30;
            for (var l = 0; l < this.LegendText.length; l++) {
                RemainingBiomassGraph.WriteText(this.LegendText[l], 100, y);
                y += 20;
            }
        }

    }
    this.DrawYaxis = function (y_factor, y_diff) {

        drawLine(this.MyContext, new Coordinate(this.InnerPanelArea.A.x, this.InnerPanelArea.A.y), new Coordinate(this.InnerPanelArea.D.x, this.InnerPanelArea.D.y));

        this.MyContext.fillText(this.y_label, this.InnerPanelArea.A.x - 30, 12);

        var y_value = this.y_min;

        var x_value = this.x_min;

        while (y_value <= this.y_max) {
            var coordinate = GetPoint(this.InnerPanelArea, x_value, this.x_min, this.x_max, y_value, this.y_min, this.y_max);

            drawLine(this.MyContext, new Coordinate(coordinate.x - 5, coordinate.y), new Coordinate(coordinate.x + 5, coordinate.y));

            this.MyContext.fillText(0.001 * Math.round(1000 * y_factor * y_value), coordinate.x - 20, coordinate.y);

            y_value += y_diff;
        }



    }
    this.DrawXaxis = function (Context, InnerPanelArea, x_min, x_max, y_min, y_max) {

        drawLine(Context, new Coordinate(InnerPanelArea.D.x, InnerPanelArea.D.y), new Coordinate(InnerPanelArea.C.x, InnerPanelArea.C.y));

        Context.fillText("Time", InnerPanelArea.D.x + 0.5 * InnerPanelArea.Width, InnerPanelArea.D.y + 40);

        var x_value = x_min;
        var y_value = y_min;
        while (x_value < x_max) {
            var coordinate = GetPoint(InnerPanelArea, x_value, x_min, x_max, y_value, y_min, y_max);

            drawLine(Context, new Coordinate(coordinate.x, coordinate.y - 5), new Coordinate(coordinate.x, coordinate.y + 5));

            Context.fillText(x_value, coordinate.x - 15, coordinate.y + 15);

            x_value += 10;
        }


    }
    this.Refresh = function () {
        this.GraphArea = new Rectangle(0, 0, this.MyCanvas.width, this.MyCanvas.height);

        this.MyContext.clearRect(0, 0, this.GraphArea.Width, this.GraphArea.Height);

        this.InnerPanelArea = DivideGraphArea(this.MyContext, this.GraphArea);

        this.MyContext.strokeStyle = "Black";

        this.DrawXaxis(this.MyContext, this.InnerPanelArea, this.x_min, this.x_max, this.y_min, this.y_max);

        this.DrawYaxis( 1, 0.2);

        if (this.Curves != null) {
            for (var c = 0; c < this.Curves.length; c++) {
                this.DrawCurve(c);
            }
        }
        this.WriteLegend();
    }

    this.Refresh();

    this.WriteText = function (text, x, y) {

        this.MyContext.fillText(text, x, y);

    }

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
    this.GetCoordinate = function (x_value, y_value) {

        var coordinate = new Coordinate(this.InnerPanelArea.D.x + ((x_value - this.x_min) / (this.x_max - this.x_min)) * this.InnerPanelArea.Width, this.InnerPanelArea.C.y - ((y_value - this.y_min) / (this.y_max - this.y_min)) * this.InnerPanelArea.Height);

        return coordinate;
    }
    this.AddPoint = function (curve_number, x, y, sd) {
        var curve = this.Curves[curve_number];
        curve.AddPoint(x, y, sd);

        this.Refresh();
    }


    this.DrawCurve = function (curve_nr) {

        var curve = this.Curves[curve_nr];
       
        if (curve.MarkerColor != null) {

            for (var p = 0; p < curve.Length(); p++) {
                var point = curve.GetPoint(p);
                var coordinate = this.GetCoordinate(point[0], point[1]);

                this.MyContext.strokeStyle = curve.MarkerColor;

                if (point[2] != null) {
                    var sd = point[2];

                    var from = this.GetCoordinate(point[0], point[1] + sd);
                    var to = this.GetCoordinate(point[0], point[1] - sd);
                    this.drawLine(from, to);
                    this.drawLine(new Coordinate(from.x - 3, from.y), new Coordinate(from.x + 3, from.y));
                    this.drawLine(new Coordinate(to.x - 3, to.y), new Coordinate(to.x + 3, to.y));


                }
                this.DrawCircle(this.MyContext, coordinate.x, coordinate.y);
            }
        }

        if (curve.LineColor != null) {

            this.MyContext.strokeStyle = curve.LineColor;

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
    }
    
    
    this.Reschale = function (X_min, X_max, Y_min, Y_max) {

        this.MyContext.clearRect(0, 0, this.GraphArea.Width, this.GraphArea.Height);

        this.x_min = X_min;
        this.x_max = X_max;
        this.y_min = Y_min;
        this.y_max = Y_max;


        this.MyContext.strokeStyle = "Black";
        this.DrawXaxis(this.MyContext, this.InnerPanelArea, this.x_min, this.x_max, this.y_min, this.y_max);

        this.DrawYaxis(1, 0.2);

        this.Refresh();

    };
    function DivideGraphArea(Context, GraphArea) {

        var TitleMargin = 30;
        var PanelMargin = 25;

        TitleAreaY = new Rectangle(GraphArea.A.x, GraphArea.A.y, TitleMargin, GraphArea.Height - TitleMargin);

        TitleAreaX = new Rectangle(TitleAreaY.C.x, TitleAreaY.C.y, GraphArea.Width - TitleMargin, TitleMargin);

        PanelArea = new Rectangle(TitleAreaY.B.x, TitleAreaY.B.y, TitleAreaX.Width, TitleAreaY.Height);
        var InnerPanelArea = new Rectangle(PanelArea.A.x + PanelMargin, PanelArea.A.y + PanelMargin, PanelArea.Width - 2 * PanelMargin, PanelArea.Height - 2 * PanelMargin);
        
        return InnerPanelArea;

    }
}


//----------------------------------------------------------------------------------------------------------------------
$(window).load(function () {

    var x_axis = new Axis(0, 20, "Iterations");
    var y_axis = new Axis(0, 0.1, "Remaining Biomass");
    B_route_graph = new Graph(document.getElementById("B_ROUTE_canvas"), x_axis, y_axis);
    B_route_graph.AddCurveList("Red", null);

    AddModelPoints();
});

function ResetDecompositionFunctions() {

    if (interval_id != null) {
        clearInterval(interval_id);
    }

    var x_axis = new Axis(0, 20, "Iterations");
    var y_axis = new Axis(0, 0.1, "Remaining Biomass");
    B_route_graph = new Graph(document.getElementById("B_ROUTE_canvas"), x_axis, y_axis);
    B_route_graph.AddCurveList("Red", null);

    AddModelPoints();
}

function GetModelCalculations(i, B, x_min, x_max) {

    var model = [];
     
    if (i >= B_route_graph.x_max) {
        B_route_graph.Reschale(0,  B_route_graph.x_max + 10 ,0, B_route_graph.y_max);
    }

    if (B >= B_route_graph.y_max) {
        B_route_graph.Reschale(0, B_route_graph.x_max, 0, B +0.1);
    }

    B_route_graph.AddPoint(0, i, B, null);

    var y = 1;
    for (var x = 0; x < x_max; x++) {

        model.push([x, y]);
        y *= (1-B);
    }

    
    return model;
}
function GetProbability(model) {

    var RSS = 0;
    var P = 1;
    for (var ms = 0; ms < DecompositionMeasurements.length; ms++) {

        for (var md = 0; md < model.length; md++) {

            if (DecompositionMeasurements[ms][0] == model[md][0]) {

                RSS += Math.pow(DecompositionMeasurements[ms][1], model[md][1]);

                var rss = Math.pow(DecompositionMeasurements[ms][1] -model[md][1], 2);

                var two_sigma_square = 2 * Math.pow(DecompositionMeasurements[ms][2], 2);

//                P *= (DecompositionMeasurements[ms][2] * 2.5059928) * Math.exp(-1 * (rss / two_sigma_square));

               // P -= (rss / two_sigma_square);
                P -= (rss / two_sigma_square);
            }
        }
    }

    return P;
}
function AddModelPoints() {
   

    var i = 0;
    var s = 0;

    var lastcoordinate = null;
    var Coordinates = [];
    var model = null;
    var last_coordinate =null;

    var c = 0;

    var P_old = null;
    var P = 1;
    var logalpha = 1;
    var B = 0.05;// Math.random();
    var B_sum =0;

    interval_id = setInterval(function () {

        if (model == null || c == model.length - 1) {

            last_coordinate = null;

            var x_axis = new Axis(0, 100, "Time");
            var y_axis = new Axis(0, 1.2, "Remaining Biomass");

            RemainingBiomassGraph = new Graph(document.getElementById("DecompCanvas"), x_axis, y_axis);

            var B_old = B;

            B += 0.2 * (Math.random() - 0.5);

            if (B < 0) B *= -1;

            model = GetModelCalculations(i++, B, RemainingBiomassGraph.x_min, RemainingBiomassGraph.x_max);

            P = GetProbability(model);


            B_sum += B;
            var b_av = B_sum / i;
            RemainingBiomassGraph.LegendText = ["B = " + B, "P = exp(" + P.toFixed(0) + ")", "logalpha = " + logalpha, "b_av = " + b_av];

            if (P_old != null) {
                logalpha = P - P_old;
                if (logalpha < 0) {
                    B = B_old;
                }
            }

            P_old = P;





            RemainingBiomassGraph.AddCurveList("Red", null);

            RemainingBiomassGraph.AddCurveList(null, "Black");

            for (var p = 0; p < DecompositionMeasurements.length; p++) {
                RemainingBiomassGraph.AddPoint(1, DecompositionMeasurements[p][0], DecompositionMeasurements[p][1], DecompositionMeasurements[p][2]);
            }


            c = 0;
        }
        else c++;

        RemainingBiomassGraph.AddPoint(0, model[c][0], model[c][1], null);





    }, 5);
}







