<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="PortFolio2.aspx.cs" Inherits="Resume.PortFolio2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
     
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     
    <canvas id="canvas1" width="415", height="561">Random Canvas</canvas>
    
     <canvas id="canvas2" width="100", height="100">
        Random Canvas
        </canvas>
   
    <p> These simulations are based on arial photographs taken in 2000 and 2009 of the north-eastern region of borneo, Indonesia. 
    
    <p>A land use transition matrix is derived from the areas that were covered by 12 landuse types. The land use transittion 
    rates are assumed to continue in the future.
     
    
    
    It predicts urbanisation and forest 
    degradation based on a few simple rules, namely:  </p>

    <li>People prefer to live adjacent to water</li>
    <li>People prefer to cultivate land close to their homes and close to the water</li>

	
    <!-- 	Forest	Secondary Forest	Cropland	Settlements	Other land
            Forest	0.998 	0	0.004	0	0
            Secondary Forest	0	0.994	0.006	0	0
            Cropland	0.002	0	0.993	0.003	0
            Settlements	0	0	0.003	0.997	0
            Other land	0	0	0	0	1-->



     <table>
        <tr>
            <th>From / To </th>
            <th>Forest</th>
            <th>Secondary Forest</th>
            <th>Cropland</th>
            <th>Settlements</th>
            <th>Other land</th>
        </tr>
        <tr>
            <th>Forest</th>
            <th> 0.998 </th>
            <th> 0 </th>
            <th> 0.004 </th>
            <th> 0 </th>
            <th> 0 </th>
        </tr>
        <tr>
            <th>Secondary Forest</th>
            <th> 0	 </th>
            <th> 0.994	 </th>
            <th> 0.006	</th>
            <th> 0 </th>
            <th> 0 </th>
        </tr>
         <tr>
            <th>Cropland</th>
            <th>0.002</th>
            <th>  0	</th>
            <th> 0.993</th>
            <th> 0.003 </th>
            <th> 0   </th>
        </tr>
         <tr>
            <th>Settlements</th>
            <th>0	 </th>
            <th> 0		</th>
            <th> 0.003	 </th>
            <th>0.997	  </th>
            <th>  0  </th>
        </tr>
         <tr>
            <th>Other land</th>
            <th>0</th>
            <th> 0 	</th>
            <th> 0</th>
            <th> 0 </th>
            <th> 1   </th>
        </tr>
     </table>
    
    

	
	<script src="js/Malinau.js"></script>
    <script type='text/javascript' src='js/MalinauFunctions.js'></script>	
    <script type="text/javascript"> SetImage('canvas1',0); </script>
    
    <script type="text/javascript">
        function setPixel(imageData, x, y, r, g, b, a) {
            index = (x + y * imageData.width) * 4;
            imageData.data[index + 0] = r;
            imageData.data[index + 1] = g;
            imageData.data[index + 2] = b;
            imageData.data[index + 3] = a;
        }

        element = document.getElementById("canvas2");
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