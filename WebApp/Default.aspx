<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Resume.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <p></p>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

 

     <div id="nav">
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
    </div>


    <div id="section">
        <h2>Summary Of Qualifications</h2>
            <p>
               I am creative yet my code is minimalistic. I have a considerable publication record, taught at presentations and workshops, 
        designed and wrote technical and conceptual documentation of biogeochemical and geospatial simulation software for more than eight years.
        I work hard and I am authorized to work for any employer in the United States. I have a PhD, Msc and M.A. and have been associated with 
        internationally accredited universities in The Netherlands, Germany and the United states. I am proficient in English, German and Dutch
     

                  
            </p>
         <h3>Left: Maryland simulations</h3>
         <h3>Below: Markov Chain computation of a Spruce budworm outbreak in Minnesota</h3>

         <canvas id="myCanvas" width="450" height="150" style="border:1px solid #d3d3d3;">
            Your browser does not support the HTML5 canvas tag.</canvas>

         
    </div>

    <script src="js/Malinau2000.js"></script>
    <script type='text/javascript' src='js/ImageFunctions.js'></script>
    <script type='text/javascript' src='js/MarkovChainFunctions.js'></script>
    <script type="text/javascript">  DrawGraph('canvas2', 0, 450, 0, 150); </script>
        

     
     
      
     
     
    
                             
</asp:Content>
