NoData = new LandUse(-9999, White, null);
PF = new LandUse(1, DarkGreen, [new ConversionRate(6, GetValueFromTable('Forest-CropLand'))]);
SF = new LandUse(2, LightGreen, [new ConversionRate(6, GetValueFromTable('SecondaryForest-CropLand'))]);
LandUse3 = new LandUse(3, Color3, null);
Settlement = new LandUse(4, Red, [new ConversionRate(6, 0.003)]);
LandUse5 = new LandUse(5, Cyan, null);
OpenLand = new LandUse(6, Yellow, [new ConversionRate(1, 0.002), new ConversionRate(4, 0.003)]);
LandUse7 = new LandUse(7, Color7, null);
Water = new LandUse(8, Blue, null);
LandUse9 = new LandUse(9, Color9, null);
LandUse10 = new LandUse(10, Color10, null);
LandUse11 = new LandUse(11, Color11, null);
LandUse12 = new LandUse(12, Color12, null);
LandUse13 = new LandUse(13, Color13, null);

LandUseTypes = [NoData, PF, SF, LandUse3, Settlement, LandUse5, OpenLand, LandUse7, Water, LandUse9, LandUse10, LandUse11, LandUse12, LandUse13];

var LandUseColors = {};

LandUseColors[DarkGreen] = PF;
LandUseColors[LightGreen] = SF;
LandUseColors[Red] = Settlement;
LandUseColors[Yellow] = OpenLand;

function ShowMalinauMap(year) {

    //ncols = ymax;
    //nrows = xmax;
    nrows = 415;
    ncols = 561;
    if (year == 2009) {
        SetImage('canvas1', MalinauMap2009, 2009);
    }
    else {
        SetImage('canvas1', MalinauMap2000, 2000);
    }
}

function SetImage(container, MalinauMap, year) {

    Coordinates = [];
    for (var row = 0; row < nrows; row++) {
        Coordinates[row] = [];
        for (var col = 0; col < ncols; col++) {
            Coordinates[row][col] = new Coordinate(row, col);
        }
    }

    Year = year;
    Progress = 100;
    // create a new pixel array
    var element2 = document.getElementById('canvas1');
    canvas = element2.getContext("2d");
    imageData = element2.getContext("2d").createImageData(nrows, ncols);

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
    canvas.putImageData(imageData, 0, 0); // at coords 0,0
    DrawProgressBox();
    DrawLegend();
}
Settlements = [];
function SetPixel(imageData, row, col, old_land_use, new_land_use)
{
    setPixelColor(imageData, row, col, new_land_use.Color);
    if (new_land_use == Settlement) Settlements.push(Coordinates[row][col]);

    if (old_land_use == Settlement) {

        var index = Settlement.indexOf(Coordinates[row][col]);
        if (index > -1) Settlement.splice(index, 1);
            
         
    }

}
function DrawProgress(Progress) {
    var old_font = canvas.font;
    canvas.font = "30px Arial";
    canvas.clearRect(nrows - 80, ncols - 15, 50, 20);
    canvas.fillText(Progress, nrows - 80, ncols - 15);
    canvas.font = old_font;
}
function DrawYear(Year) {
    var old_font = canvas.font;
    canvas.font = "30px Arial";
    canvas.fillText(Year, nrows - 80, ncols - 15);
    canvas.font = old_font;
}
function Simulate1() {

 
    if (document.getElementById("NoSpatialCorrelation").checked) {

        SimulateNoSpatialCorrelation();
    }
    else if (document.getElementById("AllAroundDevelopedArea").checked) {

        SimulateAllAroundDevelopedArea();
    }
    else if (document.getElementById("AllAroundWaterAndDevelopedArea").checked) {

        SimulateAllAroundWaterAndDevelopedArea();
    }
    else if (document.getElementById("AmericanInvasion").checked) {

        SimulateAmericanInvasion();
    }
    else alert("No Valid Selection")
     
}
function DrawProgressBox() {
    var Entrees = 2;
    var HeightPerEntree = 20;

    var Height = HeightPerEntree * Entrees + 20;
    var Width = 125;
    var legendrect = new Rectangle(nrows - Width - 10, ncols - Height - 10, Width, Height);
    canvas.clearRect(legendrect.A.x, legendrect.A.y, legendrect.Width, legendrect.Height);
    canvas.rect(legendrect.A.x, legendrect.A.y, legendrect.Width, legendrect.Height);

    var coordinate = new Coordinate(legendrect.A.x + 10, legendrect.A.y + 10);

    coordinate = AddLegendEntry(coordinate, "Progress:\t" + Progress + "%", null);

    coordinate = AddLegendEntry(coordinate, "Year:\t" + Year, null);
}
function DrawImage()
{
    canvas.putImageData(imageData, 0, 0); // at coords 0,0
    DrawProgressBox();
    DrawLegend();
}

