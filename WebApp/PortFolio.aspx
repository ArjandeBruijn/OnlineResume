<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Portfolio.aspx.cs" Inherits="Resume.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
     
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="margin_bottom_10"></div>
     
     
    <div  style="width:940px; height: 800px;   float:left; padding:10px; background-color : White">
        <h2>Deforestation in Indonesia</h2>
         <div  style="width:420px; height: 570;   float:right; padding:20px; background-color : White">
            <canvas id="canvas_Malinau"   width="400px" height="550px" style="border:1px solid black;"></canvas>
            <button  onclick = "Simulate1()" style="width: 400px; height: 40px; background-color: DarkGray" type="button">Simulate 9 years</button>
            <div id = "Progress"></div>
         </div>

         

             For my master's project at Wageningen University, I used land use derived from aerial photographs of eastern Borneo taken in (<a onclick="ShowMalinauMap(2000)" href="#">2000</a>) 
            and (<a onclick="ShowMalinauMap(2009)" href="#">2009</a>) to evaluate hypotheses 
            
            about patterns of land use changes and to predict future land use, for example:  
            <br> <br>  
            <label id = "sized_label"><input type="checkbox" onclick = "CheckBoxIsNoSpatialCorrelation()" class="radio" value="1" id="NoSpatialCorrelation"  name="Hypotheses" checked/>1. There is no spatial correlation between land use transitions.<br></label>
            <label id = "sized_label"><input type="checkbox" onclick = "CheckBoxIsAllAroundDevelopedArea()" class="radio" value="1" id="AllAroundDevelopedArea"  name="Hypotheses"/>2. Land use transitions occur near settlements.<br></label>
            <label id = "sized_label"><input type="checkbox" onclick = "CheckBoxIsAllAroundWater()" class="radio" value="1" id="AllAroundWater"  name="Hypotheses"/>3.Land use transitions occur near water.<br></label>
             <br>  
            <p>Given the following land use transition rates for the period of 2000-2009:
            <br></br>
             <table id = "LUCtable" bgcolor = white border="1">
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
             <br>  

             <div style="width:250; padding-right:20px; float:left;background-color: White; ">
                <img  src="images/Malinau.png" height ="250px"  border="1" align = "left" />
            </div>

        <div style="width:450px; padding:20px;   background-color: White; ">
            You can predict what the future landscape will look like.  I programmed a simple simulation algorithm that predicts future land use in the code of this website. 
         You can try it by selecting one of the three hypotheses and/or changing the transition rates in the table and clicking the "Simulate 9 years" button. 
         Note that the simulation be slow when you combine large transition values with the second or third hypothesis. 
          
         <br><br>
         

        </div>
         <i>Graphics: location of Malinau Research Forest on Borneo, Indonesia (left)
               Simulation of land use change in Malinau (right)
             </i>
      
     <!-- <canvas id="canvas1"   width="200"; height="200"; style="border:2px solid black;background-color : Cyan"></canvas>-->
      
   </div>
      <div class="margin_bottom_20 h_divider"></div>
                    <div class="margin_bottom_10"></div>
    <div  style="width:940px; height: 500px;   float:left; padding:10px; background-color : White">
        <h2>Landis user interface</h2>
           
         <div  style="float:left; padding:10px; background-color : White">
             
             <img   src="images/lui.png" border="1" />
             <!--<p>Click to enlarge</p>-->
             
             
              
         </div>
        
          <p>
          The <a href="http://www.landis-ii.org/">LANDIS-II</a> Forest Landscape Simulation Model lacked a user interface to facilitate analyses. I developed one. 
         
            It is a Windows Forms application written in C#  developed in .Net 3.5. 
            
            The interface consists of a file tree (on the left) where you add a LANDIS scenario file, a simple ascii in which other input files and some settings for the model are specified. 
            
            When you add a scenario, the program will read that file and check for any pathnames in that file (i.e. other input files)  
            and adds those to the file tree. Additionally, the user can start a simulation and the user interface will periodically check whether there are new output files which it will add to the file tree
            as well. The work space is simply a surface where you can display one or many dockable screens             
            (using <a href="http://www.codeproject.com/Articles/25976/Visual-Studio-IDE-like-Dock-Container">a Visual Studio IDE like Dock Container</a> ). 
            
            
            
            The user views files in one of these window types by dragging the file name from the file view and dropping it in the work space.
             
            The new LANDIS user interface is currently used in LANDIS instruction workshops by the university of portland and by as some individual users as well.
        
        Input and output files in the file view can be displayed in the following formats:
    <ul>
                  <li >Maps, based on <a href="http://mapwingis.codeplex.com/">a freeware geographics program</a> </li>
                  <li> Graphs using the free software called <a href="http://sourceforge.net/projects/zedgraph/">ZedGraph</a></li>
                  <li> Spreadsheets that use  <a href="http://www.codeproject.com/Articles/691749/Free-NET-Spreadsheet-Control">a Free .NET Spreadsheet Control</a></li>
                  <li> A text editor  </li>
                 
            </ul>
 </p>
     <i>Graphics: Landis User Interface, left file view, right workspace. </i>
   </div>
    <div class="margin_bottom_20 h_divider"></div>
                    <div class="margin_bottom_10"></div>
    <div  style="width:940px; height: 600px;   float:left; padding:10px; background-color : White">
        <h2>Bayesian Calibration</h2>
         <div  style="width:525px; height: 250px;   float:left; padding:10px; background-color : White">
           
             <canvas id="DecompCanvas" width="525" height="250" style="border:1px solid">
              
<!--            <canvas style= "border:1px solid black">Your browser does not support the HTML5 canvas tag.</canvas>-->
             
         </div>
         <p> Bayesian calibration is a method to map model probability, given a set of observations. It has been used in disciplines as diverse as medicine, law and internet search engines. 
               I used it to estimate the rate of wood decomposition. If you call the decomposition rate 'b' in percent per year, you can use an algorithm called a Markov Chain to reiteratively select semi-random values for 'b', calculate remaining biomass for 
               a stretch of time and calculate a score that represents how likely the decomposition rate 'b' is, given the set of measurements. 
               
               <br>
               
               This is what you see at work in this graph: each red line is a decomposition trajectory for a single value of 'b'.   
               There is a tweak in a Markov Chain that assures that decomposition rates that score well (i.e. the model compares well with actual measurements) are selected more frequently.
               It takes a while for the Markov Chain to find this 'hotspot' of high model scores, but after ~100 iterations, the average 'b' of the iterations in the graphs becomes pretty stable at around 7%.So my best estimate of the decomposition rate of the tree logs is 7% per year.
               The black graph on my home page demonstrates a similar algorithm applied to measured areas of forest defoliation in Northern Minnesota.
         </p>
         
      
      <br>
      <i>Graphics: Bayesian Calibration  </i>
      
      
   </div>
    <script>        StartDecompositionFunctions(); </script>
   <script>       ShowMalinauMap(2000); </script>
    <script>        watch(document.getElementById('LUCtable'), whenChangeHappens);</script>
     
    
                             
</asp:Content>
