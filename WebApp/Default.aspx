<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Resume.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
 
        <h1 align="center">Professional background</h1>


        <div style ="font-size: 18px;">
        My career path has centered on land use simulation software for scientific research. 
        It involved lots of computer coding and ironically I found that that was the part of being an academic 
        that I enjoyed far more than publishing research. 

        So I switched careers and became a software engineer in the fall of 2015.
        In lieu of a degree in computer science, I developed this website to give employers additional information beyond
         my classic resume that is downloadable as a PDF below.
        
        </div>

        <script type="text/javascript" src="http://code.jquery.com/jquery.js"></script>
	 
    
        <br> <br>  
           

           <div style="width: 100%; display: table; background-color: white">
            
               <div style="float:left; background-color: white; border-right: solid 1px; padding-right: 10px;  display: table-cell; width: 80%">

                   <h1>Summary of Qualifications</h1>

                   <ul style ="line-height:40px; font-size: 20px;">
              
                          <li>More than 8 years of experience in programming and GIS </li>
                  
                          <li> Fluent in many coding languages</li>
                 
                          <li> Hard-working</li>
                
                          <li> Experience working Agile/SCRUM</li>
                
                          <li> Authorized to work for any employer in the USA</li>
                 
                    </ul>
               </div>

               <div style="float:right; width: 18%; display: table-cell; background-color: white; ">
                    <h1 align="center">Resume</h1>
                    <a href="resources\Resume.pdf" download> <img border="0" src="resources\download_arrow.jpg" alt="Resume_not_available" width="104" height="142"  style="display:block;   margin: 0 auto;"> </a>
                    <h3 align="center">Download as PDF</h3>
               </div>
            </div>


            <div id = "minTopDiv", style="clear:both"></div>
             

            <div id = "bottomDiv" style = "position:absolute" >
                <i>Graphics: Simulation of damage by forest tent caterpillars in northern Minnesota </i>
                <br>
                <canvas id="MarkovChainDefaultPage" width= "950" height="175" style="background-color:black; ">Your browser does not support the HTML5 canvas tag.
                </canvas>
           </div>
            
            
    <script>

        $(document).ready(function () {

            setInterval(function () {

                var div = document.getElementById("bottomDiv");

                var div2 = document.getElementById("minTopDiv");

                console.log("top = " + div.offsetTop);

                div.style.top = Math.max(div2.offsetTop + div2.offsetHeight, window.innerHeight - div.offsetHeight - +10) + "px";
            }, 500);
        });

 

    


    </script>

    <script src='js/MarkovChainModel.js'></script>
    <script src='js/ImageFunctions.js'></script>
    <script src='js/MarkovChainMeasurements.js'></script>
    <script src='js/MarkovChainFunctions.js'></script>
    <script>$(document).ready(function () { StartMarkovChainFunctions()  });  </script>
                   
 
          
</asp:Content>
