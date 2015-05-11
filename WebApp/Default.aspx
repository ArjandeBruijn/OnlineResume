<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Resume.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     <h1>About me</h1>
     <p class = "justify">
        My career has reached a cross-road. I have enjoyed being employed in academics in three different coutries 
        for more than eight years. I have a considerable publication record, taught at presentations and workshops, I have a PhD, Msc and M.A.
        However, I prefer the more technical elements of my PhD and post-doctoral work (i.e. the programming) over the drier mathematical 
        work and I feel that I am better suited to the pace of the private sector. So I developed this website to demonstrate my skills and 
        work so employers may have a better impression about my capacities and how these could benefit their product. I have references available on request.
        <br></br>
     </p>
     <div id="column_55">
        <h1>Summary of Qualifications</h1>
        <ul>
          <li><p>More than 8 years experience in software development.</p></li>
          <li><p>Allowed to work in the USA.</p></li>
          <li><p>Fluent in most coding languages.</p></li>
          <li><p>Fluent in three human languages.</p></li>
          <li><p>I write very efficient code.</p></li>
          <li><p>Hard worker.</p></li>
        </ul>
        <canvas id="myCanvas" width="525" height="450" style="border:2px solid black;"> Your browser does not support the HTML5 canvas tag.</canvas>
        <h2>Markov Chain algorithm</h2>
        <p>
            Ideally, we would know all factors involved in a simulation model with great accuracy. However, most simulation tools used to predict biological and biochemical 
            processes involve large uncertainties, when simulating defoliation by an insect pest -here the Forest Tent Caterpillar- for example, we typically don't know
            how to rank the attractiveness of host species, the potential growth rate of the caterpillar or that of their predators with great accuracy. Markov Chain calibrations
            are a good way to estimate these. We start with arbitrary values of all unknown parameters and tweak them randomly in between large numbers of 
            iterative model applications. After each iteration, we compare modeled and measured values and allow the goodness-of-fit to determine wheter the last iteration brought the model
            any closer to the measurements. We let this determing how we tweak the model parameters for the next iteration (model learning).
            This way the model will eventually find the parameter settiings that best describe the measurements. Similar approaches are used to optimize google searches or typing suggestions on mobile phones.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
    <div id="column_45">
        <div id="rotating-item-wrapper">  
            <img  src="images/MarylandMaps/BG2.png" height ="450px" class="rotating-item" border="1" />
            <img  src="images/MarylandMaps/10.png" height ="450px" class="rotating-item"  />
            <img  src="images/MarylandMaps/20.png" height ="450px" class="rotating-item"  />
            <img  src="images/MarylandMaps/30.png" height ="450px" class="rotating-item"  />
            <img  src="images/MarylandMaps/40.png" height ="450px" class="rotating-item"  />
            <img  src="images/MarylandMaps/50.png" height ="450px" class="rotating-item"  />
            <img  src="images/MarylandMaps/60.png" height ="450px" class="rotating-item"  />   
            <img  src="images/MarylandMaps/70.png" height ="450px" class="rotating-item"  />  
        </div><!-- END: Rotating images images -->
        <h2>Maryland simulations</h2>
        <p>
            The Green Ridge State Forest (GRSF) is located just west of the narrowest part of Maryland, covering Maryland, Pennsylvania and West Virginia, with the meandering Pontomac \
            river on the east side of the map above. GRSF is interesting because it is is a very dynamic area, it has suffered considerable damage from invasive insect species such as the Gypsy Moth,
            and it is on the frontier of the Emerald Ash Borer, Asian Longhorned Beetle and Sudden Oak Death. We used it as a test case site to study the potential fate of reintroduced blight-resistant 
            American Chestnut, a tree species that was extirpated in the early 1900s by the Asian-born chestnut blight. My contribution constisted of developing model simulations of growth and spread of the
            different tree species and how they interact with disturbances such as mentioned pests, harvests and controlled burning. Above is a simulated spatial configuration of Gypsy Moth damage.
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
    <script src='js/MarkovChainModel.js'></script>
    <script src='js/ImageFunctions.js'></script>
    <script src='js/MarkovChainMeasurements.js'></script>
    <script src='js/MarkovChainFunctions.js'></script>
                             
</asp:Content>
