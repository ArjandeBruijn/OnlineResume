﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MapExercise.aspx.cs" Inherits="Resume.MapExercise" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>
  <head>

  
   <script src="js/MapExercise.js" type="text/javascript"></script>
    <link href="css/MapExercise.css" rel="stylesheet" type="text/css" />
     
  </head>
  <body>
    <h3>Interactive maps demo</h3>
    <div style = "width: 960px">
        <div id="map" ></div>
        <button onclick = "FlyHome()"   style="  float:right; height: 30px; background-color: DarkGray" type="button">Restart</button>
    </div>
      

    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD0zMbmu-Ud5SW3ZOwNmN-1ZeLNp3Rzy5g&callback=initMap">
    
    </script>
    <script type="text/javascript" src="http://code.jquery.com/jquery.js"></script>
    <script>
        function FlyHome()
        {
            alert("Flying home");

            $.ajax({
                type: "POST",
                url: "MapExercise.aspx/GetData",
                data: "{}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (msg) {

                    alert(msg.d);

                }

            });


        }
    </script>
  </body>
</html>