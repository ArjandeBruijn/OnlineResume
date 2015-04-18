
var DarkGreen = [0, 100, 0];   // PF
var LightGreen = [0, 255, 0]; // SF
var Yellow = [255, 255, 0];  // position 2
var Color1 = [0, 255, 0];   // Crop??
var Red = [255, 0, 0];
var Cyan = [0, 255, 255];

function SetPixelColor(imgData, x, y, color) {
 
    alert('SetPixelColor x ' + x + ' y ' + y + ' color = ' + color);

    setPixel(imgData, x, y, r, g, b, 255);
}


function Transition(imgData, x, y, from, to) {
   
    // Primary to secondary forest
    if (from == 0 && to == 1) {
        
        //alert('Transition x ' + x + ' y ' + y + " from : " + from + " to " + to);

        SetPixelColor(imgData, x, y, LightGreen);
        alert('Transition x ' + x + ' y ' + y + " from : " + from + " to " + to);
    }

}
 
function setPixel(imageData, x, y, r, g, b, a) {
    index = get_index(imageData, x, y);

    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
}
function get_index(imageData, x, y) {

    index = (x + y * imageData.width) * 4;
    return index;
}
function get_xy(imageData, index) {

    x = index / 4;
    y = 0;
    while (x > imageData.width) {
        x -= imageData.width;
        y++;
    }

    return [x, y];
}
function setPixelByIndex(imageData, index, r, g, b, a) {
     
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
}

function Simulate(container, xmin, xmax, ymin, ymax, xmin_zm, xmax_zm, ymin_zm, ymax_zm, scale) {

    var canvas = document.getElementById(container);
    var ctx = canvas.getContext('2d');

    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

    for (var i = 0; i < data.length; i += 4) {

        coordinates = get_xy(imageData, i);
        
        r_old = data[i];
        g_old = data[i + 1]
        b_old = data[i + 2];

        if (r_old == DarkGreen[0] && g_old == DarkGreen[1] && b_old == DarkGreen[2]) {
            // Primary forest

            /* 	Forest	Secondary Forest	Cropland	Settlements	Other land
            Forest	0.998 	0	0.004	0	0
            Secondary Forest	0	0.994	0.006	0	0
            Cropland	0.002	0	0.993	0.003	0
            Settlements	0	0	0.003	0.997	0
            Other land	0	0	0	0	1 */

            // Get Conversion rate to various other lucs
            var conversion_rate = [0.998, 0, 0.004, 0, 0];

            var value = Math.random();

            cum_conversion_rate = 0;

            for (a = 0; a < conversion_rate.length; a++) {

                cum_conversion_rate += conversion_rate[a]

                if (value < conversion_rate[0]) {
                    // PF to PF
                    r_new = r_old;
                    g_new = g_old;
                    b_new = b_old;
                }
                else if (value < conversion_rate[0] + conversion_rate[1]) {
                    // PF to SF
                    r_new = LightGreen[0];     // red
                    g_new = LightGreen[1]; // green
                    b_new = LightGreen[2]; // blue
                }
                else if (value < conversion_rate[0] + conversion_rate[1] + conversion_rate[2]) {
                    // PF to crop
                    r_new = Yellow[0];     // red
                    g_new = Yellow[1]; // green
                    b_new = Yellow[2]; // blue
                }
                else if (value < conversion_rate[0] + conversion_rate[1] + conversion_rate[2] + conversion_rate[3]) {
                    // PF to settlements
                    r_new = Red[0];     // red
                    g_new = Red[1]; // green
                    b_new = Red[2]; // blue
                }
                else if (value < conversion_rate[0] + conversion_rate[1] + conversion_rate[2] + conversion_rate[3] + conversion_rate[4]) {
                    // PF to OtherLand
                    // r_new = 255 - r_old;     // red
                    //g_new = 255 - g_old; // green
                    //b_new = 255 - b_old; // blue

                }

            }
            

            

            setPixelByIndex(imageData, i, r_new, g_new, b_new, 255);
        }

        
        
    }
    ctx.putImageData(imageData, 0, 0);
    
    
    alert("Through one timestep");
     
}

