<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Portfolio.aspx.cs" Inherits="Resume.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
     
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="margin_bottom_10"></div>
     
    <div  style="width:940px; float:left; padding:10px; background-color : White">
        <h2>Deforestation in Indonesia</h2>
         <div  style="width:445px;  float:right; padding:20px; background-color : White">
            <canvas id="canvas_Malinau" style="float:right; border:1px solid black; background-color: White"   width="415px" height="561px" ></canvas>
            <button  onclick = "ShowMalinauMap(2000)" style="  float:right; height: 30px; background-color: DarkGray" type="button">Restart</button>
        
            <!--<button  onclick = "SimulateSelectedHypothesis()" style="width: 185px; float:left; height: 30px; background-color: DarkGray" type="button">Simulate 10 years</button>-->
            <div id = "Progress"></div>
         </div>
             A considerable part of my graduation thesis at Wageningen University was done at <a href="http://www.cifor.org/">CIFOR</a>  in Bogor, Indonesia. 
             

             The job was to predict how land use would change carbon storage in tropical forests of the island of Borneo, Indonesia. 
             
             <div style="padding:10px; float:left;background-color: White; ">
               <img  src="resources/Malinau.png"    border="1" align = "left" />
            </div>
             
             This is of interest because of climate change: carbon that is lost from the soil and trees mostly enters the atmosphere as CO<sub>2</sub>  gas. 
             I estimated carbon storage by predicting carbon dynamics in different categories of land use such as Primary Forest (lightly disturbed rain forest), Secondary Forest (rain forests that 
             are recuperating from disturbances), cropland and settlements. These were combined with predictions of different land use areas based on aerial photography, extrapolations 
             from historical land use changes and various assumptions of how land use change is spatially correlated, i.e. 
              
              <br> <br> 
            <label id = "sized_label"><input type="checkbox" onclick = "CheckBoxIsNoSpatialCorrelation()" class="radio" value="1" id="NoSpatialCorrelation"  name="Hypotheses" checked/>1. There is no spatial correlation between land use transitions.<br></label>
            <label id = "sized_label"><input type="checkbox" onclick = "CheckBoxIsAllAroundDevelopedArea()" class="radio" value="1" id="AllAroundDevelopedArea"  name="Hypotheses"/>2. Land use transitions occur near settlements.<br></label>
            <label id = "sized_label"><input type="checkbox" onclick = "CheckBoxIsAllAroundWater()" class="radio" value="1" id="AllAroundWater"  name="Hypotheses"/>3. Land use transitions occur near water.<br></label>
             <br>  
              
            The image predicts future land use under selected assumption. 
    </div>
    <div style="width:940px;  padding-right:20px; float:left;background-color: White; ">
            <i>Graphics: location of Malinau Research Forest on Borneo, Indonesia (left)  Malinau region (right)</i>
    </div>

    <div class="margin_bottom_20 h_divider"></div>
     <div class="margin_bottom_10"></div>


    <div  style="width:940px;    float:left; background-color : White">
            <h2>Defoliation in Green Ridge State Forest</h2>
            <style>
                #rotating-item-wrapper {
	                position: relative;
                    height: 420px;
                }
                .rotating-item
                {
                    display: none;
	                position: absolute;
	                top: 0;
	                left: 0;
                }
	
          </style>
           <div  style="width:420px; height: 430px;   float:left; padding:20px; background-color : White">
               <div class="m" id="rotating-item-wrapper" background-color : Yellow">  
        
                    <img  src="resources/Maryland/NewMaryland_background.jpg" height ="400px" class="rotating-item" border="1" />
                    <img  src="resources/Maryland/GypsyMoth14.png" height ="400px" class="rotating-item"  />
                    <img  src="resources/Maryland/GypsyMoth15.png" height ="400px" class="rotating-item"  />
                    <img  src="resources/Maryland/GypsyMoth21.png" height ="400px" class="rotating-item"  />
                    <img  src="resources/Maryland/GypsyMoth22.png" height ="400px" class="rotating-item"  />
                    <img  src="resources/Maryland/GypsyMoth29.png" height ="400px" class="rotating-item"  />
                    <img  src="resources/Maryland/GypsyMoth35.png" height ="400px" class="rotating-item"  />   
                    <img  src="resources/Maryland/GypsyMoth36.png" height ="400px" class="rotating-item"  />  
                    <img  src="resources/Maryland/GypsyMoth42.png" height ="400px" class="rotating-item"  />  
                    <img  src="resources/Maryland/GypsyMoth43.png" height ="400px" class="rotating-item"  />  
                    <img  src="resources/Maryland/GypsyMoth44.png" height ="400px" class="rotating-item"  />  
                    <img  src="resources/Maryland/GypsyMoth51.png" height ="400px" class="rotating-item"  />  
                    <img  src="resources/Maryland/GypsyMoth52.png" height ="400px" class="rotating-item"  />  
                    <img  src="resources/Maryland/GypsyMoth53.png" height ="400px" class="rotating-item"  />  
                    <img  src="resources/Maryland/GypsyMoth54.png" height ="400px" class="rotating-item"  />  
                    <img  src="resources/Maryland/GypsyMoth61.png" height ="400px" class="rotating-item"  />  
                    <img  src="resources/Maryland/GypsyMoth62.png" height ="400px" class="rotating-item"  />  
                    <img  src="resources/Maryland/GypsyMoth63.png" height ="400px" class="rotating-item"  />  
                    <img  src="resources/Maryland/GypsyMoth69.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth77.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth78.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth84.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth85.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth86.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth92.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth93.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth99.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth100.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth107.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth108.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth115.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth122.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth123.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth124.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth125.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth126.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth127.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth134.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth135.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth136.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth142.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth143.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth144.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth150.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth151.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth152.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth160.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth160.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth161.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth162.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth169.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth170.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth176.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth177.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth186.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth187.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth188.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth189.png" height ="400px" class="rotating-item"  /> 
                    <img  src="resources/Maryland/GypsyMoth196.png" height ="400px" class="rotating-item"  /> 
           
        </div> 

           </div>
          
         
          
         <script>             InitializeRotatingItems('.rotating-item', true);</script>
         
         The Green Ridge State Forest is a natural area in the Appalachians that covers parts of Pennsylvania, Maryland and West Virginia. I am using data from Green Ridge to 
         simulate future scenarios of the the area under various scenarios.  Here you see random configurations of insect outbreaks in Green Ridge.
         We are interested in insect outbreaks because the sensitivity of tree species to particular insect species tends to be an important driving factor of future species configuration.-
         
         <div style="padding:10px; float:right;background-color: White; ">
               <img  src="resources/GRSF_background.png" height ="190px"  border="1" align = "left" />
            </div>
        
         Our model (Landis-ii) uses a sensitivity grade that defines how sensitive each tree species is for 
         attacks by each insect species. Using the density of various tree species on each pixel, the model calculates an outbreak sensitivity. The actual occurance of 
         simulated outbreaks is random, and increases with outbreak sensitivity.
          
     </div>
    
    <div style="width:940px;  padding-right:20px; float:left;background-color: White; ">
            <i>Graphics: Simulated defoliation during outbreaks of Gypsy moth in Green Ridge (deep red = high defoliation) (left) Location of Green Ridge State Forest (right)</i>
    </div> 

     <div class="margin_bottom_20 h_divider"></div>
                    <div class="margin_bottom_10"></div>
    <div  style="width:940px;   float:left; padding:10px; background-color : White">
        <h2>Decomposition in Wisconsin and North-Carolina: Bayesian Calibration</h2>
         <div  style="width:525px; height: 250px;   float:left; padding:10px; background-color : White">
           
             <canvas id="DecompCanvas" width="525" height="250" style="border:1px solid">
              
