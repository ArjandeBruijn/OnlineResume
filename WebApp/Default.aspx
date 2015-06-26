<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Resume.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

 
 <div  style="width:940px;   float:left; padding:10px; background-color : White">
        
        <h1 align="center">Professional background</h1>
        <p>My career started with researching the more technical parts of forest ecology, like biogeochemistry, mathematics and simulation software. I have now been in academics for almost a decade and I am thinking of moving to the private sector. My most merchantable skills are all in the area of software development, I have worked with various coding languages and techniques.  I'm particular interested in geospatial applications but open for any ideas. Soft skills include experiences in presentations at international conferences and workshops, fluent in three languages, cooperating in tightly nit development teams, I'm easy to talk to and get along with.
        </p>
        <br> 
          <div style="line-height:30px; background-color:#eeeeee; height:300px; width:528px; float:left; padding-left:10px; background-color :White;">
            <h1>Summary of Qualifications</h1>
            <ul>
              <h3 >
                  <li >More than 8 years experience in software development. </li>
                  <div class="margin_bottom_5"></div>
                  <li> Permitted to work in the USA.</li>
                  <div class="margin_bottom_5"></div>
                  <li> Fluent in most coding languages.</li>
                  <div class="margin_bottom_5"></div>
                  <li> Fluent in three human languages.</li>
                  <div class="margin_bottom_5"></div>
                  <li> I write very efficient code.</li>
                  <div class="margin_bottom_5"></div>
                  <li> Hard worker.</p></li>
                  <div class="margin_bottom_5"></div>
              </h3> 
            </ul>
          </div>


          <style>
              IMG.displayed {
                display: block;
                margin-left: auto;
                margin-right: auto 
               
                }
                
                #MarkovChainDefaultPage
                {
                    display: block;
                    margin: 0 auto;
                }
          </style>


           <IMG width= 270;  class="displayed" src="images/Maryland/NewMaryland_background.jpg" alt="..." border="1">

           <canvas id="MarkovChainDefaultPage" width= 900 height="200" style="background-color:black; ">Your browser does not support the HTML5 canvas tag.
</canvas>
    
</div>
   
     
    


    <script>        InitializeRotatingItems('.rotating-item', true);</script>
    <script src='js/MarkovChainModel.js'></script>
    <script src='js/ImageFunctions.js'></script>
    <script src='js/MarkovChainMeasurements.js'></script>
    <script src='js/MarkovChainFunctions.js'></script>
    <script>        StartMarkovChainFunctions()</script>
                   
</div>
      
 
          
</asp:Content>
