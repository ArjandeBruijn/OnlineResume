﻿<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Resume.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
    <script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
    <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    
     <div id = "right_col">
        <div id = "right_col_ins">
            <canvas id="canvas1" style="display: inline;" width="410" height="561" style="border:2px solid black;"></canvas>
            <button onclick = "Simulate()" type="button">Simulate 9 years</button>
        </div>
     </div>
  
     
        <p class = "justify">
             We all heard about alarming rates of deforestation on Borneo, 
             Indonesia. Large schale logging operations have degraded much of the 
             pristine rainforests sinds the 1960s. More recently, forests are making place for olive oil plantations and population pressure is ever-increasing.
             I used land use derived from arial photographs of <a  href="#">a section of East Kalimantan, Borneo<img src="images\Malinau.png" /></a>  taken in (<a onclick="ShowMalinauMap(2000)" href="#">2000</a>) 
             and (<a onclick="ShowMalinauMap(2009)" href="#">2009</a>) to evaluate hypotheses 
             about the spatial configuration of land use changes and to predict future land use thereupon. The hypothesis about land use change are increasingly speculative:  
         </p>    
         <ul style="padding-left:80px>
            <li><p><input type="checkbox"></p></li>
            <li><p><input type="checkbox" name="vehicle" value="Bike">1. There is no spatial correlation between land use transitions.<br></p></li>
            <li><p><input type="checkbox" name="vehicle" value="Bike">2. All land use transitions are concentrated around developed area.<br></p></li>
            <li><p><input type="checkbox" name="vehicle" value="Bike">3. All human activity is centered around water and developed area.<br></p></li>
            <li><p><input type="checkbox" name="vehicle" value="Bike">4. American invasion.<br></p></li>
         </ul>
         Combined with a land use transition table that prescribed surface fractions of land use categories that are converted in the period 2000-2009:
         <br></br>
        
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
         <br></br>
         <p class = "justify">
             We can use these hypotheses to predict locations where land use change would take place. 
             For example: when hypotheses 2 is applied and 1% of Primary Forests degrades between 2000 and 2009, 
             the model picks a random developed location, searches the nearest primary forest (i.e. dark-green pixel)
             and converts this to secondary forest (i.e. paints a dark-green pixel light-green).
             The model will repeat this the target area conversion is reached (i.e. untill 1% of darg-green pixels is light green).
             You can try a simulation by editing the values in the land use transition table, checking a hypothesis and clicking the button.
         </p>
    </div>
       
     <p class = "justify">
           
           <!--
           I designed and wrote technical and conceptual documentation for my simulation software, taught at presentations and workshops, I work hard and I am authorized to work 
           for any employer in the United States.    I am proficient in English, German and Dutch-->
              
         
         <!-- <canvas id="canvas1" width= "410" height="561" style="border:2px solid #000000;>Random Canvas</canvas>-->
         <h2>Landis user interface</h2>
        <div id =  "left_col" id="thumbwrap">
                <a class="thumb" href="#"><img src="images/lui.jpg" alt=""><span><img src="images/lui_big.jpg" alt=""></span></a>
        </div>
        
         <p>
            Landis is a spatial simulation model that predicts patterns of succession (ageing) processes and disturbances such as wind damage, logging, insect pests and browsing by deer or other 
            wildlife. I have been using the LANDIS model for the last three years and I was missing an interface to fascilitate my analyses. So I ended up developing my own. It is a windows forms application
            written in C#  developed in .Net 3.5. The interface consists of a file tree (on the left) where you add a Landis scenario file. A Landis scenario file is a simple ascii in which 
            other input files and some settings for the model are specified. When you add a scenario, the program will read that file and check for any pathnames in that file (i.e. other input files)  
            and adds those to the file tree. Additionally, the user can start a simulation and the user interface will periodically check whether there are new output files which it will add to the file tree
            as well. This way, all the relevant files (input and output) are shown in the file tree. The user can have a closer look at a file by dragging it from the file tree into 
            the work space (on the right). The work space is simply a surface where you can display one or many dockable screens. Input and output files that are in the tree view can be
            displayed as maps, graphs, spreadsheets or in a text editor by dragging the file from the filetree and dropping it in the work space. 
            The landis user interface is currently used for landis instruction workshops by the university of portland as well as ~10 individual landis users.

        </p> 
         <br></br>
        <h2>Landis Simulations</h2>
        <p>We used landis to predict... SOME MORE SIMULATIONS</p>
        
        <h2>Bayesian calibration</h2>
        <p>Decomposition measurements</p>

        
        

<br></br><br></br><br></br><br></br>
     
    <script src="js/Malinau2009.js"></script>
    <script src="js/Malinau2000.js"></script>
    <script src='js/ImageFunctions.js'></script>
    <script src='js/MalinauFunctions.js'></script>
    <script>        ShowMalinauMap(2000); </script>
    
     
                             
</asp:Content>
