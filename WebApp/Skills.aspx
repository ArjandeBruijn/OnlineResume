<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Skills.aspx.cs" Inherits="Resume.Skills" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div class="margin_bottom_10"></div>

    <h2>Technical</h2>

    <div style="width:940px;   float:left; padding : 10px; background-color: white">
        <b>Data Manipulation and performance bottlenecks</b><br>

        2D simulation models like <a href="http://www.landis-ii.org/">LANDIS-II</a> are time consuming, 
         
        I figured out lots of adjustments that reduce computation time for my PnET-Succession extension, examples are re-using class instances rather than deleting and declaring, using LINQ dictionaries to prevent looping 
        over large arrays, parallel computation methods, moving calculations to strategic positions in the code to reduce repetitions. <br><br>

        <b>Multi-Threaded Applications and backgroundworkers</b> <br>
        I have some experience using backgroundworkers in Visual Studio 2010 / C#. For example, I used them in the user interface I developed for my LANDIS applications (see <a href="Portfolio.aspx">Portfolio</a>)
        Similarly, in some cases I worked with multithreading to reduce performance time. <br><br>

        <b>Polymorphism</b> <br>
        The simulation model I have been using for the last four years (<a href="http://www.landis-ii.org/">LANDIS-II</a>) uses polymorphism, for example in implementing different versions of a modular 
        extension that are intended to calculate the same thing. Typically, it does so by implementing an interface in C# and multiple classes that can support that interface.<br><br>
        
        <b>Calling webservices</b> <br>
        For two previous applications for software companies, I was asked to demonstrate my software skills with some small programm. 
        Both companies asked me to demonstrate that I can call a webservice. It took some research but I successfully worked with JSON and XML data-interchange.<br><br>

        <b>Statistics</b><br>
        Over time I have been using R, SPSS and in a few cases SAS to do statistical tests. 
        In many cases I find it worth while to code statistical tests from scratch in whatever program and code I was working in.
        Doing so allows you to have standard performance indicators, programming statistics from scratch is also required when you apply some kind 
        of optimization algorithm (i.e. see Bayesian calibration in <a href="Portfolio.aspx">Portfolio</a>).<br>

    </div>
     <div class="margin_bottom_10 h_divider"></div>

    <h2>Software</h2>
      
      <!--
      <div style="width:90%;float:left; padding : 10px">
         <img src="resources\ProgramIcons\matrix.png"   align="left">
        Managing large amounts of data without bottlenecks has been an important element of my work. 
        Typically the simulation models I use are two dimensional (i.e. they read and write maps). 
        Calculating simulation outputs for each of the pixels, often implementing multiple processes per pixel, easily becomes a very time consuming operation, so I have developed a number of techniques to optimize my code. 
    </div>-->
    <div style="width:45%;float:left; padding : 10px">
          <img src="resources\ProgramIcons\csharp.png"   align="left">
         More than 3 years of extensive experience. The LANDIS user interface I describe on my Portfolio page was developed in C#.
                 
    </div>
     <div style="width:45%;float:left; padding : 10px">
         <img src="resources\ProgramIcons\cpp.png"   align="left">
        More than 3 years of extensive experience.   
    </div>
    <div style="width:45%;float:left; padding : 10px">
         <img src="resources\ProgramIcons\VisualBasic.png"   align="left">
         I worked on an ArcGIS plugin written in VB for more than 1 year.
    </div>
    <div style="width:45%;float:left; padding : 10px">
           <img src="resources\ProgramIcons\HTML5.png"   align="left">
         This website uses HTML5. 
    </div>
    <div style="width:45%;float:left; padding : 10px">
          <img src="resources\ProgramIcons\CSS.png"   align="left">
          This website uses CSS.  
           
    </div>
    <div style="width:45%;float:left; padding : 10px">
          <img src="resources\ProgramIcons\javascript.png"   align="left">
         This website uses JavaScript.  
    </div>




    <div style="width:45%;float:left; padding : 10px">
          <img src="resources\ProgramIcons\VisualStudioLogo.jpg"   align="left">
           More than 8 years of extensive experience. I am still primarily using Visual Studio 2010 because of budgetary constraints, but I have also tried more recent versions of Visual Studio Express.
    </div>
    <div style="width:45%;float:left; padding : 10px">
          <img src="resources\ProgramIcons\python.jpg"   align="left">
         I have used Python to reorganize data in large .txt files, e.g. modifying data processing scripts from colleagues.
         
    </div>
    <div style="width:45%;float:left; padding : 10px">
         <img src="resources\ProgramIcons\R.jpg"   align="left">
         8 years of periodic use of R for statistics, plotting graphs with simulation output, and running code that colleagues sent me.
    </div>
    <div style="width:45%;float:left; padding : 10px">
          <img src="resources\ProgramIcons\Matlab.png"   align="left">
         Approximately 8 years of occasional use for statistical analysis. Ran simulation models that colleagues developed in MatLab to see how they worked. Made small changes to models.
    </div>
    <div style="width:45%;float:left; padding : 10px">
          <img src="resources\ProgramIcons\tortoisesvn.png"   align="left">
         More than 8 years of experience with software versioning through TortoiseSVN. Some of my projects (including this web page) are on  on <a href="https://github.com/ArjandeBruijn/">github</a>. 
         
    </div>
    <div style="width:45%;float:left; padding : 10px">
         <p> <img src="resources\ProgramIcons\SPSS.png"   align="left">
         Used SPSS for statistics. Approximately 8 years experience but it never was a very dominant part of my time.
         </p>   
    </div>
    
    <div style="width:45%;float:left; padding : 10px">
         <img src="resources\ProgramIcons\INNO.png"   align="left">
         Approximately 4 years of experience writing and modifying Inno Setup file protocols. 
    </div>
    <div style="width:45%;float:left; padding : 10px">
         <img src="resources\ProgramIcons\arcgis.png"   align="left">
         Approximately 6 years of extensive experience. I worked for 1 year on a simulation model that was designed as a plugin for ArcGIS. 
         I have used ArcGIS to modify input and output for <a href="http://www.landis-ii.org/">LANDIS</a>.
    </div>
    <div style="width:45%;float:left; padding : 10px">
           <img src="resources\ProgramIcons\GIMP.png"   align="left">
         I used GIMP a lot for all kinds of simple graphical operations. For example the logos on this page and some simple adjustments to 
         the maps that I show in portfolio and the main page.
          
    </div>
    <div style="width:45%;float:left; padding : 10px">
          <img src="resources\ProgramIcons\firebird.png"   align="left">
         One of the simulation programs I worked on at ALTERRA in the Netherlands uses a FireBird database.    
           
    </div>
     <div style="width:45%;float:left; padding : 10px">
           <img src="resources\ProgramIcons\SQL.png"   align="left">
              
          I used SQL statements to store data in the ArcGIS plugin I worked on for 1 year.
           
    </div>
  
    <div style="width:45%;float:left; padding : 10px">
          <img src="resources\ProgramIcons\Microsoft Office.png"   align="left">
         Many years of experience with Microsoft Office profucts like Words, Excel, Power point, Access. 
            
    </div>
    <div  style="width:940px; height: 400px;   float:left; padding:10px; background-color : White">
    </div>
    <!--
   -->
   
</asp:Content>
