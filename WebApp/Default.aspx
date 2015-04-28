<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Resume.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <p></p>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

     <div id="left_column">
          <div id="rotating-item-wrapper">  
               <img  src="images/MarylandMaps/BG.png" height ="400px" class="rotating-item" border="1" />
               <img  src="images/MarylandMaps/10.png" height ="400px" class="rotating-item"  />
               <img  src="images/MarylandMaps/20.png" height ="400px" class="rotating-item"  />
               <img  src="images/MarylandMaps/30.png" height ="400px" class="rotating-item"  />
               <img  src="images/MarylandMaps/40.png" height ="400px" class="rotating-item"  />
               <img  src="images/MarylandMaps/50.png" height ="400px" class="rotating-item"  />
               <img  src="images/MarylandMaps/60.png" height ="400px" class="rotating-item"  />   
               <img  src="images/MarylandMaps/70.png" height ="400px" class="rotating-item"  />  
                
        </div><!-- END: Rotating images images -->
        <h2>Maryland simulations</h2>
        <p>
            The Green Ridge State Forest (GRSF) is located just west of the narrowest part of Maryland, with the meandering Pontomac river on the east side of 
            the map as the border with Virginia. GRSF is interesting because it is on the frontier of several invasive insects such as the Gypsy Moth, and ...
            The map shows predictions of expansion of the Gypsy Moth according to the LANDIS model (link), taking into account the most popular host tree species (a, b, c) of the Gypsy
            moth.
                 
        </p>
        
         <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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
         

         <canvas id="myCanvas" width="525" height="450" style="border:2px solid black;">
            Your browser does not support the HTML5 canvas tag.</canvas>
        <h2>Markov Chain computation of a Spruce budworm outbreak in Minnesota</h2>
        <p>
            Ideally, we would know all factors involved in a simulation model with great accuracy. However, most simulation tools used to predict biological and biochemical 
            processes involve large uncertainties, when simulating defoliation rates of an insect pest -here the forest tent caterpillar- for example, we typically don't know
            how to rank the attractiveness of host species, the potential growth rate of the caterpillar or that of their predators with great accuracy. Markov Chain calibrations
            are a good way to estimate these. We start with arbitrary values of all unknown parameters and tweak them randomly while we iteratively apply the model. With each calibration we 
            compare modeled and measured values and allow the goodness-of-fit to determine the next parameter value set (model learning). This way the model will eventually find a parameter set that 
            explains the measurements optimally. Similar model approximations are used for the algorithm that is used for google searches or typing suggestions.
         </p>
         <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>

    <script src="js/Malinau2000.js"></script>
    <script src='js/LogP.js'></script>
    <script src='js/NrOfMeas.js'></script>
    <script src='js/MarkovChainModel.js'></script>
    <script src='js/ImageFunctions.js'></script>
    <script src='js/MarkovChainMeasurements.js'></script>
    
    <script src='js/MarkovChainFunctions.js'></script>
    
      

     
     
      
     
     
    
                             
</asp:Content>
