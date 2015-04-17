
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
                r = g = b = 255;
            }
            else {
                r = 0.3 * 256 | 0;
                g = 0.2 * 256 | 0;
                b = 0.1 * 256 | 0;
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