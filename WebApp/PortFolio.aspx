<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Resume.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <p></p>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <style>
        #left_col {
            width:55%;
            float:left;
            padding-right : 0px;	 	 
            padding-left: 10px;
        }
        #right_col {
            width:42%;
            float:right;
            padding-right : 10px;	 	 
            padding-left: 0px;
   	        height: 600px;
        }
    </style>
     
     <!-- left column-->
    <div id="left_col">
        <h2>Land use changes on Borneo</h2>
        <p>
                We all heard about alarming rates of deforestation on Borneo, Indonesia. Large schale logging operations sinds the 1960 have degraded much of the 
                pristine rainforests. More recently, large areas are being converted to olive oil plantations and population pressure is ever-increasing.
                I used land use derived from arial photographs of the northeastern region of Borneo 
                taken in (<a onclick="ShowMalinauMap(2000)" href="#"> 2000</a>) and (<a onclick="ShowMalinauMap(2009)" href="#"> 2009</a>) to evaluate hypotheses 
                about the spatial configuration of land use changes and to predict future land use thereupon. The hypothesis about land use change are increasingly speculative:  
        </p>    
            <ul style="padding-left:80px>
              <li><p><input type="checkbox"></p></li>
              <li><p><input type="checkbox" name="vehicle" value="Bike">1. There is no spatial correlation between land use transitions.<br></p></li>
              <li><p><input type="checkbox" name="vehicle" value="Bike">2. All land use transitions are concentrated around developed area.<br></p></li>
              <li><p><input type="checkbox" name="vehicle" value="Bike">3. All human activity is centered around water and developed area.<br></p></li>
              <li><p><input type="checkbox" name="vehicle" value="Bike">4. American invasion.<br></p></li>
            </ul>
        
            <p>

            Combined with a land use transition table that prescribed surface fractions of land use categories that are converted in the period 2000-2009:
            <br></br>
            </p>
            
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
        <p>
            We can use these hypotheses to predict locations where land use change would take place. 
            For example: when hypotheses 2 is applied and 1% of Primary Forests degrades between 2000 and 2009, 
            the model picks a random developed location, searches the nearest primary forest (i.e. dark-green pixel)
            and converts this to secondary forest (i.e. paints a dark-green pixel light-green).
             The model will repeat this the target area conversion is reached (i.e. untill 1% of darg-green pixels is light green).
       </p>


     <p class = "justify">
           
           <!--
           I designed and wrote technical and conceptual documentation for my simulation software, taught at presentations and workshops, I work hard and I am authorized to work 
           for any employer in the United States.    I am proficient in English, German and Dutch-->
              
         
         <!-- <canvas id="canvas1" width= "410" height="561" style="border:2px solid #000000;>Random Canvas</canvas>-->
        <h2>Landis user interface</h2>
         <p>
            succession (ageing) processes and disturbances such as wind damage, logging, insect pests and browsing by deer or other 
            wildlife. I have been using the LANDIS model for the last three years and I was missing an interface that would speed 
            up my analysis. So I ended up developing my own. 
        </p> 
         <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
    <div id="right_col">
          
        <canvas id="canvas1" display = "inline" width="410" height="561" style="border:2px solid black;"></canvas>
        <button onclick = "Simulate()" type="button">Simulate 9 years</button>
        
    </div>
    <script src="js/Malinau2009.js"></script>
    <script src="js/Malinau2000.js"></script>
    <script src='js/ImageFunctions.js'></script>
    <script src='js/MalinauFunctions.js'></script>
    <script>        ShowMalinauMap(2000); </script>
    
     
                             
</asp:Content>
