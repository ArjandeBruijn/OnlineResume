<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Portfolio.aspx.cs" Inherits="Resume.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
   
    <meta name="viewport" content="width=device-width, initial-scale=1">
     
    
    

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

     
    
     <div id = "right_col">
        <div id = "right_col_ins">
            <canvas id="canvas1" style="display: inline;" width="410" height="561" style="border:2px solid black;"></canvas>
            <button onclick = "Simulate1()" type="button">Simulate 9 years</button>
            <div id = "Progress"></div>
        </div>
     </div>
  
        <h2>Deforestation in Indonesia</h2>
        
       <div id="pageone" data-role="main" class="justify"> 
            The island of Borneo, Indonesia, is rapidly changing. Large schale logging operations have degraded much of the 
             pristine rainforests sinds the 1960s. More recently, forests are making place for olive oil plantations and population pressure is ever-increasing.
             I used land use derived from arial photographs of 
            <a href="#myPopup" data-rel="popup" data-position-to="window">eastern Borneo</a>
            <div class = "inline" data-role="popup" id="myPopup">
               <p>Malinau Research Forest on Borneo, Indonesia</p> 
               <a href="#pageone" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="images\Malinau.png" style="width:446px;height:563px;" alt="Malinau Research Forest">
            </div>
            taken in (<a onclick="ShowMalinauMap(2000)" href="#">2000</a>) 
             and (<a onclick="ShowMalinauMap(2009)" href="#">2009</a>) to evaluate hypotheses 
             about the spatial configuration of land use changes and to predict future land use thereupon. The hypothesis about land use change are increasingly speculative:  

              <!--<a class = "hidden"  href="#">a section of East Kalimantan, Borneo<img src="images\Malinau.png" border="5" ></a> -->
            
        </div> 

       
         <div>
          <h3>Hypotheses</h3>
        
          <label><input type="checkbox" class="radio" value="1" id="NoSpatialCorrelation"  name="Hypotheses" checked/>1. There is no spatial correlation between land use transitions.<br></label>
          <label><input type="checkbox" class="radio" value="1" id="AllAroundDevelopedArea"  name="Hypotheses"/>2. Land use transitions occur near settlements.<br></label>
          <label><input type="checkbox" class="radio" value="1" id="AllAroundWater"  name="Hypotheses"/>3.Land use transitions occur near water.<br></label>
          
           <!-- <label> <input type="checkbox" class="radio" value="1" id="AmericanInvasion"  name="Hypotheses"/>4. Tourist invasion.<br></label>-->
        </div>


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
                <td  id="Forest-SecondaryForest"><div contenteditable> 0.002 </div> </th>
                <td  id="Forest-CropLand"><div contenteditable> 0</div> </th>
                <td  id= "Forest-Settlements"><div contenteditable> 0.0003 </div> </th>
            
            </tr>
            <tr>
                <th bgcolor ="#ccff66">Secondary Forest</th>
                <td id="SecondaryForest-Forest"><div contenteditable> 0	 </div> </th>
                <td bgcolor ="#c0c0c0" id="SecondaryForest-SecondaryForest"><div> 0.995	 </div> </th>
                <td id = 'SecondaryForest-CropLand'><div contenteditable> 0.005	</div> </th>
                <td id = 'SecondaryForest-Settlements'><div contenteditable> 0 </div> </th>
           
            </tr>
            <tr>
                <th bgcolor ="#ccff66">Cropland</th>
                <td id = 'CropLand-Forest'><div contenteditable>0 </div></th>
                <td id = 'CropLand-SecondaryForest'><div contenteditable>  0	</div></th>
                <td bgcolor ="#c0c0c0" id = 'CropLand-CropLand'><div> 0.99 </div></th>
                <td id = 'CropLand-Settlements'><div contenteditable> 0.01 </div></th>
            
            </tr>
            <tr>
                <th bgcolor ="#ccff66">Settlements</th>
                <td id = 'Settlements-Forest'><div contenteditable>0</div>	 </th>
                <td id = 'Settlements-SecondaryForest'><div contenteditable> 0	</div>	</th>
                <td id = 'Settlements-CropLand'><div contenteditable> 0</div>	 </th>
                <td bgcolor ="#c0c0c0" id = 'Settlements-Settlements'><div>1</div>	  </th>
            
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
    
       
     <p class = "justify">
           
           <!--
           I designed and wrote technical and conceptual documentation for my simulation software, taught at presentations and workshops, I work hard and I am authorized to work 
           for any employer in the United States.    I am proficient in English, German and Dutch-->
              
         
         <!-- <canvas id="canvas1" width= "410" height="561" style="border:2px solid #000000;>Random Canvas</canvas>-->
         <h2>Landis user interface</h2>
        <div id =  "left_col" id="thumbwrap">
               <a class="thumb" href="#"> <img src="images/lui.jpg" alt=""><span><img src="images/lui_big.jpg" alt=""></span></a>
        </div>
        
         <p>
            Landis is a spatial simulation model that predicts patterns of succession (ageing) processes and disturbances such as wind damage, logging, insect pests and browsing by deer or other 
            wildlife. I have been using the LANDIS model for the last three years and I was missing an interface to fascilitate my analyses. So I ended up developing my own. It is a windows forms application
            written in C#  developed in .Net 3.5. The interface consists of a file tree (on the left) where you add a Landis scenario file. A Landis scenario file is a simple ascii in which 
            other input files and some settings for the model are specified. When you add a scenario, the program will read that file and check for any pathnames in that file (i.e. other input files)  
            and adds those to the file tree. Additionally, the user can start a simulation and the user interface will periodically check whether there are new output files which it will add to the file tree
            as well. This way, all the relevant files (input and output) are shown in the file tree. The user can have a closer look at a file by dragging it from the file tree into 
            the work space (on the right). The work space is simply a surface where you can display one or many dockable screens             
            (using <a href="http://www.codeproject.com/Articles/25976/Visual-Studio-IDE-like-Dock-Container">a Visual Studio IDE like Dock Container</a> ). 
            Input and output files that are in the tree view can be displayed as maps, based on <a href="http://mapwingis.codeplex.com/">a freeware geographics program</a>, 
            <a class = "hidden"  href="#">graphs<img src="images\Malinau.png" border="5" ></a> ,

            that use the free software called <a href="http://sourceforge.net/projects/zedgraph/">ZedGraph,</a>  

            or <a class = "hidden"  href="#">spreadsheets<img src="images\Malinau.png" border="5" ></a>, that use  <a href="http://www.codeproject.com/Articles/691749/Free-NET-Spreadsheet-Control">a Free .NET Spreadsheet Control</a>
           
            or in a text editor by dragging the file from the filetree and dropping it in the work space. 
            The landis user interface is currently used for landis instruction workshops by the university of portland as well as ~10 individual landis users.

        </p> 
         <br></br>
        <h2>Landis Simulations</h2> types of model, i.e. PnET and LANDIS succession. PnET is a point-dimensional tree physiology process that predicts
        growth of a homogeneous tree stand as it depends on light and water. Landis succession is a spatial model that predicts forest developments depending on growth and forest disturbances.
        LANDIS tradiationally has a very basic growth computation method. In order to better predict growth and competition for light and water, I incorporated the PnET model into the LANDIS model environment.
        This allows us to simulate light and water availability on a landschape. Looking at the Green Ridge State Forest (see home page), you can see how water and light availability depends on 
        the interaction between disturbances and growth via canopy thickness. This is because foliage is the driver of both water and light consumption.
          </p>
        
        <h2>Bayesian calibration</h2>



        <div id = "left_col">
            <div id = "right_col_ins">
                 <canvas id="DecompCanvas" width="525" height="450">
                     Your browser does not support the HTML5 canvas tag.</canvas>
                <button type="button">Restart</button>
                <div id = "Div3"></div>
            </div>
            <br></br><br></br><br></br><br></br>
        </div>

        <p>Bayesian statistics is often used in contraction with Markov Chain calibrations (see home page). 
        The idea behind the Bayesian proposition is that you turn around the driving mechanism and the phenomenon, i.e. where 
        we typically think it terms of "It is raining, therefore the streets are wet", the Bayesian proposition tries to 
        derive the rain that fell, based on the wetness of the streets. In terms of simulations, we are analysing how the probability of 
        the simulation model depends on the spread of the observations. The forest tent caterpillar model on the home page is fairly complex. 

        A simpler model to explain this approach by, is for example the rate of decomposition of dead woody biomass. 

        If we assume a very simple equation where the amount of wood that decomposes per time unit is a constant proportion of the wood that is there 
        (i.e. dWood/dt = c*Wood), the amount of wood at any time is described as Wood = Initial_wood * exp(-a * time)).

        

        </p>
        
        
        

        
     </div>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="js/Checkboxes.js"></script>
    <script src="js/Malinau2009.js"></script>
    <script src="js/Malinau2000.js"></script>
    <script src='js/ImageFunctions.js'></script>
    <script src='js/MalinauFunctions.js'></script>
    <script>        ShowMalinauMap(2000); </script>
    <script src="js/TableEventHandlers.js"></script>
    <script src="js/jquery.mobile.custom.min.js"></script>

     <script src="js/DecompositionMeasurements.js"></script>
     <script src="js/DecompositionFunctions.js"></script>
                             
</asp:Content>