function SetImage(container, xmin, xmax, ymin, ymax, xmin_zm, xmax_zm, ymin_zm, ymax_zm,  scale) 
{
    element = document.getElementById(container);
    c = element.getContext("2d");

    // read the width and height of the canvas
    ncols  = scale *( ymax - ymin);
    nrows = scale *(xmax - xmin);

    // create a new pixel array
    imageData = c.createImageData(nrows, ncols);

    // draw random dots
    var counter = 0;


    for (y = ymin; y < ymax; y++) {
        for (x = xmin; x < xmax; x++) {

            if (x < xmax_zm && x > xmin_zm && y < ymax_zm && y > ymin_zm)
            {
                var MapCode = MalinauMap[counter];

                // Swampy Bush
                //Bushes/Shrubland
                //Primary Swamp Forest
                // Swampy Bush
                if (MapCode == -9999) {
                    r = g = b = 255; // white
                }
                else if (MapCode == 1) {
                    //r = g = b = 255; // white
                    r = DarkGreen[0];                  //dark green 0, 255, 0
                    g = DarkGreen[1];                //Primary Dry Forest
                    b = DarkGreen[2];
                }
                else if (MapCode == 2) {
                    //r = g = b = 255; // white
                    r = LightGreen[0];                  //Secondary Dry Forest/Logged Forest
                    g = LightGreen[1];                // light green
                    b = LightGreen[2];
                }
                else if (MapCode == 3) {

                    r = Color1[0];             
                    g = Color1[1]; 
                    b = Color1[2];  
                }
                else if (MapCode == 4) {

                    r = Red[0]; //  0;// Settlement/Developed Land
                    g = Red[1];// 255;
                    b = Red[2];//  255;
                    //r = g = b = 255; // white
                }
                else if (MapCode == 5) {
                    r = Cyan[0];                
                    g = Cyan[1];
                    b = Cyan[2];
                }
                else if (MapCode == 6) {
                    r = Yellow[0];
                    g = Yellow[1];  // Open Land
                    b = Yellow[2] ;
                    
                }

                else if (MapCode == 7) {
                    r = 0;
                    g = 128; 
                    b = 128;
                    //r = g = b = 255; // white
                    
                }
                else if (MapCode == 8) {
                    r = 0;                  //Water Body
                    g = 0;
                    b = 128;

                }
                else if (MapCode == 9) {
                    r = 128;                //Secondary Swamp Forest/Logged Area
                    g = 0;
                    b = 0;
                }
                else if (MapCode == 10) {
                    r = 0;                  //Secondary Mangrove Forest/ Logged
                    g = 0; 
                    b = 255;
                }
                else if (MapCode == 11) {
                    r = 128;            //  Upland Farming Mixed with Bush
                    g = 0;
                    b = 128;
                }
                else if (MapCode == 12) {
                    r = 128;
                    g = 128;            // Airport / Harbor
                    b = 0;
                }
                else {
                    r = 0;
                    g = 0;
                    b = 0; //black
                }
                var i;
                for (i = 0; i < scale; i++) {

                    for (_i = 0; _i < scale; _i++) {

                        _x = scale * (x - xmin_zm) + i ;
                        _y = scale * (y - ymin_zm) + _i;

                        setPixel(imageData, _x, _y, r, g, b, 255);  // 255 opaque
                    }
                }
                 
            }
            counter++;
        }
    }

    // copy the image data back onto the canvas
    c.putImageData(imageData, 0, 0); // at coords 0,0


}
/*
function ImplementLandUseTransitions() { 

    var LandUseSum = Landscape.LandUseMap.GetFrequency();
          
    var TransitionsPerLandUse = GetTransitionsPerLandUse();
              
    for (int from = 0; from < Landscape.LandUseNames.Length; from++)
    {
          for (int to = 0; to < Landscape.LandUseNames.Length; to++)
          { 
               int Transitions = TransitionsPerLandUse[from,to];

              if(Transitions > LandUseSum[from])
               {
                   Transitions = LandUseSum[from];
//                 throw new System.Exception("Cannot convert " + Transitions + " from " + Landscape.LandUseNames[from] + " to " + Landscape.LandUseNames[to]);
               }

                        int t = 0;
                        
                        while (t < Transitions)
                        {
                            int r_to = rnd.Next(Landscape.LandUseMap.Nrows);
                            int c_to = rnd.Next(Landscape.LandUseMap.Ncols);

                            // to: will be connected (settlement), not target ls!!
                            if (Landscape.LandUseNames[Landscape.LandUseMap[r_to, c_to]].Contains("Settlement"))
                            {
                                int r_from;
                                int c_from;
                                //Console.WriteLine("Found " + LandUseDefininitions.LandUseTypes[to] + " in [" + r_to + "," + c_to + "]...looking for " + LandUseDefininitions.LandUseTypes[from]);
                                for (; ; ) 
                                {
                                    int d = 1;
                                    bool FoundTo = false;
                                    for (;;)
                                    {
                                        // Right bottom
                                        r_from = r_to + d;
                                        c_from = c_to + d;
                                        if (IsGoodDonatingSite(r_from,c_from,from))
                                        {
                                           FoundTo = true;
                                           break;
                                        }
                                        if (FoundTo == true) break;
                                        for (int c = 0; c < 2 * d; c++)
                                        {
                                            c_from --;
                                            if (IsGoodDonatingSite(r_from, c_from, from))
                                            {
                                                FoundTo = true;
                                                break;
                                            }
                                            if (FoundTo == true) break;
                                        }
                                        if (FoundTo == true) break;
                                        for (int r = 0; r < 2 * d; r++)
                                        {
                                            r_from --;
                                            if (IsGoodDonatingSite(r_from, c_from, from))
                                            {
                                                FoundTo = true;
                                                break;
                                            }
                                            if (FoundTo == true) break;
                                        }
                                        if (FoundTo == true) break;
                                        for (int c = 0; c < 2 * d; c++)
                                        {
                                            c_from ++;
                                            if (IsGoodDonatingSite(r_from, c_from, from))
                                            {
                                                FoundTo = true;
                                                break;
                                            }
                                            if (FoundTo == true) break;
                                        }
                                        if (FoundTo == true) break;
                                        for (int r = 0; r < 2 * d; r++)
                                        {
                                            r_from ++;
                                            if (IsGoodDonatingSite(r_from, c_from, from))
                                            {
                                                FoundTo = true;
                                                break;
                                            }
                                            if (FoundTo == true) break;
                                        }
                                        if (FoundTo == true) break;
                                        else d++;
                                        
                                    }
                                    if (FoundTo)
                                    {
                                        //Console.WriteLine("Found donating landuse in [" + r_from + "," + c_from + "]");
                                        break;
                                    }
                                    
                                }
                                //Console.WriteLine("Changing   [" + r_from + "," + c_from + "] from " + LandUseDefininitions.LandUseTypes[Landscape.LandUse[r_from, c_from]] + " to " + LandUseDefininitions.LandUseTypes[to]);
                                Landscape.LandUseMap[r_from, c_from] = to;
                                CO2FixSimulations.Co2year[r_from, c_from] = 0;
                                t++;
                            }
                            
                        
                        }
                    }
                }



}*/