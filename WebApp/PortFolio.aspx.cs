using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;

namespace Resume.js
{
    public partial class PortFolio : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            double t = 0.0;
        }

        [WebMethod]
        public static string Name()
        {
            string Name = "Hello Rohatash Kumar";
            return Name;
        }
    }
}