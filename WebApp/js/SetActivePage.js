function SetActivePage() {

    var filename = window.location.href.replace(/^.*[\\\/]/, '');

    var menu = document.getElementById("menu");
    var listItems = menu.getElementsByTagName("li");

    var arrayLength = listItems.length;
    for (var i = 0; i < arrayLength; i++) {

        var my_a = listItems[i].getElementsByTagName("a");
        var x = $(my_a).attr("href");


        if (x == filename) {
            $(my_a).addClass("current");
        }
        else $(my_a).removeClass("current");

        if (filename == "") {
            $(listItems[0].getElementsByTagName("a")).addClass("current");
        }
    }
}