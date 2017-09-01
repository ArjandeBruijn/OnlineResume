
 
var DecompositionMeasurements = [[0, 1.00372, 0.0235],
		    [1, 1.05293, 0.070238022],
		    [2, 0.94914, 0.09464],
		    [2.7, 0.87253, 0.00650385],
 		    [3, 0.92927, 0.09725],
		    [3.6, 0.99724, 0.010847737],
		    [4, 1.009, 0.037554737],
		    [4.1, 0.99245, 0.017712367],
		    [4.2, 1.07632, 0.044659328],
		    [4.3, 0.57985, 0.040721653],
		    [4.4, 1.00071, 0.058654531],
		    [4.7, 0.65011, 0.032974315],
		    [4.9, 1.06804, 0.071483683],
		    [5.3, 0.53066, 0.004141516],
		    [5.6, 1.08314, 0.019331187],
		    [6, 0.96659, 0.10118],
		    [6.1, 0.96686, 0.048796305],
		    [6.2, 1.0595, 0.080099832],
		    [6.6, 0.65814, 0.26877],
		    [6.8, 0.63019, 0.036398378],
		    [6.9, 1.07923, 0.009219043],
		    [7, 0.83857, 0.020909726],
		    [7.5, 0.84452, 0.067396804],
		    [7.6, 0.96535, 0.06708899],
		    [8.1, 0.40935, 0.013162626],
		    [9, 0.88408, 0.04812],
		    [10, 0.64041, 0.000759724],
		    [10.4, 0.24754, 0.012732338],
		    [11, 0.39045, 0.12668],
		    [11.8, 0.5459, 0.036672598],
		    [12.2, 0.2967, 0.021229468],
		    [13, 0.24809, 0.019294988],
		    [15.6, 0.64232, 0.041726839],
		    [15.8, 0.23042, 0.018196201],
		    [16.2, 0.69681, 0.04348568],
		    [17, 0.508, 0.041562158],
		    [17.6, 0.64043, 0.040457981],
		    [18.4, 0.61489, 0.056847295],
		    [22.2, 0.45343, 0.010551796],
		    [22.4, 0.33599, 0.000689812],
		    [23.5, 0.64113, 0.01256228],
		    [25.4, 0.18701, 0.005163278],
		    [27.1, 0.55567, 0.008453613],
		    [29.4, 0.38404, 0.012284794],
		    [29.5, 0.40894, 0.017783381],
		    [29.8, 0.37979, 0.035034833],
		    [34.4, 0.43759, 0.002320967],
		    [37, 0.4078, 0.008552534],
		    [43.7, 0.41362, 0.040214198],
		    [56.8, 0.3183, 0.001308199],
		    [62.1, 0.36383, 0.032471561],
		    [82.7, 0.54681, 0.009488606],
		    [82.8, 0.54574, 0.023304763],
		    [85, 0.60186, 0.15123]];

function StartDecompositionFunctions(canvas) {

    var x_axis = new Axis(0, 20, "Iterations", 1, 10, "black");
    var y_axis = new Axis(0, 0.1, "Decomposition rate (% per year)", 100, 10, "black");

     
    AddModelPoints(canvas);
}

function GetModelCalculations(i, B, x_min, x_max) {

    var model = [];
     
    
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
                 
                P -= (rss / two_sigma_square);
            }
        }
    }

    return P;
}
var x_axis =null;
var y_axis =null;
var RemainingBiomassGraph = null;

function GetRemainingBiomassGraph(canvas) {

    if (x_axis == null) {
        x_axis = new Axis(0, 100, "Time", 1, 10, "black");
    }

    if (y_axis == null) {
        y_axis = new Axis(0, 1.2, "Remaining Biomass (%)", 100, 6, "black");
    }
    if (RemainingBiomassGraph == null) {
        RemainingBiomassGraph = new Graph(canvas, x_axis, y_axis);
        RemainingBiomassGraph.AddCurveList(null, "Black", "Measured");
        RemainingBiomassGraph.AddCurveList("Red", null, "Modeled");
        for (var p = 0; p < DecompositionMeasurements.length; p++) {
            RemainingBiomassGraph.AddPoint(0, DecompositionMeasurements[p][0], DecompositionMeasurements[p][1], DecompositionMeasurements[p][2]);
        }

    }
    else RemainingBiomassGraph.ClearCurve(1);
      
    return RemainingBiomassGraph

}


function AddModelPoints(canvas) {

   
    var i = 0;
    var s = 0;

    var lastcoordinate = null;
    var Coordinates = [];
  
    var last_coordinate =null;

    
    var cnt = 0;
    var P_old = null;
    var P = 1;
    var logalpha = 1;
    var B = 0.07;
    var B_sum =0;

    RemainingBiomassGraph = null;
  
    var wait = 5;

    setInterval(function () {

        if (isScrolledIntoView(canvas) == true) {
            RemainingBiomassGraph = null;
        }
    }, 50);


    interval_id = setInterval(

        function () {

            if (IsMobileBrowser() == false || cnt == 0) {
                cnt++;

                canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

                RemainingBiomassGraph = GetRemainingBiomassGraph(canvas);

                var B_old = B;

                if (cnt > 1) {
                    B += 0.2 * (Math.random() - 0.5);
                }

                if (B < 0) B *= -1;

                var model = GetModelCalculations(i++, B, RemainingBiomassGraph.x_min, RemainingBiomassGraph.x_max);

                P = GetProbability(model);

                if (P_old != null) {
                    logalpha = P - P_old;
                    if (logalpha < 0) {
                        B = B_old;
                    }
                }

                P_old = P;

                for (var mp = 0; mp < model.length; mp++) {
                    setTimeout(function (RemainingBiomassGraph, model, mp) {
                        RemainingBiomassGraph.AddPoint(1, model[mp][0], model[mp][1], null);
                    }, mp * wait, RemainingBiomassGraph, model, mp);
                }
            }

        }, 500);
}







