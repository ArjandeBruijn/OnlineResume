function DrawCircle(Context, x, y) {
    Context.beginPath();
    Context.arc(x, y, 2, 0, 2 * Math.PI);
    Context.stroke();

}
function CurveList(line_color, marker_color, Label) {

    // points[0] = x-value
    // points[1] = y-value;
    this.label = Label;
    this.Points = [];

    this.LineColor = line_color;
    this.MarkerColor = marker_color;

    this.Length = function () {
        return this.Points.length;
    }
    this.ClearCurve = function(){
          this.Points = [];
    }
    this.GetPoint = function (i) {
        return this.Points[i];
    };
    this.AddPoint = function (x, y, sd) {
        this.Points.push([x, y, sd]);
    };
}
function Axis(Min, Max, Label, MultiplyWith, LargeTicks) {
    this.min = Min;
    this.max = Max;
    this.label = Label;
    this.largeticks = LargeTicks;
    this.multiplywith = MultiplyWith;
}
function Graph(mycanvas, X_axis, Y_axis) {
    this.x_min = X_axis.min;
    this.x_max = X_axis.max;
    this.x_label = X_axis.label;
    this.legendcolor = "black";

    this.y_axis = Y_axis;
    this.x_axis = X_axis;

    this.y_min = Y_axis.min;
    this.y_max = Y_axis.max;
    this.y_label = Y_axis.label;

    this.MyCanvas = mycanvas;
    this.MyContext = mycanvas.getContext("2d");
    this.MyContext.font = "12px Georgia";
    this.Curves = [];
    this.LegendText = null;

    this.ClearCurve=function(i){
         this.Curves[i].ClearCurve();
    }

    this.WriteLegend = function () {

        var y_min = this.InnerPanelArea.B[1];
        var x_min = this.InnerPanelArea.B[0] - 100;

        var y = y_min;
        for (var c = 0; c < this.Curves.length; c++) {

            var x = x_min;

            if (this.Curves[c].MarkerColor != null) {
                this.MyContext.strokeStyle = this.Curves[c].MarkerColor;
                this.DrawCircle(this.MyContext, x + 10, y - 5);
                if (this.Curves[c].LineColor == null) x += 25;
            }

            if (this.Curves[c].LineColor != null) {

                this.MyContext.strokeStyle = this.Curves[c].LineColor;

                this.drawLine([x, y - 5], [x + 20, y - 5]);

                x += 25;
            }


            this.MyContext.fillText(this.Curves[c].label, x, y);
            y += 20;
        }
        this.MyContext.strokeStyle = this.legendcolor;
        this.MyContext.rect(x_min - 5, y_min - 12, 100 + 10, y - y_min);
        this.MyContext.stroke();

    }
    this.GetCoordinate = function (x_value, y_value) {

        var coordinate = [this.InnerPanelArea.D[0] + ((x_value - this.x_min) / (this.x_max - this.x_min)) * this.InnerPanelArea.Width, this.InnerPanelArea.C[1] - ((y_value - this.y_min) / (this.y_max - this.y_min)) * this.InnerPanelArea.Height];

        return coordinate;
    }
    this.drawLine = function (from, to) {

        //from, to in row/column coordinates
        this.MyContext.beginPath();
        this.MyContext.moveTo(from[0], from[1]);
        this.MyContext.lineTo(to[0], to[1]);
        this.MyContext.stroke();
    }
    this.DrawYaxis = function () {

        this.drawLine([this.InnerPanelArea.A[0], this.InnerPanelArea.A[1]], [this.InnerPanelArea.D[0], this.InnerPanelArea.D[1]]);

        this.MyContext.fillText(this.y_label, this.InnerPanelArea.A[0] - 30, 12);

        var y_value = this.y_axis.multiplywith * this.y_min;

        var x_value = this.x_min;

        var largeticks = this.y_axis.largeticks;

        var between_ticks = Math.floor(this.y_axis.multiplywith * ((this.y_max - this.y_min) / largeticks));

        while (y_value <= this.y_axis.multiplywith * this.y_max) {

            var coordinate = this.GetCoordinate(x_value, y_value / this.y_axis.multiplywith);

            this.drawLine([coordinate[0] - 5, coordinate[1]], [coordinate[0] + 5, coordinate[1]]);

            this.MyContext.fillText(0.001 * Math.round(1000 * y_value), coordinate[0] - 20, coordinate[1]);

            y_value += between_ticks;
        }



    }
    this.DrawXaxis = function () {

        this.drawLine([this.InnerPanelArea.D[0], this.InnerPanelArea.D[1]], [this.InnerPanelArea.C[0], this.InnerPanelArea.C[1]]);

        this.MyContext.fillText(this.x_label, this.InnerPanelArea.D[0] + 0.5 * this.InnerPanelArea.Width, this.InnerPanelArea.D[1] + 40);

        var x_value = this.x_min;
        var y_value = this.y_min;


        var between_ticks = Math.floor((this.x_max - this.x_min) / this.x_axis.largeticks);

        while (x_value <= this.x_max) {
            var coordinate = this.GetCoordinate(x_value, y_value);

            this.drawLine([coordinate[0], coordinate[1] - 5], [coordinate[0], coordinate[1] + 5]);

            this.MyContext.fillText(x_value, coordinate[0] - 15, coordinate[1] + 15);

            x_value += between_ticks;
        }


    }
    this.DivideGraphArea = function (Context, GraphArea) {

        var TitleMargin = 30;
        var PanelMargin = 25;

        TitleAreaY = new Rectangle(GraphArea.A[0], GraphArea.A[1], TitleMargin, GraphArea.Height - TitleMargin);

        TitleAreaX = new Rectangle(TitleAreaY.C[0], TitleAreaY.C[1], GraphArea.Width - TitleMargin, TitleMargin);

        PanelArea = new Rectangle(TitleAreaY.B[0], TitleAreaY.B[1], TitleAreaX.Width, TitleAreaY.Height);
        var InnerPanelArea = new Rectangle(PanelArea.A[0] + PanelMargin, PanelArea.A[1] + PanelMargin, PanelArea.Width - 2 * PanelMargin, PanelArea.Height - 2 * PanelMargin);

        return InnerPanelArea;

    }
    this.Draw = function () {
        this.GraphArea = new Rectangle(0, 0, this.MyCanvas.width , this.MyCanvas.height);

        this.MyContext.clearRect(0, 0, this.GraphArea.Width, this.GraphArea.Height);

        this.InnerPanelArea = this.DivideGraphArea(this.MyContext, this.GraphArea);

        this.MyContext.strokeStyle = "Black";

        this.DrawXaxis();

        this.DrawYaxis();

        if (this.Curves != null) {
            for (var c = 0; c < this.Curves.length; c++) {
                this.DrawCurve(c);
            }
        }
        this.WriteLegend();
    }

    

    this.WriteText = function (text, x, y) {

        this.MyContext.fillText(text, x, y);

    }

    this.AddCurveList = function (line_color, marker_color, Label) {

        this.Curves.push(new CurveList(line_color, marker_color, Label));
        this.Draw();
    }
    
    this.DrawCircle = function (Context, x, y) {
        Context.beginPath();
        Context.arc(x, y, 2, 0, 2 * Math.PI);
        Context.stroke();

    }
     
    this.AddPoint = function (curve_number, x, y, sd) {
        var curve = this.Curves[curve_number];
        curve.AddPoint(x, y, sd);

        this.Draw();
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
                    this.drawLine([from[0] - 3, from[1]], [from[0] + 3, from[1]]);
                    this.drawLine([to[0] - 3, to[1]], [to[0] + 3, to[1]]);


                }
                this.DrawCircle(this.MyContext, coordinate[0], coordinate[1]);
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
        this.DrawXaxis();

        this.DrawYaxis();

        this.Draw();

    };
    
}

