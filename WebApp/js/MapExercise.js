var map;
var steps = 200;

function Interpolate(x, points) {

    if (x < 10)
        return 8;

    else if (x < 30)
        return 7;

    else if (x < 50)
        return 6;

    else if (x < 60)
        return 5;

    else if (x < 160)
        return 4;

    else if (x < 170)
        return 5;

    else if (x < 180)
        return 6;

    else if (x < 190)
        return 7;

    else return 8;

}
function ShowImage() {
 
    var img = document.createElement("img");
    img.src = "resources\\plane.png";
    img.style.width = '10%'
    img.style.height = 'auto'
    img.id ="plane";
    
    var mapelmnt = document.getElementById('map');
 
    // This next line will just add it to the <body> tag
    document.body.appendChild(img);

    $('#plane').addClass('center');
   
}


function FlyHome() {
    

    $.ajax({
        type: "POST",
        url: "MapExercise.aspx/GetFlightPath",
        data: JSON.stringify({ from: "FortCollins", to: "Dedemsvaart", steps: steps }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {

            ShowImage();

            var locations = JSON.parse(msg.d);

            var wait = 20000 / steps;

            for (var i = 0; i < locations.length; i++) {
                setTimeout(function (location, zoom) {

                    map.setZoom(zoom);
                    map.setCenter(new google.maps.LatLng(location.lat, location.lng));

                }, i * wait, locations[i], Interpolate(i));
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