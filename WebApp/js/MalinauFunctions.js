var White = [255, 255, 255];
var DarkGreen = [0, 100, 0];   // PF
var LightGreen = [0, 255, 0]; // SF
var Red = [255, 0, 0];
var Yellow = [255, 255, 0];  // position 2
var Blue = [0, 0, 128];   //Water Body

PF = new LandUse(1, DarkGreen);
SF = new LandUse(2, LightGreen);
Settlement = new LandUse(4, Red);
OpenLand = new LandUse(6, Yellow);
Water = new LandUse(8, Blue);

LandUseTypes = [PF, SF, Settlement, OpenLand, Water];
Settlements = [];
Waters = [];



function StartMalinauSimulations(elem) {

    ShowMalinauMap(2000);

    window.setInterval(function () {

        if (isScrolledIntoView(elem) == true) {
            SimulateSelectedHypothesis();
        }
    }, 500);


}

function ShowMalinauMap(year) {

    //ncols = ymax;
    //nrows = xmax;
    nrows = 415;
    ncols = 561;
    if (year == 2009) {
        SetImage('canvas_Malinau', MalinauMap2009, 2009);
    }
    else {
        SetImage('canvas_Malinau', MalinauMap2000, 2000);
    }
}

function SetImage(container, MalinauMap, year) {

    Coordinates = [];
    for (var row = 0; row < nrows; row++) {
        Coordinates[row] = [];
        for (var col = 0; col < ncols; col++) {
            Coordinates[row][col] = [row, col];
        }
    }

    Year = year;
    Progress = 100;
    // create a new pixel array
    canvas = document.getElementById(container);
    Context = canvas.getContext("2d");
    imageData = Context.createImageData(nrows, ncols);

    // draw random dots
    var counter = -1;

    for (var col = 0; col < ncols; col++) {
        for (var row = 0; row < nrows; row++) {

            counter++;

            var MapCode = MalinauMap[counter];

            land_use = GetLandUseType(MapCode);

            if (land_use == null) {
                continue;
            }
            SetPixel(imageData, row, col, null, land_use);

            land_use.Count++;

        }
    }

    // copy the image data back onto the canvas
    Context.putImageData(imageData, 0, 0); // at coords 0,0

    DrawProgressBox();
    DrawLegend();
}

function SimulateSelectedHypothesis() {

    if (document.getElementById("NoSpatialCorrelation").checked) SimulateNoSpatialCorrelation();
    if (document.getElementById("AllAroundDevelopedArea").checked) SimulateAllAroundDevelopedArea();
    if (document.getElementById("AllAroundWater").checked) SimulateAllAroundWater();

}

function SimulateNoSpatialCorrelation() {

    GetLandUseChangeCount();

    var c = 0;
    var OldProgress = Progress = 0;
    var year_start = Year;

    for (var row = 0; row < nrows; row++) {
        for (var col = 0; col < ncols; col++) {

            c++;
            var rand = Math.random();

            var color = getPixelColor(imageData, row, col);

            if (color[0] == DarkGreen[0] && color[1] == DarkGreen[1] && color[2] == DarkGreen[2]) {

                if (rand < Forest_SecondaryForest) {
                    SetPixel(imageData, row, col, PF, SF);
                }
                else if (rand < (+Forest_SecondaryForest + +Forest_Cropland)) {

                    SetPixel(imageData, row, col, PF, OpenLand);
                }
                else if (rand < (+Forest_SecondaryForest + +Forest_Cropland + +Forest_Settlements)) {
                    SetPixel(imageData, row, col, PF, Settlement);
                }
            }
            else if (color[0] == LightGreen[0] && color[1] == LightGreen[1] && color[2] == LightGreen[2]) {

                if (rand < (+SecondaryForest_CropLand)) {
                    SetPixel(imageData, row, col, SF, OpenLand);
                }
                else if (rand < (+SecondaryForest_CropLand )) {
                    SetPixel(imageData, row, col, SF, Settlement);
                }
            }
            else if (color[0] == Yellow[0] && color[1] == Yellow[1] && color[2] == Yellow[2]) {

                if (rand < (+CropLand_Settlements)) {
                    SetPixel(imageData, row, col, OpenLand, Settlement);
                }
            }
            else if (color[0] == Red[0] && color[1] == Red[1] && color[2] == Red[2]) {

                if (rand < Settlements_Forest) {
                    SetPixel(imageData, row, col, Settlement, DarkGreen);
                }
                else if (rand < (+Settlements_Forest + +Settlements_SecondaryForest)) {
                    SetPixel(imageData, row, col, Settlement, SF);
                }
                else if (rand < (+Settlements_Forest + +Settlements_SecondaryForest + +Settlements_CropLand)) {
                    SetPixel(imageData, row, col, Settlement, OpenLand);
                }
            }
            Progress = Math.round(100 * (c / (nrows * ncols)));
            Year = Math.floor(year_start + 10 * (Progress / 100));
            if (Progress >= OldProgress + 10) {
                DrawImage();
                OldProgress += 10;
            }
        }
    }
    DrawImage();

}

