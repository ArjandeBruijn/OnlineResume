
function setPixel(imageData, x, y, r, g, b, a) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
}

function Simulate() {

    element = document.getElementById("canvas1");
    c = element.getContext("2d");

    

    var width = c.canvas.width;
    var height = c.canvas.height;

    var imgData = c.getImageData(0, 0, width, height);
     
    for (var time = 0; time < 100; time++) {
         

        for (var col = 0; col < width; col++) {

            for (var row = 0; row < height; row++) {

                var pixelData = element.getContext('2d').getImageData(col, row, 1, 1).data;

                alert('R: ' + pixelData[0] + '<br>G: ' + pixelData[1] + '<br>B: ' + pixelData[2] + '<br>A: ' + pixelData[3]);
            }
        
        }
         

    }

        alert(width);
    alert(height);
}
var DarkGreen = [0, 100, 0];
var LightGreen = [0, 255, 0];
var Yellow = [255, 255, 0];
var Color1 = [0, 255, 0];
var Red = [255, 0, 0];
var Cyan = [0,255,255];

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

 