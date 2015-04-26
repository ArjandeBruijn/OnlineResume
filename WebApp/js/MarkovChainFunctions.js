﻿

function DrawGraph(Context, xmin, ymin, Width, Height, x_min, x_max, y_min, y_max) {

    GraphArea = new Rectangle(xmin, ymin, Width, Height);

    var InnerPanelArea = DivideGraphArea(Context, GraphArea, x_min, x_max, y_min, y_max);

    DrawAxis(Context, InnerPanelArea, x_min, x_max, y_min, y_max);

    AddMeasurements(Context, InnerPanelArea, x_min, x_max, y_min, y_max);

    return InnerPanelArea;
}

$(window).load(function () {
    c = document.getElementById("myCanvas");
    var Context = c.getContext("2d");
    Context.font = "12px Georgia";

    InnerPanelArea = DrawGraph(Context, 0, 0, 525, 450, 1930, 2015, 0, 16000);
    AddModelPoints(Context, InnerPanelArea, 1930, 2015, 0, 16000);

});

function AddModelPoints(Context,InnerPanelArea, x_min, x_max, y_min, y_max) {

    

    var AllModelSeries = Model;
    var n = NrOfMeas;

    var i = 0;
    var s = 0;

    setInterval(function () {
        var x = AllModelSeries[i][0];
        var y = AllModelSeries[i][1];

        Context.strokeStyle = "Red";
        var coordinate = GetCoordinate(InnerPanelArea, x, x_min, x_max, y, y_min, y_max);
        DrawCircle(Context, coordinate.x, coordinate.y);
        i++;
        if (i == AllModelSeries.length - 1) i = 0;
    }, 50);

    Context.strokeStyle = "Black";
}
function AddMeasurements(Context, InnerPanelArea, x_min, x_max, y_min, y_max) {

    

    var lastcoordinate = null;
    var coordinate = null;
    for (var i = 0; i < Measurements.length; i++) {

        var x_value = Measurements[i][0];
        var y_value = Measurements[i][1];

        var coordinate = GetCoordinate(InnerPanelArea, x_value, x_min, x_max, y_value, y_min, y_max);

        DrawCircle(Context,coordinate.x, coordinate.y);

        if (lastcoordinate != null) {
            drawLine(Context, coordinate, lastcoordinate);
        }

        lastcoordinate = coordinate;
    }

}

function GetCoordinate(InnerPanelArea, x_value, x_min,x_max, y_value,y_min, y_max) {

    // var coordinate = new Coordinate(InnerPanelArea.D.x, InnerPanelArea.C.y - y_value * InnerPanelArea.Height / (y_max - y_min));
    var coordinate = new Coordinate(InnerPanelArea.D.x + ((x_value - x_min) / (x_max - x_min)) * InnerPanelArea.Width, InnerPanelArea.C.y - ((y_value -y_min)/ (y_max -y_min )) * InnerPanelArea.Height);

    return coordinate;
}
function DrawXaxis(Context, InnerPanelArea, x_min, x_max, y_min, y_max) {

    drawLine(Context, new Coordinate(InnerPanelArea.D.x, InnerPanelArea.D.y), new Coordinate(InnerPanelArea.C.x, InnerPanelArea.C.y));

    for (var i = 0; i <= 10; i++) {

        var x_value = x_min + i / 10 * (x_max - x_min);
        var y_value = y_min;

        var coordinate = GetCoordinate(InnerPanelArea, x_value, x_min, x_max, y_value, y_min, y_max);

        drawLine(Context, new Coordinate(coordinate.x, coordinate.y - 5), new Coordinate(coordinate.x, coordinate.y + 5));

        Context.fillText(x_value, coordinate.x, coordinate.y + 10);
    }
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
function DrawYaxis(Context, InnerPanelArea, x_min, x_max, y_min, y_max) {

    drawLine(Context, new Coordinate(InnerPanelArea.A.x, InnerPanelArea.A.y), new Coordinate(InnerPanelArea.D.x, InnerPanelArea.D.y));

    for (var i = 0; i <= 10; i++) {

        var y_value = y_min + i / 10 * (y_max - y_min);

        var x_value = x_min;

        var coordinate = GetCoordinate(InnerPanelArea, x_value, x_min, x_max, y_value, y_min, y_max);

        drawLine(Context, new Coordinate(coordinate.x-5, coordinate.y), new Coordinate(coordinate.x+5, coordinate.y));

        Context.fillText(y_value, coordinate.x-40, coordinate.y);
    }

}