function SimulateAllAroundDevelopedArea() {

    if (Progress < 100) return;

    GetLandUseChangeCount();

    Progress = 0;
    var year_start = Year;
    var OldProgress = Progress = 0;
    var cnt = 0;
    var id = setInterval(function () {

        var i = Math.floor(Math.random() * luc.length);

        if (luc[i] != null) {
            Progress = Math.round(100 * (cnt / SumLandUseChanges));
            Year = Math.floor(year_start + 10 * (Progress / 100));
            cnt++;
            if (Progress >= OldProgress + 10) {
                DrawImage();
                OldProgress += 10;
                luc.clean(null);
            }
            if (Progress >= 100) {
                clearInterval(id);
            }

            var rand = Math.floor(Math.random() * Settlements.length);

            var randomsettlementcoordinate = Settlements[rand];

            From = luc[i][0];
            To = luc[i][1];

            var coordinate = GetDonatingSite(randomsettlementcoordinate, From);

            SetPixel(imageData, coordinate[0], coordinate[1], From, To);

            luc[i] = null;

        }
    }, 0);


    DrawImage();
}

function SimulateAllAroundWater() {

    if (Progress < 100) return;

    GetLandUseChangeCount();

    Progress = 0;
    var year_start = Year;
    var OldProgress = Progress = 0;
    var cnt = 0;
    var id = setInterval(function () {

        var i = Math.floor(Math.random() * luc.length);

        if (luc[i] != null) {
            Progress = Math.round(100 * (cnt / SumLandUseChanges));
            Year = Math.floor(year_start + 9 * (Progress / 100));
            cnt++;
            if (Progress >= OldProgress + 10) {
                DrawImage();
                OldProgress += 10;
                luc.clean(null);
            }
            if (Progress >= 100) {
                clearInterval(id);
            }

            var rand = Math.floor(Math.random() * Waters.length);

            var randomwatercoordinate = Waters[rand];

            From = luc[i][0];
            To = luc[i][1];

            var coordinate = GetDonatingSite(randomwatercoordinate, From);

            SetPixel(imageData, coordinate[0], coordinate[1], From, To);

            luc[i] = null;

        }
    }, 0);


    DrawImage();
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function DrawRectangle(Rectangle, Color) {

    Context.fillStyle = Color;
    Context.fillRect(Rectangle.xmin, Rectangle.ymin, Rectangle.Width, Rectangle.Height);
}

function setPixelColor(imageData, x, y, Color) {

    index = get_index(imageData, x, y);

    imageData.data[index + 0] = Color[0];
    imageData.data[index + 1] = Color[1];
    imageData.data[index + 2] = Color[2];
    imageData.data[index + 3] = 255;
}

function getPixelColor(imageData, x, y) {

    index = get_index(imageData, x, y);

    Color = [];

    Color[0] = imageData.data[index + 0];
    Color[1] = imageData.data[index + 1];
    Color[2] = imageData.data[index + 2];
    Color[3] = 255;

    return Color;
}

function get_index(imageData, x, y) {

    var index = (x + y * imageData.width) * 4;
    return index;
}

function get_xy(index) {

    var x = index / 4;
    var y = 0;
    while (x > imageData.width) {
        x -= imageData.width;
        y++;
    }

    return [x, y];
}

function CalculateDistance(x1, y1, x2, y2) {

    var dx2 = Math.pow(Math.abs(x2 - x1), 2);
    var dy2 = Math.pow(Math.abs(y2 - y1), 2);
    return Math.sqrt(dx2 + dy2);

}

function SetPixel(imageData, row, col, old_land_use, new_land_use) {
    setPixelColor(imageData, row, col, new_land_use.Color);

    if (old_land_use != null) {
        old_land_use.Count--;
    }
    if (new_land_use != null) {
        new_land_use.Count++;
    }

    if (old_land_use == Settlement) {
        var index = Settlements.indexOf(Coordinates[row][col]);
        if (index > -1) Settlements.splice(index, 1);

    }
    if (old_land_use == Waters) {
        var index = Waters.indexOf(Coordinates[row][col]);
        if (index > -1) Waters.splice(index, 1);

    }

    if (new_land_use == Settlement) {
        Settlements.push(Coordinates[row][col]);

    }
    if (new_land_use == Water) {
        Waters.push(Coordinates[row][col]);

    }



}

function DrawProgressBox() {
    var Entrees = 1;
    var HeightPerEntree = 20;

    var Height = HeightPerEntree * Entrees + 20;
    var Width = 80;
    var legendrect = new Rectangle(nrows - Width - 10, ncols - Height - 10, Width, Height);
    Context.clearRect(legendrect.A[0], legendrect.A[1], legendrect.Width, legendrect.Height);

    var coordinate = [legendrect.A[0] + 10, legendrect.A[1] + 10];

    coordinate = AddLegendEntry(coordinate, "Year:\t" + Year, null);
}

function DrawImage(custom_legend) {
    Context.putImageData(imageData, 0, 0); // at coords 0,0
    DrawProgressBox();
    if (custom_legend == null) DrawLegend();
    else custom_legend();
}

Array.prototype.clean = function (deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};

function DrawLegend() {

    var Entrees = 4;
    var HeightPerEntree = 20;

    legendrect = new Rectangle(10, 10, 150, HeightPerEntree * Entrees + 20);

    var coordinate = [legendrect.A[0] + 10, legendrect.A[1] + 10];

    coordinate = AddLegendEntry(coordinate, "Primary forest", DarkGreen);
    coordinate = AddLegendEntry(coordinate, "Secondary forest", LightGreen);
    coordinate = AddLegendEntry(coordinate, "Cropland", Yellow);
    coordinate = AddLegendEntry(coordinate, "Settlements", Red);
}

function GetName() {

    PageMethods.Name(Success, Failure);
}
function Success(result) {
    alert(result);
}
function Failure(error) {
    alert(error);
}
function GetDonatingSite(random_settlement_coord, donating_land_use) {

    var name = GetName();

    var d = 1;

    for (; ; ) {
        for (var r = random_settlement_coord[0] - d; r <= random_settlement_coord[0] + d; r++) {

            for (var c = random_settlement_coord[1] - d; c <= random_settlement_coord[1] + d; c++) {

                var distance = CalculateDistance(random_settlement_coord[0], random_settlement_coord[1], r, c);

                if (distance <= d) {

                    if (r < nrows || c < ncols) {
                        var color = getPixelColor(imageData, r, c)
                        if (color[0] == donating_land_use.Color[0] && color[1] == donating_land_use.Color[1] && color[2] == donating_land_use.Color[2]) {
                            return Coordinates[r][c];
                        }
                    }

                }
            }
        }
        d++;
    }

}

function GetLandUseChangeCount() {

    SumLandUseChanges = 0;
    luc = [];

    var ForestArea = PF.Count;
    Forest_SecondaryForest = 0.002;
    Forest_SecondaryForest_cnt = Forest_SecondaryForest * ForestArea;
    for (var i = 0; i < Forest_SecondaryForest_cnt; i++) luc.push([PF, SF]);
    SumLandUseChanges += Forest_SecondaryForest_cnt;

    Forest_Cropland = 0;
    Forest_Cropland_cnt = Forest_Cropland * ForestArea;
    for (var i = 0; i < Forest_Cropland_cnt; i++) luc.push([PF, OpenLand]);
    SumLandUseChanges += Forest_Cropland_cnt;

    Forest_Settlements = 0.0003;
    Forest_Settlements_cnt = Forest_Settlements * ForestArea;
    for (var i = 0; i < Forest_Settlements_cnt; i++) luc.push([PF, Settlement]);
    SumLandUseChanges += Forest_Settlements_cnt;



    SecondaryForest_CropLand = 0.005;
    var SecondaryForestArea = SF.Count;
    SecondaryForest_CropLand_cnt = SecondaryForest_CropLand * SecondaryForestArea;
    for (var i = 0; i < SecondaryForest_CropLand_cnt; i++) luc.push([SF, OpenLand]);
    SumLandUseChanges += SecondaryForest_CropLand_cnt;

    var CropArea = OpenLand.Count;
    CropLand_Settlements = 0.01;
    CropLand_Settlements_cnt = CropLand_Settlements * CropArea;
    for (var i = 0; i < CropLand_Settlements_cnt; i++) luc.push([OpenLand, Settlement]);
    SumLandUseChanges += CropLand_Settlements_cnt;


    //-------------------
    var SettlementArea = Settlement.Count;

    Settlements_Forest = 0;
    Settlements_Forest_cnt = Settlements_Forest * SettlementArea;
    for (var i = 0; i < Settlements_Forest_cnt; i++) luc.push([Settlement, PF]);
    SumLandUseChanges += Settlements_Forest_cnt;


    Settlements_SecondaryForest = 0;
    Settlements_SecondaryForest_cnt = Settlements_SecondaryForest * SettlementArea;
    for (var i = 0; i < Settlements_SecondaryForest_cnt; i++) luc.push([Settlement, SF]);
    SumLandUseChanges += Settlements_SecondaryForest_cnt;

    Settlements_CropLand = 0;
    Settlements_CropLand_cnt = Settlements_CropLand * SettlementArea;
    for (var i = 0; i < Settlements_CropLand_cnt; i++) luc.push([Settlement, OpenLand]);
    SumLandUseChanges += Settlements_CropLand_cnt;

}

function GetValueFromTable(ID) {
    var value = document.getElementById(ID).innerText;
    return value;
}

function AddLegendEntry(coordinate, label, color) {

    Context.beginPath();
    if (color != null) {
        var rect2 = new Rectangle(coordinate[0], coordinate[1], 20, 15);
        DrawRectangle(rect2, rgbToHex(color[0], color[1], color[2]));
        Context.fillStyle = 'black';
        Context.rect(rect2.A[0], rect2.A[1], rect2.Width, rect2.Height);
        Context.fillText(label, rect2.B[0] + 5, rect2.B[1] + 12);
    }
    else {
        Context.fillText(label, coordinate[0] + 5, coordinate[1] + 12);
    }
    Context.stroke();
    return [coordinate[0], coordinate[1] + 15 + 5];
}

function LandUse(MapCode, Color) {
    this.Count = 0;
    this.MapCode = MapCode;
    this.Color = Color;
}

function GetLandUseType(MapCode) {

    for (a = 0; a < LandUseTypes.length; a++) {
        var my_landuse = LandUseTypes[a];
        if (my_landuse.MapCode == MapCode) return my_landuse;
    }
    return null;
}

function InitializePixelCoordinates(image) {
    Pixel_Coordinates = [[], []];
    for (var r = 0; r < pixels.length; r++) {
        Pixel_Coordinates[r] = [];

        for (var c = 0; c < pixels[0].length; c++) {
            Pixel_Coordinates[r][c] = new Coordinate(r, c);
        }
    }
}


