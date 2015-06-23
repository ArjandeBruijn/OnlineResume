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
     </p>  
    
     <div style="width:40%;float:left; padding : 10px; background-color: White;">
        <h1>Summary of Qualifications</h1>
        <ul>
          <li ><font size="5" color="red" face="Lucida Sans">Over 8 years experience in software development.</font>  </li>
          <li ><font size="5" color="red" >Over 8 years experience in software development.</font>  </li>
          <li> Permitted to work in the USA.</li>
          <li> Fluent in most coding languages.</li>
          <li> Fluent in three human languages.</li>
          <li> I write very efficient code.</li>
          <li> Hard worker.</p></li>
        </ul>
        
       
        <br></br>
        <br></br>
    </div>
    
    <div style=" width:55%; height: 500px; float:left; padding : 10px;">
        <img src="images/Maryland/NewMaryland_background.jpg" style = "width: 250px; align: left; position: absolute; border:1px solid black;"> 
        <p style = "transform: translate(230px,0px); width: 250px; align: left; position: absolute; border:1px solid black;">Green Ridge State Forest</p>
        <canvas id="myCanvas" style = "transform: translate(230px,180px);  width:233; height:550; align: right; position: absolute; border:1px solid black;"> Your browser does not support the HTML5 canvas tag.</canvas>
    </div>

    <script>        InitializeRotatingItems('.rotating-item', true);</script>
    <script src='js/MarkovChainModel.js'></script>
    <script src='js/ImageFunctions.js'></script>
    <script src='js/MarkovChainMeasurements.js'></script>
    <script src='js/MarkovChainFunctions.js'></script>
    <script>        StartMarkovChainFunctions()</script>
                             
</asp:Content>
