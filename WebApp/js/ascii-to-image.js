
function setPixel(imageData, x, y, r, g, b, a) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
}
function SetPixelLines(lines) 
{
    var arrayLength = lines.length;

    for (var y = 6; y < arrayLength; y++) {

        var res = lines[y].split(" ");

        var al = res.length;
        for (var x = 0; x < al; x++) {

            if (res[x] == -9999) {
                r = g = b = 255; // white
            }
            else if (res[x] == 1) {
                r = 0;
                g = 0;
                b = 255; 
            }
            else if (res[x] == 2) {
                r = 0;  
                g = 255;
                b = 0; 
            }
            else if (res[x] == 3) {
                r = 255;  
                g = 0;
                b = 0;
            }
            else if (res[x] == 4) {
                r = 0;  
                g = 255;
                b = 255;  
            }
            else if (res[x] == 5) {
                r = 255;  
                g = 0;
                b = 255; 
            }
            else if (res[x] == 6) {
                r = 255;  
                g = 255;
                b = 0;
            }
             
            else if (res[x] == 7) {
                r = 0;
                g = 0;
                b = 128;
            }
            else if (res[x] == 8) {
                r = 0;
                g = 128;
                b = 0;
            }
            else if (res[x] == 9) {
                r = 128;
                g = 0;
                b = 0;
            }
            else if (res[x] == 10) {
                r = 0;
                g = 128;
                b = 128;
            }

 

            else if (res[x] == 11) {
                r = 128;
                g = 0;
                b = 128;
            }
            else if (res[x] == 12) {
                r = 128;
                g = 128;
                b = 0;
            }



            else {
                r = 0;
                g = 0;
                b = 0; //black
            }

            setPixel(imageData, x, y-6, r, g, b, 255); // 255 opaque

        }
        
    }
    c.putImageData(imageData, 0, 0); // at coords 0,0
}
function SetPixels(nrows, ncols) 
{
    for (x = 0; x < nrows ; x++) {
        for (y = 0; y < ncols; y++) {
            r = Math.random() * 256 | 0;
            g = Math.random() * 256 | 0;
            b = Math.random() * 256 | 0;
            setPixel(imageData, x, y, r, g, b, 255); // 255 opaque
        }
    }

    // copy the image data back onto the canvas
    c.putImageData(imageData, 0, 0); // at coords 0,0
}

function FileHelper()
{ }
{
    FileHelper.readStringFromFileAtPath = function (pathOfFileToReadFrom) {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
    }
}



function SetImage(filename, canvas) 
{
    var text = FileHelper.readStringFromFileAtPath(filename);

    element = document.getElementById(canvas);
    c = element.getContext("2d");

    // read the width and height of the canvas
    width = element.width;
    height = element.height;

    // create a new pixel array
    imageData = c.createImageData(width, height);

    // draw random dots
    SetPixels(width, height);


}