<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Resume.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <p></p>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

 

     <div id="left_column">
         <div id="rotating-item-wrapper"><!-- START: Rotating Images -->
               <img  src="images/MarylandMaps/BG.jpg" class="rotating-item" />
               <img  src="images/MarylandMaps/10.png"  class="rotating-item"  />
               <img  src="images/MarylandMaps/20.png"  class="rotating-item"  />
               <img  src="images/MarylandMaps/30.png"  class="rotating-item"  />
               <img  src="images/MarylandMaps/40.png" class="rotating-item"  />
               <img  src="images/MarylandMaps/50.png" class="rotating-item"  />
               <img  src="images/MarylandMaps/60.png"  class="rotating-item"  />   
               <img  src="images/MarylandMaps/70.png"  class="rotating-item"  />  
                
            </div><!-- END: Rotating images images -->
            <h3>Above: Maryland simulations</h3>
         <h3>Right: Markov Chain computation of a Spruce budworm outbreak in Minnesota</h3>
    </div>


    <div id="right_column">
        <h2>Summary Of Qualifications</h2>
            <p class = "justify">
               I am creative yet my code is minimalistic. I have a considerable publication record, taught at presentations and workshops, 
        designed and wrote technical and conceptual documentation of biogeochemical and geospatial simulation software for more than eight years.
        I work hard and I am authorized to work for any employer in the United States. I have a PhD, Msc and M.A. and have been associated with 
        internationally accredited universities in The Netherlands, Germany and the United states. I am proficient in English, German and Dutch
        <br></br>
            </p>
         

         <canvas id="myCanvas" width="525" height="450" style="border:1px solid #d3d3d3;">
            Your browser does not support the HTML5 canvas tag.</canvas>

         
    </div>

    <script src="js/Malinau2000.js"></script>
    <script src='js/LogP.js'></script>
    <script src='js/NrOfMeas.js'></script>
    <script src='js/MarkovChainModel.js'></script>
    <script src='js/ImageFunctions.js'></script>
    <script src='js/MarkovChainMeasurements.js'></script>
    
    <script src='js/MarkovChainFunctions.js'></script>
    
    <script>DrawGraph("myCanvas", 0, 0, 525, 450, 1930, 2015, 0, 16000); </script>
        

     
     
      
     
     
    
                             
</asp:Content>
