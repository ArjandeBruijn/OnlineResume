 <div class="margin_bottom_10"></div>
     
    <div  style="width:940px; float:left; padding:10px; background-color : White">
        <h2>Deforestation in Indonesia</h2>
         <div  style="width:445px;  float:right; padding:20px; background-color : White">
            <canvas id="canvas_Malinau" style="float:right; border:1px solid black; background-color: White"   width="415px" height="561px" ></canvas>
            <button  onclick = "ShowMalinauMap(2000)" style="  float:right; height: 30px; background-color: DarkGray" type="button">Restart</button>
        
            
            <div id = "Progress"></div>
         </div>
             A considerable part of my graduation thesis at Wageningen University was done at <a href="http://www.cifor.org/">CIFOR</a>  in Bogor, Indonesia. 
             

             The job was to predict how land use would change carbon storage in tropical forests of the island of Borneo, Indonesia. 
             
             <div style="padding:10px; float:left;background-color: White; ">
               <img  src="resources/Malinau.png"    border="1" align = "left" />
            </div>
             
             This is of interest because of climate change: carbon that is lost from the soil and trees mostly enters the atmosphere as CO<sub>2</sub>  gas. 
             I estimated carbon storage by predicting carbon dynamics in different categories of land use such as Primary Forest (lightly disturbed rain forest), Secondary Forest (rain forests that 
             are recuperating from disturbances), cropland and settlements. These were combined with predictions of different land use areas based on aerial photography, extrapolations 
             from historical land use changes and various assumptions of how land use change is spatially correlated, i.e. 
              
              <br> <br> 
            <label id = "sized_label"><input type="checkbox" onclick = "CheckBoxIsNoSpatialCorrelation()" class="radio" value="1" id="NoSpatialCorrelation"  name="Hypotheses" checked/>1. There is no spatial correlation between land use transitions.<br></label>
            <label id = "sized_label"><input type="checkbox" onclick = "CheckBoxIsAllAroundDevelopedArea()" class="radio" value="1" id="AllAroundDevelopedArea"  name="Hypotheses"/>2. Land use transitions occur near settlements.<br></label>
            <label id = "sized_label"><input type="checkbox" onclick = "CheckBoxIsAllAroundWater()" class="radio" value="1" id="AllAroundWater"  name="Hypotheses"/>3. Land use transitions occur near water.<br></label>
             <br>  
              
            The image predicts future land use under selected assumption. 
    </div>
    <div style="width:940px;  padding-right:20px; float:left;background-color: White; ">
            <i>Graphics: location of Malinau Research Forest on Borneo, Indonesia (left)  Malinau region (right)</i>
    </div>

     <hr>
     <div class="margin_bottom_10"></div>


      <script>          StartMalinauSimulations(document.getElementById('canvas_Malinau'));</script>


    