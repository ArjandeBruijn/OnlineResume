<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="PortFolio2.aspx.cs" Inherits="Resume.PortFolio2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
     
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     
    <canvas id="canvas1" width="623", height="840">Random Canvas</canvas>
    
     
	 
    <p> These simulations are based on arial photographs of the north-eastern region of borneo, Indonesia. It predicts urbanisation and forest 
    degradation based on a few simple rules, namely:  </p>

    <li>People prefer to live adjacent to water</li>
    <li>People prefer to cultivate land close to their homes and close to the water</li>

			
	<div id="meta">
        <asp:Table ID="Table1" runat="server" Height="102px" Width="442px">
        </asp:Table>
    </div> 
	
	<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
	<script src="js/Malinau.js"></script>
    <script src="js/demo.js"></script>
    <script type='text/javascript' src='js/MalinauFunctions.js'></script>	
    <script type="text/javascript">SetImage(); </script>
    
</asp:Content>
