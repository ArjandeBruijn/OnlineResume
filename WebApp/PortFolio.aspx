<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="PortFolio.aspx.cs" Inherits="Resume.PortFolio2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
      
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
      

    <div id="column_50_left">
        <canvas id="canvas1" width= "410" height="561" style="border:2px solid #000000;>Random Canvas</canvas>
        <!--style="border:2px solid #000000;-->
    </div>


    <div id="column_50_right">
        <h2>Deforestation in Malinau</h2>
            <p>
                Land use changes in the tropics are an important issue in the tropics. In particular, many pristine tropical forests have been logged and 
                converted to olive oil plantations. Added to that is the continued pressure on these forests exerted by both state logging companies and illegal logging. 
                Finally, population pressure is increasing and habitants need both homes and cropland for subsistence. Land use transitions tend to reinforce themselves. 
                For example, degraded forest is easier to convert to cropland or housing than pristine, impenetrable forest. In the context of my graduation thesis, 
                I used land use derived from arial photographs taken in 2000 and 2009 (see 2009) to evaluate hypotheses about the spatial configuration of land use 
                changes and to predict future land use thereupon. 
                
                The hypothesis about land use change are increasingly speculative: 
            </p>    
            <ul style="padding-left:80px>
              <li><p><input type="checkbox" name="vehicle" value="Bike"> There is no spatial correlation between land use transitions.<br></p></li>
              <li><p><input type="checkbox" name="vehicle" value="Bike"> All human activity is centered around developed area.<br></p></li>
              <li><p><input type="checkbox" name="vehicle" value="Bike"> All human activity is centered around water and developed area.<br></p></li>
              <li><p><input type="checkbox" name="vehicle" value="Bike"> American military invasion.<br></p></li>
            </ul>

                  
            We can combine these assumptions with transition rates between the different land use categories to predict future land use. 

                  
            
        <p>
         
        </p>
    </div>
    
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

    <script type='text/javascript' src='js/TableEventHandlers.js'></script>
    <script>watch(document.getElementById('LUCtable'), whenChangeHappens);</script>
    <script src="js/Malinau2000.js"></script>
    <script src="js/Malinau2009.js"></script>
    <script type='text/javascript' src='js/ImageFunctions.js'></script>
    <script type='text/javascript' src='js/MalinauFunctions.js'></script>
    <script type='text/javascript' src='js/TableEventHandlers.js'></script>
    <script type="text/javascript"> SetImage('canvas1', 0, 415, 0, 561, MalinauMap2000); </script>
    
</asp:Content>