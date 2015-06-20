<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Resume.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     <h1><center>About me</center></h1>
     <p class = "justify">
        I have been employed in academics in three different coutries for more than eight years. 
        I have a considerable publication record, taught at presentations and workshops, I have a PhD, Msc and M.A.
        Although I thoroughly enjoy academics, I am now leaning towards searching for employment in the private or non-profit sector. 

        I worked a lot with geographical applications, for example on a simulation model that functions as an ArcGIS plugin, and I developed a couple of windows applications that
        used embedded mapping functionality from geographic freeware (see portfolio). Ideally I would like to find a position where I can make use of this.  

        I developed this website to demonstrate my skills and work. 
       
        <br></br>
     </p>
     <div id="column_55">
        <h1><center>Summary of Qualifications</center></h1>
        <ul>
          <li><p>More than 8 years experience in software development.</p></li>
          <li><p>Allowed to work in the USA.</p></li>
          <li><p>Fluent in most coding languages.</p></li>
          <li><p>Fluent in three human languages.</p></li>
          <li><p>I write very efficient code.</p></li>
          <li><p>Hard worker.</p></li>
        </ul>
        <canvas id="myCanvas" width="525" height="450" style="border:1px solid black;"> Your browser does not support the HTML5 canvas tag.</canvas>
        <h2>Markov Chain algorithm</h2>
        <p>
            I have worked a lot with parameter estimation methods, this is an algorithm that is used predict biological parameters involved in a population growth model
            for destructive insects applied to insect-born defoliation areas measured in Northern Minnesota. A Markov Chain starts iteratively applies random parameter values 
            to a mathematical model and compares each time series of predictions with a set of meaurements. The Markov Chain searches for optimal parameter values by "learning" from previous 
            success or failure.
        <!--
            Ideally, we would know all factors involved in a simulation model with great accuracy. However, most simulation tools used to predict biological and biochemical 
            processes involve large uncertainties, when simulating defoliation by an insect pest -here the Forest Tent Caterpillar- for example, we typically don't know
            how to rank the attractiveness of host species, the potential growth rate of the caterpillar or that of their predators with great accuracy. Markov Chain calibrations
            are a good way to estimate these. We start with arbitrary values of all unknown parameters and tweak them randomly in between large numbers of 
            iterative model applications. After each iteration, we compare modeled and measured values and allow the goodness-of-fit to determine wheter the last iteration brought the model
            any closer to the measurements. We let this determing how we tweak the model parameters for the next iteration (model learning).
            This way the model will eventually find the parameter settiings that best describe the measurements. Similar approaches are used to optimize google searches or typing suggestions on mobile phones.
            -->
        </p>
        <br></br>
        <br></br>
         
    </div>
    <div id="column_45">

        <div id="rotating-item-wrapper">  
            <img  src="images/Maryland/NewMaryland_background.jpg" height ="450px" class="rotating-item" border="1" />
            <img  src="images/Maryland/GypsyMoth14.png" height ="450px" class="rotating-item"  />
            <img  src="images/Maryland/GypsyMoth15.png" height ="450px" class="rotating-item"  />
            <img  src="images/Maryland/GypsyMoth21.png" height ="450px" class="rotating-item"  />
            <img  src="images/Maryland/GypsyMoth22.png" height ="450px" class="rotating-item"  />
            <img  src="images/Maryland/GypsyMoth29.png" height ="450px" class="rotating-item"  />
            <img  src="images/Maryland/GypsyMoth35.png" height ="450px" class="rotating-item"  />   
            <img  src="images/Maryland/GypsyMoth36.png" height ="450px" class="rotating-item"  />  
            <img  src="images/Maryland/GypsyMoth42.png" height ="450px" class="rotating-item"  />  
            <img  src="images/Maryland/GypsyMoth43.png" height ="450px" class="rotating-item"  />  
            <img  src="images/Maryland/GypsyMoth44.png" height ="450px" class="rotating-item"  />  
            <img  src="images/Maryland/GypsyMoth51.png" height ="450px" class="rotating-item"  />  
            <img  src="images/Maryland/GypsyMoth52.png" height ="450px" class="rotating-item"  />  
            <img  src="images/Maryland/GypsyMoth53.png" height ="450px" class="rotating-item"  />  
            <img  src="images/Maryland/GypsyMoth54.png" height ="450px" class="rotating-item"  />  
            <img  src="images/Maryland/GypsyMoth61.png" height ="450px" class="rotating-item"  />  
            <img  src="images/Maryland/GypsyMoth62.png" height ="450px" class="rotating-item"  />  
            <img  src="images/Maryland/GypsyMoth63.png" height ="450px" class="rotating-item"  />  
            <img  src="images/Maryland/GypsyMoth69.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth77.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth78.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth84.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth85.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth86.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth92.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth93.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth99.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth100.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth107.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth108.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth115.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth122.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth123.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth124.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth125.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth126.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth127.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth134.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth135.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth136.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth142.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth143.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth144.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth150.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth151.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth152.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth160.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth160.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth161.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth162.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth169.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth170.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth176.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth177.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth186.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth187.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth188.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth189.png" height ="450px" class="rotating-item"  /> 
            <img  src="images/Maryland/GypsyMoth196.png" height ="450px" class="rotating-item"  /> 

        </div><!-- END: Rotating images images -->
        <h2>Maryland simulations</h2>
        <p>
            I developed a simulation model that predicts growth and spread of different tree species and how they interact with disturbances such as mentioned pests, harvests and controlled burning. 
            Above is a simulated spatial configuration of Gypsy Moth damage in the Green Ridge State Forest that covers parts of Maryland, Pennsylvania and West Virginia.

        <!--
            The Green Ridge State Forest (GRSF) is located just west of the narrowest part of Maryland, covering Maryland, Pennsylvania and West Virginia, with the meandering Pontomac
            river on the east side of the map above. GRSF is interesting because it is is a very dynamic area, it has suffered considerable damage from invasive insect species such as the Gypsy Moth,
            and it is on the frontier of the Emerald Ash Borer, Asian Longhorned Beetle and Sudden Oak Death. We used it as a test case site to study the potential fate of reintroduced blight-resistant 
            American Chestnut, a tree species that was extirpated in the early 1900s by the Asian-born chestnut blight. My contribution constisted of developing model simulations of growth and spread of the
            different tree species and how they interact with disturbances such as mentioned pests, harvests and controlled burning. Above is a simulated spatial configuration of Gypsy Moth damage.
            -->
        </p>
        <br></br>
        <br></br>
        <br></br>
         
    </div>

    <script>        InitializeRotatingItems('.rotating-item', true);</script>
    <script src='js/MarkovChainModel.js'></script>
    <script src='js/ImageFunctions.js'></script>
    <script src='js/MarkovChainMeasurements.js'></script>
    <script src='js/MarkovChainFunctions.js'></script>
    <script>        StartMarkovChainFunctions()</script>
                             
</asp:Content>
