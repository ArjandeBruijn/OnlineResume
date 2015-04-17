<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="PortFolio2.aspx.cs" Inherits="Resume.PortFolio2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
     
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     
    <canvas id="canvas1" width="623", height="840">Random Canvas</canvas>
    
    <hr><input id="file-select" type="file" name="files[]"  /><hr>
    
    <hr><button id="read">Read</button><hr>
		
	 
    
			
	<div id="meta">
    </div> 

	
		
	<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
	<script src="js/line-navigator.js"></script>
	<script src="js/file-navigator.js"></script>
    <script src="js/Malinau.js"></script>
    <script src="js/demo.js"></script>
    <script type='text/javascript' src='js/ascii-to-image.js'></script>	

    <script type="text/javascript">SetImage("images\2000.asc", "canvas1"); </script>
        
   


</asp:Content>
