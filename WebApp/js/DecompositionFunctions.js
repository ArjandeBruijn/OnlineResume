$(window).load(function () {
    canvas = document.getElementById("DecompCanvas");
    var Context = canvas.getContext("2d");
    Context.font = "12px Georgia";

    InnerPanelArea = DrawGraph(Context, 1930, 2015, 0, 16000);


});


function DrawGraph(Context, x_min, x_max, y_min, y_max) {

    GraphArea = new Rectangle(0, 0, canvas.width,canvas.height);

    var InnerPanelArea = DivideGraphArea(Context, GraphArea, x_min, x_max, y_min, y_max);

    DrawAxis(Context, InnerPanelArea, x_min, x_max, y_min, y_max, "Remaining Biomass");
    

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

