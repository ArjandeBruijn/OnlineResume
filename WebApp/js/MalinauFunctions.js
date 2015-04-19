var White = [255, 255, 255];
var DarkGreen = [0, 100, 0];   // PF
var LightGreen = [0, 255, 0]; // SF
var Color3 = [0, 255, 0];   // Crop??
var Red = [255, 0, 0];
var Yellow = [255, 255, 0];  // position 2
var Cyan = [0, 255, 255];
var Color7 = [0, 128, 128];   // Crop??
var Blue = [0, 0, 128];   //Water Body
var Color9 = [128, 0, 0];   
var Color10 = [0, 0, 255];
var Color11 = [128, 0, 128];
var Color12 = [128, 128, 0];
var Color13 = [0, 0, 0]; //black        


//From_To	            Forest	SF	    Cropland    Settlements
//Forest	            0.998	0	    0.004	    0
//SF	                0	    0.994	0.006	    0
//Cropland	            0.002	0	    0.993	    0.003
//Settlements	        0	    0	    0.003	    0.997

var NoData = new LandUse(-9999, White,null);
var PF = new LandUse(1, DarkGreen, [new ConversionRate(6, 0.004)]);
var SF = new LandUse(2, LightGreen, [new ConversionRate(6, 0.006)]);
var LandUse3 = new LandUse(3, Color3, null);
var Settlement = new LandUse(4, Red, [new ConversionRate(6, 0.003)]);
var LandUse5 = new LandUse(5, Cyan, null);
var OpenLand = new LandUse(6, Yellow, [new ConversionRate(1, 0.002), new ConversionRate(4, 0.003)]);
var LandUse7 = new LandUse(7, Color7, null);
var Water = new LandUse(8, Blue, null);
var LandUse9 = new LandUse(9, Color9, null);
var LandUse10 = new LandUse(10, Color10, null);
var LandUse11 = new LandUse(11, Color11, null);
var LandUse12 = new LandUse(12, Color12, null);
var LandUse13 = new LandUse(13, Color13, null);

var LandUseTypes = [NoData, PF, SF, LandUse3, Settlement, LandUse5, OpenLand, LandUse7, Water, LandUse9, LandUse10, LandUse11, LandUse12, LandUse13];

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

    index = get_index(image, x, y);

    image.pixels[x][y] = land_use;

    image.imageData.data[index + 0] = land_use.Color[0];
    image.imageData.data[index + 1] = land_use.Color[1];
    image.imageData.data[index + 2] = land_use.Color[2];
    image.imageData.data[index + 3] = 255;

}

function get_index(image, x, y) {

    var index = (x + y * image.imageData.width) * 4;
    return index;
}
function get_xy( index) {

    var x = index / 4;
    var y = 0;
    while (x > imageData.width) {
        x -= imageData.width;
        y++;
    }

    return [x, y];
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
function Image(container, xmin, xmax, ymin, ymax, scale) {

    this.pixels = declare_pixels(xmax - xmin, ymax - ymin);

    element = document.getElementById(container);
    this.canvas = element.getContext("2d");

    // read the width and height of the canvas
    ncols = scale * (ymax - ymin);
    nrows = scale * (xmax - xmin);

    // create a new pixel array
    this.imageData = element.getContext("2d").createImageData(nrows, ncols);
}

images = [];

function SetImage(container, xmin, xmax, ymin, ymax, xmin_zm, xmax_zm, ymin_zm, ymax_zm, scale) {

    my_image = new Image(container, xmin, xmax, ymin, ymax, scale);
    images.push(my_image);

    // draw random dots
    var counter = -1;

    for (y = ymin; y < ymax; y++) {
        for (x = xmin; x < xmax; x++) {

            counter++;

            if (x < xmax_zm && x >= xmin_zm && y < ymax_zm && y >= ymin_zm) {
                var MapCode = MalinauMap[counter];

                land_use = GetLandUseType(MapCode);

                if (land_use == null) {
                    continue;
                }

                var i;
                for (i = 0; i < scale; i++) {

                    for (_i = 0; _i < scale; _i++) {

                        _x = scale * (x - xmin_zm) + i;
                        _y = scale * (y - ymin_zm) + _i;

                        setPixel(my_image, _x, _y, land_use);  // 255 opaque


                        land_use.Count++;
                    }
                }

            }

        }
    }

    // copy the image data back onto the canvas
    my_image.canvas.putImageData(my_image.imageData, 0, 0); // at coords 0,0

}



function Simulate2(container, xmin, xmax, ymin, ymax, xmin_zm, xmax_zm, ymin_zm, ymax_zm, scale) {

    var image = images[0];


    PF_array = GetPixelsWithLandUse(image, PF);
    SF_array = GetPixelsWithLandUse(image, SF);
    Settlement_array = GetPixelsWithLandUse(image, Settlement);

    
    for (l = 0; l < LandUseTypes.length; l++) {

        var landuse = LandUseTypes[l];

        var conversion_rate = landuse.Conversion_rate;

        if (conversion_rate != null) {

            for (var a = 0; a < conversion_rate.length; a++) {

                var conversion = conversion_rate[a];

                var MapCodeTo = conversion.MapCodeNew;
                var Rate = conversion.rate;

                var landuse_to = GetLandUseType(MapCodeTo);

                var NumberOfConversions = Rate * landuse.Count;

                if (NumberOfConversions > landuse.Count) NumberOfConversions = landuse.Count;

                    //alert(landuse.MapCode + " " + MapCodeTo + " " + Rate + " " + NumberOfConversions);

                for (c = 0; c < NumberOfConversions; c++) {

                    random = Math.floor(Math.random() * Settlement_array.length);

                    var random_settlement_coord = Settlement_array[random];

                    donating_coord = GetDonatingSite(image, random_settlement_coord, landuse);

                    setPixel(image, donating_coord[0], donating_coord[1], landuse_to);

                    alert(donating_coord + " is now " + landuse_to.MapCode);
                   
                }

            }
        }

        }

    image.canvas.putImageData(image.imageData, 0, 0);
    alert("Simulate2");
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
function GetDonatingSite(image,random_settlement_coord, donating_land_use) { 

    r_from = random_settlement_coord[0];
    c_from = random_settlement_coord[1];
    
    
    d = 1;
    for (;;)
    {
        // Right bottom
        r_from = random_settlement_coord[0] + d;
        c_from = random_settlement_coord[1] + d;

        donating_site = IsGoodDonatingSite(image, r_from, c_from, donating_land_use);

        if(donating_site!=null) return donating_site;

        for (col = 0; col < 2 * d; col++)
        {
            c_from --;

            donating_site = IsGoodDonatingSite(image, r_from, c_from, donating_land_use);

            if(donating_site!=null) return donating_site;
        }
        for (r = 0; r < 2 * d; r++)
        {
            r_from --;

            donating_site = IsGoodDonatingSite(image, r_from, c_from, donating_land_use);

            if(donating_site!=null) return donating_site;
        }
        for (col = 0; col < 2 * d; col++)
        {
            c_from ++;
            donating_site = IsGoodDonatingSite(image, r_from, c_from, donating_land_use);

            if(donating_site!=null) return donating_site;
        }
        for ( r = 0; r < 2 * d; r++)
        {
            r_from ++;
            donating_site = IsGoodDonatingSite(image, r_from, c_from, donating_land_use);

            if(donating_site!=null) return donating_site;
        }
              
        d++;
    }
}

