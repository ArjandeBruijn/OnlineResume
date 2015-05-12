<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Portfolio2.aspx.cs" Inherits="Resume.Portfolio2" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>


<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

<div id = "right_col">
        <div id = "right_col_ins">
            <canvas id="MalinauCanvas" style="display: inline;" width="410" height="561" style="border:2px solid black;"></canvas>
            <button onclick = "Simulate1()" type="button">Simulate 9 years</button>
            <div id = "Progress"></div>
        </div>
 </div>
 <script>ShowMalinauMap(2000); </script>




</asp:Content>
