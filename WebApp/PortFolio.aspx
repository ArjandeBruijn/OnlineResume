<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master"  AutoEventWireup="true" CodeBehind="Portfolio.aspx.cs" Inherits="Resume.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
     
</asp:Content>
 
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    
    
  <!--#include file="PODSStagingAdmin.aspx"-->

     
  <!--#include file="ExpressLoader.aspx"-->
  
  <!--#include file="DissectionAndUndissection.aspx"-->
  
    <div id ="decompositionaspx">
         <!--#include file="DecompositionInWisconsinAndNorthCarolina.aspx"-->
    </div>

     <script>
          
         if (!IsMobileBrowser()) {
             document.getElementById('decompositionaspx').style.visibility = 'visible';
         }
         else {
             document.getElementById('decompositionaspx').style.visibility = 'hidden';
         }
      </script>
     
  <!--#include file="DeforestationInIndonesia.aspx"-->
          
<!--#include file="DefoliationInGreenRidgeStateForest.aspx"-->
     

</asp:Content>

