<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Resume.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

 
 <div  style="width:940px;   float:left; padding:10px; background-color : White">
        
        <h1 align="center">Professional background</h1>
        My career path has centered on land use modeling and vegetation dynamics, incorporating biogeochemistry, statistics, 
     and development of simulation software. I have been working in academia for almost a decade now and I would like to move 
     into the private sector or work for an NGO. I specialize in developing geospatial software applications and data management. Non-technical skills 
     include giving presentations, fluency in English, German, and Dutch, and working within large, widely dispersed development teams. 

        This website serves to give employers a wider perspective of my professional experience, additional to my resume that is 
     downloadable below.

        <br> 
           
          <div style="line-height:30px; height:300px; width:628px; float:left; padding-left:10px; padding-right: 20px; background-color :White;">
            <h1>Summary of Qualifications</h1>
            <ul>
              <h3 >
                  <li >More than 8 years of experience in software development and GIS </li>
                  <div class="margin_bottom_5"></div>
                  <li> Fluent in most coding languages (see <a href="Skills.aspx">skills</a>  page for details)</li>
                  <div class="margin_bottom_5"></div>
                  <li> Developer of efficient code</li>
                  <div class="margin_bottom_5"></div>
                  <li> Hard-working</li>
                  <div class="margin_bottom_5"></div>
                  <li> Willing able and accustomed to travel up to 25%</li>
                  <div class="margin_bottom_5"></div>
                  <li> Authorized to work in the USA</li>
                  <div class="margin_bottom_5"></div>
                  
              </h3> 
            </ul>
            
              
          </div>

          <div style="line-height:30px; height:300px; width:250px; float:right; padding-left:10px; padding-right: 20px; background-color :White;">
            <h1 align="center">Resume</h1>
              <a href="resources\Resume.pdf" download> <img border="0" src="resources\download_arrow.jpg" alt="Resume_not_available" width="104" height="142"  style="display:block;   margin: 0 auto;"> </a>
              <h3 align="center">Download as PDF</h3>
             
            
              
          </div>


           
            <div class="margin_bottom_20"></div>
     <br>
             <i>Graphics: Simulation of damage by forest tent caterpillars in northern Minnesota </i>
             <br>
           <canvas id="MarkovChainDefaultPage" width= 900 height="175" style="background-color:black; ">Your browser does not support the HTML5 canvas tag.
           </canvas>
           <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

     
    <script src='js/MarkovChainModel.js'></script>
    <script src='js/ImageFunctions.js'></script>
    <script src='js/MarkovChainMeasurements.js'></script>
    <script src='js/MarkovChainFunctions.js'></script>
    <script>        StartMarkovChainFunctions()</script>
                   
</div>
      
 
          
</asp:Content>
