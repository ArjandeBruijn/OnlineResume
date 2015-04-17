
function setPixel(imageData, x, y, r, g, b, a) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
}
 

function SetPixels(nrows, ncols) {

    
    
}





function SetImage(filename, canvas) 
{
    
    element = document.getElementById(canvas);
    c = element.getContext("2d");

    // read the width and height of the canvas
    nrows = element.width;
    ncols = element.height;

    // create a new pixel array
    imageData = c.createImageData(nrows, ncols);

    // draw random dots
    var counter = 0;


    for (y = 0; y < ncols; y++) {
        for (x = 0; x < nrows; x++) {

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

            setPixel(imageData, x, y, r, g, b, 255); // 255 opaque

            counter++;
        }
    }

    // copy the image data back onto the canvas
    c.putImageData(imageData, 0, 0); // at coords 0,0

}