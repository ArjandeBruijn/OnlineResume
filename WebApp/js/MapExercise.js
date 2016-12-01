
function FlyHome() {
    alert("Flying home");

    $.ajax({
        type: "POST",
        url: "MapExercise.aspx/GetFlightPath",
        data: JSON.stringify({ from: "FoCo", to: "Dedemsvaart", steps: 20 }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            var object = msg.d;

            alert(msg.d);

        }
    });
}
function initMap() {
    $.ajax({
        type: "POST",
        url: "MapExercise.aspx/GetLocations",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {

            var object = JSON.parse(msg.d);
             
            for (var loc = 0; loc < object.length; loc++) {

                var uluru = { lat: parseFloat(object[loc].lat), lng: parseFloat(object[loc].lng) };
                 
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 4,
                    center: uluru
                });

                new google.maps.Marker({
                    position: uluru,
                    map: map,
                    title: object[loc].location
                });
            }

            

        }
    });


   
}
function setMapLocation(uluru, map) {

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

}