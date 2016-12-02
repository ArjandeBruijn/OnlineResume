var map;


function Interpolate(x, points) {

    for (var c = 0; c < points.length-1; c++) 
    {
        if (x >= points[c][0] && x < points[c + 1][0]) {

            var value = points[c][1] + (x - points[c][0]) * (points[c][1] - points[c + 1][1]) / (points[c][0] - points[c + 1][0]);
             
            return value;
        }
    
    }

}

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

            var wait = 1000;

            for (var i = 0; i < locations.length; i++) {
                setTimeout(function (location, zoom) {
                 
                    map.setZoom(zoom);
                    map.setCenter(new google.maps.LatLng(location.lat, location.lng));

                }, i * wait, locations[i], Interpolate(i, [[0, 13], [3, 4], [18, 4], [19, 7], [20, 13], [21, 13]]));
            };
 
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[locations.length - 1].lat, locations[locations.length - 1].lng),
                map: map
            });


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

            map = new google.maps.Map(document.getElementById('map'), {
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
    });
     
}

 

function setMapLocation(uluru, map) {

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

}