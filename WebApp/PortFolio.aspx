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
            <p>
                These simulations are based on arial photographs taken in 2000 and 2009 of the north-eastern region of borneo, Indonesia. 
                A land use transition matrix is derived from the areas that were covered by 12 landuse types. The land use transittion 
                rates are assumed to continue in the future. It predicts urbanisation and forest 
                degradation based on a few simple rules, namely:  
                <li>People prefer to live adjacent to water</li>
                <li>People prefer to cultivate land close to their homes and close to the water</li>
            </p>
        <p>
         
        </p>
    </div>



        
    <button type="button" onclick="myFunction()" >Simulate one year!</button>

    

     


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