<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="PortFolio.aspx.cs" Inherits="Resume.PortFolio2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
      
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     
    

    <style>
        #section {
            width:350px;
            float:left;
            padding:10px;	 	 
        }
        #nav {
            line-height:30px;
            height:561px;
            width:415px;
            float:left;
            padding:5px;	      
        }
    
    </style>

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

    
    <style>
table, td, th {
    border: 1px solid black;
    bgcolor: white;
}


th {
    text-align: left;
}
</style>
     

     
     <table bgcolor = white border="1">
        <tr>
            <th>From / To </th>
            <th>Forest</th>
            <th>Secondary Forest</th>
            <th>Cropland</th>
            <th>Settlements</th>
            
        </tr>
        <tr>
            <th>Forest</th>
            <th><div contenteditable "background-color:yellow"> 0.998 </div> </th>
            <th><div contenteditable> 0 </div> </th>
            <th id="Forest-CropLand"><div contenteditable> 0.004</div> </th>
            <th><div contenteditable> 0 </div> </th>
            
        </tr>
        <tr>
            <th>Secondary Forest</th>
            <th><div contenteditable> 0	 </div> </th>
            <th id="SF-SF"><div contenteditable> 0.994	 </div> </th>
            <th><div contenteditable> 0.006	</div> </th>
            <th><div contenteditable> 0 </div> </th>
           
        </tr>
         <tr>
            <th>Cropland</th>
            <th><div contenteditable>0.002 </div></th>
            <th><div contenteditable>  0	</div></th>
            <th><div contenteditable> 0.993 </div></th>
            <th><div contenteditable> 0.003 </div></th>
            
        </tr>
         <tr>
            <th>Settlements</th>
            <th><div contenteditable>0</div>	 </th>
            <th><div contenteditable> 0	</div>	</th>
            <th><div contenteditable> 0.003</div>	 </th>
            <th><div contenteditable>0.997</div>	  </th>
            
        </tr>
         <tr>
            <th>Other land</th>
            <th><div contenteditable>0 </div></th>
            <th><div contenteditable> 0 </div>	</th>
            <th><div contenteditable> 0 </div></th>
            <th><div contenteditable> 0 </div></th>
            
        </tr>
     </table>
    
    
    
	<script>
	    function myFunction() {

	        Simulate("canvas1", 0, 415, 0, 561, 0, 415, 0, 561, 1);
	    }
    </script>
	<script src="js/Malinau.js"></script>
    <script type='text/javascript' src='js/MalinauFunctions.js'></script>	
    <script type="text/javascript"> SetImage('canvas1', 0, 415, 0, 561, 0,415,0,561, 1); </script>
    
    <script type="text/javascript">
        
    </script>

</asp:Content>