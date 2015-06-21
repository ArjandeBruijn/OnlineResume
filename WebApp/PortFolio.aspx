<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Portfolio.aspx.cs" Inherits="Resume.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">


    

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
    <div data-role="main" style="justify"> 
        For my master's project at Wageningen University, I used land use derived from arial photographs of 
        <a href="#myPopup" data-rel="popup" data-position-to="window">eastern Borneo</a>
        <div class = "inline" data-role="popup" id="myPopup">
           <p>Malinau Research Forest on Borneo, Indonesia</p> 
           <a href="#pageone" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="images\Malinau.png" style="width:446px;height:563px;" alt="Malinau Research Forest">
        </div>
        taken in (<a onclick="ShowMalinauMap(2000)" href="#">2000</a>) 
        and (<a onclick="ShowMalinauMap(2009)" href="#">2009</a>) to evaluate hypotheses 
        about the spatial configuration of land use changes and to predict future land use thereupon, for example:  
    </div> 
       
    <div >
        <label id = "sized_label"><input type="checkbox" onclick = "CheckBoxIsNoSpatialCorrelation()" class="radio" value="1" id="NoSpatialCorrelation"  name="Hypotheses" checked/>1. There is no spatial correlation between land use transitions.<br></label>
        <label id = "sized_label"><input type="checkbox" onclick = "CheckBoxIsAllAroundDevelopedArea()" class="radio" value="1" id="AllAroundDevelopedArea"  name="Hypotheses"/>2. Land use transitions occur near settlements.<br></label>
        <label id = "sized_label"><input type="checkbox" onclick = "CheckBoxIsAllAroundWater()" class="radio" value="1" id="AllAroundWater"  name="Hypotheses"/>3.Land use transitions occur near water.<br></label>
    </div>
      
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
    
     <p class = "justify">
         you can predict what the future landscape will look like.
         I programmed a simple simulation algorithm that predicts future land use in the code of this website. 
         You can try it if you editing inputs (table or hypothesis), and click the button.
     </p>
     <p class = "justify">
        <h2>Landis user interface</h2>

        <div id = "left_col">
            <a href="#myPopup2" data-rel="popup" data-position-to="window">
            <img src="images\lui.jpg" alt="Skaret View" style="width:200px;"></a>

            <div data-role="popup" id="myPopup2">
              <p>Landis User Interface</p> 
              <a href="#pageone" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="images\lui_big.jpg" alt="">
            </div>
            <p>Click to enlarge</p>
        </div>
 
  
        <p>
            I have been using the <a href="http://www.landis-ii.org/">LANDIS</a> model for more than three years but I was missing an interface to fascilitate my analyses. So I ended up developing my own. It is a windows forms application
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
        <br></br>
        <!--
        <h2>Landis Simulations</h2> types of model, i.e. PnET and LANDIS succession. PnET is a point-dimensional tree physiology process that predicts
        growth of a homogeneous tree stand as it depends on light and water. Landis succession is a spatial model that predicts forest developments depending on growth and forest disturbances.
        LANDIS tradiationally has a very basic growth computation method. In order to better predict growth and competition for light and water, I incorporated the PnET model into the LANDIS model environment.
        This allows us to simulate light and water availability on a landschape. Looking at the Green Ridge State Forest (see home page), you can see how water and light availability depends on 
        the interaction between disturbances and growth via canopy thickness. This is because foliage is the driver of both water and light consumption.
        -->
        <h2>Bayesian calibration</h2>
        <div id = "left_col">
            <div id = "right_col_ins">
                <canvas id="DecompCanvas" width="525" height="250">Your browser does not support the HTML5 canvas tag.</canvas>
                <div id = "Div3"></div>
                <canvas  id="B_ROUTE_canvas" width="525" height="250">Your browser does not support the HTML5 canvas tag.</canvas>
                <button onclick="ResetDecompositionFunctions()" type="button">Restart</button>
            </div>
            <br></br><br></br><br></br><br></br>
        </div>

        <p>Bayesian statistics is based on probability computation of a theory, given some set of evidence. It is used in medicine, law or suggestions by google search machines. 
         In the scope of quantitative simulations it is to derive the probability of a set of models given some set of observations (measurements). I used it for example to estimate the 
         rate of which a dead log loses biomass. If we assume that the reduction of mass is a constant fraction per year, the model translates to 
         dM/dt = b*M or also M = 100 * exp(-b*time) where b is the decomposition rate in percent per year. The remaining mass at any time can be calculated for a given decomposition rate b. 
         So one way to see how the likelihood of the model depends on the value of b is to try a lot of values for b, calculate the remaining mass each year, and compare predictions of 
         remaining mass with measurements. This approach is known as a Markov Chain Monte Carlo algorithm. It is what I'm doing in the upper graph. There is a tweak in Markov Chain algorithms that assures that decomposition rates that are 
         associated with a high likelihood, or where the model is close to the measurements, are selected more often than those that are not. Therefore, after a lot of draws the best estimate of b becomes
          the value of b that is most often applied. This is what you see in the bottom graph where I show the value of b that was most often used to predict the decomposition rate. You can see that initially 
          it fluctuates a lot, but after ~100 iterations, it becomes pretty stable at around 7%. So my best estimate of the decomposition rate of the tree logs is 7% per year.
             
        </p>
    </div>
    
    <script>ShowMalinauMap(2000); </script>
    <script>watch(document.getElementById('LUCtable'), whenChangeHappens);</script>
    <script src="js/jquery.mobile.custom.min.js"></script>
    <script>StartDecompositionFunctions(); </script>
                             
</asp:Content>
