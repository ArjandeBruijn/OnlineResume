<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="PortFolio.aspx.cs" Inherits="Resume.PortFolio" %>
<%@ Register assembly="Syncfusion.EJ.Web, Version=13.1400.0.21, Culture=neutral, PublicKeyToken=3d67ed1f87d44c89" namespace="Syncfusion.JavaScript.Web" tagprefix="ej" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
  
     
   
     <h1>Landis user interface. </h1> 

     <p><a href="http://www.landis-ii.org/">Landis-ii</a> is a modular simulation platform that predicts changes in tree species and size composition in the face of growth and desturbances.
     I developed a module for landis that deals with growth and competition amongst trees that was recently published. 
     
     
     More recently, I developed 
     a more elegant user interface than that was currently available for landis. It combines a file tree (on the left) where you add your scenario file, 
     with a work-space (on the right) where you can view img/gis in a map view, graphs and data in a spreadsheet or text editor. It animates your maps as 
     well (i.e. it iterates through layers in a map view and shows each map for a couple of seconds). It regularly scans your scenario file for 
     associated input/output files and adds these to the tree view. Changes in the text editor are automatically saved to the file and you can fire a 
     simulation by right-clicking your scenario file.


      </p>


    <div class="margin_bottom_20 h_divider"></div>
    <div class="margin_bottom_10"></div>


 
</asp:Content>
