 

        
        <h2>Dissection and undissection</h2>
           
         <div  style="float:left; padding:10px; background-color : White">
             
             <img   src="resources/dissection.jpg" border="1" />
            
              
         </div>
        
          
          
            Oil and gas companies typically contract multiple land owners to regulate their access to drilling or pipe locations because multiple actors can have
            different claims on a tract of land. The dissection and undissection methods provides 
            overview by cutting up overlapping tracks of land (clipping polygons in ArcGis) and keeping track of contracts applicable to the resulting subsections. 
            The reverse method, undissection, merges these sections again when a lease expires.
            <br><br>
            The method was developed in 2006 but in the course of many development cycles, 
            it had become buggy and delivered unpredictable results. 
            
            Moreover, it maintained a very high frequency of calls from the application to the database which slowed the 
            algorithm down. 
            
            I recoded both the dissection and undissection method from scratch, which increased its performance with approximately 
            400% and solved the errors in the algorithm.
             
             <br><br><b>Skills</b>: Logic, MS SQL, Oracle, C#, VB, ArcGIS, ArcObjects
          
 
     
     <br><br>
    
     
   <hr>