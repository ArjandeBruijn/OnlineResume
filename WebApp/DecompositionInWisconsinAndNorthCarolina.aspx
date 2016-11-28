 <div  style="width:940px;   float:left; padding:10px; background-color : White">
        <h2>Decomposition in Wisconsin and North-Carolina: Bayesian Calibration</h2>
         <div  style="width:525px; height: 250px;   float:left; padding:10px; background-color : White">
           
             <canvas id="DecompCanvas" width="525" height="250" style="border:1px solid">
              
<!--            <canvas style= "border:1px solid black">Your browser does not support the HTML5 canvas tag.</canvas>-->
             
         </div>
         <p> Bayesian calibration is a method to map model probability, given a set of observations. It has been used in disciplines as diverse as medicine, law and internet search engines. 
               I used it to estimate the rate of wood decomposition. You can use an algorithm called a Markov Chain to reiteratively generate semi-random decomposition rates, calculate remaining biomass for 
               a stretch of time and calculate a score that represents how likely the random decomposition rate is. 
               
               <br><br>
               
               This is what you see at work in this graph: each red line is a decomposition trajectory for some rate of decomposition.-   
               There is a tweak in a Markov Chain that assures that decomposition rates that score well (i.e. the model compares well with measurements) are selected more frequently.
               It takes a while for the Markov Chain to find this 'hotspot' of high model scores, but after ~100 iterations, the average decomposition rate of the iterations in the graphs becomes pretty stable at around 7%.
               So the best estimate of the decomposition rate of the wood measured here is 7% per year.
               The black graph on my home page demonstrates a similar algorithm applied to measured areas of forest defoliation in Northern Minnesota.
         </p>
         
      
      <br>
      <i>Graphics: Parameter estimation with Markov Chain Monte Carlo  </i>
      
       <br><br><b>Skills</b>: C#, Math, Statistics
      
   </div>

     <hr>
     <div class="margin_bottom_10"></div>

      <script>          StartDecompositionFunctions(document.getElementById("DecompCanvas")); </script>