<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="PortFolio.aspx.cs" Inherits="Resume.PortFolio2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
      
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
      

    <div id="nav">
        <canvas id="canvas1" width= "415", height="561">Random Canvas</canvas>
    </div>


    <div id="section">
        <h2>Malinau simulations</h2>
            <p font-size: 14px;>
                Malinau is a region in the north-east of Borneo, Indonesia where I was stationed for a graduation thesis. 
                The image is based on an arial photographs taken in 2000. The simulations predict land use transitions from 2000 onwards. 
                The selection of grid cells that are transferred is based on a simple assumption that all human activity is centered around 
                developed area. 
                 
                 
                 
            </p>
        <p>
         
        </p>
    </div>



        
    <button type="button" onclick="myFunction()" >Simulate one year!</button>

    
   
     
     <table id = "LUCtable" bgcolor = white border="1">
        <tr>
            <th>From / To </th>
            <th>Forest</th>
            <th>Secondary Forest</th>
            <th>Cropland</th>
            <th>Settlements</th>
            
        </tr>
        <tr>
            <th>Forest</th>
            <th id="Forest-Forest"><div> 0.998 </div> </th>
            <th id="Forest-SecondaryForest"><div contenteditable> 0 </div> </th>
            <th id="Forest-CropLand"><div contenteditable> 0.004</div> </th>
            <th =id= "Forest-Settlements"><div contenteditable> 0 </div> </th>
            
        </tr>
        <tr>
            <th>Secondary Forest</th>
            <th id="SecondaryForest-Forest"><div contenteditable> 0	 </div> </th>
            <th id="SecondaryForest-SecondaryForest"><div> 0.996	 </div> </th>
            <th id = 'SecondaryForest-CropLand'><div contenteditable> 0.006	</div> </th>
            <th id = 'SecondaryForest-Settlements'><div contenteditable> 0 </div> </th>
           
        </tr>
         <tr>
            <th>Cropland</th>
            <th id = 'CropLand-Forest'><div contenteditable>0.002 </div></th>
            <th id = 'CropLand-SecondaryForest'><div contenteditable>  0	</div></th>
            <th id = 'CropLand-CropLand'><div> 0.993 </div></th>
            <th id = 'CropLand-Settlements'><div contenteditable> 0.003 </div></th>
            
        </tr>
         <tr>
            <th>Settlements</th>
            <th id = 'Settlements-Forest'><div contenteditable>0</div>	 </th>
            <th id = 'Settlements-SecondaryForest'><div contenteditable> 0	</div>	</th>
            <th id = 'Settlements-CropLand'><div contenteditable> 0.003</div>	 </th>
            <th id = 'Settlements-Settlements'><div>0.997</div>	  </th>
            
        </tr>
          
     </table>
    <script>
        

        watch(document.getElementById('LUCtable'), whenChangeHappens);
    </script>


    
	<script>
	    function myFunction() {

	        Simulate("canvas1", 0, 415, 0, 561, 0, 415, 0, 561, 1);
	    }
    </script>
	<script src="js/Malinau.js"></script>
    <script type='text/javascript' src='js/TableEventHandlers.js'></script>	
    <script type='text/javascript' src='js/MalinauFunctions.js'></script>	
    <script type="text/javascript"> SetImage('canvas1', 0, 415, 0, 561, 0,415,0,561, 1); </script>
    
    <script type="text/javascript">
        
    </script>

</asp:Content>