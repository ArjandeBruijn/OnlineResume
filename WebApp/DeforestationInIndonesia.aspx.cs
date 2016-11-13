using System;
using System.Web.Services;

namespace Resume
{
    public partial class DeforestationInIndonesia : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod]
        public static string Name()
        {
            string Name = "Hello Rohatash Kumar";
            return Name;
        }
    }
}