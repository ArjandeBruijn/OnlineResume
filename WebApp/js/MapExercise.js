function initMap() {
    var uluru = { lat: 40.5853, lng: -105.0844 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

function setMapLocation(uluru, map) {

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

}