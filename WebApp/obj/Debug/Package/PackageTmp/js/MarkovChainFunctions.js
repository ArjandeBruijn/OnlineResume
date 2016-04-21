

function StartMarkovChainFunctions() {

    var x_axis = new Axis(1930, 2015, "Time (y)", 1, 10, "green");
    var y_axis = new Axis(0, 17500, "Area defoliated (1000km)", 0.001, 4, "green");
    MarkovChainGraph = new Graph(document.getElementById("MarkovChainDefaultPage"), x_axis, y_axis);
    MarkovChainGraph.legendcolor = "black";

    MarkovChainGraph.AddCurveList("Green", "Green", "Measured");

    for (var m = 0; m < Measurements.length; m++) {
        MarkovChainGraph.AddPoint(0, Measurements[m][0], Measurements[m][1], -1);
    }
     
    MarkovChainGraph.AddCurveList("Red", null, "Modeled");
    AddModelPoints(MarkovChainGraph);

    MarkovChainGraph.Draw();
}
function AddModelPoints(MarkovChainGraph) {


    var i = 0;
    var s = 0;

    var lastcoordinate = null;
     
    setInterval(function () {
        var x = Model[i][0];
        var y = Model[i][1];

        var coordinate = MarkovChainGraph.GetCoordinate(x, y);


        if (lastcoordinate != null && coordinate[0] < lastcoordinate[0]) {
            MarkovChainGraph.ClearCurve(1)
        }
        
        MarkovChainGraph.AddPoint(1, x, y, -1);

        lastcoordinate = coordinate;
        
        i++;
        if (i == Model.length - 1) i = 0;
    }, 5);
}
 


 


