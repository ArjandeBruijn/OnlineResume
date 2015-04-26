<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="PortFolio.aspx.cs" Inherits="Resume.PortFolio2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
      
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
      

    <div id="nav">
        <canvas id="canvas1" width= "415" height="561" style="border:2px solid #000000;>Random Canvas</canvas>
       
    </div>


    <div id="section">
        <h2>Deforestation in Malinau</h2>
            <p>
                Malinau is a region in the north-east of Borneo, Indonesia where I was stationed for a graduation thesis. 
                The image is based on an arial photographs taken in 2000. The simulations predict land use transitions from 2000 onwards. 
                The selection of grid cells that are transferred is based on a simple assumption that all human activity is centered around 
                developed area. You can use the table below to predict land use into the future. 
                  
            </p>
        <p>
         
        </p>
    </div>
    
    <style>
        
        div.right{
	        display:inline;
        }
    </style>


    <button type="button" onclick="Simulate()" >Simulate one time unit!</button><div id = "ProgressTag" class="right"></div><br>
    <button id="ShowButton" type="button" onclick="ShowMalinauMap()" >Show 2009!</button>
     
     <table id = "LUCtable" bgcolor = white border="1">
        <tr>
            <th bgcolor ="#c0c0c0">From / To </th>
            <th bgcolor ="#ff9900">Forest</th>
            <th bgcolor ="#ff9900">Secondary Forest</th>
            <th bgcolor ="#ff9900">Cropland</th>
            <th bgcolor ="#ff9900">Settlements</th>
            
        </tr>
        <tr>
            <th bgcolor ="#ccff66" >Forest</th>
            <td bgcolor ="#c0c0c0" id="Forest-Forest"><div> 0.998 </div> </th>
            <td  id="Forest-SecondaryForest"><div contenteditable> 0 </div> </th>
            <td  id="Forest-CropLand"><div contenteditable> 0.004</div> </th>
            <td  id= "Forest-Settlements"><div contenteditable> 0 </div> </th>
            
        </tr>
        <tr>
            <th bgcolor ="#ccff66">Secondary Forest</th>
            <td id="SecondaryForest-Forest"><div contenteditable> 0	 </div> </th>
            <td bgcolor ="#c0c0c0" id="SecondaryForest-SecondaryForest"><div> 0.996	 </div> </th>
            <td id = 'SecondaryForest-CropLand'><div contenteditable> 0.006	</div> </th>
            <td id = 'SecondaryForest-Settlements'><div contenteditable> 0 </div> </th>
           
        </tr>
         <tr>
            <th bgcolor ="#ccff66">Cropland</th>
            <td id = 'CropLand-Forest'><div contenteditable>0.002 </div></th>
            <td id = 'CropLand-SecondaryForest'><div contenteditable>  0	</div></th>
            <td bgcolor ="#c0c0c0" id = 'CropLand-CropLand'><div> 0.993 </div></th>
            <td id = 'CropLand-Settlements'><div contenteditable> 0.003 </div></th>
            
        </tr>
         <tr>
            <th bgcolor ="#ccff66">Settlements</th>
            <td id = 'Settlements-Forest'><div contenteditable>0</div>	 </th>
            <td id = 'Settlements-SecondaryForest'><div contenteditable> 0	</div>	</th>
            <td id = 'Settlements-CropLand'><div contenteditable> 0.003</div>	 </th>
            <td bgcolor ="#c0c0c0" id = 'Settlements-Settlements'><div>0.997</div>	  </th>
            
        </tr>
          
     </table>
    <script>
        function watch(targetElement, triggerFunction) {
            /// store the original html to compare with later
            var html = targetElement.innerHTML;
            /// start our constant checking function
            setInterval(function () {
                /// compare the previous html with the current
                if (html != targetElement.innerHTML) {
                    /// trigger our function when a change occurs
                    triggerFunction();
                    /// update html so that this doesn't keep triggering
                    html = targetElement.innerHTML;
                }
            }, 500);
        }

        function whenChangeHappens() {

            table = document.getElementById("LUCtable");
            // Set the from-from-props

            for (var i = 1, row; row = table.rows[i]; i++) {
                //iterate through rows
                //rows would be accessed using the "row" variable assigned in the for loop

                var sum = 0;

                for (var j = 1, col; col = row.cells[j]; j++) {
                    //iterate through columns
                    //columns would be accessed using the "col" variable assigned in the for loop
                    sum += parseFloat(table.rows[i].cells[j].innerText);
                }
                table.rows[i].cells[i].innerText = Math.round((table.rows[i].cells[i].innerText - (sum - 1)) * 100) / 100;


            }
        }

        watch(document.getElementById('LUCtable'), whenChangeHappens);
    </script>

    <dd>
        <div class="blue" style="width:35%;"> 
    </dd>
    
	<script>
	    
	    function Simulate() {
	        Simulate("canvas1", 0, 415, 0, 561, 0, 415, 0, 561, 1);
	    }
	    function ShowMalinauMap() {
	        if (document.getElementById("ShowButton").innerHTML == "Show 2009!") {
	            document.getElementById("ShowButton").innerHTML = "Show 2000!";
	            SetImage('canvas1', 0, 415, 0, 561,  MalinauMap2009);
	        }
	        else {
	            document.getElementById("ShowButton").innerHTML = "Show 2009!";
	            SetImage('canvas1', 0, 415, 0, 561,  MalinauMap2000);
	        }
//	       

	        
	    }
	    
    </script>
	<script src="js/Malinau2000.js"></script>
    <script src="js/Malinau2009.js"></script>
    <script type='text/javascript' src='js/TableEventHandlers.js'></script>
    <script type='text/javascript' src='js/ImageFunctions.js'></script>
    <script type='text/javascript' src='js/MalinauFunctions.js'></script>
    <script type='text/javascript' src='js/TableEventHandlers.js'></script>
    
    <script type="text/javascript"> SetImage('canvas1', 0, 415, 0, 561, MalinauMap2000); </script>
    
    <script type="text/javascript">
        
    </script>

</asp:Content>