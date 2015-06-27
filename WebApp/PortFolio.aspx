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
           
         </div>
         <p>   For my master's project at Wageningen University, I used land use derived from arial photographs of eastern Borneo taken in (<a onclick="ShowMalinauMap(2000)" href="#">2000</a>) 
            and (<a onclick="ShowMalinauMap(2009)" href="#">2009</a>) to evaluate hypotheses 
            about the spatial configuration of land use changes and to predict future land use thereupon, for example:  
            <br> <br>  
            <label id = "sized_label"><input type="checkbox" onclick = "CheckBoxIsNoSpatialCorrelation()" class="radio" value="1" id="Checkbox1"  name="Hypotheses" checked/>1. There is no spatial correlation between land use transitions.<br></label>
            <label id = "sized_label"><input type="checkbox" onclick = "CheckBoxIsAllAroundDevelopedArea()" class="radio" value="1" id="Checkbox2"  name="Hypotheses"/>2. Land use transitions occur near settlements.<br></label>
            <label id = "sized_label"><input type="checkbox" onclick = "CheckBoxIsAllAroundWater()" class="radio" value="1" id="Checkbox3"  name="Hypotheses"/>3.Land use transitions occur near water.<br></label>
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
                    <td bgcolor ="#c0c0c0" id="Td1"><div> 0.998 </div> </th>
                    <td  id="Td2"><div contenteditable> 0.002 </div> </th>
                    <td  id="Td3"><div contenteditable> 0</div> </th>
                    <td  id= "Td4"><div contenteditable> 0.0003 </div> </th>
                </tr>
                <tr>
                    <th bgcolor ="#c0c0c0">Secondary Forest</th>
                    <td id="Td5"><div contenteditable> 0	 </div> </th>
                    <td bgcolor ="#c0c0c0" id="Td6"><div> 0.995	 </div> </th>
                    <td id = 'Td7'><div contenteditable> 0.005	</div> </th>
                    <td id = 'Td8'><div contenteditable> 0 </div> </th>
                </tr>
                <tr>
                    <th bgcolor ="#c0c0c0">Cropland</th>
                    <td id = 'Td9'><div contenteditable>0 </div></th>
                    <td id = 'Td10'><div contenteditable>  0	</div></th>
                    <td bgcolor ="#c0c0c0" id = 'Td11'><div> 0.99 </div></th>
                    <td id = 'Td12'><div contenteditable> 0.01 </div></th>
                </tr>
                <tr>
                    <th bgcolor ="#c0c0c0">Settlements</th>
                    <td id = 'Td13'><div contenteditable>0</div>	 </th>
                    <td id = 'Td14'><div contenteditable> 0	</div>	</th>
                    <td id = 'Td15'><div contenteditable> 0</div>	 </th>
                    <td bgcolor ="#c0c0c0" id = 'Td16'><div>1</div>	  </th>
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
    <div  style="width:940px; height: 400px;   float:left; padding:10px; background-color : White">
        <h2>Landis user interface</h2>
         <div  style="width:100px; height: 100px;   float:left; padding:10px; background-color : Yellow"></div>
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

     <!-- <canvas id="canvas1"   width="200"; height="200"; style="border:2px solid black;background-color : Cyan"></canvas>-->
 
   </div>
    <div class="margin_bottom_20 h_divider"></div>
                    <div class="margin_bottom_10"></div>
    <div  style="width:940px; height: 600px;   float:left; padding:10px; background-color : White">
        <h2>Bayesian calibration</h2>
         <div  style="width:200px; height: 400px;   float:left; padding:10px; background-color : Yellow"></div>
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
    
   <script>       ShowMalinauMap(2000); </script>
    <script>        watch(document.getElementById('LUCtable'), whenChangeHappens);</script>
    <script src="js/jquery.mobile.custom.min.js"></script>
    
                             
</asp:Content>
