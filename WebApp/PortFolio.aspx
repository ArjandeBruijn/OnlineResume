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
         <p>   For my master's project at Wageningen University, I used land use derived from arial photographs of eastern Borneo taken in (<a onclick="ShowMalinauMap(2000)" href="#">2000</a>) 
            and (<a onclick="ShowMalinauMap(2009)" href="#">2009</a>) to evaluate hypotheses 
            about the spatial configuration of land use changes and to predict future land use thereupon, for example:  
            <br> <br>  
            <label id = "sized_label"><input type="checkbox" onclick = "CheckBoxIsNoSpatialCorrelation()" class="radio" value="1" id="NoSpatialCorrelation"  name="Hypotheses" checked/>1. There is no spatial correlation between land use transitions.<br></label>
            <label id = "sized_label"><input type="checkbox" onclick = "CheckBoxIsAllAroundDevelopedArea()" class="radio" value="1" id="AllAroundDevelopedArea"  name="Hypotheses"/>2. Land use transitions occur near settlements.<br></label>
            <label id = "sized_label"><input type="checkbox" onclick = "CheckBoxIsAllAroundWater()" class="radio" value="1" id="AllAroundWater"  name="Hypotheses"/>3.Land use transitions occur near water.<br></label>
             <br>  
            <p>When you further assume some ratios of land use transitions, per the table below for the period of 2000-2009:
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
             you can predict what the future landscape will look like.  I programmed a simple simulation algorithm that predicts future land use in the code of this website. 
         You can try it if you editing inputs (table or hypothesis), and click the button.
        </p>

      
     <!-- <canvas id="canvas1"   width="200"; height="200"; style="border:2px solid black;background-color : Cyan"></canvas>-->

      
   </div>
      <div class="margin_bottom_20 h_divider"></div>
                    <div class="margin_bottom_10"></div>
    <div  style="width:940px; height: 500px;   float:left; padding:10px; background-color : White">
        <h2>Landis user interface</h2>
           
         <div  style="width:460px; height: 290px;   float:left; padding:10px; background-color : White">
             <img  height="290" width="460"  src="images/lui_big.jpg" height ="250px"/>
             <!--<p>Click to enlarge</p>-->
         </div>
         <p>     I have been using the <a href="http://www.landis-ii.org/">LANDIS</a> model for more than three years but I was missing an interface to fascilitate my analyses. So I ended up developing my own. It is a windows forms application
            written in C#  developed in .Net 3.5. The interface consists of a file tree (on the left) where you add a Landis scenario file. A Landis scenario file is a simple ascii in which 
            other input files and some settings for the model are specified. When you add a scenario, the program will read that file and check for any pathnames in that file (i.e. other input files)  
            and adds those to the file tree. Additionally, the user can start a simulation and the user interface will periodically check whether there are new output files which it will add to the file tree
            as well. This way, all the relevant files (input and output) are shown in the file tree. The user can have a closer look at a file by dragging it from the file tree into 
            the work space (on the right). The work space is simply a surface where you can display one or many dockable screens             
            (using <a href="http://www.codeproject.com/Articles/25976/Visual-Studio-IDE-like-Dock-Container">a Visual Studio IDE like Dock Container</a> ). 
            Input and output files that are in the tree view can be displayed as maps, based on <a href="http://mapwingis.codeplex.com/">a freeware geographics program</a>, 
            graphs that use the free software called <a href="http://sourceforge.net/projects/zedgraph/">ZedGraph,</a>  
            or spreadsheets that use  <a href="http://www.codeproject.com/Articles/691749/Free-NET-Spreadsheet-Control">a Free .NET Spreadsheet Control</a>
            or in a text editor by dragging the file from the filetree and dropping it in the work space. 
            The landis user interface is currently used for landis instruction workshops by the university of portland as well as ~10 individual landis users.
        </p>

    
 
   </div>
    <div class="margin_bottom_20 h_divider"></div>
                    <div class="margin_bottom_10"></div>
    <div  style="width:940px; height: 600px;   float:left; padding:10px; background-color : White">
        <h2>Bayesian calibration</h2>
         <div  style="width:525px; height: 250px;   float:left; padding:10px; background-color : White">
           
             <canvas id="DecompCanvas" width="525" height="250" style="border:1px solid">
              
<!--            <canvas style= "border:1px solid black">Your browser does not support the HTML5 canvas tag.</canvas>-->
              
         </div>
         <p> Bayesian calibration is a method to map model probability, given a set of observations. It is used in disciplines as unrelated as medicine, law or internet search engines. 
               I used it for example to estimate the rate of decomposition of dead wood. If you call the decomposition rate 'b' in percent per year, you can use an algorithm (called a Markov Chain) to reiteratively draw semi-random values for 'b', calculate remaining biomass for 
               a stretch of time and calculate a score that represents how likely the decomposition rate 'b' is, given the set of measurements. This is what you see at work in the graph left: each red line is a decomposition trajectory for a single 'b'.   
               There is a tweak in a Markov Chain that assures that decomposition rates that score well (i.e. model compares well with measurements) are selected more frequently.
               It takes a while for the Markov Chain to find this 'hotspot' of high model scores, but after ~100 iterations, the average 'b' of the iterations in the graphs becomes pretty stable at around 7%.So my best estimate of the decomposition rate of the tree logs is 7% per year.
               The black graph on my home page demonstrates a similar algorithm applied to measured areas of defoliation in Northern Minnesota, compare to a model complicated simulation model.
         </p>
         
      
     

      
   </div>
    <script>        StartDecompositionFunctions(); </script>
   <script>       ShowMalinauMap(2000); </script>
    <script>        watch(document.getElementById('LUCtable'), whenChangeHappens);</script>
     
    
                             
</asp:Content>
