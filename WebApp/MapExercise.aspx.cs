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
        public static string GetFlightPath(string from, string to, string steps)
        {
            DataRow location1 = locationsTable.Rows.Cast<DataRow>().Where(loc => loc["location"].ToString() == from).Single();
            DataRow location2 = locationsTable.Rows.Cast<DataRow>().Where(loc => loc["location"].ToString() == to).Single();

            DataTable locations = new DataTable();

            locations.Columns.AddRange(new DataColumn[] { new DataColumn("location"), new DataColumn("lng"), new DataColumn("lat") });

            for (int i = 0; i < int.Parse(steps) + 1; i++)
            {
                DataRow row = locations.NewRow();
                row["lat"] = double.Parse(location1["lat"].ToString()) + i / double.Parse(steps) * (double.Parse(location2["lat"].ToString()) - double.Parse(location1["lat"].ToString()));
                row["lng"] = double.Parse(location1["lng"].ToString()) + i / double.Parse(steps) * (double.Parse(location2["lng"].ToString()) - double.Parse(location1["lng"].ToString()));

                locations.Rows.Add(row);
            }

            return JsonConvert.SerializeObject(locations);

             
        }

        [WebMethod]
        public static string GetLocations()
        {
            

            return JsonConvert.SerializeObject(locationsTable); 
        }
    }
}