function SimulateAllAroundDevelopedArea() {

    GetLandUseChangeCount();

    Progress = 0;

    var i = 0;
    var OldProgress = Progress = 0;
    var id = setInterval(function () {

        Progress = Math.round(100 * (i / Forest_SecondaryForest_cnt));
        if (Progress >= OldProgress + 10) {
            DrawImage();
            OldProgress += 10;
        }
        if (Progress >= 100) {
            clearInterval(id);
        }

        var rand = Math.floor(Math.random() * Settlements.length);
        var randomsettlementcoordinate = Settlements[rand];

        var coordinate = GetDonatingSite(randomsettlementcoordinate, PF);

        SetPixel(imageData, coordinate.x, coordinate.y, PF, SF);

         
        i++;

    }, 0);

    Year += 9;
    DrawImage();
}
function SimulateNoSpatialCorrelation() {

    GetLandUseChangeCount();

    var c = 0;
    var OldProgress = Progress = 0;
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

                if (rand < SecondaryForest_Forest) {
                    SetPixel(imageData, row, col, SF, PF);
                }
                else if (rand < (+SecondaryForest_Forest + +SecondaryForest_CropLand)) {
                    SetPixel(imageData, row, col, SF, OpenLand);
                }
                else if (rand < (+SecondaryForest_Forest + +SecondaryForest_CropLand + +SecondaryForest_Settlements)) {
                    SetPixel(imageData, row, col, SF, Settlement);
                }
            }
            else if (color[0] == Yellow[0] && color[1] == Yellow[1] && color[2] == Yellow[2]) {

                if (rand < CropLand_Forest) {
                    SetPixel(imageData, row, col, OpenLand, PF);
                }
                else if (rand < (+CropLand_Forest + +CropLand_SecondaryForest)) {
                    SetPixel(imageData, row, col, OpenLand, SF);
                }
                else if (rand < (+CropLand_Forest + +CropLand_SecondaryForest + +CropLand_Settlements)) {
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
            if (Progress >= OldProgress + 10) {
                DrawImage();
                OldProgress += 10;
            }
        }
    }
    DrawImage();

}
function GetDonatingSite(random_settlement_coord, donating_land_use) {

    var d = 1;

    for (; ; ) {
        for (var r = random_settlement_coord.x - d; r <= random_settlement_coord.x + d; r++) {

            for (var c = random_settlement_coord.y - d; c <= random_settlement_coord.y + d; c++) {

                var distance = CalculateDistance(random_settlement_coord.x, random_settlement_coord.y, r, c);

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

    var ForestArea = PF.Count;
    Forest_SecondaryForest = GetValueFromTable('Forest-SecondaryForest');
    Forest_SecondaryForest_cnt = Forest_SecondaryForest * ForestArea;
    //alert("Forest_SecondaryForest_cnt = " + Forest_SecondaryForest_cnt);

    Forest_Cropland = GetValueFromTable('Forest-CropLand');
    Forest_Cropland_cnt = Forest_Cropland * ForestArea;
    //alert("Forest_Cropland_cnt = " + Forest_Cropland_cnt);

    Forest_Settlements = GetValueFromTable('Forest-Settlements');
    Forest_Settlements_cnt = Forest_Settlements * ForestArea;
    //alert("Forest_Settlements_cnt = " + Forest_Settlements_cnt);

    //-------------------
    var SecondaryForestArea = SF.Count;
    SecondaryForest_Forest = GetValueFromTable('SecondaryForest-Forest');
    SecondaryForest_Forest_cnt = SecondaryForest_Forest * SecondaryForestArea;
    //alert("SecondaryForest_Forest_cnt = " + SecondaryForest_Forest_cnt);

    SecondaryForest_CropLand = GetValueFromTable('SecondaryForest-CropLand');
    SecondaryForest_CropLand_cnt = SecondaryForest_CropLand * SecondaryForestArea;
    //alert("SecondaryForest_CropLand_cnt = " + SecondaryForest_CropLand_cnt);

    SecondaryForest_Settlements = GetValueFromTable('SecondaryForest-Settlements');
    SecondaryForest_Settlements_cnt = SecondaryForest_Settlements * SecondaryForestArea;
    //alert("SecondaryForest_Settlements_cnt = " + SecondaryForest_Settlements_cnt);

    //-------------------
    var CropArea = OpenLand.Count;
    CropLand_Forest = GetValueFromTable('CropLand-Forest');
    CropLand_Forest_cnt = CropLand_Forest * CropArea;
    //alert("CropLand_Forest_cnt = " + CropLand_Forest_cnt);

    CropLand_SecondaryForest = GetValueFromTable('CropLand-SecondaryForest');
    CropLand_SecondaryForest_cnt = CropLand_Forest * CropArea;
    //alert("CropLand_SecondaryForest_cnt = " + CropLand_SecondaryForest_cnt);

    CropLand_Settlements = GetValueFromTable('CropLand-Settlements');
    CropLand_Settlements_cnt = CropLand_Settlements * CropArea;
    //alert("CropLand_Settlements_cnt = " + CropLand_Settlements_cnt);


    //-------------------
    var SettlementArea = Settlement.Count;

    Settlements_Forest = GetValueFromTable('Settlements-Forest');
    Settlements_Forest_cnt = Settlements_Forest * SettlementArea;
    //alert("Settlements_Forest_cnt = " + Settlements_Forest_cnt);

    Settlements_SecondaryForest = GetValueFromTable('Settlements-SecondaryForest');
    Settlements_SecondaryForest_cnt = Settlements_SecondaryForest * SettlementArea;
    //alert("Settlements_SecondaryForest_cnt = " + Settlements_SecondaryForest_cnt);

    Settlements_CropLand = GetValueFromTable('Settlements-CropLand');
    Settlements_CropLand_cnt = Settlements_CropLand * SettlementArea;
    //alert("Settlements_CropLand_cnt = " + Settlements_CropLand_cnt);

}
function SimulateAllAroundWaterAndDevelopedArea() {

    alert("SimulateAllAroundWaterAndDevelopedArea");
    GetLandUseChangeCount();
}
function SimulateAmericanInvasion() {

    alert("SimulateAmericanInvasion");
    GetLandUseChangeCount();
}
 
function GetValueFromTable(ID) {
    var value = document.getElementById(ID).innerText;
    return value;
}
function DrawLegend() {

    var Entrees = 4;
    var HeightPerEntree = 20;

    var legendrect = new Rectangle(10, 10, 150, HeightPerEntree * Entrees +20);
    canvas.rect(legendrect.A.x, legendrect.A.y, legendrect.Width, legendrect.Height);

    var coordinate = new Coordinate(legendrect.A.x + 10, legendrect.A.y + 10);

    coordinate = AddLegendEntry( coordinate, "Primary forest", DarkGreen);
    coordinate = AddLegendEntry( coordinate, "Secondary forest", LightGreen);
    coordinate = AddLegendEntry( coordinate, "Cropland", Yellow);
    coordinate = AddLegendEntry( coordinate, "Settlements", Red);
}
function AddLegendEntry(coordinate, label, color) {

    if (color != null) {
        var rect2 = new Rectangle(coordinate.x, coordinate.y, 20, 15);
        DrawRectangle(rect2, canvas, rgbToHex(color[0], color[1], color[2]));
        canvas.fillStyle = 'black';
        canvas.rect(rect2.A.x, rect2.A.y, rect2.Width, rect2.Height);
        canvas.fillText(label, rect2.B.x + 5, rect2.B.y + 12);
    }
    else {
        canvas.fillText(label, coordinate.x + 5, coordinate.y + 12);
    }
    canvas.stroke();
    return new Coordinate(coordinate.x, coordinate.y + 15 + 5);
}

 

 
function ConversionRate(MapCodeNew, rate) {
    this.MapCodeNew = MapCodeNew;
    this.rate = rate;
}

function LandUse(MapCode, Color, Conversion_rate) {
    this.Count = 0;
    this.MapCode = MapCode;
    this.Color = Color;
    this.Conversion_rate = Conversion_rate;
}
 
 


function GetLandUseType(MapCode) {

    for (a = 0; a < LandUseTypes.length; a++) {
        my_landuse = LandUseTypes[a];
        if (my_landuse.MapCode == MapCode) return my_landuse;
    }
    return null;
}

function InitializePixelCoordinates(image) 
{
    Pixel_Coordinates = [[], []];
    for (var r = 0; r < pixels.length; r++) 
    {
        Pixel_Coordinates[r] = [];

        for (var c = 0; c < pixels[0].length; c++) 
        {
                Pixel_Coordinates[r][c] = new Coordinate(r, c);
        }
    }
}

function GetDonatingSite2(image, random_settlement_coord, donating_land_use) {

    r_from = random_settlement_coord[0];
    c_from = random_settlement_coord[1];


    d = 1;
    for (; ; ) {
        // Right bottom
        r_from = random_settlement_coord[0] + d;
        c_from = random_settlement_coord[1] + d;

        donating_site = IsGoodDonatingSite(image, r_from, c_from, donating_land_use);

        if (donating_site != null) return donating_site;

        for (col = 0; col < 2 * d; col++) {
            c_from--;

            donating_site = IsGoodDonatingSite(image, r_from, c_from, donating_land_use);

            if (donating_site != null) return donating_site;
        }
        for (r = 0; r < 2 * d; r++) {
            r_from--;

            donating_site = IsGoodDonatingSite(image, r_from, c_from, donating_land_use);

            if (donating_site != null) return donating_site;
        }
        for (col = 0; col < 2 * d; col++) {
            c_from++;
            donating_site = IsGoodDonatingSite(image, r_from, c_from, donating_land_use);

            if (donating_site != null) return donating_site;
        }
        for (r = 0; r < 2 * d; r++) {
            r_from++;
            donating_site = IsGoodDonatingSite(image, r_from, c_from, donating_land_use);

            if (donating_site != null) return donating_site;
        }

        d++;
    }
}


