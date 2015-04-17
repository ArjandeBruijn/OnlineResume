<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="PortFolio2.aspx.cs" Inherits="Resume.PortFolio2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type='text/javascript' src='js/ascii-to-image.js'></script>		
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     
    <canvas id="canvas1" width="200", height="200">
       Random Canvas
    </canvas>


<input type="file" id="fileinput" />
<script type="text/javascript">
    function readSingleFile(evt) {
        //Retrieve the first (and only!) File from the FileList object
        var f = evt.target.files[0];

        if (f) {
            var r = new FileReader();
            r.onload = function (e) {
                var contents = e.target.result;
                alert("Got the file.n"
              + "name: " + f.name + "n"
              + "type: " + f.type + "n"
              + "size: " + f.size + " bytesn"
              + "starts with: " + contents.substr(1, contents.indexOf("n"))
        );
            }
            r.readAsText(f);
        } else {
            alert("Failed to load file");
        }
    }

    document.getElementById('fileinput').addEventListener('change', readSingleFile, false);
</script>


<script type="text/javascript">
    SetImage("images\2000.asc", "canvas1");
</script>


</asp:Content>
