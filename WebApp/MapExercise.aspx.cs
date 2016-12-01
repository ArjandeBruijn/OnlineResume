using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using Newtonsoft.Json;
using System.Data;

namespace Resume
{
    public partial class MapExercise : System.Web.UI.Page
    {
       
        private static DataTable locationsTable
        {
            get
            {
                DataTable table = new System.Data.DataTable();

                table.Columns.AddRange(new DataColumn[]{new DataColumn("location"), new DataColumn("lng"),new DataColumn("lat") });

                DataRow row = table.NewRow();
                row["location"]="FortCollins";
                row["lat"] = 40.5853;
                row["lng"] = -105.0844;

                table.Rows.Add(row);

                DataRow row2 = table.NewRow();
                row2["location"] = "Dedemsvaart";
                row2["lat"] = 52.6001;
                row2["lng"] = 6.4586;

                table.Rows.Add(row2);

                return table;
            }
        }

       
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod]
        public static string GetLocation(string label)
        {
            DataRow ftCollinsLocation = locationsTable.Rows.Cast<DataRow>().Where(row => row["location"].ToString() == label).Single();

            return JsonConvert.SerializeObject(ftCollinsLocation);
        }
        [WebMethod]
        public static string GetFlightPath(string from, string to, string steps)
        {
            object myobject = new
            {
                totalTasks = "1",
                tasksDone = "1",
                percentDone = "1"
            };

            return JsonConvert.SerializeObject(myobject);

             
        }

        [WebMethod]
        public static string GetLocations()
        {
            return JsonConvert.SerializeObject(locationsTable); 
        }
    }
}