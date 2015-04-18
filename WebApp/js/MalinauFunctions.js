
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

    var imgData = c.getImageData(10, 10, 50, 50);

    var width = c.canvas.width;
    var height = c.canvas.height;

     
    for (var time = 0; time < 100; time++) {

        for (var col = 0; col < width; col++) {

            for (var row = 0; row < height; row++) {

                
                 
            
            }
        
        }
         

    }

        alert(width);
    alert(height);
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

                if (MapCode == -9999) {
                    r = g = b = 255; // white
                }
                else if (MapCode == 1) {
                    r = 0;
                    g = 0;
                    b = 255;
                }
                else if (MapCode == 2) {
                    r = 0;
                    g = 255;
                    b = 0;
                }
                else if (MapCode == 3) {
                    r = 255;
                    g = 0;
                    b = 0;
                }
                else if (MapCode == 4) {
                    r = 0;
                    g = 255;
                    b = 255;
                }
                else if (MapCode == 5) {
                    r = 255;
                    g = 0;
                    b = 255;
                }
                else if (MapCode == 6) {
                    r = 255;
                    g = 255;
                    b = 0;
                }

                else if (MapCode == 7) {
                    r = 0;
                    g = 0;
                    b = 128;
                }
                else if (MapCode == 8) {
                    r = 0;
                    g = 128;
                    b = 0;
                }
                else if (MapCode == 9) {
                    r = 128;
                    g = 0;
                    b = 0;
                }
                else if (MapCode == 10) {
                    r = 0;
                    g = 128;
                    b = 128;
                }
                else if (MapCode == 11) {
                    r = 128;
                    g = 0;
                    b = 128;
                }
                else if (MapCode == 12) {
                    r = 128;
                    g = 128;
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

 