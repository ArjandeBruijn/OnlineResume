<html xmlns="http://www.w3.org/1999/xhtml">

    <div class="margin_bottom_10"></div>
     
         
            <h2>PODS Staging Admin</h2>
            
              <!-- Trigger the Modal -->
              <img class = "popupimg" id="podsStagingImg" style="PADDING: 20px" align="left" src="resources/PODS Staging.jpg" alt="Pods Staging tool" width="300" height="200">
         
              Midstream oil and gas companies use the PODS Staging.Admin tool to maintain data quality standards through
               a data review process that determines different levels of priviliges for users of a corporate database.
               Typically, third party companies that are contracted to do various measurements submit data into a 
               database copy that contains the same data as the original under a different database schema. The database owner can 
               quality check this data before copying it into their production database. 
                <br><br>
              The PODS Staging tool is a web application that connects a front end web user interface, to server side C# code that
              is used to connect to an ORACLE or SQL server database via a REST service. I redesigned the application to give users a 
              better overview of their data. I reduced the amount of code by applying the DRY (do not repeat yourself)
              coding standart through the use of page templates, reusing the strings that are defined in the C# code to form SQL commands, and 
              I improved performance by storing some of the data retrieved from the database into the cache of the server, reducing the need for some of the 
              sql commands. 
          

            <br> 
       

             
             <br><br><b>Skills:</b> MS SQL, Oracle, C#, JavaScript, MVC framework, Razor, REST services, Agile / SCRUM
            
       
        
   

         <hr>
         <div class="margin_bottom_10"></div>


           <!--#include file="Modal.aspx"-->

           <script>
               InitPopup('podsStagingImg');
            </script>

</html>