<!--            <canvas style= "border:1px solid black">Your browser does not support the HTML5 canvas tag.</canvas>-->
             
         </div>
         <p> Bayesian calibration is a method to map model probability, given a set of observations. It has been used in disciplines as diverse as medicine, law and internet search engines. 
               I used it to estimate the rate of wood decomposition. You can use an algorithm called a Markov Chain to reiteratively generate semi-random decomposition rates, calculate remaining biomass for 
               a stretch of time and calculate a score that represents how likely the random decomposition rate is. 
               
               <br>
               
               This is what you see at work in this graph: each red line is a decomposition trajectory for some rate of decomposition.-   
               There is a tweak in a Markov Chain that assures that decomposition rates that score well (i.e. the model compares well with measurements) are selected more frequently.
               It takes a while for the Markov Chain to find this 'hotspot' of high model scores, but after ~100 iterations, the average decomposition rate of the iterations in the graphs becomes pretty stable at around 7%.
               So the best estimate of the decomposition rate of the wood measured here is 7% per year.
               The black graph on my home page demonstrates a similar algorithm applied to measured areas of forest defoliation in Northern Minnesota.
         </p>
         
      
      <br>
      <i>Graphics: Bayesian Calibration  </i>
      
      
   </div>

    <div class="margin_bottom_20 h_divider"></div>
                    <div class="margin_bottom_10"></div>

    <div  style="width:940px;    float:left; padding:10px; background-color : White">
        <h2>The PnET-Succession model and its interface</h2>
           
         <div  style="float:left; padding:10px; background-color : White">
             
             <img   src="resources/lui.png" border="1" />
             <!--<p>Click to enlarge</p>-->
             
             
              
         </div>
        
          <p>
          
             When I started using <a href="http://www.landis-ii.org/">LANDIS-II</a>   for my research at Purdue University, I was unsatisfied with the common practice to use predictions 
              of tree growth and biomass by the <a href="http://www.pnet.sr.unh.edu/">PnET</a>  model as input for LANDIS-II because it ignored a lot of information that was generated by the LANDIS-II model
              and should feed back into the PnET model. As an alternative, I incorporated the PnET model into LANDIS-II. The resulting <a href="http://www.landis-ii.org/extensions/pnet-succession">PnET-Succession</a> model 
           proved to be a very fertile approach with users from Harvard University, the Food and Agricultural Organisation of the United Nations and the USDA forest service. 
              
           The name PnET-Succession comes from the PnET model, that predicts foliage cover and biomass and the <a href="http://www.landis-ii.org/extensions/biomass-succession">LANDIS-II biomass succession</a> 
            extension that predicts forest how trees compete and what species, under which circumstances, is most likely to dominate the future of a 
           forest. 
              
           <br><br>
           The LANDIS-II model did not have an interface that was suitable to use with PnET-Succession. To facilitate simulations with PnET-Succession, 
           I developed a simple user interface. The interface (image) is a windows forms application with a file tree (on the left) and a workspace (on the right) that allows you 
              to view various types of output files. 
           
           When you add a scenario, the interface will add all associated input files to the file tree. 
            
          The interface will add additional simulation output files to the file tree when the user starts a simulation.
           
           The user can drag these output files from the file tree into the workspace where the interface creates dockable windows that allow the user to view the model outputs in various formats. 
            
          The interface makes use of a variety of freeware:
            <ul>
                <li><a href="http://www.codeproject.com/Articles/25976/Visual-Studio-IDE-like-Dock-Container">A Visual Studio IDE like Dock Container</a></li>
                  <li >Maps, based on <a href="http://mapwingis.codeplex.com/">MapWinGis</a> </li>
                  <li> Graphs using <a href="http://sourceforge.net/projects/zedgraph/">ZedGraph</a></li>
                  <li> Spreadsheets that use  <a href="http://www.codeproject.com/Articles/691749/Free-NET-Spreadsheet-Control">a .NET Spreadsheet Control</a></li>
                  <li> A text editor  </li>
                 
            </ul>
 </p>
     <i>Graphics: Landis User Interface, left file view, right workspace. </i>
     <br><br>
   </div>
   
    <script>        StartDecompositionFunctions(document.getElementById("DecompCanvas")); </script>
    <script>        StartMalinauSimulations(document.getElementById('canvas_Malinau'));</script>
   
     

     <table id = "LUCtable" bgcolor = white border="1" style = "display:none">
            <tr>
                <th bgcolor ="#c0c0c0">From / To </th>
                <th bgcolor ="#c0c0c0">Forest</th>
                <th bgcolor ="#c0c0c0">Secondary Forest</th>
                <th bgcolor ="#c0c0c0">Cropland</th>
                <th bgcolor ="#c0c0c0">Settlements</th>
            </tr>
            <tr>
                <th bgcolor ="#c0c0c0" >Forest</th>
                <td bgcolor ="#c0c0c0" id="Forest-Forest"><div> 0.998 </div> </th>
                <td  id="Forest-SecondaryForest"><div contenteditable> 0.002 </div> </th>
                <td  id="Forest-CropLand"><div contenteditable> 0</div> </th>
                <td  id= "Forest-Settlements"><div contenteditable> 0.0003 </div> </th>
            </tr>
            <tr>
                <th bgcolor ="#c0c0c0">Secondary Forest</th>
                <td id="SecondaryForest-Forest"><div contenteditable> 0	 </div> </th>
                <td bgcolor ="#c0c0c0" id="SecondaryForest-SecondaryForest"><div> 0.995	 </div> </th>
                <td id = 'SecondaryForest-CropLand'><div contenteditable> 0.005	</div> </th>
                <td id = 'SecondaryForest-Settlements'><div contenteditable> 0 </div> </th>
            </tr>
            <tr>
                <th bgcolor ="#c0c0c0">Cropland</th>
                <td id = 'CropLand-Forest'><div contenteditable>0 </div></th>
                <td id = 'CropLand-SecondaryForest'><div contenteditable>  0	</div></th>
                <td bgcolor ="#c0c0c0" id = 'CropLand-CropLand'><div> 0.99 </div></th>
                <td id = 'CropLand-Settlements'><div contenteditable> 0.01 </div></th>
            </tr>
            <tr>
                <th bgcolor ="#c0c0c0">Settlements</th>
                <td id = 'Settlements-Forest'><div contenteditable>0</div>	 </th>
                <td id = 'Settlements-SecondaryForest'><div contenteditable> 0	</div>	</th>
                <td id = 'Settlements-CropLand'><div contenteditable> 0</div>	 </th>
                <td bgcolor ="#c0c0c0" id = 'Settlements-Settlements'><div>1</div>	  </th>
             </tr>
         </table>
     <script>         watch(document.getElementById('LUCtable'), whenChangeHappens);</script>
                             
</asp:Content>

