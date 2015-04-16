<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="PortFolio2.aspx.cs" Inherits="Resume.PortFolio2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type='text/javascript' src='js/ascii-to-image.js'></script>		
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     
    <canvas id="canvas1" width="100", height="100">
       Random Canvas
    </canvas>

<script type="text/javascript">
    

    element = document.getElementById("canvas1");
    c = element.getContext("2d");

    // read the width and height of the canvas
    width = element.width;
    height = element.height;

    // create a new pixel array
    imageData = c.createImageData(width, height);

    // draw random dots
    for (i = 0; i < 10000; i++) {
        x = Math.random() * width | 0; // |0 to truncate to Int32
        y = Math.random() * height | 0;
        r = Math.random() * 256 | 0;
        g = Math.random() * 256 | 0;
        b = Math.random() * 256 | 0;
        setPixel(imageData, x, y, r, g, b, 255); // 255 opaque
    }

    // copy the image data back onto the canvas
    c.putImageData(imageData, 0, 0); // at coords 0,0

</script>
</asp:Content>
