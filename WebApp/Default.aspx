<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Resume.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
 
        <h1 align="center">Professional background</h1>
        My career path has centered on land use simulation software for scientific research. 
        It involved lots of computer coding and ironically I found that that was the part of being an academic that I enjoyed far more than the conferences, workshops and publications of which I have certainly had my share. 
        So I switched careers and became a software engineer in the fall of 2015.
        In lieu of a degree in computer science, I developed this website to give employers additional information beyond my classic resume that is downloadable as a PDF below.
         

        <br> <br>  
           
          <div style="line-height:40px; height:300px; width:55%; float:left; background-color :White;">
            <h1>Summary of Qualifications</h1>
            <ul>
              <h3 >
                  <li>More than 8 years of experience in programming and GIS </li>
                  
                  <li> Fluent in many coding languages</li>
                 
                  <li> Hard-working</li>
                
                  <li> Experience in Agile/SCRUM methodology</li>
                
                  <li> Authorized to work for any employer in the USA</li>
                 
                  
              </h3> 
            </ul>
               
          </div>

          <div style="line-height:30px; height:300px; width:40%; float:left; padding-left:10px; border-left: solid 1px;  padding-right: 20px; background-color :White;">
            <h1 align="center">Resume</h1>
              <a href="resources\Resume.pdf" download> <img border="0" src="resources\download_arrow.jpg" alt="Resume_not_available" width="104" height="142"  style="display:block;   margin: 0 auto;"> </a>
              <h3 align="center">Download as PDF</h3>
             
            
              
          </div>


           
            <div class="margin_bottom_20"></div>
     <br>
             <i>Graphics: Simulation of damage by forest tent caterpillars in northern Minnesota </i>
             <br>
           <canvas id="MarkovChainDefaultPage" width= 950 height="175" style="background-color:black; ">Your browser does not support the HTML5 canvas tag.
           </canvas>
            
    <script src='js/MarkovChainModel.js'></script>
    <script src='js/ImageFunctions.js'></script>
    <script src='js/MarkovChainMeasurements.js'></script>
    <script src='js/MarkovChainFunctions.js'></script>
    <script>        StartMarkovChainFunctions()</script>
                   
 
      
 
          
</asp:Content>
