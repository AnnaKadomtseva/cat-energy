function initMap() {
  var element = document.getElementById("map");
  var options = {
    zoom: 16,
    center: { lat: 59.9387165, lng: 30.3208587 }
  };

  var myMap = new google.maps.Map(element, options);

  var marker = new google.maps.Marker({
    position: { lat: 59.9387165, lng: 30.3208587 },
    map: myMap,
    icon: {
      url: "img/raster/map-pin.png",
      scaledSize: new google.maps.Size(55, 53)
    }
  });
}
