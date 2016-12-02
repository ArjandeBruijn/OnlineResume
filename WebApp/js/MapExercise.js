
function FlyHome() {
    alert("Flying home");

    $.ajax({
        type: "POST",
        url: "MapExercise.aspx/GetFlightPath",
        data: JSON.stringify({ from: "FortCollins", to: "Dedemsvaart", steps: 20 }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {

            var locations = JSON.parse(msg.d);

            AddMarkers(locations);

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

            var locations = JSON.parse(msg.d);
             
            AddMarkers(locations)
             
        }
    });
     
}

function AddMarkers(locations) {

   
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(locations[0].lat, locations[0].lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
     
    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i].location);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}

function setMapLocation(uluru, map) {

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

}