﻿<div  style="width:940px;   float:left; padding:10px; background-color : White">

        
        <h2>Dissection and undissection</h2>
           
         <div  style="float:left; padding:10px; background-color : White">
             
             <img   src="resources/dissection.jpg" border="1" />
             <!--<p>Click to enlarge</p>-->
             
             
              
         </div>
        
          <p>
          
            Oil and gas companies typically contract multiple land owners to regulate their access to drilling or pipe locations because multiple actors can have
            different claims on a tract of land. The dissection method of Landworks Inc provides 
            overview  by cutting up overlapping tracks of land (clipping polygons in ArcGis) and keeping track of contracts applicable to the resulting subsections. 
            The reverse method, undissection, merges these sections again when a lease expires.
            <br>
            The method was developed in 2006 but in the course of many development cycles, 
            it had become buggy and delivered unpredictable results. 
            
            Moreover, it maintained a very high frequency of calls from the application to the database which slowed the 
            algorithm down. 
            
            I recoded both the dissection and undissection method from scratch, which increased software performance with approximately 
            400% and solved the errors in the algorithm.
             
          
 </p>
     
     <br><br>
   </div>




     
   <hr>