    

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

var LandUseTypes = [NoData, PF, SF, LandUse3, Settlement, LandUse5, OpenLand, LandUse7, Water, LandUse9, LandUse10, LandUse11, LandUse12, LandUse13];


function GetValueFromTable(ID) {
    var value = document.getElementById('Forest-CropLand').innerText;
    return value;
}
function DrawLegend(Image) {

    var Entrees = 6;
    var HeightPerEntree = 25;

    var rect = new Rectangle(0, 20, 150, HeightPerEntree * Entrees);
    Image.canvas.rect(rect.A.x, rect.A.y, rect.Width, rect.Height);

    var rect2 = new Rectangle(rect.A.x + 10, rect.A.y + 10, 20, 15);
    DrawRectangle(rect2, Image.canvas, rgbToHex(DarkGreen[0], DarkGreen[1], DarkGreen[2]));

    Image.canvas.stroke();
    

}
function SetImage(container, xmin, xmax, ymin, ymax, MalinauMap) {


    my_image = new Image(container, xmin, xmax, ymin, ymax);

    my_image.pixels = declare_pixels(xmax - xmin, ymax - ymin);

    // draw random dots
    var counter = -1;

    for (y = ymin; y < ymax; y++) {
        for (x = xmin; x < xmax; x++) {

            counter++;

            var MapCode = MalinauMap[counter];

            land_use = GetLandUseType(MapCode);

            if (land_use == null) {
                continue;
            }

            setPixel(my_image, x, y, land_use);  // 255 opaque


            land_use.Count++;

        }
    }

    // copy the image data back onto the canvas
    my_image.canvas.putImageData(my_image.imageData, 0, 0); // at coords 0,0

    DrawLegend(my_image);
}
function declare_pixels(nrows, ncols) {
    var myArray = [[], []];
    //  myArray[] = new Array(14);

    var n = 0;
    var i = 0;
    var s = 0;
    for (i = 0; i <  ncols; i++) {
        if (!myArray[i])
            myArray[i] = []
        for (s = 0; s < nrows; s++) {
            myArray[i][s] = s;
            n++;
        }
        s = 0;
    }
    return myArray;
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
 
function setPixel(image, x, y, land_use) {

    image.pixels[x][y] = land_use;

    setPixelColor(image, x, y, land_use.Color);
}



function GetLandUseType(MapCode) {

    for (a = 0; a < LandUseTypes.length; a++) {
        my_landuse = LandUseTypes[a];
        if (my_landuse.MapCode == MapCode) return my_landuse;
    }
    return null;
}
function GetPixelsWithLandUse(image, landuse) {

    my_landuse_array = [];
    for (var r = 0; r < image.pixels.length; r++) {

        for (var c = 0; c < image.pixels[r].length; c++) {

            if (image.pixels[r][c] == landuse) my_landuse_array.push([r, c]);
             
        }

    }
    return my_landuse_array;
}
 


function CountCoversions() {

    var SumConversions = 0;
    for (l = 0; l < LandUseTypes.length; l++) {

        var landuse = LandUseTypes[l];

        var conversion_rate = landuse.Conversion_rate;

        if (conversion_rate != null) {

            for (var a = 0; a < conversion_rate.length; a++) {
                var conversion = conversion_rate[a];

                var MapCodeTo = conversion.MapCodeNew;
                var Rate = conversion.rate;

                var landuse_to = GetLandUseType(MapCodeTo);

                SumConversions += Rate * landuse.Count;
            }
        }
    }
    return SumConversions;

}
function Simulate(container, xmin, xmax, ymin, ymax, xmin_zm, xmax_zm, ymin_zm, ymax_zm, scale) {

    $("body").css("cursor", "progress");

    var image = my_image;

    document.getElementById("ProgressTag").innerHTML = "InitializePixelCoordinates";

    InitializePixelCoordinates(image);

    PF.Conversion_rate =   [new ConversionRate(6, GetValueFromTable('Forest-CropLand'))];
    
    PF_array = GetPixelsWithLandUse(image, PF);
    SF_array = GetPixelsWithLandUse(image, SF);
    Settlement_array = GetPixelsWithLandUse(image, Settlement);

    document.getElementById("ProgressTag").innerHTML = "Starting conversions";


    var SumConversions = Math.round(CountCoversions());

    document.getElementById("ProgressTag").innerHTML = "SumConversions = " + SumConversions;

    var ConversionsCount = 0;
    for (l = 0; l < LandUseTypes.length; l++) {

        var landuse = LandUseTypes[l];

        document.getElementById("ProgressTag").innerHTML = landuse.MapCode;

        var conversion_rate = landuse.Conversion_rate;

        if (conversion_rate != null) {

            for (var a = 0; a < conversion_rate.length; a++) {

                var conversion = conversion_rate[a];

                var MapCodeTo = conversion.MapCodeNew;
                var Rate = conversion.rate;

                var landuse_to = GetLandUseType(MapCodeTo);

                var NumberOfConversions = Rate * landuse.Count;

                if (NumberOfConversions > landuse.Count) NumberOfConversions = landuse.Count;

                for (c = 0; c < NumberOfConversions; c++) {

                    ConversionsCount++;

                    document.getElementById("ProgressTag").innerHTML = "Progress "+ ConversionsCount +"\\" + SumConversions;

                    random = Math.floor(Math.random() * Settlement_array.length);

                    var random_settlement_coord = Settlement_array[random];

                    donating_coord = GetDonatingSite(image, random_settlement_coord, landuse);

                    setPixel(image, donating_coord[0], donating_coord[1], landuse_to);

                    alert(donating_coord + " is now " + landuse_to.MapCode);
                    
                }

            }
        }

    }
    document.getElementById("ProgressTag").innerHTML = "";
    image.canvas.putImageData(image.imageData, 0, 0);
    $("body").css("cursor", "default");
}

function IsGoodDonatingSite(image, r, c, DonatingLandUseType)
{
    if (r < 0 || c < 0 || r >= image.pixels.length || c >= image.pixels[0].length)
    {
        //Console.WriteLine("site [" + r + "," + c + "] is off the map");
        return null;
    }

    if (image.pixels[r][c] == DonatingLandUseType)
    {
        //Console.WriteLine("Found donating site");
        return [r,c];
    }
    return null;
}
function GetDonatingSite(image, random_settlement_coord, donating_land_use) {

    r_from = random_settlement_coord[0];
    c_from = random_settlement_coord[1];


    d = 1;

    var CheckedCoordinates = [];

    for (; ; ) {
        for (var r = r_from - d; r <= r_from + d; r++) {

            for (var c = c_from - d; c <= c_from + d; c++) {

                distance = CalculateDistance(r_from, c_from, r, c);

                if (distance <= d) {
                    if (CheckedCoordinates.indexOf(Pixel_Coordinates[r][c]) < 0) {

                        
                        donating_site = IsGoodDonatingSite(image, r, c, donating_land_use);

                        if (donating_site != null) return donating_site;

                        CheckedCoordinates.push(Pixel_Coordinates[r][c]);


                    }
                }
            }
        }
        d++;
    }

}


function InitializePixelCoordinates(image) 
{
    Pixel_Coordinates = [[], []];
    for (var r = 0; r < image.pixels.length; r++) 
    {
        Pixel_Coordinates[r] = [];

        for (var c = 0; c < image.pixels[0].length; c++) 
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


