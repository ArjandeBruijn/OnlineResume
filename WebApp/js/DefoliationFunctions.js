$(window).load(function () {




    var x_axis = new Axis(0, 20, "Time (yr)", 1, 10);
    var y_axis = new Axis(0, 0.1, "Defoliation (kHa/yr)", 100, 10);
    MarkovGraph = new Graph(document.getElementById("myCanvas"), x_axis, y_axis);
    
});