 
   
function CheckBoxIsAllAroundWater() {

    document.getElementById("AllAroundWater").checked = true;
    document.getElementById("AllAroundDevelopedArea").checked = false;
    document.getElementById("NoSpatialCorrelation").checked = false;

}
function CheckBoxIsNoSpatialCorrelation() {

    document.getElementById("AllAroundWater").checked = false;
    document.getElementById("AllAroundDevelopedArea").checked = false;
    document.getElementById("NoSpatialCorrelation").checked = true;
     
     

}
function CheckBoxIsAllAroundDevelopedArea() {

    document.getElementById("AllAroundWater").checked = false;
    document.getElementById("AllAroundDevelopedArea").checked = true;
    document.getElementById("NoSpatialCorrelation").checked = false;
     

}