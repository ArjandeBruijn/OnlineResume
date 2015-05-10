 



//----------------------------------------------------------------------------------------------------------------------
$(window).load(function () {

    var x_axis = new Axis(0, 20, "Iterations", 1, 10);
    var y_axis = new Axis(0, 0.1, "Decomposition rate (% per year)", 100, 10);
    B_route_graph = new Graph(document.getElementById("B_ROUTE_canvas"), x_axis, y_axis);
    B_route_graph.AddCurveList("Red", null, "Random draw");
    B_route_graph.AddCurveList("Blue", null, "Center estimate");
    B_route_graph.AddCurveList("Green", null, "High estimate");
    B_route_graph.AddCurveList("Green", null, "Low estimate");
    AddModelPoints();
});

function ResetDecompositionFunctions() {

    if (interval_id != null) {
        clearInterval(interval_id);
    }

    var x_axis = new Axis(0, 20, "Iterations", 1, 10);
    var y_axis = new Axis(0, 0.1, "Decomposition rate (% per year)", 100, 10);
    B_route_graph = new Graph(document.getElementById("B_ROUTE_canvas"), x_axis, y_axis);
    B_route_graph.AddCurveList("Red", null, "Random draw");
    B_route_graph.AddCurveList("Blue", null, "Average");
    B_route_graph.AddCurveList("Green", null, "High estimate");
    B_route_graph.AddCurveList("Green", null, "Low estimate");
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

            var x_axis = new Axis(0, 100, "Time", 1, 10);
            var y_axis = new Axis(0, 1.2, "Remaining Biomass (%)", 100, 6);

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





            RemainingBiomassGraph.AddCurveList("Red", null, "Modeled");

            RemainingBiomassGraph.AddCurveList(null, "Black", "Measured");

            for (var p = 0; p < DecompositionMeasurements.length; p++) {
                RemainingBiomassGraph.AddPoint(1, DecompositionMeasurements[p][0], DecompositionMeasurements[p][1], DecompositionMeasurements[p][2]);
            }


            c = 0;
        }
        else c++;

        RemainingBiomassGraph.AddPoint(0, model[c][0], model[c][1], null);





    }, 5);
}







