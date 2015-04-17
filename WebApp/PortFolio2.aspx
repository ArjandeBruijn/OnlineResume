<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="PortFolio2.aspx.cs" Inherits="Resume.PortFolio2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
     
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     
      
    <canvas id="canvas1" width= "415", height="561">Random Canvas</canvas>
     

    <canvas id="canvas2" width= "415", height= "561"> Random Canvas</canvas>
        
       

   
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
    <script type="text/javascript"> SetImage('canvas1', 0, 415, 0, 561, 0,415,0,561, 1); </script>
    <script type="text/javascript">

        var scale = 2;


        SetImage('canvas2', 0, 415, 0, 561, 300, 415, 0, 325, scale);
            
    </script>
    
    <script type="text/javascript">
        
    </script>

</asp:Content>