

function UpdateMenuSelection() {

    setInterval(function () {

        SetActivePage();

    }, 500);
}


SetActivePage = function () {
    // this will get the full URL at the address bar
    var url = window.location.href;

    // passes on every "a" tag 
    var first_element = null;
    var found = false;
    $("#menu a").each(function () {
        // checks if its the same on the address bar
        var element = $(this).closest("li");
        element.removeClass("active");
        if (first_element == null) first_element = element;

        if (url == (this.href)) {

            // checks if its the same on the address bar
            element.addClass("active");
            found = true;
        }


    });
    if (found == false) {
        first_element.addClass("active");
    }

}