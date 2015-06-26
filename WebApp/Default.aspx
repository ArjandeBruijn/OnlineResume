<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Resume.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

 

<div class="margin_bottom_10"></div>
 
<div style=" background-color:black; color:white; text-align:center; padding:5px;">
<h1>Professional background</h1>
My career started with researching the more technical parts of forest ecology, like biogeochemistry, mathematics and simulation software. I have now been in academics for almost a decade and I am thinking of moving to the private sector. My most merchantable skills are all in the area of software development, I have worked with various coding languages and techniques.  I'm particular interested in geospatial applications but open for any ideas. Soft skills include experiences in presentations at international conferences and workshops, fluent in three languages, cooperating in tightly nit development teams, I'm easy to talk to and get along with.
</div>
 
<div style="line-height:30px; background-color:#eeeeee; height:300px; width:55%; float:left; padding:5px;">
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


 

<div style="width:350px;float:left; padding:10px;">
    <img src="images/Maryland/NewMaryland_background.jpg" style = "width: 250px; align: right;  border:1px solid black;"> 
</div>
 
<div style=" color:white;clear:both;padding:5px;">
    <!--<canvas id="MarkovChainDefaultPage"> Your browser does not support the HTML5 canvas tag.</canvas>-->
   <canvas id="MarkovChainDefaultPage" width= 940 height="200" style="background-color:black;">
Your browser does not support the HTML5 canvas tag.
</canvas>
</div>
    

    <script>        InitializeRotatingItems('.rotating-item', true);</script>
    <script src='js/MarkovChainModel.js'></script>
    <script src='js/ImageFunctions.js'></script>
    <script src='js/MarkovChainMeasurements.js'></script>
    <script src='js/MarkovChainFunctions.js'></script>
    <script>        StartMarkovChainFunctions()</script>
                             
</asp:Content>
