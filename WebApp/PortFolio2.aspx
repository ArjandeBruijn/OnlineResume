<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="PortFolio2.aspx.cs" Inherits="Resume.PortFolio2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
     
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     
    <canvas id="canvas1" width="623", height="840">Random Canvas</canvas>
    
     
	 
    <p> These simulations are based on arial photographs of the north-eastern region of borneo, Indonesia. It predicts urbanisation and forest 
    degradation based on a few simple rules, namely:  </p>

    <li>People prefer to live adjacent to water</li>
    <li>People prefer to cultivate land close to their homes and close to the water</li>

	
    <script>
        var table = document.createElement("TABLE");

        // Create an empty <thead> element and add it to the table:
        var header = table.createTHead();

        // Create an empty <tr> element and add it to the first position of <thead>:
        var row = header.insertRow(0);

        // Insert a new cell (<td>) at the first position of the "new" <tr> element:
        var cell = row.insertCell(0);

        // Add some bold text in the new cell:
        cell.innerHTML = "<b>This is a table header</b>";
    </script>
    

	
	<script src="js/Malinau.js"></script>
    <script type='text/javascript' src='js/MalinauFunctions.js'></script>	
    <script type="text/javascript">SetImage(); </script>
    
</asp:Content>
