function SetActivePage(a) {

    var menu = document.getElementById("menu");
    var listItems = menu.getElementsByTagName("li");

    var arrayLength = listItems.length;
    for (var i = 0; i < arrayLength; i++) {

        var my_a = listItems[i].getElementsByTagName("a");

        if (i == a) {
            $(my_a).addClass("current");
        }
        else $(my_a).removeClass("current");


    }



}